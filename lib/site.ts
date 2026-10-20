/*
 * Semua data perusahaan ada di sini, supaya nomor WA, alamat, dan lainnya
 * cukup diganti di satu tempat. Nilai bertanda TODO masih contoh: ganti
 * dengan data asli PT Sinar Atap Mandiri sebelum website dipublikasikan.
 */
export const site = {
  name: "PT Sinar Atap Mandiri",
  shortName: "Sinar Atap Mandiri",
  tagline: "Spesialis Kanopi Membrane",
  description:
    "PT Sinar Atap Mandiri merancang dan memasang kanopi membrane untuk hunian, fasilitas publik, dan gedung instansi, mulai dari survei lokasi hingga serah terima.",
  // TODO: domain asli
  url: "https://www.sinaratapmandiri.co.id",
  // Dipakai untuk WhatsApp dan telepon. Format internasional tanpa "+" atau spasi.
  whatsapp: "628135000978",
  phoneDisplay: "0813-5000-978",
  email: "mandirisinaratap@gmail.com",
  address: ["Jl. Dr. Semeru Raya No. 6", "Grogol, Jakarta Barat"],
  // TODO
  hours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  // TODO
  serviceArea: "Jabodetabek dan sekitarnya",
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.join(", "),
)}`;

export const telLink = `tel:+${site.whatsapp}`;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proyek", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];
