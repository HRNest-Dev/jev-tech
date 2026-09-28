import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "JEV Technologies — Technology built around your business.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Digital product & software engineering", title: "Technology built around your business." });
}
