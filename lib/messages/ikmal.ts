import "server-only";
import type { MessageConfig } from "./types";

/**
 * Contoh pesan. Ini adalah template yang bisa di-copy untuk
 * membuat pesan baru — lihat README.md di root project untuk
 * cara paling cepat (pakai scripts/new-message.sh).
 */
const ikmal: MessageConfig = {
  slug: "ikmal",
  password: process.env.PASSWORD_IKMAL ?? "08062002",
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
    greeting: "Hai, Partner in Crime,",
    paragraphs: [
      {
        type: "text",
        text:
          "Aku agak geli sebenarnya nulis surat panjang begini buat kamu. Biasanya kan kita cuma lempar-lemparan meme garing di chat, atau teriak dari kamar sebelah kalau mau nitip ambilin minum. Tapi entah kenapa, hari ini aku lagi pengen sedikit melankolis. Baca aja ya, jangan diketawain. Kalau kamu ketawa, awas aja, aku hapus akses Netflix di TV kamu.",
      },
      {
        type: "text",
        text:
          "Tadi aku tiba-tiba kepikiran soal kita. Lucu ya, kita ini cuma beda setahun. Beda dua belas bulan doang yang bikin statusku secara teknis jadi 'kakak' dan kamu jadi 'adik'. Padahal di dunia nyata, kita berdua tahu persis kalau dinamika kita sama sekali nggak kayak kakak-adik di sinetron yang kaku dan penuh hormat. Kita lebih kayak anak kembar beda cetakan yang dipaksa berbagi oksigen, berbagi mainan, berbagi porsi makanan yang kadang banyakan kamu, sampai akhirnya berbagi semua rahasia kehidupan.",
      },
      {
        type: "text",
        text:
          "Ingat nggak sih zaman kita kecil dulu? Hampir setiap hari isinya cuma berantem rebutan hal-hal nggak penting. Rebutan remote TV, rebutan siapa yang mandi duluan, sampai rebutan kursi depan kalau lagi jalan di mobil. Tapi di balik semua adu mulut dan jambak-jambakan masa kecil itu, kamu adalah orang pertama yang bakal aku cari kalau aku butuh teman main. Kamu adalah orang yang paling ngerti caraku berpikir tanpa aku harus ngomong panjang lebar.",
      },
      {
        type: "text",
        text:
          "Sampai detik ini pun, kayaknya cuma kamu yang bisa bikin aku ketawa sampai nangis cuma lewat satu kontak mata pas kita lagi di situasi yang mengharuskan kita serius. Karena jarak umur kita yang tipis banget ini, kita ngelewatin hampir semua fase kehidupan sama-sama. Pas aku lagi pusing mikirin tugas dan pertemanan, kamu juga lagi di fase yang sama. Pas aku pertama kali ngerasain patah hati yang rasanya kayak dunia mau runtuh, kamu ada di situ.",
      },
      {
        type: "text",
        text:
          "Kamu dengerin cerita ngelanturku sambil nyodorin makanan (walaupun ujung-ujungnya kamu yang abisin juga makanannya). Kita jadi saksi dari versi paling jelek, paling memalukan, dan paling rapuh dari diri kita masing-masing. Dan anehnya, itu malah bikin kita jadi sahabat yang paling solid. Sahabat yang nggak perlu jaim, nggak perlu takut dihakimi, karena toh kita sama-sama tahu bobroknya masing-masing luar dan dalam.",
      },
      {
        type: "text",
        text:
          "Aku selalu bersyukur dikasih jarak umur yang sedekat ini sama kamu. Banyak orang di luar sana yang harus nyari sahabat sampai ke ujung dunia, atau gonta-ganti circle pertemanan buat nemu orang yang bener-bener sefrekuensi. Tapi aku? Aku udah dikasih sahabat seumur hidup dari Tuhan sejak aku baru belajar jalan. Sahabat yang otomatis selalu ada di rumah, yang selalu bisa aku culik buat nongkrong atau beli makan tengah malam tanpa perlu janjian dari minggu lalu.",
      },
      {
        type: "text",
        text:
          "Lewat tulisan ini, aku cuma mau bilang terima kasih, ya. Makasih udah jadi pendengar yang baik buat semua keluh kesahku yang kadang nggak masuk akal. Makasih udah bersedia jadi 'kaki tangan' buat nutupin kesalahan-kesalahanku. Makasih karena selalu bisa baca mood-ku yang lagi berantakan, dan memilih buat nggak banyak tanya tapi langsung ngajak jalan atau sekadar rebahan bareng sambil main HP masing-masing. Kehadiranmu itu semacam 'comfort zone' buat aku.",
      },
      {
        type: "highlight",
        text:
          "Kalau ada satu hal yang paling pengen aku sampaiin hari ini: sejauh apa pun hidup bawa kita nanti, ingat kalau kita ini satu tim. Kalau dunia lagi jahat, kamu selalu punya aku, dan aku akan selalu ada di pihakmu.",
      },
      {
        type: "text",
        text:
          "Nanti, pasti bakal ada masanya hidup kita jadi makin sibuk. Mungkin kita nggak akan bisa sesering sekarang buat ngobrolin hal-hal absurd sampai jam 3 pagi. Mungkin nanti kita bakal punya jalan hidup atau kesibukan masing-masing yang bikin jarak fisik kita menjauh. Tapi aku janji, jarak sedekat satu tahun di umur kita itu nggak akan pernah pudar maknanya. Kalau kamu ngerasa orang-orang nggak ada yang ngertiin kamu, ingat kalau kamu masih punya *bestie* dari lahir yang siap pasang badan buat kamu.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Surat ini nggak butuh balasan, kok. Nanti malah jadi aneh kalau kita bales-balesan surat melankolis begini. Cukup simpan aja, baca lagi kalau kamu lagi sedih atau butuh pengingat kalau ada satu orang di dunia ini yang bener-bener sayang dan bangga banget sama kamu apa adanya. Udah ah, kepanjangan, nanti kamu capek bacanya.",
      },
    ],
    signature: { line: "Dari sahabat pertamamu yang paling keren,", name: "Kakak" },
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

export default ikmal;