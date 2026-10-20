# sinar-atap-mandiri

Website PT Sinar Atap Mandiri, jasa desain dan pemasangan kanopi membrane.
Next.js 16 (App Router) + Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Sebelum dipublikasikan

Semua data yang masih contoh ditandai `TODO` di kode (`grep -rn TODO app components lib`).

| Apa | Di mana |
|---|---|
| Jam operasional, area layanan, domain (nomor WA/telepon, email, dan alamat sudah asli) | `lib/site.ts` |
| Foto proyek Sarnafil (belum ada; foto kanopi sudah dari company profile klien) | `public/images/proyek/` + daftar di `lib/photos.ts` |
| Logo (masih logo sementara) | `components/Logo.tsx`, `app/icon.tsx` |
| Tiga "nilai perusahaan" (profil, visi-misi, dan legalitas sudah dari company profile) | `app/tentang-kami/page.tsx` |
| Jenis material yang benar-benar disediakan | `materials` di `lib/services.ts` |
| Artikel | `lib/articles.ts` |

## Struktur

- `app/`: halaman (beranda, tentang-kami, layanan, galeri, artikel, kontak), plus sitemap, robots, dan favicon.
- `components/home/`: section-section beranda. Carousel foto 3D ada di `Hero.tsx`, dan geometrinya di kelas `.arc` di `app/globals.css`.
- `components/`: komponen bersama (Navbar, Footer, PageHeader, CtaBanner, Process, dan lainnya).
- `lib/`: data perusahaan, foto, layanan, dan artikel.

Carousel 3D memakai 7 foto pertama di `lib/photos.ts`. Jumlahnya harus tetap ganjil supaya loop di layar HP menampilkan semua foto (lihat catatan `.arc` di `globals.css`).
