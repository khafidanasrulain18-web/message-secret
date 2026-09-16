"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = { src: string; label?: string; volume?: number };

export default function BackgroundMusic({
  src,
  label = "musik latar",
  volume = 0.5,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const fadeTo = useCallback((audio: HTMLAudioElement, target: number) => {
    const start = audio.volume;
    const diff = target - start;
    const duration = 1400;
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      audio.volume = Math.max(0, Math.min(1, start + diff * t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const attemptPlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    try {
      audio.volume = 0;
      await audio.play();
      setPlaying(true);
      setNeedsTap(false);
      fadeTo(audio, volume);
      return true;
    } catch {
      return false;
    }
  }, [fadeTo, volume]);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setNeedsTap(true); return; }
    attemptPlay().then((ok) => { if (!ok) setNeedsTap(true); });
  }, [mounted, attemptPlay]);

  useEffect(() => {
    if (!needsTap) return;
    const handler = () => { attemptPlay(); };
    const events: (keyof DocumentEventMap)[] = ["pointerdown", "touchstart", "keydown"];
    events.forEach((ev) =>
      document.addEventListener(ev, handler, { once: true, passive: true } as AddEventListenerOptions)
    );
    return () => { events.forEach((ev) => document.removeEventListener(ev, handler)); };
  }, [needsTap, attemptPlay]);

  useEffect(() => {
    const handler = () => {
      const audio = audioRef.current;
      if (audio && !audio.paused) { audio.pause(); setPlaying(false); }
    };
    document.addEventListener("pause-background-music", handler);
    return () => document.removeEventListener("pause-background-music", handler);
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); } else { attemptPlay(); }
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} loop preload="auto" />

      <div
        className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {needsTap && (
          <span className="animate-fade-in rounded-full border border-gold-600/40 bg-night-100/85 px-3 py-1 font-hand text-sm text-gold-300 shadow-sm backdrop-blur-md">
            ketuk untuk memulai musik
          </span>
        )}

        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Jeda ${label}` : `Putar ${label}`}
          aria-pressed={playing}
          className={`group relative flex items-center gap-3 rounded-full border border-gold-600/40 bg-night-100/80 py-2.5 pl-3.5 pr-4 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:border-gold-400/70 hover:bg-night-100/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
            needsTap ? "ring-2 ring-gold-500/40 ring-offset-2 ring-offset-night-200" : ""
          }`}
        >
          <span className="flex h-4 w-4 items-end justify-center gap-[3px]" aria-hidden="true">
            {playing ? (
              <>
                <span className="eq-bar eq-bar-1 w-[3px] rounded-full" />
                <span className="eq-bar eq-bar-2 w-[3px] rounded-full" />
                <span className="eq-bar eq-bar-3 w-[3px] rounded-full" />
              </>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold-300">
                <path d="M5 4l14 8-14 8V4z" fill="currentColor" stroke="none" />
              </svg>
            )}
          </span>

          <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-cream-200/75 sm:inline">
            {playing ? "musik" : "putar"}
          </span>
        </button>
      </div>
    </>
  );
}