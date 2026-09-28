import { getService, services } from "@/content/services";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "JEV Technologies service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  return renderOgImage({
    eyebrow: service ? `Services · ${service.name}` : "Services",
    title: service?.headline ?? "Services",
  });
}
