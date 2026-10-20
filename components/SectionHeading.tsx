/**
 * Judul section ala Novora: satu warna, dengan ketebalan (bukan warna) yang
 * menandai frasa penting. Bungkus frasa itu dengan <strong>.
 */
export default function SectionHeading({
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const center = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-xl"} ${className}`}>
      <h2
        className={`text-balance text-[28px] font-medium leading-[1.15] tracking-[-0.035em] sm:text-4xl lg:text-[42px] [&_strong]:font-extrabold ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 tracking-[-0.015em] ${center ? "mx-auto max-w-2xl" : ""} ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
