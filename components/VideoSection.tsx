"use client";

import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import type { VideoSectionConfig } from "@/lib/messages/types";

type Props = VideoSectionConfig;

export default function VideoSection({ title, subtitle, src, poster, caption }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);
  const [errored, setErrored] = useState(false);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    document.dispatchEvent(new Event("pause-background-music"));
    v.play().then(() => setStarted(true)).catch(() => setErrored(true));
  }

  return (
    <section className="mt-20 sm:mt-24">
      <ScrollReveal>
        <header className="text-center">
          <div className="ornament-line mx-auto h-px w-12" />
          <h2 className="mt-6 font-display text-3xl text-cream-100 transition-colors duration-500 hover:text-gold-200 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-md px-4 text-sm leading-relaxed text-cream-200/70">
              {subtitle}
            </p>
          )}
        </header>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        {/* Wrapper Utama dengan efek Group dan Perspective untuk 3D */}
        <div className="group relative mx-auto mt-12 max-w-2xl sm:mt-14 [perspective:1000px]">
          
          {/* Efek Pendaran Emas (Gold Glow) di belakang video */}
          <div className="absolute inset-0 z-0 scale-95 rounded-[16px] bg-gradient-to-tr from-gold-500/0 via-gold-500/20 to-gold-500/0 opacity-0 blur-xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 sm:rounded-[20px]" />

          {/* Frame Utama Video dengan efek 3D Tilt dan Lift */}
          <div className="relative z-10 rounded-[16px] border border-gold-600/30 bg-night-900/90 p-1.5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-gold-400/60 group-hover:shadow-[0_35px_80px_-20px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15)] group-hover:[transform:rotateX(4deg)_rotateY(-4deg)] sm:rounded-[20px] sm:p-2">
            
            <div className="relative aspect-video overflow-hidden rounded-[12px] bg-night-900 sm:rounded-[14px]">
              
              {/* Efek Kilau Kaca (Glare) menyapu dari kiri ke kanan */}
              <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

              {errored ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-night-50 to-night-100">
                  <span className="text-4xl opacity-60">🎬</span>
                  <span className="font-hand text-xl text-gold-400">
                    video belum tersedia
                  </span>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    playsInline
                    controls={started}
                    preload="metadata"
                    onError={() => setErrored(true)}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />

                  {!started && (
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Putar video"
                      className="group/play absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-night-900/80 via-night-900/60 to-night-900/90 transition-colors duration-500 hover:from-night-900/90 hover:via-night-900/70 hover:to-night-900/95 focus:outline-none"
                    >
                      {/* Animasi Cincin Ganda (Pulsing & Rotating Ring) */}
                      <span className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                        {/* Cincin berdenyut */}
                        <span className="absolute inset-0 rounded-full border border-gold-400/0 transition-all duration-700 group-hover/play:border-gold-400/50 group-hover/play:scale-125 group-hover/play:animate-ping" />
                        {/* Cincin berputar (seperti roll film) */}
                        <span className="absolute inset-0 rounded-full border border-dashed border-gold-400/40 transition-all duration-[3000ms] group-hover/play:rotate-180 group-hover/play:scale-110" />
                        
                        {/* Tombol Utama */}
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 bg-gold-500/15 backdrop-blur-md transition-all duration-500 ease-out group-hover/play:scale-110 group-hover/play:bg-gold-500/30 group-hover/play:shadow-[0_0_25px_rgba(212,175,55,0.5)] group-active/play:scale-95 sm:h-16 sm:w-16">
                          <svg width="20" height="20" viewBox="0 0 24 24" className="ml-1 text-cream-100 transition-transform duration-300 group-hover/play:scale-110 sm:h-[22px] sm:w-[22px]" aria-hidden="true">
                            <path d="M8 5v14l11-7z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                      
                      {/* Teks Putar dengan efek melebar */}
                      <span className="font-hand text-xl text-cream-100 transition-all duration-500 group-hover/play:tracking-widest group-hover/play:text-gold-200 sm:text-2xl">
                        putar
                      </span>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Caption dengan efek transisi warna dan jarak huruf */}
          {caption && (
            <p className="mt-4 text-center font-hand text-xl text-gold-400 transition-all duration-500 group-hover:text-gold-300 group-hover:tracking-wider sm:mt-5 sm:text-2xl">
              {caption}
            </p>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}