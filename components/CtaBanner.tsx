import { Phone } from "lucide-react";
import ArrowButton from "./ArrowButton";
import MembraneLines from "./MembraneLines";
import Reveal from "./Reveal";
import { site, telLink, waLink } from "@/lib/site";

export default function CtaBanner({
  title = "Siap merancang kanopi untuk bangunan Anda?",
  description = "Kirim foto lokasi dan perkiraan ukurannya lewat WhatsApp. Tim kami akan membantu memilih bentuk, material, dan memberi gambaran biayanya.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-brand px-8 py-14 text-white sm:px-14 lg:py-20">
        <MembraneLines
          lines={32}
          fit="xMaxYMax slice"
          className="absolute inset-0 h-full w-full text-white/20"
          from={[
            [560, 648],
            [1452, 648],
          ]}
          to={[
            [1452, 648],
            [1452, 40],
          ]}
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(245,180,58,0.45), rgba(245,180,58,0))" }}
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[44px]">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">{description}</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <ArrowButton
              href={waLink("Halo PT Sinar Atap Mandiri, saya ingin konsultasi tentang kanopi membrane.")}
              external
              bg="#f5b43a"
              accent="#13201d"
              text="text-ink hover:text-white"
              className="shadow-lg shadow-black/20"
            >
              Chat via WhatsApp
            </ArrowButton>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              <Phone size={16} />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
