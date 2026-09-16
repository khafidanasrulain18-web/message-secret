import "server-only";
import type { MessageConfig } from "./types";

/**
 * Konfigurasi Pesan: Lutfiyatul
 * Pesan ini dirancang khusus untuk menjadi surat panjang yang mendalam,
 * membawa pembacanya pada perjalanan emosional melintasi waktu dan kenangan.
 */
const lutfiyatul: MessageConfig = {
  slug: "lutfiyatul",
  password: process.env.PASSWORD_LUTFI ?? "ndstudio",
  recipientName: "Pasanganku",

  gate: {
    title: "Ada pesan untukmu…",
    subtitle:
      "Sebuah surat panjang yang telah mengendap di kepalaku sekian lama. Siapkan waktu luangmu, dan ketik kata sandinya untuk membuka.",
    inputPlaceholder: "kata sandi rahasia",
    buttonLabel: "Buka pesan",
    hint: "password: ndstudio",
    successMessage: "Membuka lembaran kenangan…",
  },

  content: {
    greeting: "Hai, Sayang.",
    paragraphs: [
      {
        type: "text",
        text:
          "Bagaimana caramu merangkum semesta ke dalam kata? Surat ini adalah kumpulan doa dan senyum tengah malam. Duduklah dengan nyaman, dan biarkan aku bercerita tentang keajaiban semenjak ada kamu di hidupku.",
      },
      {
        type: "text",
        text:
          "Dulu, duniaku bergerak biasa dan abu-abu. Aku terbiasa dengan kesunyian. Lalu kamu datang perlahan namun pasti, masuk seperti cahaya pagi yang menyadarkanku bahwa ruanganku selama ini terlalu gelap.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Di awal kita yang masih canggung, aku langsung menyukai suaramu. Kamu bisa membuat hal biasa menjadi menarik. Suaramu pun menjadi melodi penenang dan tempat pelarianku yang paling aman untuk melepas topeng.",
      },
      {
        type: "highlight",
        text:
          "Kamu bukan sekadar seseorang di perjalananku; kamu adalah tujuan yang tidak pernah kutahu sedang kucari.",
      },
      {
        type: "text",
        text:
          "Kamu mengajariku menemukan keindahan dari hal-hal kecil. Bersamamu, bahagia adalah keheningan yang menghangatkan, yang seolah berkata bahwa 'kita ada di sini, dan semuanya baik-baik saja'.",
      },
      {
        type: "text",
        text:
          "Perhatian kecilmu—dari pesan pagi hingga caramu mengingat kesukaanku—membuatku merasa dilihat. Di dunia yang sibuk, kamu meluangkan waktu untuk mempedulikanku. Itu adalah bentuk cinta paling murni yang pernah kuterima.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Kita pernah melewati badai dan salah paham. Tapi aku bersyukur, kita tidak pernah saling melepaskan tangan. Kita belajar meredam ego, menurunkan gengsi, dan terus berjalan di arah yang sama.",
      },
      {
        type: "text",
        text:
          "Aku tahu ketakutan dan rasa tidak amanmu. Sayang, aku di sini bukan hanya untuk hari cerahmu, tapi juga saat kamu redup dan hancur. Mencintaimu berarti mencintai seluruh versimu tanpa terkecuali.",
      },
      {
        type: "highlight",
        text:
          "Jika kamu butuh tempat untuk runtuh, runtuhlah di dekapanku. Akan ku pastikan tidak ada satu pun bagian dari dirimu yang hilang.",
      },
      {
        type: "text",
        text:
          "Definisi 'rumah' di kepalaku telah berubah. Ia bukan lagi tentang 'di mana', melainkan 'siapa'. Dan kamu, entah bagaimana caranya, telah menjelma menjadi rumah bagi jiwaku yang lelah.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Suatu senja, kita membicarakan masa depan. Apa pun mimpiku, aku ingin menua bersisian denganmu. Memikirkan hari esok bersamamu tidak pernah membuatku takut, melainkan menjadi satu-satunya hal yang membuatku bersemangat.",
      },
      {
        type: "text",
        text:
          "Setiap malam, kuputar kembali ingatan tentang kita. Kamu mengisi rongga kosong di hatiku dan menanam bunga-bunga baru di atas tanah jiwaku yang sempat gersang. Aku yakin Tuhan tersenyum saat menciptakan hatimu.",
      },
      {
        type: "text",
        text:
          "Aku tahu aku tidak sempurna. Namun, cintaku padamu tidak bersyarat. Cintaku adalah sebuah keputusan yang kuambil secara sadar setiap kali aku bangun pagi, dan aku akan terus memilihmu.",
      },
      {
        type: "highlight",
        text:
          "Di antara miliaran manusia yang bernapas di bumi ini, menemukanmu adalah kebetulan yang paling kurencanakan dalam doa.",
      },
      {
        type: "text",
        text:
          "Ribuan kata takkan pernah cukup untuk mendeskripsikan perasaanku. Keberadaanmu adalah keajaiban yang tak henti kusyukuri. Jangan pernah merasa kurang, karena di mataku kamu selalu lebih dari sekadar cukup.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Sebagai penutup, kuikat sebuah janji sederhana: dalam setiap badai, kamu takkan menghadapinya sendirian. Tangan ini akan selalu mencarimu, dan hati ini akan selalu menjadi pulangmu. Terima kasih telah menemukanku. Aku mencintaimu.",
      },
    ],
    signature: { line: "Selalu dan selamanya milikmu,", name: "Khafid ." },
  }

  photoSection: {
    title: "Mesin Waktu Kita",
    subtitle: "Beberapa serpihan momen yang berhasil dibekukan oleh waktu. Coba lihat senyummu di sana, itulah alasan mengapa aku jatuh cinta setiap hari.",
    items: [
      { src: "/messages/lutfiyatul/photos/1.jpg", caption: "Awal dari segalanya", rotate: -3 },
      { src: "/messages/lutfiyatul/photos/2.jpg", caption: "Tawa yang menyembuhkanku", rotate: 2.5 },
      { src: "/messages/lutfiyatul/photos/3.jpg", caption: "Kita dan waktu yang melambat", rotate: -1.5 },
      { src: "/messages/lutfiyatul/photos/4.jpg", caption: "Jejak langkah bersama", rotate: 3.2 },
      { src: "/messages/lutfiyatul/photos/5.jpg", caption: "Saksi bisu cerita kita", rotate: -2.2 },
      { src: "/messages/lutfiyatul/photos/6.jpg", caption: "Untuk hari esok dan seterusnya", rotate: 1.6 },
    ],
  },

  video: {
    title: "Suara dari Kenangan",
    subtitle: "Ada tawa dan suara yang kusimpan rapat di sini. Putar saat kamu butuh pengingat bahwa kita nyata.",
    src: "/messages/lutfiyatul/videos/video.mp4",
    caption: "Rekaman kecil tentang betapa bahagianya kita hari itu.",
  },

  music: {
    src: "/messages/lutfiyatul/music/lagu.mp3",
    label: "melodi pelengkap rasa",
    volume: 100,
  },
};

export default lutfiyatul;