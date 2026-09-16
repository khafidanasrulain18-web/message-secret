/**
 * Backdrop dekoratif: langit malam bertabur bintang dengan
 * bulan di kanan atas, Saturnus di kiri atas, meteor kecil
 * melintas, dan lilin kecil menyala di sudut kiri bawah.
 *
 * Semua elemen pointer-events-none & aria-hidden — murni suasana.
 * Dipasang di layout, di belakang semua konten.
 */

// Posisi bintang (x%, y%, ukuran px, kelas opacity/animasi)
const STARS = [
  { x: 4,  y: 12, s: 1.4, o: "opacity-70", d: "0s" },
  { x: 8,  y: 34, s: 1.0, o: "opacity-40", d: "0.4s" },
  { x: 12, y: 68, s: 1.6, o: "opacity-80", d: "1.1s" },
  { x: 16, y: 22, s: 1.1, o: "opacity-50", d: "0.7s" },
  { x: 22, y: 78, s: 1.3, o: "opacity-60", d: "1.6s" },
  { x: 28, y: 6,  s: 1.0, o: "opacity-40", d: "2.1s" },
  { x: 32, y: 48, s: 1.5, o: "opacity-75", d: "0.3s" },
  { x: 38, y: 88, s: 1.2, o: "opacity-55", d: "1.4s" },
  { x: 42, y: 30, s: 0.9, o: "opacity-35", d: "2.4s" },
  { x: 48, y: 62, s: 1.3, o: "opacity-65", d: "0.9s" },
  { x: 52, y: 14, s: 1.1, o: "opacity-45", d: "1.9s" },
  { x: 58, y: 44, s: 1.6, o: "opacity-80", d: "0.2s" },
  { x: 62, y: 82, s: 1.0, o: "opacity-40", d: "2.6s" },
  { x: 68, y: 8,  s: 1.3, o: "opacity-60", d: "1.2s" },
  { x: 72, y: 56, s: 1.1, o: "opacity-50", d: "0.6s" },
  { x: 78, y: 26, s: 1.4, o: "opacity-70", d: "2.0s" },
  { x: 82, y: 72, s: 1.0, o: "opacity-40", d: "0.8s" },
  { x: 88, y: 40, s: 1.5, o: "opacity-75", d: "1.5s" },
  { x: 92, y: 88, s: 1.1, o: "opacity-50", d: "2.3s" },
  { x: 96, y: 16, s: 1.2, o: "opacity-55", d: "0.5s" },
  { x: 24, y: 92, s: 1.0, o: "opacity-45", d: "1.7s" },
  { x: 46, y: 96, s: 1.3, o: "opacity-60", d: "1.0s" },
  { x: 74, y: 94, s: 1.0, o: "opacity-40", d: "2.5s" },
  { x: 6,  y: 52, s: 1.1, o: "opacity-50", d: "0.35s" },
  { x: 94, y: 62, s: 1.2, o: "opacity-55", d: "1.3s" },
];

