import Link from "next/link";
import type { CSSProperties } from "react";

type ArrowButtonProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  /** Warna pill saat diam. */
  bg: string;
  /** Warna lingkaran, sekaligus warna pill saat hover. */
  accent: string;
  /** Kelas warna label. */
  text?: string;
  /** Kelas warna panah di dalam lingkaran. */
  icon?: string;
  className?: string;
};

export default function ArrowButton({
  href,
  external,
  children,
  bg,
  accent,
  text = "text-white",
  icon = "text-white",
  className = "",
}: ArrowButtonProps) {
  const classes = `arrow-btn group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${text} ${className}`;
  const style = { "--btn-bg": bg, "--btn-accent": accent } as CSSProperties;

  const content = (
    <>
      {children}
      <span className="arrow-btn-circle flex h-9 w-9 items-center justify-center rounded-full">
        <svg
          className={`arrow-btn-icon h-4 w-4 ${icon}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {content}
    </Link>
  );
}
