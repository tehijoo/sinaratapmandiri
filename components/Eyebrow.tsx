export default function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[-0.005em] ${
        tone === "dark"
          ? "border border-white/15 bg-white/5 text-white/80"
          : "border border-line bg-paper/80 text-ink-soft"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden />
      {children}
    </span>
  );
}
