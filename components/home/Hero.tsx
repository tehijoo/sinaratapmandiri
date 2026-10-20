import Image from "next/image";
import Link from "next/link";
import ArrowButton from "../ArrowButton";
import Backdrop from "../Backdrop";
import Eyebrow from "../Eyebrow";
import { heroPhotos } from "@/lib/photos";
import { services } from "@/lib/services";
import { waLink } from "@/lib/site";

/**
 * Berapa kali set foto diulang mengelilingi silinder. Di bawah 480px
 * stylesheet menyembunyikan tiap slot kedua, jadi efektifnya setengah;
 * --arc-loop di sana dilipatgandakan. Mengubah angka ini berarti meninjau
 * ulang --arc-loop di globals.css.
 */
const ARC_REPEATS = 4;

function PhotoArc() {
  const slots = heroPhotos.length * ARC_REPEATS;
  const step = 360 / slots;

  return (
    // Dekoratif: foto yang sama dengan keterangan lengkap ada di halaman
    // Proyek, jadi 28 salinannya di sini disembunyikan dari pembaca layar.
    // Breakpoint mengikuti media query .arc di globals.css (480px, bukan sm).
    <div aria-hidden className="arc relative h-[248px] overflow-hidden min-[480px]:h-[262px] lg:h-[282px]">
      <div className="arc-wheel">
        {Array.from({ length: slots }, (_, i) => {
          const photo = heroPhotos[i % heroPhotos.length];

          return (
            <div
              key={i}
              className="arc-slot"
              style={{ transform: `rotateY(${i * step}deg) translateZ(var(--arc-r))` }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-line shadow-xl shadow-ink/20 ring-1 ring-white/70">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="160px"
                  // Lazy-load bawaan browser tidak andal menilai elemen yang
                  // ditransformasi 3D; hanya ada 7 file unik, jadi muat langsung.
                  loading="eager"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink">
                  {photo.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    // min-h-dvh, bukan min-h-screen: di HP, bilah browser memperkecil layar
    // sebenarnya dan vh akan memotong carousel di bawah lipatan. Navbar
    // melayang (bukan memakan tempat), jadi ini tepat satu layar.
    <section className="relative flex min-h-dvh flex-col overflow-x-clip">
      <Backdrop />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-24 pb-4 text-center min-[480px]:pt-28 lg:px-8 lg:pt-32 lg:pb-6">
        <Eyebrow>PT Sinar Atap Mandiri · Spesialis Kanopi Membrane</Eyebrow>

        <h1 className="mt-5 text-balance text-[29px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink min-[480px]:text-4xl sm:text-5xl lg:text-[3.4rem]">
          Kanopi Membrane yang Kokoh,{" "}
          {/* Di layar sempit baris dibiarkan mengalir; pemisah paksa membuat "Kokoh," tertinggal sendirian. */}
          <br className="hidden md:block" />
          <span className="text-brand">Teduh, dan Mempercantik Bangunan.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-6 tracking-[-0.015em] text-muted min-[480px]:text-base min-[480px]:leading-7 lg:mt-6">
          Dari survei lokasi, desain, produksi, sampai pemasangan, kami mengerjakan kanopi membrane untuk rumah,
          fasilitas publik, dan gedung instansi dengan rangka kokoh dan hasil yang rapi.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 min-[480px]:gap-4 lg:mt-8">
          <Link
            href="/galeri"
            className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-ink/30 min-[480px]:px-7"
          >
            Lihat Proyek
          </Link>
          <ArrowButton
            href={waLink("Halo PT Sinar Atap Mandiri, saya ingin konsultasi tentang kanopi membrane.")}
            external
            bg="#0f5c53"
            accent="#f5b43a"
            text="text-white hover:text-ink"
            icon="text-ink"
            className="shadow-lg shadow-brand/30"
          >
            Konsultasi Sekarang
          </ArrowButton>
        </div>
      </div>

      <div className="relative shrink-0">
        <PhotoArc />
      </div>

      <div className="relative shrink-0 px-6 pt-2 pb-6 lg:pb-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {services.map((service) => (
            <li key={service.id} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden />
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
