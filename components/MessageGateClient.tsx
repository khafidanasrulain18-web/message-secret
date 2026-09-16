"use client";

import { useEffect, useState } from "react";
import PasswordGate from "./PasswordGate";
import type { GateConfig } from "@/lib/messages/types";

type Props = {
  slug: string;
  gate: GateConfig;
  unlockedContent: React.ReactNode;
};

const UNLOCK_KEY = (slug: string) => `unlocked_${slug}`;

export default function MessageGateClient({ slug, gate, unlockedContent }: Props) {
  // null = belum tahu (SSR & sebelum hidrasi), true/false setelah cek sessionStorage.
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(UNLOCK_KEY(slug)) === "1");
    } catch {
      // sessionStorage bisa diblokir (mode privat ketat) — fail-closed.
      setUnlocked(false);
    }
  }, [slug]);

  // Placeholder singkat saat hidrasi — tidak akan terlihat karena tertutup
  // RevealTransition saat baru unlock, atau karena cek sessionStorage instan.
  if (unlocked === null) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center px-6 py-12">
        <p className="font-hand text-lg text-gold-500/80">sebentar ya…</p>
      </main>
    );
  }

  if (!unlocked) {
    return (
      <PasswordGate
        slug={slug}
        gate={gate}
        onUnlock={() => setUnlocked(true)}
      />
    );
  }

  return <>{unlockedContent}</>;
}