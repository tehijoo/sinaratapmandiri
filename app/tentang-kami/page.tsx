import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Handshake, ShieldCheck, Target } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${site.name}, penyedia jasa desain dan pemasangan kanopi membrane untuk hunian, fasilitas publik, dan gedung instansi.`,
};

/*
 * TODO: profil, nilai, serta visi & misi di halaman ini masih teks contoh.
 * Sesuaikan dengan profil resmi PT Sinar Atap Mandiri (tahun berdiri,
 * legalitas, pengalaman proyek, dan sebagainya).
 */
const values = [
  {
    icon: Target,
    title: "Presisi",
    body: "Ukuran, sudut, dan ketegangan membrane dihitung sebelum produksi, supaya hasil terpasang sesuai gambar.",
  },
  {
    icon: ShieldCheck,
    title: "Amanah",
    body: "Spesifikasi, jadwal, dan harga disampaikan terbuka sejak awal, tanpa biaya tambahan yang tiba-tiba.",
  },
  {
    icon: Handshake,
    title: "Kolaboratif",
    body: "Desain disusun bersama Anda dan bisa direvisi hingga benar-benar sesuai kebutuhan bangunan.",
  },
];

const missions = [
  "Menyediakan kanopi membrane dengan material dan rangka yang sesuai standar keamanan.",
  "Memberi pelayanan yang jelas dan transparan sejak konsultasi hingga serah terima.",
  "Bekerja tepat waktu dengan memperhatikan keselamatan dan kerapian di lokasi.",
];

export default function TentangKamiPage() {
  const photo = getPhoto("21");

  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title={
          <>
            Membangun peneduh yang <span>kokoh dan indah</span>
          </>
        }
        description={`${site.name} merancang dan memasang kanopi membrane untuk rumah, fasilitas publik, hingga gedung instansi.`}
      />

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              title={
                <>
                  Siapa <strong>kami</strong>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p>
                <strong className="font-semibold text-ink">{site.name}</strong> adalah penyedia jasa desain dan pemasangan
                kanopi membrane. Kami menangani pekerjaan dari survei dan pengukuran, perancangan bentuk, produksi rangka
                baja dan membrane, hingga pemasangan di lokasi.
              </p>
              <p>
                Kami melayani pemilik rumah yang membutuhkan carport atau teras, pengelola masjid dan sekolah, hingga
                perusahaan dan instansi pemerintah. Setiap proyek, besar maupun kecil, dikerjakan dengan perhitungan yang
                sama telitinya.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Survei & pengukuran", "Desain custom", "Produksi rangka", "Pemasangan"].map((item) => (
                <li key={item} className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink-soft ring-1 ring-line">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl shadow-ink/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-paper/90 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Satu tim, dari awal sampai akhir</p>
                <p className="mt-2 text-sm font-semibold text-ink">Survei → Desain → Produksi → Pemasangan</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-4 pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={
                <>
                  Nilai yang kami <strong>pegang</strong>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="h-full rounded-3xl bg-paper p-8 ring-1 ring-line/80">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-sun">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-ink p-10 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink">
                <Eye size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em]">Visi</h2>
              <p className="mt-3 text-base leading-7 text-white/65">
                Menjadi mitra terpercaya dalam pengadaan dan pemasangan kanopi membrane yang aman, estetis, dan tahan lama
                di Indonesia.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90} className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-paper p-10 ring-1 ring-line/80">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Target size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-ink">Misi</h2>
              <ol className="mt-4 space-y-3">
                {missions.map((mission, i) => (
                  <li key={mission} className="flex gap-3 text-[15px] leading-7 text-muted">
                    <span className="font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {mission}
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
