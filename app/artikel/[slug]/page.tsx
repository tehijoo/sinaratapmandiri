import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import ArrowButton from "@/components/ArrowButton";
import { articles, formatDate, getArticle, type ArticleBlock } from "@/lib/articles";
import { site, waLink } from "@/lib/site";

// Semua artikel diketahui saat build; slug lain langsung 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/artikel/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: article.cover.src.src, width: article.cover.src.width, height: article.cover.src.height }],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-bold tracking-[-0.03em] text-ink lg:text-[28px]">{block.text}</h2>;
    case "p":
      return <p className="mt-5 text-[17px] leading-8 text-ink-soft/90">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-6 space-y-4">
          {block.items.map((item) => (
            <li key={item.title} className="rounded-2xl bg-paper p-5 ring-1 ring-line/80">
              <p className="font-bold text-ink">{item.title}</p>
              <p className="mt-1.5 text-[15px] leading-7 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-10 rounded-r-2xl border-l-4 border-sun bg-sun-soft/60 px-6 py-5 text-lg font-medium leading-8 text-ink">
          {block.text}
        </blockquote>
      );
  }
}

export default async function ArtikelDetailPage({ params }: PageProps<"/artikel/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="pt-28 lg:pt-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link href="/" className="hover:text-ink">
            Beranda
          </Link>
          <ChevronRight size={14} aria-hidden />
          <Link href="/artikel" className="hover:text-ink">
            Artikel
          </Link>
        </nav>

        <h1 className="mt-6 text-balance text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[44px]">
          {article.title}
        </h1>
        <p className="mt-5 text-sm text-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readMinutes} menit baca · Tim{" "}
          {site.shortName}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px]">
          <Image
            src={article.cover.src}
            alt={article.cover.alt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-6 lg:px-8">
        <p className="mt-6 text-xl font-medium leading-8 tracking-[-0.015em] text-ink">{article.excerpt}</p>
        {article.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <aside className="mt-14 flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">Punya pertanyaan soal kanopi membrane?</p>
            <p className="mt-1 text-sm text-white/70">Konsultasikan langsung dengan tim kami lewat WhatsApp.</p>
          </div>
          <ArrowButton
            href={waLink(`Halo ${site.name}, saya membaca artikel "${article.title}" dan ingin bertanya.`)}
            external
            bg="#f5b43a"
            accent="#13201d"
            text="text-ink hover:text-white"
            className="shrink-0"
          >
            Tanya Sekarang
          </ArrowButton>
        </aside>
      </div>

      {others.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink">Artikel lainnya</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <ArticleCard key={other.slug} article={other} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
