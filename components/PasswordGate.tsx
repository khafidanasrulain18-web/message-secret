"use client";

import { useState } from "react";
import WaxSeal from "./WaxSeal";
import type { GateConfig } from "@/lib/messages/types";

type Props = {
  slug: string;
  gate: GateConfig;
  /** Dipanggil setelah password valid — ganti dari `router.refresh()`. */
  onUnlock?: () => void;
};

type Stage = "sealed" | "opening" | "form";

export default function PasswordGate({ slug, gate, onUnlock }: Props) {
  const [stage, setStage] = useState<Stage>("sealed");
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [shake, setShake] = useState(false);

  function openSeal() {
    if (stage !== "sealed") return;
    setStage("opening");
    setTimeout(() => setStage("form"), 700);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim() || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, password: value }),
      });

      if (res.ok) {
        setStatus("success");
        try {
          // Tandai tab ini sebagai unlocked untuk sesi berjalan.
          sessionStorage.setItem(`unlocked_${slug}`, "1");
          // Pemicu animasi reveal di MessageExperience.
          sessionStorage.setItem(`justUnlocked_${slug}`, "1");
        } catch {
          /* ignore */
        }
        setTimeout(() => onUnlock?.(), 900);
        return;
      }

      setStatus("error");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    } catch {
      setStatus("error");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  const isError = status === "error";

  return (
    <main className="flex min-h-[100svh] items-center justify-center px-5 py-12 sm:px-6">
      <div className={`w-full max-w-xl ${shake ? "animate-shake" : ""}`}>
        <div className="mb-8 text-center sm:mb-10">
          <p className="font-hand text-xl text-gold-400 sm:text-2xl">
            beberapa surat yang belum sempat terkirim
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-cream-100 sm:text-5xl md:text-6xl">
            Amplop yang
            <br />
            Menunggu
          </h1>
          <div className="ornament-line mx-auto mt-4 h-px w-32" />
        </div>

        {stage !== "form" && (
          <div className="mx-auto max-w-md">
            <button
              type="button"
              onClick={openSeal}
              disabled={stage !== "sealed"}
              aria-label="Buka segel"
              className={`group relative mx-auto flex cursor-pointer items-center justify-center text-center transition-all duration-700 ease-out ${
                stage === "opening"
                  ? "scale-110"
                  : "hover:scale-[1.06] active:scale-[0.97]"
              }`}
            >
              <WaxSeal cracked={stage !== "sealed"} glowing={stage === "sealed"} />
            </button>

            {stage === "sealed" && (
              <p className="mt-6 animate-fade-in text-center font-hand text-lg text-gold-400/90 sm:text-xl">
                sentuh segel untuk membuka
              </p>
            )}
          </div>
        )}

        {stage === "form" && (
          <div className="mx-auto mt-8 max-w-md animate-fade-up">
            <p className="text-center font-body text-sm leading-relaxed text-cream-200/80">
              {gate.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-1">
              <input
                type="password"
                inputMode="text"
                autoComplete="off"
                autoFocus
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder={gate.inputPlaceholder}
                className="soft-input"
                disabled={status === "loading" || status === "success"}
              />

              <button
                type="submit"
                disabled={!value.trim() || status === "loading" || status === "success"}
                className="soft-button"
              >
                {status === "loading"
                  ? "Memeriksa…"
                  : status === "success"
                    ? gate.successMessage ?? "Membuka…"
                    : gate.buttonLabel}
              </button>
            </form>

            <p
              className={`mt-6 text-center font-hand text-base transition-opacity duration-500 sm:text-lg ${
                isError ? "text-wax-400 opacity-100" : "text-gold-600 opacity-90"
              }`}
            >
              {isError
                ? "Kata sandinya belum tepat… coba lagi ya."
                : gate.hint ?? "\u00A0"}
            </p>
          </div>
        )}
      </div>

      <p className="pointer-events-none fixed bottom-4 left-0 right-0 text-center font-hand text-sm text-gold-600/70 sm:bottom-6 sm:text-base">
        dibuat di bawah langit malam
      </p>
    </main>
  );
}