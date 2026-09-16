import "server-only";
import type { MessageConfig } from "./types";

/**
 * Contoh pesan. Ini adalah template yang bisa di-copy untuk
 * membuat pesan baru — lihat README.md di root project untuk
 * cara paling cepat (pakai scripts/new-message.sh).
 */
const afnan: MessageConfig = {
  slug: "afnan",
  password: process.env.PASSWORD_AFNAN ?? "13072014",
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
    greeting: "Halo, Adek,",
    paragraphs: [
      {
        type: "text",
        text:
          "Tumben ya Kakak nulis begini? Kakak cuma mau bilang satu hal yang paling sederhana: terima kasih. Untuk semua hal kecil dan tingkah rewelmu yang tanpa sadar bikin hidup Kakak lebih berwarna.",
      },
      {
        type: "text",
        text:
          "Mulai dari kebiasaanmu yang susah banget disuruh mandi pagi, obrolan-obrolan absurd kita sebelum tidur, sampai caramu diam-diam nemenin waktu Kakak lagi capek — Kakak perhatiin semuanya, lho.",
      },
      {
        type: "highlight",
        text:
          "Kalau ada satu hal yang mau Kakak pastikan kamu tahu hari ini: kalau dunia lagi jahat, kamu nggak pernah sendirian. Kamu selalu punya Kakak buat pulang.",
      },
      {
        type: "text",
        text:
          "Nggak ada angin nggak ada hujan memang tiba-tiba ngasih surat begini. Tapi hal-hal baik kan nggak perlu nunggu ulang tahun buat diucapin. Dan Kakak rasa, kamu perlu tahu kalau Kakak bangga sama kamu.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Jangan cepet-cepet gedenya ya. Terima kasih udah jadi adik yang seru (walau kadang ngeselin) buat Kakak.",
      },
    ],
    signature: { line: "Dari yang selalu bawel tapi sayang,", name: "Kakak" },
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

export default afnan;