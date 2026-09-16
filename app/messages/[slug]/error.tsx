"use client";

import { useEffect } from "react";

export default function MessageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[message-error]", error);
  }, [error]);

  return (
    <main className="flex min-h-[100svh] items-center justify-center px-6 py-12">
      <div className="night-card w-full max-w-md px-8 py-14 text-center md:px-12">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold-600/40 bg-night-50/60">
          <span className="text-4xl opacity-80">🌙</span>
        </div>
        <p className="mt-8 font-hand text-2xl text-gold-400">ada yang salah</p>
        <h1 className="mt-2 font-display text-3xl text-cream-100">
          Surat ini tersendat sebentar
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-cream-200/75">
          Mungkin langitnya sedang berawan. Coba muat ulang halaman ini —
          suratnya masih di sini, menunggu.
        </p>
        <button type="button" onClick={reset} className="soft-button">
          Coba lagi
        </button>
      </div>
    </main>
  );
}