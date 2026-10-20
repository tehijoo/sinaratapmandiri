import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-paper ring-1 ring-line/80 transition-shadow hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-medium text-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readMinutes} menit baca
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-brand">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-muted">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
          Baca selengkapnya
          <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}
