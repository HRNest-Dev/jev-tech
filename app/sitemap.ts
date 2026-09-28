import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { activeCategories, categorySlug, publishedInsights } from "@/content/insights";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const pages = ["/", "/services", "/products", "/products/staffdem", "/how-we-work", "/company", "/careers", "/insights", "/start-a-project", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: url(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: url(`/services/${s.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...activeCategories().map((c) => ({ url: url(`/insights/category/${categorySlug(c)}`), changeFrequency: "weekly" as const, priority: 0.6 })),
    ...publishedInsights.map((i) => ({ url: url(`/insights/${i.slug}`), lastModified: i.date, priority: 0.6 })),
  ];
}
