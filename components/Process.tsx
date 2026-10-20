import { Check } from "lucide-react";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/site";

const checklist = [
  "Konsultasi desain dan kebutuhan",
  "Survei dan pengukuran di lokasi",
  "Penawaran harga yang rinci dan transparan",
  "Pemasangan oleh tim kami sendiri",
];

const steps = [
  {
    title: "Konsultasi Kebutuhan",
    body: "Ceritakan lokasi, perkiraan ukuran, dan fungsi area yang ingin diteduhkan. Kirim foto lokasi lewat WhatsApp agar kami bisa memberi gambaran awal.",
  },
  {
    title: "Survei & Pengukuran",
    body: "Tim kami datang ke lokasi untuk mengukur, mengecek titik tumpuan rangka, dan memperhitungkan arah aliran air hujan.",
  },
  {
    title: "Desain & Penawaran",
    body: "Anda menerima gambar desain beserta rincian material dan harga. Produksi baru dimulai setelah desain dan penawaran disetujui.",
  },
  {
    title: "Produksi & Pemasangan",
    body: "Rangka dan membrane diproduksi sesuai ukuran, lalu dipasang, ditegangkan, dan dirapikan hingga siap digunakan.",
  },
];

export default function Process() {
  return (
    <section id="proses" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            title={
              <>
                4 Langkah Mudah
                <br />
                Pasang <strong>Kanopi Membrane</strong>
              </>
            }
            description="Dari pesan WhatsApp pertama sampai kanopi berdiri, Anda tahu apa yang sedang dikerjakan dan berapa biayanya."
          />

          <ul className="mt-8 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[15px] text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <ArrowButton
              href={waLink("Halo PT Sinar Atap Mandiri, saya ingin menjadwalkan survei lokasi untuk kanopi membrane.")}
              external
              bg="#13201d"
              accent="#0f5c53"
              className="shadow-lg shadow-ink/25"
            >
              Jadwalkan Survei
            </ArrowButton>
          </div>
        </Reveal>

        <ol className="relative">
          {/* Satu garis putus-putus di belakang badge angka, menyambung semua langkah. */}
          <div className="absolute bottom-0 left-7 top-0 border-l-2 border-dashed border-line" aria-hidden />

          {steps.map((step, i) => (
            <li key={step.title} className={`relative ${i === steps.length - 1 ? "" : "pb-11"}`}>
              <Reveal delay={i * 90} className="flex gap-6">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-extrabold tracking-[-0.02em] text-white shadow-lg shadow-brand/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-3">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-ink lg:text-xl">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
