import { getPhoto, type Photo } from "./photos";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD), dipakai juga untuk lastModified di sitemap. */
  date: string;
  readMinutes: number;
  cover: Photo;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "mengenal-kanopi-membrane",
    title: "Mengenal Kanopi Membrane: Material, Kelebihan, dan Umur Pakainya",
    excerpt:
      "Kanopi membrane makin sering dipakai di rumah, masjid, hingga gedung kantor. Apa sebenarnya bahan ini, dan apa bedanya dengan atap kanopi biasa?",
    date: "2026-10-12",
    readMinutes: 4,
    cover: getPhoto("21"),
    body: [
      {
        type: "p",
        text: "Kanopi membrane (tensile membrane) adalah atap dari lembaran kain teknis yang ditarik kencang di atas rangka baja. Karena bekerja dengan gaya tarik, membrane bisa dibentuk melengkung, meruncing, atau bergelombang, bentuk yang sulit dicapai atap lembaran kaku seperti polikarbonat atau spandek.",
      },
      { type: "h2", text: "Jenis material yang umum dipakai" },
      {
        type: "list",
        items: [
          {
            title: "PVC (polyester berlapis PVC)",
            text: "Paling banyak dipakai untuk hunian dan komersial. Harganya terjangkau, mudah dibentuk, dan tersedia dalam banyak pilihan warna.",
          },
          {
            title: "PVC dengan lapisan PVDF",
            text: "Lapisan atas PVDF membuat permukaan lebih tahan kotor dan sinar UV, sehingga warnanya awet lebih lama. Cocok untuk area yang terpapar matahari sepanjang hari.",
          },
          {
            title: "PTFE (fiberglass berlapis teflon)",
            text: "Kelas premium untuk bangunan publik berskala besar seperti stadion dan terminal. Sangat awet, tetapi harganya jauh lebih tinggi.",
          },
        ],
      },
      { type: "h2", text: "Kelebihan dibanding atap kanopi lain" },
      {
        type: "list",
        items: [
          {
            title: "Bentang lebar, tiang sedikit",
            text: "Membrane yang ditarik dari beberapa titik bisa menaungi area luas tanpa banyak tiang di tengah, sehingga area di bawahnya lebih leluasa.",
          },
          {
            title: "Lebih sejuk",
            text: "Membrane berwarna terang memantulkan sebagian besar sinar matahari, sehingga area di bawahnya tidak terasa sepanas di bawah atap logam.",
          },
          {
            title: "Tidak berisik saat hujan",
            text: "Permukaan kain meredam suara rintik hujan, berbeda dengan atap logam atau polikarbonat yang cenderung bising.",
          },
          {
            title: "Cahaya tetap masuk",
            text: "Sebagian cahaya tembus secara lembut, jadi area yang diteduhkan tidak menjadi gelap di siang hari.",
          },
        ],
      },
      { type: "h2", text: "Berapa lama umur pakainya?" },
      {
        type: "p",
        text: "Umur pakai sangat bergantung pada kelas material, ketegangan saat pemasangan, dan perawatan. Sebagai gambaran umum, membrane PVC dapat bertahan sekitar 10 sampai 15 tahun, sementara material berlapis PVDF dan PTFE bisa lebih lama. Tanyakan spesifikasi dan garansi material secara tertulis sebelum memesan.",
      },
      {
        type: "quote",
        text: "Material yang bagus perlu dipasang dengan ketegangan yang tepat. Membrane yang kendur akan menampung air dan lebih cepat rusak, sebagus apa pun bahannya.",
      },
    ],
  },
  {
    slug: "tips-memilih-jasa-kanopi-membrane",
    title: "5 Hal yang Perlu Dicek Sebelum Memilih Jasa Kanopi Membrane",
    excerpt:
      "Harga murah belum tentu hemat. Lima hal ini membantu Anda menilai apakah penyedia jasa kanopi membrane benar-benar bisa dipercaya.",
    date: "2026-09-28",
    readMinutes: 3,
    cover: getPhoto("19"),
    body: [
      {
        type: "p",
        text: "Kanopi membrane adalah pekerjaan struktur, bukan sekadar memasang kain. Kesalahan ukur atau rangka yang terlalu tipis baru terasa setelah musim hujan dan angin kencang datang. Sebelum memutuskan, pastikan lima hal berikut.",
      },
      {
        type: "list",
        items: [
          {
            title: "1. Ada survei dan pengukuran langsung",
            text: "Penawaran yang baik dibuat setelah lokasi diukur, titik tumpuan rangka dicek, dan arah aliran air hujan diperhitungkan, bukan hanya dari foto.",
          },
          {
            title: "2. Spesifikasi rangka jelas",
            text: "Tanyakan jenis dan ketebalan pipa baja yang dipakai, serta lapisan anti karatnya. Rangka adalah bagian yang menanggung seluruh beban tarik membrane.",
          },
          {
            title: "3. Material membrane bisa ditunjukkan",
            text: "Minta contoh material dan informasi jenis serta beratnya per meter persegi. Penyedia yang serius tidak keberatan menunjukkan sampel.",
          },
          {
            title: "4. Desain disetujui sebelum produksi",
            text: "Gambar desain dengan ukuran dan bentuk akhir membantu Anda membayangkan hasilnya dan menghindari salah paham saat pemasangan.",
          },
          {
            title: "5. Garansi tertulis",
            text: "Pastikan cakupan garansi untuk material, rangka, dan pemasangan tertulis di penawaran atau kontrak, berikut lama waktunya.",
          },
        ],
      },
      {
        type: "p",
        text: "Dengan lima hal ini Anda bisa membandingkan penawaran secara adil, karena yang dibandingkan bukan hanya angka akhirnya, tetapi juga apa yang Anda dapatkan.",
      },
    ],
  },
  {
    slug: "kanopi-membrane-masjid-sekolah",
    title: "Kanopi Membrane untuk Masjid dan Sekolah: Yang Perlu Diperhatikan",
    excerpt:
      "Halaman masjid dan sekolah butuh area teduh yang luas dan aman untuk banyak orang. Ini pertimbangan utama sebelum memasang kanopi membrane.",
    date: "2026-09-14",
    readMinutes: 3,
    cover: getPhoto("7"),
    body: [
      {
        type: "p",
        text: "Masjid dan sekolah sering memerlukan area teduh tambahan untuk jamaah, upacara, atau kegiatan di luar ruangan. Kanopi membrane banyak dipilih karena bisa menaungi area luas dengan sedikit tiang dan tampilannya rapi.",
      },
      { type: "h2", text: "Pertimbangan utama" },
      {
        type: "list",
        items: [
          {
            title: "Luas bentang dan posisi tiang",
            text: "Atur tiang agar tidak menghalangi saf, jalur lalu lalang, atau lapangan. Membrane memungkinkan tiang diletakkan di tepi area.",
          },
          {
            title: "Aliran air hujan",
            text: "Bentuk membrane harus mengarahkan air ke titik buang yang jelas, dilengkapi talang bila perlu, supaya tidak menetes ke area wudu atau jalur siswa.",
          },
          {
            title: "Keamanan di area ramai",
            text: "Untuk sekolah, pertimbangkan pelindung tiang dan sambungan rangka yang tidak tajam di ketinggian yang terjangkau anak-anak.",
          },
          {
            title: "Warna dan cahaya",
            text: "Warna putih atau krem memantulkan panas dengan baik dan tetap meneruskan cahaya, sehingga area di bawahnya terang dan sejuk.",
          },
        ],
      },
      { type: "h2", text: "Perawatan" },
      {
        type: "p",
        text: "Membrane cukup dibersihkan berkala dengan air dan sabun lembut untuk menghilangkan debu dan daun. Periksa juga baut dan kabel penegang setiap beberapa bulan, terutama setelah angin kencang.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00+07:00`));
}