export default function NightSky() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Bintang-bintang */}
      {STARS.map((st, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-star-bright animate-twinkle ${st.o}`}
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            boxShadow:
              st.s > 1.2
                ? "0 0 6px rgba(245,232,200,0.6)"
                : "0 0 3px rgba(245,232,200,0.35)",
            animationDelay: st.d,
          }}
        />
      ))}

      {/* Bulan — kanan atas */}
      <svg
        viewBox="0 0 120 120"
        className="absolute right-[6%] top-[8%] w-16 opacity-90 sm:right-[8%] sm:top-[10%] sm:w-24 md:w-28"
      >
        <defs>
          <radialGradient id="moonGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%"   stopColor="#FBF3E0" stopOpacity="0.55" />
            <stop offset="55%"  stopColor="#E8D5A8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E8D5A8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="moonBody" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0%"   stopColor="#FBF3E0" />
            <stop offset="60%"  stopColor="#E8D5A8" />
            <stop offset="100%" stopColor="#B89B68" />
          </radialGradient>
        </defs>
        {/* Halo */}
        <circle cx="60" cy="60" r="58" fill="url(#moonGlow)" />
        {/* Badan bulan */}
        <circle cx="60" cy="60" r="30" fill="url(#moonBody)" />
        {/* Kawah-kawah */}
        <circle cx="52" cy="52" r="3.2" fill="#B89B68" opacity="0.55" />
        <circle cx="66" cy="58" r="4.2" fill="#B89B68" opacity="0.5" />
        <circle cx="58" cy="70" r="3.6" fill="#B89B68" opacity="0.45" />
        <circle cx="72" cy="48" r="2.2" fill="#B89B68" opacity="0.4" />
      </svg>

      {/* Saturnus — kiri atas */}
      <svg
        viewBox="0 0 120 100"
        className="absolute left-[6%] top-[10%] w-14 opacity-80 sm:left-[8%] sm:top-[12%] sm:w-20 md:w-24"
      >
        <defs>
          <radialGradient id="planetBody" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0%"   stopColor="#E0C08D" />
            <stop offset="55%"  stopColor="#A88650" />
            <stop offset="100%" stopColor="#5C4726" />
          </radialGradient>
        </defs>
        {/* Cincin belakang */}
        <ellipse
          cx="60" cy="52" rx="48" ry="12"
          fill="none" stroke="#C9A868" strokeWidth="1.2"
          opacity="0.65"
          transform="rotate(-18 60 52)"
        />
        <ellipse
          cx="60" cy="52" rx="42" ry="9"
          fill="none" stroke="#E0C08D" strokeWidth="0.8"
          opacity="0.5"
          transform="rotate(-18 60 52)"
        />
        {/* Badan planet */}
        <circle cx="60" cy="52" r="22" fill="url(#planetBody)" />
        {/* Cincin depan — ditutup sebagian oleh planet */}
        <path
          d="M 18 52 Q 60 90 102 52"
          fill="none" stroke="#C9A868" strokeWidth="1.2"
          opacity="0.85"
          transform="rotate(-18 60 52)"
        />
      </svg>

      {/* Meteor kecil melintas — kanan tengah */}
      <div className="absolute right-[18%] top-[42%] h-[1px] w-24 overflow-hidden opacity-70">
        <span className="absolute inset-y-0 left-0 w-full animate-shooting-star bg-gradient-to-r from-transparent via-cream-200 to-transparent" />
      </div>

      {/* Lilin — kiri bawah */}
      <svg
        viewBox="0 0 40 90"
        className="absolute bottom-[6%] left-[5%] w-8 opacity-85 sm:bottom-[8%] sm:left-[6%] sm:w-10"
      >
        <defs>
          <radialGradient id="flameGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%"   stopColor="#FBF3E0" stopOpacity="0.75" />
            <stop offset="50%"  stopColor="#E0C08D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E0C08D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="candleBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FBF3E0" />
            <stop offset="100%" stopColor="#B89B68" />
          </linearGradient>
          <linearGradient id="flameBody" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#C9A868" />
            <stop offset="60%"  stopColor="#F5E8C8" />
            <stop offset="100%" stopColor="#FBF3E0" />
          </linearGradient>
        </defs>
        {/* Halo cahaya */}
        <circle cx="20" cy="20" r="18" fill="url(#flameGlow)" />
        {/* Badan lilin */}
        <rect x="13" y="45" width="14" height="40" rx="2" fill="url(#candleBody)" />
        {/* Sumbu */}
        <line x1="20" y1="38" x2="20" y2="45" stroke="#5C4726" strokeWidth="1.2" />
        {/* Api — berkedip */}
        <g className="origin-bottom animate-flicker" style={{ transformOrigin: "20px 38px" }}>
          <path
            d="M 20 22 Q 24 30 20 38 Q 16 30 20 22 Z"
            fill="url(#flameBody)"
          />
          <ellipse cx="20" cy="33" rx="1.4" ry="3" fill="#FBF3E0" opacity="0.9" />
        </g>
        {/* Pantulan di bawah lilin */}
        <ellipse cx="20" cy="86" rx="11" ry="2" fill="#5C4726" opacity="0.4" />
      </svg>
    </div>
  );
}