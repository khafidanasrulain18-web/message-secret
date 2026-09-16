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
          "Sebelum mulai mengetik kata pertama dari surat ini, aku terdiam sambil menatap layar berkedip berulang kali, seolah menantangku untuk menemukan kalimat yang paling tepat untuk mendeskripsikan sesuatu yang pada dasarnya tidak bisa diikat oleh kata-kata. Bagaimana caramu merangkum sebuah semesta ke dalam selembar kertas? Bagaimana caramu menjelaskan tentang angin yang membuatmu merasa sejuk, tanpa harus kehilangan esensi dari angin itu sendiri? Begitulah perasaanku saat ini. Aku ingin menulis tentang kita, tentang kamu, tentang segala hal yang berdesir di dadaku setiap kali namamu melintas di kepalaku. Surat ini tidak ditulis dalam satu malam. Surat ini adalah kumpulan dari ribuan pemikiran tengah malam, ratusan senyum yang kutahan saat melihat layar ponsel, dan kepingan-kepingan doa yang selalu kurapal diam-diam. Jadi, duduklah dengan nyaman, tarik napas yang panjang, dan biarkan aku bercerita tentang keajaiban yang perlahan mengubah hidupku semenjak ada kamu di dalamnya.",
      },
      {
        type: "text",
        text:
          "Dulu, sebelum aku benar-benar mengenalmu, duniaku bergerak dengan ritme yang sangat biasa. Hari-hari berganti seperti rutinitas mekanis—matahari terbit, angin berhembus, hujan turun, dan malam kembali memeluk bumi. Semuanya terasa datar, abu-abu, dan berjalan semestinya tanpa ada kejutan yang berarti. Aku adalah manusia yang terbiasa dengan kesunyian, terbiasa berjalan di atas garis lurus tanpa berharap menemukan persimpangan yang akan membawaku pada sebuah petualangan baru. Aku tidak pernah tahu bahwa di luar rutinitasku itu, ada sebuah anomali indah yang sedang bersiap untuk mengacaukan garis lurusku dengan cara yang paling luar biasa. Dan anomali itu adalah kamu. Ketika kamu datang, kamu tidak mendobrak pintuku dengan paksa. Kamu datang dengan langkah yang sangat pelan, sangat berhati-hati, namun pasti. Kamu masuk ke dalam duniaku seperti cahaya pagi yang menembus celah gorden—tidak menyilaukan, tapi cukup terang untuk membuatku menyadari bahwa ruanganku selama ini terlalu gelap.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Mari kita putar kembali waktu ke titik awal di mana semuanya dimulai. Aku masih ingat dengan sangat jelas bagaimana canggungnya kita pada awalnya. Obrolan-obrolan yang masih meraba-raba, senyum yang setengah tertahan, dan pertanyaan-pertanyaan klise yang sebenarnya hanya sekadar alasan agar kita bisa terus berbicara. Tapi di balik kecanggungan itu, ada satu hal yang langsung kusadari: aku menyukai suaramu. Aku menyukai caramu bercerita tentang hal-hal sederhana. Kamu bisa menceritakan kejadian paling biasa di hari itu—seperti kucing yang lewat di depanmu, atau kopi yang terlalu manis—menjadi sesuatu yang sangat menarik untuk didengarkan. Perlahan tapi pasti, suaramu menjadi semacam melodi latar belakang di kepalaku. Ketika aku sedang sibuk, ketika aku sedang lelah, atau ketika aku sedang berada di tengah keramaian yang memekakkan telinga, aku selalu mencari jeda hanya untuk mendengarmu. Kamu menjadi tempat pelarianku yang paling aman. Tempat di mana aku bisa menanggalkan semua topeng yang kupakai untuk menghadapi dunia luar.",
      },
      {
        type: "highlight",
        text:
          "Kamu bukan sekadar seseorang yang kutemui di tengah perjalanan; kamu adalah tujuan yang tidak pernah kutahu sedang kucari.",
      },
      {
        type: "text",
        text:
          "Satu hal yang paling membuatku kagum padamu adalah caramu melihat dunia. Kamu memiliki sepasang mata yang mampu menemukan keindahan di tempat-tempat yang sering dilewatkan oleh orang lain. Kamu mengajari aku untuk berhenti sejenak, untuk melihat langit yang sedang berubah warna saat senja, untuk mendengarkan rintik hujan tanpa harus mengeluh tentang jalanan yang becek, dan untuk menghargai hal-hal kecil yang selama ini kuanggap remeh. Bersamamu, aku belajar bahwa bahagia tidak selalu tentang mencapai puncak gunung atau mendapatkan pencapaian besar yang diakui semua orang. Bahagia adalah ketika kita duduk bersebelahan, tidak melakukan apa-apa, mungkin hanya memandangi layar masing-masing, tapi ada perasaan utuh dan genap yang mengalir di udara di antara kita. Keheningan bersamamu tidak pernah terasa mencekam; keheningan bersamamu adalah keheningan yang bernapas, yang menghangatkan, yang berkata bahwa 'kita ada di sini, dan semuanya baik-baik saja'.",
      },
      {
        type: "text",
        text:
          "Aku juga ingin berterima kasih untuk semua perhatian-perhatian kecilmu yang mungkin tidak pernah kamu sadari dampaknya untukku. Pesan singkat di pagi hari yang mengingatkanku untuk sarapan, omelan kecilmu saat aku terlalu keras pada diriku sendiri karena pekerjaan, atau caramu mengingat detail-detail acak tentang apa yang kusukai dan tidak kusukai. Kamu tahu? Hal-hal itu jauh lebih berharga daripada hadiah mewah mana pun di dunia ini. Karena di setiap pesan singkat itu, di setiap omelan kecil itu, dan di setiap ingatanmu tentang diriku, aku merasa dilihat. Aku merasa dipedulikan. Di dunia yang bergerak begitu cepat dan penuh dengan orang-orang yang terlalu sibuk dengan urusannya masing-masing, kamu memilih untuk meluangkan waktumu, energi, dan ruang di pikiranmu hanya untuk memastikan bahwa aku baik-baik saja. Itu adalah bentuk cinta paling murni yang pernah kuterima.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Tentu saja, perjalanan kita tidak selalu dipenuhi oleh langit yang cerah. Kita sama-sama tahu bahwa ada hari-hari di mana mendung menggantung begitu rendah, dan badai sesekali menghantam. Ada saat-saat di mana kita salah paham, di mana ego mengambil alih kendali, dan di mana kata-kata yang keluar mungkin tidak selembut biasanya. Ada malam-malam di mana kita terdiam karena kelelahan oleh beban masing-masing. Tapi tahukah kamu apa yang paling kusyukuri dari masa-masa sulit itu? Kita tidak pernah melepaskan tangan satu sama lain. Ketika salah satu dari kita mundur satu langkah, yang lainnya akan maju dua langkah untuk menutup jarak. Kita belajar bahwa cinta bukanlah tentang menemukan seseorang yang sempurna, melainkan tentang komitmen untuk terus bersama seseorang melalui ketidaksempurnaannya. Kita belajar untuk meminta maaf, untuk menurunkan gengsi, dan untuk memahami bahwa tidak apa-apa jika kita tidak selalu sependapat, asalkan kita tetap berjalan di arah yang sama.",
      },
      {
        type: "text",
        text:
          "Aku melihat bagaimana kamu berjuang dengan rasa tidak amanmu sendiri, dengan ketakutan-ketakutanmu, dan dengan beban masa lalumu. Kadang, kamu mencoba menyembunyikan itu semua dariku karena kamu tidak ingin merepotkanku. Tapi Sayang, dengarkan aku baik-baik: aku ada di sini bukan hanya untuk hari-hari di mana kamu merasa seperti matahari yang bersinar terang. Aku ada di sini untuk hari-hari di mana kamu merasa hancur, redup, dan tidak berguna. Aku ingin menjadi tempat sampah untuk segala keluh kesahmu, menjadi bahu tempatmu bersandar ketika kamu sudah tidak sanggup lagi berdiri tegak, dan menjadi pelukan yang akan merakit kembali kepingan-kepingan dirimu yang berantakan. Jangan pernah merasa bahwa kamu adalah sebuah beban. Mencintaimu berarti mencintai seluruh versimu—bukan hanya versi dirimu yang sedang bahagia dan tangguh, tapi juga versi dirimu yang sedang rapuh dan menangis dalam gelap.",
      },
      {
        type: "highlight",
        text:
          "Jika kamu butuh tempat untuk runtuh, runtuhlah di dekapanku. Akan ku pastikan tidak ada satu pun bagian dari dirimu yang hilang.",
      },
      {
        type: "text",
        text:
          "Sering kali aku merenung tentang konsep 'rumah'. Dulu, aku mengira rumah adalah sebuah bangunan fisik dengan atap, dinding, dan pintu. Sebuah alamat yang tertulis di kartu identitas. Tapi sejak mengenalmu, definisi rumah di kepalaku berubah drastis. Rumah bukan lagi tentang 'di mana', melainkan tentang 'siapa'. Dan kamu, entah bagaimana caranya, telah menjelma menjadi rumah untuk jiwaku yang sebelumnya selalu merasa nomaden. Bersamamu, aku tidak perlu berpura-pura menjadi lebih kuat, lebih pintar, atau lebih baik dari diriku yang sebenarnya. Aku bisa menjadi manusia paling payah, paling konyol, dan paling rapuh, namun kamu tetap menatapku dengan sorot mata yang penuh penerimaan. Itulah rumah. Tempat di mana kamu tidak akan pernah dihakimi atas kelemahanmu, melainkan dicintai karenanya.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Aku ingat sebuah senja di mana kita pernah berbicara tentang masa depan. Kita membicarakan mimpi-mimpi yang terlihat begitu jauh, ketakutan tentang kegagalan, dan harapan tentang kehidupan yang tenang. Saat itu, sambil menatap wajahmu yang diterpa cahaya keemasan, aku menyadari satu hal yang sangat fundamental: apa pun mimpi yang ingin kucapai, ke mana pun kaki ini akan membawaku melangkah, aku ingin kamu ada di sana saat aku sampai. Aku ingin melihat kerutan halus yang perlahan muncul di sudut matamu saat kamu tertawa di usia yang menua. Aku ingin menjadi saksi dari setiap uban pertama yang tumbuh di kepalamu. Aku ingin berjalan bersisian denganmu, menua bersama waktu, dan menceritakan kembali kisah-kisah konyol masa muda kita nanti ketika ingatan kita mulai memudar. Memikirkan masa depan bersamamu tidak pernah membuatku takut; sebaliknya, itu adalah satu-satunya hal yang membuatku bersemangat untuk menyambut hari esok.",
      },
      {
        type: "text",
        text:
          "Setiap malam, sebelum aku memejamkan mata, aku selalu meluangkan waktu sejenak untuk memutar kembali ingatan tentang kita di hari itu. Kadang itu hanya berupa ingatan tentang pesan singkatmu yang membuatku tersenyum di tengah rapat, atau suaramu saat meneleponku dengan napas terengah-engah karena ada cerita lucu yang tidak sabar ingin kamu sampaikan. Ingatan-ingatan kecil itulah yang menjadi selimut terhangat yang melindungiku dari dinginnya dunia. Kamu telah mengisi rongga-rongga kosong di dalam hatiku yang bahkan tidak pernah kusadari keberadaannya. Kamu menyembuhkan luka-luka lama yang tidak pernah kamu buat, dan kamu menanam bunga-bunga baru di atas tanah jiwaku yang sempat gersang. Aku tidak tahu terbuat dari apa hatimu itu, tapi aku sangat yakin bahwa Tuhan sedang tersenyum ketika Ia menciptakannya.",
      },
      {
        type: "text",
        text:
          "Aku tahu aku bukanlah manusia yang sempurna. Aku punya banyak kekurangan. Aku bisa jadi sangat keras kepala, terlalu banyak berpikir (overthinking) untuk hal-hal yang tidak perlu, dan kadang aku gagal menunjukkan seberapa besar perasaanku padamu melalui tindakan. Aku mungkin bukan orang yang paling romantis di dunia, yang bisa memberimu kejutan-kejutan besar setiap saat. Tapi aku ingin kamu tahu satu hal: cintaku padamu tidak bersyarat. Ia tidak bergantung pada cuaca, tidak bergantung pada suasana hati, dan tidak bergantung pada kondisi. Cintaku padamu adalah sebuah keputusan yang kuambil secara sadar setiap kali aku bangun di pagi hari. Dan percayalah, aku akan terus memilihmu. Hari ini, besok, lusa, dan di ribuan hari-hari lainnya yang masih menjadi misteri.",
      },
      {
        type: "highlight",
        text:
          "Di antara miliaran manusia yang bernapas di bumi yang berputar tanpa henti ini, menemukanmu adalah kebetulan yang paling kurencanakan dalam doa.",
      },
      {
        type: "text",
        text:
          "Surat ini mungkin sudah terlalu panjang, tapi rasanya masih ada ribuan kata yang tertahan di tenggorokanku. Namun, aku sadar, sebanyak apa pun aku menulis, seindah apa pun majas yang kugunakan, ia tidak akan pernah cukup untuk mendeskripsikan secara utuh tentang apa yang kurasakan. Beberapa hal di dunia ini memang ditakdirkan untuk dirasakan, bukan untuk dijelaskan. Dan begitulah caraku mencintaimu—melampaui batas alfabet, melampaui logika bahasa. Aku hanya ingin kamu mengerti bahwa keberadaanmu adalah sebuah keajaiban yang tidak henti-hentinya kusyukuri setiap kali aku menghela napas. Tolong jangan pernah lelah menjadi dirimu sendiri. Jangan pernah merasa bahwa kamu kurang, karena di mataku, kamu selalu lebih dari sekadar cukup. Kamu adalah segalanya yang tidak pernah berani kuminta, namun diberikan oleh semesta dengan sangat bermurah hati.",
      },
      { type: "divider" },
      {
        type: "text",
        text:
          "Sebagai penutup dari lembaran yang panjang ini, aku ingin mengikat sebuah janji sederhana di pergelangan tanganmu. Aku tidak berjanji bahwa hari-hari kita ke depan akan selalu mudah, karena itu adalah kebohongan yang manis. Hidup akan tetap menampar kita dengan realita, masalah akan tetap berdatangan silih berganti. Tapi aku berjanji, bahwa dalam setiap badai yang datang, kamu tidak akan pernah menghadapinya sendirian. Tangan ini akan selalu mencari tanganmu dalam gelap. Bahu ini akan selalu tersedia untuk menampung lelahmu. Dan hati ini, akan selalu, dan selalu, menjadi pulangmu. Terima kasih. Terima kasih telah bertahan sejauh ini. Terima kasih telah lahir ke dunia. Terima kasih telah menemukanku, dan terima kasih telah mengizinkanku masuk ke dalam ruang hatimu yang berharga. Aku mencintaimu, lebih dari sekadar kata yang terucap, lebih dari sekadar kalimat yang tertulis di layar ini.",
      },
    ],
    signature: { line: "Selalu dan selamanya milikmu,", name: "Khafid ." },
  },

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