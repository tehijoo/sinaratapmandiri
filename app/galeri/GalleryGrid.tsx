"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { photoCategories, photos, type PhotoCategory } from "@/lib/photos";

type Filter = PhotoCategory | "semua";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("semua");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const visible = filter === "semua" ? photos : photos.filter((p) => p.category === filter);
  // Hanya kategori yang benar-benar punya foto yang ditampilkan sebagai filter.
  const categories = photoCategories.filter((c) => photos.some((p) => p.category === c.id));

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter kategori proyek">
        {[{ id: "semua" as const, label: "Semua" }, ...categories].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            aria-pressed={filter === c.id}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              filter === c.id ? "bg-ink text-white" : "bg-paper text-ink-soft ring-1 ring-line hover:ring-ink/30"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((photo, i) => (
          <li key={photo.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpenIndex(i);
              }}
              className="group relative block w-full overflow-hidden rounded-3xl"
              aria-label={`Perbesar foto: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
              <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink">
                {photo.label}
              </span>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                <Expand size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <p className="text-sm text-white/70">
              {openIndex + 1} / {visible.length} · <span className="text-white">{current.label}</span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.id}
              src={current.src}
              alt={current.alt}
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-contain px-4 sm:px-20"
            />
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-5"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Foto berikutnya"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-5"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          <p className="px-5 py-4 text-center text-sm text-white/70">{current.alt}</p>
        </div>
      )}
    </>
  );
}
