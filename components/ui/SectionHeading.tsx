import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-caption uppercase",
        tone === "dark" ? "text-brand-400" : "text-brand-700",
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("reveal max-w-3xl", centered && "mx-auto text-center [&>p:first-child]:justify-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Heading id={id} className={cn("text-h2 font-semibold text-balance", eyebrow && "mt-5")}>
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-prose text-lead text-pretty",
            centered && "mx-auto",
            tone === "dark" ? "text-on-dark-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
