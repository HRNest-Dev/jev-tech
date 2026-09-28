import { getInsight, publishedInsights } from "@/content/insights";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "JEV Technologies insight";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return publishedInsights.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const insight = getInsight((await params).slug);
  return renderOgImage({
    eyebrow: insight ? `Insights · ${insight.category}` : "Insights",
    title: insight?.title ?? "Insights",
  });
}
