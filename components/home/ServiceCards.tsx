import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ArrowButton from "../ArrowButton";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services } from "@/lib/services";
import { waLink } from "@/lib/site";

/*
 * Tiga permukaan berbeda, seperti kartu layanan Novora: teal penuh, kaca di
 * tengah, dan gelap. Urutannya mengikuti urutan di lib/services.ts.
 */
const surfaces = [
  {
    card: "bg-brand text-white shadow-xl shadow-brand/25",
    muted: "text-white/70",
    chip: "bg-white/12 text-white/90 ring-1 ring-inset ring-white/20",
    link: "border-white/40 hover:border-white hover:bg-white hover:text-ink",
  },
  {
    card: "bg-paper/70 text-ink shadow-xl shadow-ink/5 ring-1 ring-inset ring-line backdrop-blur-xl",
    muted: "text-muted",
    chip: "bg-canvas text-ink-soft ring-1 ring-inset ring-line",
    link: "border-ink/20 hover:border-ink hover:bg-ink hover:text-white",
  },
  {
    card: "bg-ink text-white shadow-xl shadow-ink/25",
    muted: "text-white/60",
    chip: "bg-white/10 text-white/85 ring-1 ring-inset ring-white/15",
    link: "border-white/35 hover:border-sun hover:bg-sun hover:text-ink",
  },
];

export default function ServiceCards() {
  return (
    <section id="layanan" className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={
              <>
                Kanopi membrane untuk <strong>setiap jenis bangunan</strong>
              </>
            }
            description="Dari carport rumah sampai halaman gedung instansi, bentuk dan material membrane disesuaikan dengan fungsi area dan karakter bangunannya."
          />
          <div className="mt-9 flex justify-center">
            <ArrowButton
              href="/layanan"
              bg="#13201d"
              accent="#0f5c53"
              className="shadow-lg shadow-ink/25"
            >
              Lihat Detail Layanan
            </ArrowButton>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, i) => {
            const s = surfaces[i % surfaces.length];

            return (
              <Reveal key={service.id} delay={i * 90}>
                <article className={`flex h-full flex-col rounded-[28px] p-3 ${s.card}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                    <Image
                      src={service.photo.src}
                      alt={service.photo.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
                    <h3 className="text-2xl font-bold leading-snug tracking-[-0.03em]">{service.title}</h3>
                    <p className={`mt-3 text-[15px] leading-7 ${s.muted}`}>{service.summary}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.uses.slice(0, 4).map((use) => (
                        <li key={use} className={`rounded-full px-3 py-1 text-xs font-medium ${s.chip}`}>
                          {use}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <a
                        href={waLink(`Halo PT Sinar Atap Mandiri, saya ingin tahu lebih detail tentang layanan "${service.title}".`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${s.link}`}
                      >
                        Tanya Layanan Ini
                        <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
