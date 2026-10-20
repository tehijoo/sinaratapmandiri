import type { StaticImageData } from "next/image";

// Diimpor (bukan dirujuk lewat path) supaya ukuran foto dan blur placeholder
// tersedia otomatis, dan URL-nya ikut berubah saat file ditimpa foto baru.
import p1 from "@/public/images/proyek-1.jpeg";
import p2 from "@/public/images/proyek-2.jpeg";
import p3 from "@/public/images/proyek-3.jpeg";
import p4 from "@/public/images/proyek-4.jpeg";
import p5 from "@/public/images/proyek-5.jpeg";
import p6 from "@/public/images/proyek-6.jpeg";
import p7 from "@/public/images/proyek-7.jpeg";
import p8 from "@/public/images/proyek-8.jpeg";
import p9 from "@/public/images/proyek-9.jpeg";
import p13 from "@/public/images/proyek-13.jpeg";
import p17 from "@/public/images/proyek-17.jpeg";
import p18 from "@/public/images/proyek-18.jpeg";
import p19 from "@/public/images/proyek-19.jpeg";
import p21 from "@/public/images/proyek-21.jpeg";

export type PhotoCategory = "hunian" | "publik" | "komersial" | "proses";

export type Photo = {
  id: string;
  src: StaticImageData;
  label: string;
  alt: string;
  category: PhotoCategory;
};

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "hunian", label: "Hunian" },
  { id: "publik", label: "Fasilitas Publik" },
  { id: "komersial", label: "Komersial" },
  { id: "proses", label: "Proses Pengerjaan" },
];

/*
 * TODO: FOTO SEMENTARA. Ini dokumentasi proyek lain yang dipinjam hanya untuk
 * contoh tata letak. Ganti dengan foto proyek PT Sinar Atap Mandiri sendiri
 * sebelum website dipublikasikan: timpa file di public/images dengan nama
 * yang sama, atau ubah daftar di bawah.
 *
 * Tujuh foto pertama tampil di carousel 3D hero. Jumlahnya harus tetap ganjil
 * (lihat catatan .arc di globals.css).
 */
export const photos: Photo[] = [
  { id: "17", src: p17, label: "Carport", category: "hunian", alt: "Kanopi membrane putih menaungi carport rumah berisi dua mobil" },
  { id: "4", src: p4, label: "Gerbang Parkir", category: "komersial", alt: "Kanopi membrane putih di gerbang parkir gedung perkantoran" },
  { id: "9", src: p9, label: "Food Court", category: "komersial", alt: "Kanopi membrane krem bertiang putih menaungi area food court" },
  { id: "13", src: p13, label: "Taman", category: "publik", alt: "Kanopi membrane di taman dengan kolam, difoto pada malam hari" },
  { id: "5", src: p5, label: "Pintu Masuk", category: "komersial", alt: "Kanopi membrane model sail di pintu masuk bangunan" },
  { id: "18", src: p18, label: "Area Parkir", category: "komersial", alt: "Kanopi membrane putih di area parkir dengan lampu malam" },
  { id: "21", src: p21, label: "Sisi Bangunan", category: "hunian", alt: "Kanopi membrane putih bersudut runcing di sisi bangunan" },
  { id: "1", src: p1, label: "Teras", category: "hunian", alt: "Kanopi membrane kuning di teras depan rumah" },
  { id: "2", src: p2, label: "Garasi", category: "hunian", alt: "Kanopi membrane krem berangka lengkung di depan garasi" },
  { id: "3", src: p3, label: "Carport", category: "hunian", alt: "Kanopi membrane berangka hitam lengkung di carport" },
  { id: "6", src: p6, label: "Pos Parkir", category: "komersial", alt: "Kanopi membrane putih di pos gerbang parkir" },
  { id: "7", src: p7, label: "Masjid", category: "publik", alt: "Kanopi membrane di halaman masjid" },
  { id: "8", src: p8, label: "Area Kuliner", category: "komersial", alt: "Kanopi membrane krem menaungi pengunjung area kuliner" },
  { id: "19", src: p19, label: "Pemasangan", category: "proses", alt: "Rangka dan membrane kanopi dalam proses pemasangan" },
];

export const heroPhotos = photos.slice(0, 7);

export function getPhoto(id: string) {
  const photo = photos.find((p) => p.id === id);
  if (!photo) throw new Error(`Foto "${id}" tidak ada di lib/photos.ts`);
  return photo;
}
