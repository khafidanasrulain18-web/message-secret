"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PhotoItem } from "@/lib/messages/types";

type Props = {
  items: PhotoItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

const SWIPE_THRESHOLD = 50;

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const [visible, setVisible] = useState(false);
  const [errored, setErrored] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) { setErrored(false); onNavigate(index - 1); }
  }, [hasPrev, index, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) { setErrored(false); onNavigate(index + 1); }
  }, [hasNext, index, onNavigate]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => { setErrored(false); }, [index]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (dx > 0) goPrev(); else goNext();
  }

  const navBtn =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-gold-600/40 bg-night-100/60 p-3 text-cream-100 backdrop-blur-md transition-colors hover:border-gold-400/70 hover:bg-night-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lihat foto"
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-night-900/90 px-4 py-8 backdrop-blur-md transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Tutup"
        className="absolute right-4 top-4 z-10 rounded-full border border-gold-600/40 bg-night-100/60 p-3 text-cream-100 backdrop-blur-md transition-colors hover:border-gold-400/70 hover:bg-night-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 sm:right-5 sm:top-5"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {hasPrev && (
        <button type="button" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Foto sebelumnya" className={`${navBtn} left-2 hidden sm:flex md:left-8 md:p-4`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button type="button" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Foto berikutnya" className={`${navBtn} right-2 hidden sm:flex md:right-8 md:p-4`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-full w-full max-w-3xl flex-col items-center transition-all duration-500 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="rounded-[10px] border border-gold-600/30 bg-night-50/95 p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:p-4">
          <div className="relative max-h-[70vh] overflow-hidden rounded-[4px] bg-night-100">
            {errored ? (
              <div className="flex h-[50vh] w-[80vw] max-w-2xl flex-col items-center justify-center gap-3 bg-gradient-to-br from-night-50 to-night-100">
                <span className="text-5xl opacity-60">📷</span>
                <span className="font-hand text-2xl text-gold-400">
                  foto belum tersedia
                </span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.caption ?? ""}
                onError={() => setErrored(true)}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            )}
          </div>

          {item.caption && (
            <p className="mt-3 px-2 pb-1 text-center font-hand text-xl text-gold-300 sm:mt-4 sm:text-2xl">
              {item.caption}
            </p>
          )}
        </div>

        <p className="mt-4 text-xs tracking-[0.3em] text-cream-200/60 sm:mt-5">
          {index + 1} / {items.length}
        </p>

        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-cream-200/40 sm:hidden">
          geser untuk pindah foto
        </p>
      </div>
    </div>
  );
}