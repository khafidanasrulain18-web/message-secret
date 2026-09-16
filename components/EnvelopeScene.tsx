"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import "@/components/EnvelopeScene";

// Daftar pesan — masing-masing punya href dan label sendiri.
// Ganti slug & label di bawah ini sesuai isi pesan aslinya.
const pesanList = [
  { href: "/messages/lutfiyatul", label: "Pesan untuk Pasangan" },
  { href: "/messages/untuk-bapa", label: "Pesan untuk Ayah" },
  { href: "/messages/untuk-ibu", label: "Pesan untuk Mama" },
  { href: "/messages/aji", label: "Pesan untuk Abang" },
  { href: "/messages/ikmal", label: "Pesan untuk Kakak" },
  { href: "/messages/dinda", label: "Pesan untuk Adek" },
  { href: "/messages/afnan", label: "Pesan untuk Sahabat" },
  { href: "/messages/untuk-sahabat", label: "Pesan untuk Teman" },
];

// Pseudo-random deterministic
const seeded = (i: number, n: number) => {
  const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

export default function EnvelopeScene() {
  const [opened, setOpened] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: `${seeded(i, 1) * 100}%`,
        top: `${seeded(i, 2) * 100}%`,
        size: 1 + seeded(i, 3) * 2.2,
        dur: `${2 + seeded(i, 4) * 4}s`,
        delay: `${seeded(i, 5) * 5}s`,
        bright: 0.5 + seeded(i, 6) * 0.5,
      })),
    []
  );

  return (
    <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0a0812] px-6 py-16">
      {/* Gradasi langit dasar */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0812] via-[#15110C] to-[#050404]" />

      {/* Spotlight halus di tengah */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(700px circle at 50% 50%, rgba(199,154,75,.08), transparent 60%)",
        }}
      />

      {/* Lapisan bintang — tambahkan class star-field untuk containment */}
<div className="star-field pointer-events-none absolute inset-0 z-0">
  {stars.map((s) => (
    <span
      key={s.id}
      className="star"
      style={
        {
          left: s.left,
          top: s.top,
          width: `${s.size}px`,
          height: `${s.size}px`,
          "--dur": s.dur,
          "--delay": s.delay,
          opacity: s.bright,
        } as React.CSSProperties
      }
    />
  ))}
</div>

      {/* Bintang jatuh */}
      <span className="shooting-star" style={{ top: "8%", left: "4%" }} />
      <span
        className="shooting-star"
        style={{ top: "32%", left: "45%", animationDelay: "9s" }}
      />

      {/* Bulan */}
      <div className="pointer-events-none absolute right-[8%] top-[10%] z-0 hidden sm:block">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24">
          <div className="moon-halo" />
          <div className="moon-ball" />
          <span className="crater h-3 w-3" style={{ left: "28%", top: "30%" }} />
          <span className="crater h-2 w-2" style={{ left: "58%", top: "22%" }} />
          <span className="crater h-4 w-4" style={{ left: "44%", top: "58%" }} />
          <span className="crater h-1.5 w-1.5" style={{ left: "20%", top: "62%" }} />
          <span className="crater h-2.5 w-2.5" style={{ left: "68%", top: "52%" }} />
        </div>
      </div>

      {/* Planet */}
      <div className="pointer-events-none absolute left-[5%] top-[14%] z-0 hidden md:block">
        <div className="planet-tilt relative h-24 w-24">
          <div className="planet-body" />
          <div className="planet-ring" />
        </div>
      </div>

      {/* Cahaya & Debu — beri class ambient-glow pada dua blob blur statis */}
<div className="pointer-events-none absolute inset-0 z-0">
  <div className="ambient-glow absolute left-[8%] top-[60%] h-64 w-64 rounded-full bg-[#C79A4B]/10 blur-3xl sm:left-[12%]" />
  <div className="ambient-glow absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[#7A1D2A]/10 blur-3xl" />
