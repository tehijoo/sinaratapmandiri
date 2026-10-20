import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: link.href === "/" ? site.url : `${site.url}${link.href}`,
    changeFrequency: link.href === "/artikel" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/artikel/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00+07:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
