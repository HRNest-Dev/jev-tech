import Image from "next/image";
import Link from "next/link";
import { images } from "@/content/images";
import type { InsightSummary } from "@/content/insights";
import { cn } from "@/lib/cn";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

type ArticleCardProps = {
  insight: InsightSummary;
  featured?: boolean;
  /** Use h2 where cards sit directly under the page's h1. */
  headingLevel?: "h2" | "h3";
};

export default function ArticleCard({ insight, featured, headingLevel = "h3" }: ArticleCardProps) {
  const Heading = headingLevel;
  const cover = images[insight.cover];
  return (
    <article className={cn("reveal group relative", featured && "grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12")}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-surface-strong">
        <Image
          src={cover.src}
          alt=""
          fill
          placeholder="blur"
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out-quint group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn(!featured && "mt-6")}>
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
          <span className="font-medium text-brand-700">{insight.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={insight.date}>{formatDate(insight.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{insight.minutes} min read</span>
        </p>
        <Heading className={cn("mt-3 font-semibold text-balance", featured ? "text-h2" : "text-h3")}>
          <Link href={`/insights/${insight.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4">
            {insight.title}
          </Link>
        </Heading>
        <p className={cn("mt-3 text-muted", featured && "text-lead")}>{insight.excerpt}</p>
      </div>
    </article>
  );
}
