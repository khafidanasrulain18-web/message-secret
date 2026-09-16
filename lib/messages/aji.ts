import "server-only";
import type { MessageConfig } from "./types";

/**
 * Contoh pesan. Ini adalah template yang bisa di-copy untuk
 * membuat pesan baru — lihat README.md di root project untuk
 * cara paling cepat (pakai scripts/new-message.sh).
 */
const aji: MessageConfig = {
  slug: "aji",
  password: process.env.PASSWORD_AJI ?? "02091999",
  recipientName: "Kamu",

  gate: {
    title: "Ada pesan untukmu…",
    subtitle:
      "Sebuah surat kecil yang sudah lama ingin kusampaikan. Ketik kata sandinya untuk membuka.",
    inputPlaceholder: "kata sandi rahasia",
    buttonLabel: "Buka pesan",
    hint: "Petunjuk: nama bunga yang pernah kamu suka 🌷",
    successMessage: "Membuka…",
  },

  content: {
    greeting: "Halo, Bang,",
    paragraphs: [
      {
        type: "text",
        text:
          "Aku nggak tahu harus mulai dari mana, jadi aku mulai dari hal yang paling sederhana: terima kasih. Terima kasih udah selalu jadi sosok pelindung dan panutan buat aku selama ini.",
      },
      {
        type: "text",
        text:
          "Dari nasehat-nasehat singkatmu yang selalu ngena pas aku lagi bingung, caramu diam-diam memastikan aku baik-baik aja, sampai pundak yang selalu siap sedia tiap kali aku capek sama keadaan—semuanya sangat berarti buatku.",
      },
      {
        type: "highlight",
        text:
          "Kalau ada satu hal yang pengen aku bilang ke Abang hari ini: Abang nggak harus selalu terlihat kuat dan nanggung semuanya sendirian. Ada aku di sini.",
      },
      {
        type: "text",
        text:
          "Aku nulis ini bukan karena lagi ada momen spesial. Cuma rasanya, aku jarang banget ngucapin ini secara langsung. Dan Abang sangat layak dapat apresiasi untuk semua hal yang udah Abang lakuin buat kita.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Terima kasih sudah jadi abang yang paling hebat. Sehat-sehat terus ya, Bang.",
      },
    ],
    signature: { line: "Dari adik yang selalu bangga padamu,", name: "Adikmu" },
  },

  photoSection: {
    title: "Kenangan",
    subtitle: "Beberapa potret yang kusimpan rapi di sudut hati.",
    items: [
      { src: "/messages/example/photos/foto-1.jpg", caption: "Pagi itu…", rotate: -3 },
      { src: "/messages/example/photos/foto-2.jpg", caption: "Ketawa lepas", rotate: 2.5 },
      { src: "/messages/example/photos/foto-3.jpg", caption: "Sore yang tenang", rotate: -1.5 },
      { src: "/messages/example/photos/foto-4.jpg", caption: "Perjalanan kecil", rotate: 3.2 },
      { src: "/messages/example/photos/foto-5.jpg", caption: "Langit kita", rotate: -2.2 },
      { src: "/messages/example/photos/foto-6.jpg", caption: "Sampai jumpa lagi", rotate: 1.6 },
    ],
  },

  video: {
    title: "Sepotong Kenangan",
    subtitle: "Ada suara yang kusimpan di sini — tekan putar kalau kamu siap.",
    src: "/messages/example/videos/klip.mp4",
    caption: "Rekaman kecil dari sore itu.",
  },

  music: {
    src: "/messages/example/music/lagu.mp3",
    label: "musik latar",
    volume: 0.5,
  },
};

export default aji;