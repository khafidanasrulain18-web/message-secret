import Link from "next/link";
import EnvelopeIllustration from "@/components/EnvelopeIllustration";

export default function MessageNotFound() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-6 py-12">
      <div className="night-card w-full max-w-md px-8 py-14 text-center md:px-12">
        <div className="mx-auto w-40 opacity-90">
          <EnvelopeIllustration className="w-full" />
        </div>
        <p className="mt-8 font-hand text-2xl text-gold-400">hmm…</p>
        <h1 className="mt-2 font-display text-3xl text-cream-100">
          Suratnya tidak ditemukan
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-cream-200/75">
          Sepertinya tautan ini bukan untuk surat yang tersedia. Coba periksa
          kembali tautan yang kamu terima ya.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full border border-gold-600/50 px-6 py-3 text-sm text-cream-200 transition-colors hover:border-gold-400/70 hover:bg-night-50/60"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}