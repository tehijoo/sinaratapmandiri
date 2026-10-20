"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, waLink } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Transparan di atas hero/header halaman. Setelah di-scroll, navbar butuh
  // permukaannya sendiri supaya tautan tidak menabrak konten di belakangnya.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile setiap kali pindah halaman.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    // -mb-20 membuat konten pertama halaman naik ke belakang navbar, jadi
    // hero mengisi satu layar penuh dan navbar melayang di atasnya.
    <header
      className={`sticky top-0 z-50 -mb-20 transition-colors duration-300 ${
        solid ? "border-b border-line/80 bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="PT Sinar Atap Mandiri, ke beranda">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-muted lg:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={isActive(link.href) ? "text-brand" : "transition-colors hover:text-ink"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink lg:inline-block"
        >
          Konsultasi
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line/80 bg-paper/95 px-6 py-5 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 text-[15px] font-medium text-muted" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-xl px-3 py-2.5 ${isActive(link.href) ? "bg-brand-soft text-brand" : "hover:bg-canvas hover:text-ink"}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-brand px-6 py-3 text-center font-semibold text-white"
            >
              Konsultasi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
