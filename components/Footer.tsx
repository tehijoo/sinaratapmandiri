import Link from "next/link";
import Script from "next/script";
import { Clock, Download, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { mapsLink, navLinks, site, waLink } from "@/lib/site";
import { sarnafil, services } from "@/lib/services";

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-sun">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-white/40">{label}</span>
        {children}
      </span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">{site.description}</p>
            <a
              href={site.companyProfile.href}
              download={site.companyProfile.fileName}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-sun hover:bg-sun hover:text-ink"
            >
              <Download size={15} />
              Company Profile (PDF)
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/40">JELAJAHI</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/40">LAYANAN</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/layanan#${service.id}`} className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/layanan#${sarnafil.id}`} className="transition-colors hover:text-white">
                  {sarnafil.title}
                </Link>
              </li>
              <li>
                <Link href="/layanan#material" className="transition-colors hover:text-white">
                  Pilihan Material
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/40">HUBUNGI KAMI</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <ContactRow icon={<WhatsAppIcon className="h-4 w-4" />} label="WhatsApp">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail size={15} />} label="Email">
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin size={15} />} label="Kantor">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {site.address.join(", ")}
                </a>
              </ContactRow>
              <ContactRow icon={<Clock size={15} />} label="Jam Operasional">
                {site.hours}
              </ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak dilindungi.
          </p>
          {/* Footer gelap, jadi pakai tema "dark"; tema bawaan (light) membuat namanya hijau tua di atas hitam. */}
          <tehijoo-credit variant="text" theme="dark">
            {/* Cadangan: tetap tampil sebagai tautan biasa kalau skripnya gagal dimuat. */}
            <a href="https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/go/" className="hover:text-white">
              Developed by Tehijoo Studio
            </a>
          </tehijoo-credit>
        </div>
      </div>
      <Script src="https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/credit/tehijoo-credit.js" strategy="lazyOnload" />
    </footer>
  );
}
