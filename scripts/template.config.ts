import "server-only";
import type { MessageConfig } from "../lib/messages/types";

const config: MessageConfig = {
  slug: "__SLUG__",
  password: process.env.MESSAGE___ENV___PASSWORD ?? "ganti-password-disini",
  recipientName: "Nama Penerima",

  gate: {
    title: "Ada pesan untukmu…",
    subtitle:
      "Tulis satu-dua kalimat yang bikin penasaran — seperti petunjuk halus menuju isi pesan.",
    inputPlaceholder: "kata sandi rahasia",
    buttonLabel: "Buka pesan",
    hint: "Petunjuk: …",
    successMessage: "Membuka…",
  },

  content: {
    greeting: "Hai …, ",
    paragraphs: [
      {
        type: "text",
        text: "Tulis paragraf pembuka di sini. Ceritakan momen atau hal kecil yang ingin kamu sampaikan.",
      },
      {
        type: "highlight",
        text: "Satu kalimat yang ingin kamu tekankan — pull-quote ini akan tampil besar di tengah.",
      },
      {
        type: "text",
        text: "Lanjutkan cerita. Kamu bisa menambah atau mengurangi paragraf sesuka hati.",
      },
      { type: "divider" },
      {
        type: "text",
        text: "Paragraf penutup yang hangat.",
      },
    ],
    signature: { line: "Dengan hangat,", name: "Nama kamu" },
  },

  photoSection: {
    title: "Kenangan",
    subtitle: "Beberapa potret yang ingin kusimpan di sini.",
    items: [
      { src: "/messages/__SLUG__/photos/foto-1.jpg", caption: "…", rotate: -3 },
      { src: "/messages/__SLUG__/photos/foto-2.jpg", caption: "…", rotate: 2.5 },
      // Tambah atau kurangi sesuai kebutuhan.
    ],
  },

  // Opsional — hapus atau comment kalau tidak ada video.
  // video: {
  //   title: "Sepotong Kenangan",
  //   subtitle: "…",
  //   src: "/messages/__SLUG__/videos/klip.mp4",
  //   caption: "…",
  // },

  // Opsional — hapus atau comment kalau tidak ada musik latar.
  // music: {
  //   src: "/messages/__SLUG__/music/lagu.mp3",
  //   label: "musik latar",
  //   volume: 0.5,
  // },
};

export default config;