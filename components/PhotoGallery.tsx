"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";
import type { PhotoItem } from "@/lib/messages/types";

type Props = { title: string; subtitle: string; items: PhotoItem[] };

function PolaroidFrame({
  item,
  onClick,
}: {
  item: PhotoItem;
  onClick: () => void;
}) {
  const [errored, setErrored] = useState(false);
  const rotate = item.rotate ?? 0;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={item.caption ? `Buka foto: ${item.caption}` : "Buka foto"}
      className="group relative block w-full cursor-pointer text-left focus:outline-none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Perspective wrapper untuk efek 3D */}
      <div className="relative transition-all duration-500 ease-out [perspective:1000px]">
        
        {/* Glow effect di belakang kartu */}
        <div className="absolute inset-0 z-0 scale-95 rounded-[6px] bg-gradient-to-tr from-gold-500/0 via-gold-500/20 to-gold-500/0 opacity-0 blur-xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100" />

        {/* Kartu Polaroid utama dengan efek 3D Tilt & Lift */}
        <div className="relative z-10 rounded-[6px] bg-night-50/95 p-2.5 shadow-[0_14px_35px_-12px_rgba(0,0,0,0.85)] ring-1 ring-gold-600/30 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_25px_45px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.2)] group-hover:ring-gold-400/60 group-hover:[transform:rotateX(9deg)_rotateY(-9deg)_rotate(3deg)] group-focus-visible:ring-2 group-focus-visible:ring-gold-400 sm:p-3">
          
          {/* Efek Selotip (Tape) yang muncul saat hover */}
          <div className="absolute -top-3 left-1/2 z-30 h-6 w-16 -translate-x-1/2 rotate-[-5deg] rounded-sm border border-white/30 bg-white/10 opacity-0 shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-500 ease-out group-hover:opacity-100 group-hover:rotate-[-3deg]" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-night-100">
            {/* Efek Kilau Kaca (Glare) menyapu dari kiri ke kanan */}
            <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

            {errored ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-night-50 to-night-100">
                <span className="text-3xl opacity-60">📷</span>
                <span className="px-3 text-center font-hand text-base text-gold-500 sm:text-lg">
                  foto menyusul
                </span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.caption ?? ""}
                loading="lazy"
                decoding="async"
                onError={() => setErrored(true)}
                className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-110"
              />
            )}
          </div>

          {item.caption && (
            <p className="mt-2 px-1 text-center font-hand text-lg leading-tight text-gold-300 transition-all duration-300 group-hover:text-gold-200 group-hover:tracking-wide sm:mt-2.5 sm:px-1.5 sm:text-xl">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export default function PhotoGallery({ title, subtitle, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <section className="mt-20 sm:mt-24">
      <ScrollReveal>
        <header className="text-center">
          <div className="ornament-line mx-auto h-px w-12" />
          <h2 className="mt-6 font-display text-3xl text-cream-100 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-sm px-4 text-sm leading-relaxed text-cream-200/70">
              {subtitle}
            </p>
          )}
        </header>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-7 md:gap-y-14">
        {items.map((item, i) => (
          <ScrollReveal key={item.src + i} delay={(i % 6) * 70}>
            <PolaroidFrame item={item} onClick={() => setOpenIndex(i)} />
          </ScrollReveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}