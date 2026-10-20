import Backdrop from "./Backdrop";
import Eyebrow from "./Eyebrow";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
      <Backdrop />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-balance text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.25rem] [&_span]:text-brand">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 tracking-[-0.015em] text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
