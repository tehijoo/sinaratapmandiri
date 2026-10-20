import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { mapsLink, site, telLink, waLink } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} untuk konsultasi, survei lokasi, dan penawaran kanopi membrane.`,
};

const channels = [
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: waLink(),
    external: true,
  },
  { icon: <Phone size={20} />, label: "Telepon", value: site.phoneDisplay, href: telLink },
  { icon: <Mail size={20} />, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: <MapPin size={20} />, label: "Kantor", value: site.address.join(", "), href: mapsLink, external: true },
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title={
          <>
            Mari bicarakan <span>kanopi Anda</span>
          </>
        }
        description="Kirim pesan lewat formulir, atau hubungi kami langsung. Kami membalas pada jam operasional."
      />

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="flex flex-col gap-4">
            <ul className="grid gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-3xl bg-paper p-5 ring-1 ring-line/80 transition-colors hover:bg-brand hover:ring-brand"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-sun transition-colors group-hover:bg-white/15">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted group-hover:text-white/60">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block break-words font-semibold text-ink group-hover:text-white">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-4 rounded-3xl bg-ink p-6 text-white">
              <Clock size={20} className="mt-0.5 shrink-0 text-sun" />
              <div>
                <p className="font-semibold">Jam operasional</p>
                <p className="mt-1 text-sm text-white/60">{site.hours}</p>
                <p className="mt-3 text-sm text-white/60">Area layanan: {site.serviceArea}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-[32px] bg-paper p-6 ring-1 ring-line/80 sm:p-10">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">Tinggalkan pesan</h2>
              <p className="mt-2 text-[15px] text-muted">Isi data berikut, lalu lanjutkan percakapan di WhatsApp.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
