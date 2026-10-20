import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Download, Eye, Handshake, ShieldCheck, Target } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `${site.name} adalah perusahaan tensile membrane structures asal Depok yang berdiri sejak 2022, spesialis tenda membrane dan Sarnafil.`,
};

/*
 * Profil, visi & misi, dan legalitas diambil dari company profile PT Sinar
 * Atap Mandiri (site.companyProfile, bisa diunduh dari halaman ini). NPWP
 * sengaja tidak ditulis di halaman, meski tercantum di PDF-nya.
 *
 * TODO: tiga nilai di bawah masih teks contoh; sesuaikan bila klien punya
 * versinya sendiri.
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
  "Menjadi mitra yang efisien dan efektif bagi setiap klien.",
  "Senantiasa meningkatkan kualitas pelayanan.",
  "Berkomitmen tinggi untuk kepuasan seluruh klien kami.",
];

const legal = [
  { label: "Sertifikat Pendirian PT (Kemenkumham)", value: "AHU-009960.AH.01.30. Tahun 2024" },
  { label: "Nomor Induk Berusaha (NIB)", value: "2102240229901" },
  { label: "Sertifikat Standar", value: "16122300004950001" },
  { label: "Standar Nasional Indonesia (SNI)", value: "031583-1989 (Bina UMK)" },
];

export default function TentangKamiPage() {
  const photo = getPhoto("fasad-gedung");

  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title={
          <>
            Membangun peneduh yang <span>kokoh dan indah</span>
          </>
        }
        description={`${site.name} adalah spesialis tenda membrane dan Sarnafil yang berdiri di Depok sejak 2022.`}
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
                <strong className="font-semibold text-ink">{site.name}</strong> adalah perusahaan berbadan hukum perseroan
                terbatas yang didirikan di Depok pada tahun 2022 dan bergerak di bidang tensile membrane structures: tenda
                dan kanopi membrane, serta pelapisan atap dengan membrane Sarnafil.
              </p>
              <p>
                Kami berdiri karena melihat potensi pasar yang semakin kuat dan perkembangan teknologi yang pesat.
                Dijalankan oleh tenaga ahli muda yang profesional di bidangnya dan didukung peralatan yang memadai, kami
                berkomitmen memberi hasil yang optimal. Fokus utama kami adalah kepuasan klien.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Berdiri sejak 2022", "Depok, Jawa Barat", "Tenda & kanopi membrane", "Sarnafil"].map((item) => (
                <li key={item} className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink-soft ring-1 ring-line">
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={site.companyProfile.href}
              download={site.companyProfile.fileName}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-ink"
            >
              <Download size={17} />
              Unduh Company Profile
              <span className="font-normal text-white/70">(PDF, {site.companyProfile.size})</span>
            </a>
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

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-ink p-10 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink">
                <Eye size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em]">Visi</h2>
              <p className="mt-3 text-base leading-7 text-white/65">
                Menjadi perusahaan terkemuka yang mengedepankan inovasi, solusi, dan kompetensi.
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

      <section id="legalitas" className="scroll-mt-28 pb-4">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={
                <>
                  <strong>Legalitas</strong> perusahaan
                </>
              }
              description={`${site.name} terdaftar resmi dan memiliki izin usaha yang lengkap.`}
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {legal.map((item, i) => (
              <li key={item.label}>
                <Reveal delay={i * 70} className="h-full rounded-3xl bg-paper p-6 ring-1 ring-line/80">
                  <BadgeCheck size={24} className="text-brand" />
                  <p className="mt-4 text-sm font-medium leading-6 text-muted">{item.label}</p>
                  <p className="mt-1 break-words font-bold tracking-[-0.01em] text-ink">{item.value}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
