import { getPhoto, type Photo } from "./photos";

export type Service = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  uses: string[];
  photo: Photo;
};

export const services: Service[] = [
  {
    id: "hunian",
    title: "Hunian & Carport",
    summary:
      "Kanopi membrane untuk carport, teras, balkon, dan taman rumah. Teduh, ringan, dan membuat tampilan rumah lebih modern.",
    details: [
      "Membrane ditarik kencang di atas rangka baja, sehingga satu bentang bisa menaungi dua hingga tiga mobil dengan tiang yang lebih sedikit dibanding kanopi biasa.",
      "Warna membrane bisa disesuaikan dengan cat dan fasad rumah, dan bentuknya dibuat mengikuti lebar lahan yang tersedia.",
    ],
    uses: ["Carport", "Teras", "Balkon", "Rooftop", "Taman"],
    photo: getPhoto("17"),
  },
  {
    id: "fasilitas-publik",
    title: "Fasilitas Publik",
    summary:
      "Area teduh yang luas untuk masjid, sekolah, taman, dan ruang tunggu, dengan bentang lebar tanpa banyak tiang penghalang.",
    details: [
      "Cocok untuk area berkumpul yang perlu teduh tetapi tetap terang, karena sebagian cahaya matahari tembus lembut melalui membrane.",
      "Rangka dan titik tiang dirancang aman untuk area yang ramai dilalui, termasuk anak-anak, dan aliran air hujan diarahkan agar tidak menggenang.",
    ],
    uses: ["Masjid", "Sekolah", "Taman", "Lapangan", "Ruang Tunggu"],
    photo: getPhoto("13"),
  },
  {
    id: "komersial",
    title: "Komersial & Instansi",
    summary:
      "Kanopi untuk area parkir gedung, drop-off, food court, hingga kantor pemerintahan yang perlu tampil representatif.",
    details: [
      "Bentuk membrane yang khas menjadi penanda visual bangunan sekaligus melindungi pengunjung dan kendaraan dari panas dan hujan.",
      "Kami terbiasa bekerja dengan jadwal, gambar kerja, dan dokumen pengadaan untuk proyek korporasi maupun instansi.",
    ],
    uses: ["Area Parkir", "Drop-off", "Food Court", "Gerbang", "Gedung Kantor"],
    photo: getPhoto("9"),
  },
];

/*
 * Ringkasan umum kelas material membrane yang lazim di pasaran. Sesuaikan
 * dengan material yang benar-benar disediakan PT Sinar Atap Mandiri.
 */
export const materials = [
  {
    name: "PVC",
    full: "Polyester berlapis PVC",
    points: [
      "Paling banyak dipakai untuk hunian dan komersial",
      "Harga terjangkau, mudah dibentuk",
      "Pilihan warna paling banyak",
    ],
  },
  {
    name: "PVC + PVDF",
    full: "PVC dengan lapisan atas PVDF",
    points: [
      "Permukaan lebih tahan kotor dan sinar UV",
      "Warna lebih awet di area yang terkena matahari sepanjang hari",
      "Perawatan lebih ringan",
    ],
  },
  {
    name: "PTFE",
    full: "Fiberglass berlapis PTFE",
    points: [
      "Kelas premium untuk bangunan publik berskala besar",
      "Sangat awet dan tidak mudah kotor",
      "Biaya paling tinggi",
    ],
  },
];
