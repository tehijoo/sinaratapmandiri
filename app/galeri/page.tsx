import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Proyek Kanopi Membrane",
  description: `Dokumentasi proyek kanopi membrane ${site.name}: carport, fasilitas publik, area komersial, dan proses pemasangan.`,
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyek"
        title={
          <>
            Dokumentasi <span>hasil pemasangan</span>
          </>
        }
        description="Pilih kategori, lalu klik foto untuk melihatnya lebih besar."
      />

      <section className="px-6 pb-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner
        title="Ingin hasil seperti ini di lokasi Anda?"
        description="Kirim foto lokasi Anda lewat WhatsApp. Kami bantu mencarikan bentuk kanopi yang paling cocok."
      />
    </>
  );
}
