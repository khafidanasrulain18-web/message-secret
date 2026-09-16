"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Delay dalam ms sebelum elemen mulai muncul (untuk efek stagger). */
  delay?: number;
  className?: string;
};

/**
 * Wrapper yang memunculkan anaknya dengan lembut saat masuk viewport.
 * Menggunakan IntersectionObserver — ringan, tanpa library animasi.
 * Menghormati prefers-reduced-motion: jika user memilih reduce motion,
 * elemen langsung tampil tanpa animasi.
 */
export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // Cek preferensi reduced-motion sekali di mount.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReduced(true);
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      {
        // threshold 0 = ter-trigger begitu SATU piksel saja masuk viewport.
        // Sebelumnya 0.12 (butuh 12% dari luas elemen terlihat sekaligus) —
        // ini gagal total untuk elemen yang tingginya jauh melebihi tinggi
        // layar (mis. satu paragraf pesan yang sangat panjang), karena 12%
        // dari tingginya tidak akan pernah muat di viewport sekaligus,
        // sehingga elemen itu permanen tidak pernah dianggap "terlihat".
        threshold: 0,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const transitionClasses = reduced
    ? ""
    : "transition-all duration-[900ms] ease-out will-change-transform";

  return (
    <div
      ref={ref}
      style={reduced ? undefined : { transitionDelay: `${delay}ms` }}
      className={`${transitionClasses} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}