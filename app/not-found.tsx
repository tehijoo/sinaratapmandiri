import Link from "next/link";
import Backdrop from "@/components/Backdrop";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <Backdrop />
      <div className="relative">
        <p className="text-7xl font-extrabold tracking-[-0.05em] text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-muted">Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
