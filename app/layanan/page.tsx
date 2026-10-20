import type { Metadata } from "next";
import Image from "next/image";
import { Check, Droplets } from "lucide-react";
import ArrowButton from "@/components/ArrowButton";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { materials, sarnafil, services } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan Tenda Membrane & Sarnafil",
  description: `Jasa desain dan pemasangan tenda & kanopi membrane dari ${site.name} untuk hunian, fasilitas publik, serta gedung komersial dan instansi, plus waterproofing atap dengan membrane Sarnafil.`,
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title={
          <>
            Kanopi membrane untuk <span>setiap kebutuhan</span>
          </>
        }
        description="Tenda dan kanopi membrane untuk tiga kelompok kebutuhan, ditambah pelapisan atap dengan membrane Sarnafil. Semuanya diukur langsung, dirancang sesuai bangunan, dan dipasang oleh tim kami sendiri."
      />

      <div className="space-y-6 pb-8">
        {services.map((service, i) => {
          const flip = i % 2 === 1;

          return (
            // scroll-mt memberi ruang untuk navbar saat dibuka lewat tautan #id.
            <section key={service.id} id={service.id} className="scroll-mt-28 px-6 lg:px-8">
              <Reveal className="mx-auto grid max-w-6xl items-center gap-10 rounded-[32px] bg-paper p-4 ring-1 ring-line/80 sm:p-6 lg:grid-cols-2 lg:gap-14 lg:p-8">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${flip ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.photo.src}
                    alt={service.photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-2 pb-4 lg:px-0 lg:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Layanan {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-ink lg:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-base font-medium leading-7 text-ink-soft">{service.summary}</p>
                  <div className="mt-4 space-y-3 text-[15px] leading-7 text-muted">
                    {service.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                    {service.uses.map((use) => (
                      <li key={use} className="flex items-center gap-2 text-sm text-ink-soft">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {use}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ArrowButton
                      href={waLink(`Halo ${site.name}, saya ingin konsultasi layanan "${service.title}".`)}
                      external
                      bg="#0f5c53"
                      accent="#13201d"
                      className="shadow-lg shadow-brand/25"
                    >
                      Konsultasi Layanan Ini
                    </ArrowButton>
                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>

      <section id={sarnafil.id} className="scroll-mt-28 px-6 pt-14 lg:px-8 lg:pt-20">
        <Reveal className="mx-auto grid max-w-6xl gap-10 rounded-[32px] bg-brand p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">
              Layanan {String(services.length + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">{sarnafil.title}</h2>
            <p className="mt-4 text-base font-medium leading-7 text-white/90">{sarnafil.summary}</p>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-white/70">
              {sarnafil.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
            <div className="mt-8">
              <ArrowButton
                href={waLink(`Halo ${site.name}, saya ingin konsultasi waterproofing atap dengan Sarnafil.`)}
                external
                bg="#f5b43a"
                accent="#13201d"
                text="text-ink hover:text-white"
                className="shadow-lg shadow-black/20"
              >
                Konsultasi Sarnafil
              </ArrowButton>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {sarnafil.uses.map((use) => (
              <li key={use} className="flex flex-col gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-inset ring-white/15">
                <Droplets size={22} className="text-sun" />
                <span className="font-semibold leading-snug">{use}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="material" className="scroll-mt-28 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={
                <>
                  Pilihan <strong>material membrane</strong>
                </>
              }
              description="Kelas material menentukan tampilan, umur pakai, dan biaya. Kami bantu memilih yang paling sesuai dengan lokasi dan anggaran Anda."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {materials.map((material, i) => (
              <Reveal key={material.name} delay={i * 90}>
                <article
                  className={`h-full rounded-3xl p-8 ${
                    i === 1 ? "bg-brand text-white shadow-xl shadow-brand/25" : "bg-paper text-ink ring-1 ring-line/80"
                  }`}
                >
                  <p className={`text-3xl font-extrabold tracking-[-0.04em] ${i === 1 ? "text-sun" : "text-brand"}`}>
                    {material.name}
                  </p>
                  <p className={`mt-1 text-sm ${i === 1 ? "text-white/70" : "text-muted"}`}>{material.full}</p>
                  <ul className="mt-6 space-y-3">
                    {material.points.map((point) => (
                      <li key={point} className={`flex gap-2.5 text-[15px] leading-6 ${i === 1 ? "text-white/85" : "text-ink-soft"}`}>
                        <Check size={18} className={`mt-0.5 shrink-0 ${i === 1 ? "text-sun" : "text-brand"}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
