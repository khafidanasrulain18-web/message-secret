"use client";

import { useEffect, useState } from "react";
import RevealTransition from "./RevealTransition";
import BackgroundMusic from "./BackgroundMusic";

type Phase = "idle" | "revealing" | "done";

type Props = {
  slug: string;
  music?: { src: string; label?: string; volume?: number };
  children: React.ReactNode;
};

export default function MessageExperience({ slug, music, children }: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  // Setelah animasi masuk selesai, kita lepas class "transform" sepenuhnya.
  // Alasannya: elemen dengan transform aktif (termasuk translate-y-0, yang
  // nilainya nol tapi tetap "ada") membuat browser membentuk containing
  // block baru untuk semua descendant position:fixed — termasuk Lightbox
  // di galeri foto. Akibatnya Lightbox tidak lagi menempel ke layar
  // penuh, dan tampak kosong/salah posisi saat foto diklik. Begitu
  // "settled", kita hapus class transform-nya agar transform kembali ke
  // "none" dan Lightbox bisa fixed ke viewport seperti seharusnya.
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const key = `justUnlocked_${slug}`;
    const flag = sessionStorage.getItem(key);
    if (flag === "1") {
      sessionStorage.removeItem(key);
      setPhase("revealing");
    } else {
      setPhase("done");
    }
  }, [slug]);

  const contentVisible = phase === "done";

  useEffect(() => {
    if (!contentVisible) {
      setSettled(false);
      return;
    }
    const t = window.setTimeout(() => setSettled(true), 1000); // = duration-1000
    return () => window.clearTimeout(t);
  }, [contentVisible]);

  return (
    <>
      {phase === "revealing" && (
        <RevealTransition onDone={() => setPhase("done")} />
      )}

      {music?.src && (
        <BackgroundMusic
          src={music.src}
          label={music.label}
          volume={music.volume}
        />
      )}

      <div
        aria-hidden={!contentVisible}
        className={
          settled
            ? "opacity-100"
            : `transition-all duration-1000 ease-out ${
                contentVisible
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`
        }
      >
        {children}
      </div>
    </>
  );
}