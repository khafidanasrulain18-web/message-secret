import "server-only";
import type { MessageConfig } from "./types";

/**
 * Contoh pesan. Ini adalah template yang bisa di-copy untuk
 * membuat pesan baru — lihat README.md di root project untuk
 * cara paling cepat (pakai scripts/new-message.sh).
 */
const dinda: MessageConfig = {
  slug: "dinda",
  password: process.env.PASSWORD_DINDA ?? "07072007",
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
    greeting: "Hai Kamu,",
    paragraphs: [
      {
        type: "text",
        text:
          "Aku nggak tahu harus mulai dari mana, jadi aku mulai dari hal paling sederhana: terima kasih. Untuk semua hal kecil yang mungkin nggak pernah kamu sadari berarti untukku.",
      },
      {
        type: "text",
        text:
          "Pagi-pagi ketika kamu masih ngantuk tapi tetap nyapa duluan, obrolan random tengah malam yang bikin ketawa sendiri, sampai diam-diam kamu yang selalu ada saat aku nggak baik-baik aja — semuanya kusimpan rapi.",
      },
      {
        type: "highlight",
        text:
          "Kalau ada satu hal yang ingin aku titipkan hari ini: jangan pernah merasa kamu sendirian.",
      },
      {
        type: "text",
        text:
          "Aku menulis ini bukan karena ada momen spesial. Kadang hal-hal baik memang layak diucapkan tanpa harus menunggu hari besar. Dan kamu, layak dengar itu lebih sering.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Terima kasih sudah jadi kamu. Sederhana saja, tapi itu cukup berarti untukku.",
      },
    ],
    signature: { line: "Dengan hangat,", name: "Aku" },
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

export default dinda;