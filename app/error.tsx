"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[global-error]", error);
  }, [error]);

  return (
    <main className="flex min-h-[100svh] items-center justify-center px-6 py-12">
      <div className="night-card w-full max-w-md px-8 py-14 text-center md:px-12">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold-600/40 bg-night-50/60">
          <span className="text-4xl opacity-80">🌌</span>
        </div>
        <p className="mt-8 font-hand text-2xl text-gold-400">maaf ya</p>
        <h1 className="mt-2 font-display text-3xl text-cream-100">
          Ada yang tidak berjalan lancar
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-cream-200/75">
          Coba muat ulang halaman. Kalau masih bermasalah, beri tahu yang
          mengirim tautan ini.
        </p>
        <button type="button" onClick={reset} className="soft-button">
          Coba lagi
        </button>
      </div>
    </main>
  );
}