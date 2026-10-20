/*
 * Logo sementara: ikon atap membrane + matahari, dan wordmark teks.
 * TODO: ganti dengan logo resmi PT Sinar Atap Mandiri bila sudah ada.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#0f5c53" />
      <circle cx="28.5" cy="11.5" r="4.2" fill="#f5b43a" />
      <path d="M6 25.5C13 15.5 24 14.5 34 21" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M6 31C13 22.5 24 21.5 34 27" stroke="#fff" strokeOpacity="0.5" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  className = "",
}: {
  /** "dark" = teks gelap untuk latar terang; "light" = teks putih untuk latar gelap. */
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>
          Sinar Atap
        </span>
        <span className={`mt-1 text-[9.5px] font-bold uppercase tracking-[0.32em] ${light ? "text-sun" : "text-brand"}`}>
          Mandiri
        </span>
      </span>
    </span>
  );
}
