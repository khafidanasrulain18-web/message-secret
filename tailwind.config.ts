import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Langit malam — bukan hitam pekat, ada kehangatan cokelat
        night: {
          50:  "#221A14",
          100: "#1A130E",
          200: "#130E0A",
          300: "#0D0906",
          400: "#080504",
          900: "#030201",
        },
        // Kertas surat & cahaya bulan
        cream: {
          50:  "#FBF3E0",
          100: "#F5E8C8",
          200: "#E8D5A8",
          300: "#D4BC86",
          400: "#B89B68",
        },
        // Emas tua — aksen tipis
        gold: {
          300: "#E0C08D",
          400: "#C9A868",
          500: "#A88650",
          600: "#7A5F35",
          700: "#5C4726",
        },
        // Segel lilin merah
        wax: {
          400: "#A83848",
          500: "#8B2D3A",
          600: "#6B1F2B",
          700: "#4E1520",
        },
        // Warna bintang
        star: {
          dim:    "#5A4E3E",
          mid:    "#9B8A70",
          bright: "#F5E8C8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-7px)" },
          "40%": { transform: "translateX(7px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Bintang berkelip
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        // Lilin: api kecil bergoyang
        flicker: {
          "0%, 100%": { transform: "scale(1) translateY(0)", opacity: "1" },
          "35%": { transform: "scale(0.94) translateY(1px)", opacity: "0.85" },
          "70%": { transform: "scale(1.05) translateY(-1px)", opacity: "1" },
        },
        // Meteor melintas
        "shooting-star": {
          "0%":   { transform: "translate(0, 0)", opacity: "0" },
          "10%":  { opacity: "1" },
          "70%":  { opacity: "1" },
          "100%": { transform: "translate(180px, 60px)", opacity: "0" },
        },
        // Envelope: segel berdenyut halus
        "seal-pulse": {
          "0%, 100%": { transform: "scale(1)", filter: "drop-shadow(0 0 0px rgba(168,56,72,0))" },
          "50%": { transform: "scale(1.06)", filter: "drop-shadow(0 0 12px rgba(168,56,72,0.55))" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        float: "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1.2s ease-out both",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        flicker: "flicker 2.2s ease-in-out infinite",
        "shooting-star": "shooting-star 3s ease-out infinite",
        "seal-pulse": "seal-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;