</div>
      <div className="pointer-events-none absolute inset-0 z-0">
        {[
          { left: "20%", top: "70%", dx: "18px", dur: "9s", delay: "0s" },
          { left: "78%", top: "64%", dx: "-14px", dur: "11s", delay: "1.2s" },
          { left: "34%", top: "28%", dx: "10px", dur: "13s", delay: "2.4s" },
          { left: "64%", top: "24%", dx: "-16px", dur: "10s", delay: ".6s" },
        ].map((m, i) => (
          <span
            key={i}
            className="mote absolute h-1 w-1 rounded-full bg-[#C79A4B]/60"
            style={{ left: m.left, top: m.top, "--dx": m.dx, "--dur": m.dur, "--delay": m.delay } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Lilin */}
      <div className="pointer-events-none absolute bottom-10 left-8 hidden flex-col items-center sm:flex">
        <span className="flame block h-4 w-2 rounded-full bg-gradient-to-t from-[#C79A4B] via-[#F3C97A] to-[#FFF3D6]" />
        <span className="mt-0.5 h-10 w-3 rounded-sm bg-[#EDE3D0]" />
        <span className="h-2 w-8 rounded-full bg-[#3A2E20]" />
      </div>

      {/* Bagian Tengah (Teks & Amplop) */}
      <div className="relative z-10 w-full max-w-md text-center">
  <p className="rise-in font-hand text-xl text-[#C79A4B]/90 sm:text-2xl">
    Beberapa surat yang belum sempat tersampaikan
  </p>

  <h1 className="rise-in mt-2 font-display text-[2.5rem] leading-[1.05] text-[#F3E6C8] sm:text-5xl" style={{ animationDelay: ".1s" }}>
    Amplop yang Menanti
  </h1>

  <svg viewBox="0 0 220 20" className="mx-auto mt-2 h-4 w-40 overflow-visible" aria-hidden="true">
    <path d="M4 12 C 40 4, 80 18, 120 8 S 200 4, 216 10" fill="none" stroke="#C79A4B" strokeWidth="3" strokeLinecap="round" pathLength={1} style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "draw 1s ease-out .6s forwards" }} />
  </svg>

  <p className="rise-in mx-auto mt-5 max-w-xs text-sm leading-relaxed text-[#F3E6C8]/70" style={{ animationDelay: ".2s" }}>
    Setiap pesan di sini dijaga rapat dengan kata sandinya masing-masing. Silakan buka sesuai nama kamu dan masukkan password yang sudah aku berikan.
  </p>

        {/* Amplop */}
        <div className="rise-in relative mx-auto mt-10 w-full" style={{ animationDelay: ".3s" }}>
          <div className="relative mx-auto aspect-[3/2] w-full max-w-xs overflow-visible rounded-lg bg-[#F3E6C8] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] sm:max-w-sm">
            
            {/* Surat */}
            <div
              className={`absolute inset-x-3 bottom-3 top-[38%] flex flex-wrap content-end justify-center gap-2 overflow-visible ${
                opened ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              {pesanList.map((pesan, i) => {
                const fan = (i - (pesanList.length - 1) / 2) * 2.2;
                return (
                  <Link
                    key={pesan.href}
                    href={pesan.href}
                    tabIndex={opened ? 0 : -1}
                    aria-hidden={!opened}
                    className="note-card group/note relative flex h-9 w-[46%] items-center justify-center rounded-sm bg-[#FBF4E3] px-2 text-center text-[0.68rem] leading-tight text-[#2B2118] shadow-[0_6px_14px_-6px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:bg-[#fffaf0] hover:shadow-[0_18px_30px_-12px_rgba(199,154,75,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C79A4B]"
                    style={{
                      transform: opened ? `translateY(0) rotate(${fan}deg)` : "translateY(60px) rotate(0deg)",
                      opacity: opened ? 1 : 0,
                      transitionDelay: opened ? `${i * 70}ms` : "0ms",
                    }}
                  >
                    {pesan.label}
                  </Link>
                );
              })}
            </div>

            {/* Lipatan Bawah & Samping */}
            <div className="pointer-events-none absolute inset-0 rounded-lg" style={{ clipPath: "polygon(0 100%, 50% 45%, 100% 100%)", background: "linear-gradient(0deg, rgba(0,0,0,.08), rgba(0,0,0,0) 60%)" }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2" style={{ clipPath: "polygon(0 0, 100% 45%, 0 100%)", background: "linear-gradient(90deg, rgba(0,0,0,.05), rgba(0,0,0,0))" }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2" style={{ clipPath: "polygon(100% 0, 0 45%, 100% 100%)", background: "linear-gradient(-90deg, rgba(0,0,0,.05), rgba(0,0,0,0))" }} />

            {/* Lidah Atas & Segel Lilin — tambahkan class envelope-flap */}
<button
  type="button"
  aria-pressed={opened}
  aria-label={opened ? "Tutup amplop" : "Buka amplop, sentuh segel lilin"}
  onClick={() => setOpened((v) => !v)}
  className="envelope-flap absolute inset-x-0 top-0 z-20 h-[58%] origin-top cursor-pointer appearance-none border-0 bg-transparent p-0 transition-transform duration-[1100ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C79A4B]"
  style={{
    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
    background: "linear-gradient(160deg, #EADAB2, #C9AE79)",
    transform: opened ? "rotateX(-160deg) translateZ(0)" : "rotateX(0deg) translateZ(0)",
    transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
  }}
>
              <span className="absolute left-1/2 top-[46%] h-9 w-9 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 rounded-full transition-all duration-700 ease-out" style={{ clipPath: "inset(0 50% 0 0)", background: "radial-gradient(circle at 35% 30%, #9c2c3a, #5c1119)", transform: opened ? "translateX(-9px) rotate(-20deg)" : "translateX(0) rotate(0deg)", opacity: opened ? 0 : 1 }} />
                <span className="absolute inset-0 rounded-full transition-all duration-700 ease-out" style={{ clipPath: "inset(0 0 0 50%)", background: "radial-gradient(circle at 65% 30%, #9c2c3a, #5c1119)", transform: opened ? "translateX(9px) rotate(20deg)" : "translateX(0) rotate(0deg)", opacity: opened ? 0 : 1 }} />
                <span className="absolute inset-0 flex items-center justify-center font-hand text-sm text-[#F3E6C8] transition-opacity duration-300" style={{ opacity: opened ? 0 : 1 }}>✦</span>
                {!opened && <span className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-[#C79A4B]/25 blur-md" />}
              </span>
            </button>
          </div>

          <p className="mt-5 font-hand text-base text-[#F3E6C8]/60">
            {opened ? "sentuh lagi untuk menutupnya" : "sentuh segel untuk membuka"}
          </p>
        </div>
      </div>
    </div>
  );
}