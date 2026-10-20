import Image from "next/image";
import type { CSSProperties } from "react";
import ArrowButton from "../ArrowButton";
import SectionHeading from "../SectionHeading";
import { photos, type Photo } from "@/lib/photos";

function Row({ items, reverse }: { items: Photo[]; reverse?: boolean }) {
  return (
    <div className="marquee" style={{ "--marquee-duration": "70s", "--marquee-gap": "1rem" } as CSSProperties}>
      <div className="marquee-track" data-reverse={reverse}>
        {[0, 1].map((run) => (
          <ul key={run} className="marquee-run" aria-hidden={run === 1}>
            {items.map((photo) => (
              <li key={photo.id} className="relative shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={run === 0 ? photo.alt : ""}
                  placeholder="blur"
                  sizes="420px"
                  className="h-52 w-auto object-cover sm:h-64"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {photo.label}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsMarquee() {
  const half = Math.ceil(photos.length / 2);

  return (
    <section className="bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          title={
            <>
              Hasil kerja kami <strong className="text-sun">di lapangan</strong>
            </>
          }
          description="Sebagian dokumentasi pemasangan kanopi membrane untuk hunian, area komersial, dan fasilitas publik."
        />
      </div>

      {/* Sengaja selebar layar: foto-fotonya mengalir keluar dari kedua tepi. */}
      <div className="mt-14 space-y-4 lg:mt-16">
        <Row items={photos.slice(0, half)} />
        <Row items={photos.slice(half)} reverse />
      </div>

      <div className="mt-12 flex justify-center px-6">
        <ArrowButton
          href="/galeri"
          bg="#f5b43a"
          accent="#ffffff"
          text="text-ink"
          icon="text-ink"
          className="shadow-lg shadow-black/30"
        >
          Lihat Semua Proyek
        </ArrowButton>
      </div>
    </section>
  );
}
