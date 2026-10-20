import type { StaticImageData } from "next/image";

// Diimpor (bukan dirujuk lewat path) supaya ukuran foto dan blur placeholder
// tersedia otomatis, dan URL-nya ikut berubah saat file ditimpa foto baru.
import payungMembrane from "@/public/images/proyek/payung-membrane.jpg";
import masjid from "@/public/images/proyek/masjid.jpg";
import gerbangParkir from "@/public/images/proyek/gerbang-parkir.jpg";
import carport from "@/public/images/proyek/carport.jpg";
import hallLengkung from "@/public/images/proyek/hall-lengkung.jpg";
import areaPublik from "@/public/images/proyek/area-publik.jpg";
import sisiBangunan from "@/public/images/proyek/sisi-bangunan.jpg";
import areaManasik from "@/public/images/proyek/area-manasik.jpg";
import fasadGedung from "@/public/images/proyek/fasad-gedung.jpg";
import rangkaLengkung from "@/public/images/proyek/rangka-lengkung.jpg";
import gedungKantor from "@/public/images/proyek/gedung-kantor.jpg";
import carportLengkung from "@/public/images/proyek/carport-lengkung.jpg";
import terasRumah from "@/public/images/proyek/teras-rumah.jpg";
import rooftopKayu from "@/public/images/proyek/rooftop-kayu.jpg";
import pintuMasuk from "@/public/images/proyek/pintu-masuk.jpg";
import pemasanganMembrane from "@/public/images/proyek/pemasangan-membrane.jpg";
import merapikanMembrane from "@/public/images/proyek/merapikan-membrane.jpg";
import rangkaKanopi from "@/public/images/proyek/rangka-kanopi.jpg";

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
 * Dokumentasi proyek dari company profile PT Sinar Atap Mandiri.
 *
 * Tujuh foto pertama tampil di carousel 3D hero. Jumlahnya harus tetap ganjil
 * (lihat catatan .arc di globals.css).
 */
export const photos: Photo[] = [
  { id: "payung-membrane", src: payungMembrane, label: "Payung Membrane", category: "publik", alt: "Kanopi membrane model payung berukuran besar dengan teknisi di atas scaffolding" },
  { id: "masjid", src: masjid, label: "Masjid", category: "publik", alt: "Kanopi membrane lengkung di depan bangunan masjid berkubah putih" },
  { id: "gerbang-parkir", src: gerbangParkir, label: "Gerbang Parkir", category: "komersial", alt: "Kanopi membrane lengkung di pos gerbang parkir" },
  { id: "carport", src: carport, label: "Carport", category: "hunian", alt: "Kanopi membrane putih di carport rumah" },
  { id: "hall-lengkung", src: hallLengkung, label: "Hall Serbaguna", category: "komersial", alt: "Kanopi membrane rangka lengkung menaungi area berlantai keramik" },
  { id: "area-publik", src: areaPublik, label: "Area Publik", category: "publik", alt: "Kanopi membrane bentang lebar menaungi plaza saat proses pemasangan" },
  { id: "sisi-bangunan", src: sisiBangunan, label: "Sisi Bangunan", category: "komersial", alt: "Kanopi membrane putih bersudut runcing di sisi bangunan tepi jalan" },
  { id: "area-manasik", src: areaManasik, label: "Area Manasik", category: "publik", alt: "Kanopi membrane model payung di samping replika Ka'bah area manasik haji" },
  { id: "fasad-gedung", src: fasadGedung, label: "Fasad Gedung", category: "komersial", alt: "Kanopi membrane memanjang di sisi atas fasad gedung" },
  { id: "rangka-lengkung", src: rangkaLengkung, label: "Rangka Lengkung", category: "komersial", alt: "Kanopi membrane dengan rangka baja lengkung dilihat dari bawah" },
  { id: "gedung-kantor", src: gedungKantor, label: "Gedung Kantor", category: "komersial", alt: "Kanopi membrane putih di depan gedung kantor pada malam hari" },
  { id: "carport-lengkung", src: carportLengkung, label: "Carport", category: "hunian", alt: "Kanopi membrane berangka lengkung putih di atas carport" },
  { id: "teras-rumah", src: terasRumah, label: "Teras Rumah", category: "hunian", alt: "Kanopi membrane di teras depan rumah" },
  { id: "rooftop-kayu", src: rooftopKayu, label: "Rooftop", category: "hunian", alt: "Kanopi membrane di atas dek kayu rooftop saat proses pemasangan" },
  { id: "pintu-masuk", src: pintuMasuk, label: "Pintu Masuk", category: "proses", alt: "Pemasangan kanopi membrane di pintu masuk gedung" },
  { id: "pemasangan-membrane", src: pemasanganMembrane, label: "Pemasangan", category: "proses", alt: "Teknisi memasang membrane putih pada rangka kanopi" },
  { id: "merapikan-membrane", src: merapikanMembrane, label: "Finishing", category: "proses", alt: "Teknisi merapikan membrane kanopi yang baru terpasang" },
  { id: "rangka-kanopi", src: rangkaKanopi, label: "Rangka Kanopi", category: "proses", alt: "Rangka baja kanopi membrane dilihat dari bawah" },
];

export const heroPhotos = photos.slice(0, 7);

export function getPhoto(id: string) {
  const photo = photos.find((p) => p.id === id);
  if (!photo) throw new Error(`Foto "${id}" tidak ada di lib/photos.ts`);
  return photo;
}
