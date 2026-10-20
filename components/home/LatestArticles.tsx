import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ArticleCard from "../ArticleCard";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { articles } from "@/lib/articles";

export default function LatestArticles() {
  return (
    <section className="pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            title={
              <>
                Artikel & <strong>panduan</strong>
              </>
            }
            description="Bekal sebelum memesan kanopi: material, perawatan, dan cara menilai penawaran."
          />
          <Link
            href="/artikel"
            className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand"
          >
            Semua artikel
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article, i) => (
            <Reveal key={article.slug} delay={i * 90}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
