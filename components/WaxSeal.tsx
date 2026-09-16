type Props = {
  /** true saat segel sedang pecah terbuka — dua belahan terpisah & memudar */
  cracked?: boolean;
  /** true saat masih utuh, untuk denyut cahaya halus di sekitarnya */
  glowing?: boolean;
  /** kelas ukuran (h-*, w-*) untuk elemen pembungkus */
  className?: string;
  /** kelas ukuran teks untuk ornamen bintang di tengah segel */
  starClassName?: string;
};

/**
 * Segel lilin merah bergaya "night" — pengganti ilustrasi amplop pada
 * alur kata-sandi & reveal. Idle: berdenyut pelan. Saat cracked=true,
 * dua belahannya terbuka ke samping sambil memudar, meninggalkan cahaya.
 */
export default function WaxSeal({
  cracked = false,
  glowing = true,
  className = "h-28 w-28 sm:h-32 sm:w-32",
  starClassName = "text-3xl sm:text-4xl",
}: Props) {
  return (
    <span className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
      {/* Halo cahaya */}
      <span
        className={`pointer-events-none absolute inset-[-35%] -z-10 rounded-full blur-xl transition-opacity duration-700 ${
          glowing && !cracked ? "animate-pulse opacity-70" : "opacity-40"
        }`}
        style={{ background: "radial-gradient(circle, rgba(199,154,75,.5), transparent 70%)" }}
      />

      {/* Cincin luar tipis */}
      <span
        className="absolute inset-0 rounded-full border transition-opacity duration-700"
        style={{ borderColor: "rgba(243,230,200,.25)", opacity: cracked ? 0 : 1 }}
      />

      {/* Belahan kiri */}
      <span
        className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
        style={{
          clipPath: "inset(0 50% 0 0)",
          background: "radial-gradient(circle at 35% 30%, #A83848, #5C1119)",
          transform: cracked ? "translateX(-45%) rotate(-16deg)" : "translateX(0) rotate(0deg)",
          opacity: cracked ? 0 : 1,
        }}
      />
      {/* Belahan kanan */}
      <span
        className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
        style={{
          clipPath: "inset(0 0 0 50%)",
          background: "radial-gradient(circle at 65% 30%, #A83848, #5C1119)",
          transform: cracked ? "translateX(45%) rotate(16deg)" : "translateX(0) rotate(0deg)",
          opacity: cracked ? 0 : 1,
        }}
      />

      {/* Ornamen bintang di tengah */}
      <span
        className={`relative font-hand text-cream-100 transition-all duration-500 ${starClassName}`}
        style={{ opacity: cracked ? 0 : 1, transform: cracked ? "scale(1.5)" : "scale(1)" }}
      >
        ✦
      </span>
    </span>
  );
}
