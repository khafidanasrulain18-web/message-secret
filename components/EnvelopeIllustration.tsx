type Props = { className?: string };

/**
 * Amplop krem di atas meja malam — persis seperti pada gambar tema:
 * badan cream, flap atas tan (lebih tua) dengan segel lilin merah.
 * Segel lilin memuat ornamen bintang kecil krem.
 */
export default function EnvelopeIllustration({ className }: Props) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FBF3E0" />
          <stop offset="100%" stopColor="#E8D5A8" />
        </linearGradient>
        <linearGradient id="envFlap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#D4BC86" />
          <stop offset="100%" stopColor="#B89B68" />
        </linearGradient>
        <linearGradient id="envShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#B89B68" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B89B68" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sealBody" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0%"   stopColor="#A83848" />
          <stop offset="70%"  stopColor="#8B2D3A" />
          <stop offset="100%" stopColor="#6B1F2B" />
        </radialGradient>
        <filter id="envShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Amplop dengan shadow lembut */}
      <g filter="url(#envShadow)">
        {/* Badan amplop */}
        <rect x="0" y="0" width="300" height="200" rx="6" fill="url(#envBody)" />

        {/* Flap atas (triangle) */}
        <path d="M 0 0 L 300 0 L 150 105 Z" fill="url(#envFlap)" />

        {/* Shading halus di flap kanan bawah */}
        <path d="M 300 0 L 150 105 L 300 105 Z" fill="url(#envShade)" opacity="0.6" />

        {/* Lipatan kiri & kanan (shadow tipis) */}
        <path d="M 0 0 L 150 105 L 0 105 Z" fill="#000" opacity="0.05" />
        <path d="M 300 0 L 150 105 L 300 105 Z" fill="#000" opacity="0.08" />

        {/* Garis lipatan tipis */}
        <path
          d="M 0 0 L 150 105 L 300 0"
          fill="none" stroke="#B89B68" strokeWidth="0.8" opacity="0.6"
        />
      </g>

      {/* Segel lilin merah — sedikit tumpang tindih dengan flap */}
      <g style={{ transformOrigin: "150px 82px" }} className="animate-seal-pulse">
        <circle cx="150" cy="82" r="19" fill="url(#sealBody)" />
        {/* Cincin dalam */}
        <circle cx="150" cy="82" r="15" fill="none" stroke="#6B1F2B" strokeWidth="0.8" opacity="0.7" />
        {/* Ornamen: bintang kecil krem */}
        <g fill="#F5E8C8">
          <path d="M 150 72 L 152 79 L 159 79 L 153.5 83 L 155.5 90 L 150 86 L 144.5 90 L 146.5 83 L 141 79 L 148 79 Z" />
        </g>
        {/* Highlight kecil */}
        <ellipse cx="144" cy="76" rx="3" ry="2" fill="#F5E8C8" opacity="0.35" />
      </g>
    </svg>
  );
}