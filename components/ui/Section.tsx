import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Tone = "light" | "surface" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-canvas text-fg",
  surface: "bg-surface text-fg",
  dark: "bg-ink text-on-dark",
};

export default function Section({
  tone = "light",
  className,
  ...props
}: ComponentProps<"section"> & { tone?: Tone }) {
  return <section className={cn("py-20 sm:py-28 lg:py-32", tones[tone], className)} {...props} />;
}
