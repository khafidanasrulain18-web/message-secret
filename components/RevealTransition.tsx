"use client";

import { useEffect, useState } from "react";
import WaxSeal from "./WaxSeal";

type Stage = "closed" | "opening" | "fading";
type Props = { onDone: () => void };

/**
 * Reveal moment bernuansa malam: segel lilin pecah terbuka dan cahaya
 * emas hangat mengembang dari tengahnya, seperti api lilin yang
 * menyala pelan, lalu memudar.
 */
export default function RevealTransition({ onDone }: Props) {
  const [stage, setStage] = useState<Stage>("closed");

  useEffect(() => {
    const t1 = window.setTimeout(() => setStage("opening"), 600);
    const t2 = window.setTimeout(() => setStage("fading"), 2000);
    const t3 = window.setTimeout(onDone, 2800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [onDone]);

  const isOpening = stage !== "closed";
  const isFading = stage === "fading";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-night-900 transition-opacity duration-700 ease-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Glow emas mengembang dari tengah */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`rounded-full transition-all duration-[1500ms] ease-out ${
            isOpening
              ? "h-[220vmax] w-[220vmax] opacity-100"
              : "h-40 w-40 opacity-70"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(224,192,141,0.55) 0%, rgba(168,134,80,0.28) 35%, rgba(139,45,58,0.15) 55%, transparent 75%)",
          }}
        />
      </div>

      {/* Segel yang pecah terbuka */}
      <div
        className={`relative transition-all duration-700 ease-out ${
          isOpening ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="animate-float">
          <WaxSeal
            cracked={isOpening}
            glowing={!isOpening}
            className="h-24 w-24 sm:h-28 sm:w-28"
            starClassName="text-4xl sm:text-5xl"
          />
        </div>
      </div>

      <p
        className={`absolute bottom-24 font-hand text-xl text-gold-400 transition-opacity duration-500 sm:text-2xl ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        membuka surat…
      </p>
    </div>
  );
}