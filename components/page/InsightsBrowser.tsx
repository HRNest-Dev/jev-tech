"use client";

import { useState } from "react";
import { insightCategories, type InsightSummary } from "@/content/insights/types";
import { cn } from "@/lib/cn";
import ArticleCard from "./ArticleCard";

export default function InsightsBrowser({ insights }: { insights: InsightSummary[] }) {
  const [category, setCategory] = useState<string>("All");
  const available = insightCategories.filter((c) => insights.some((i) => i.category === c));
  const filtered = category === "All" ? insights : insights.filter((i) => i.category === category);
  // The newest article is featured only in the unfiltered view.
  const featured = category === "All" ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <div role="group" aria-label="Filter by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {["All", ...available].map((c) => {
          const count = c === "All" ? insights.length : insights.filter((i) => i.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                category === c ? "border-ink bg-ink text-white" : "border-line-strong text-muted hover:border-fg hover:text-fg",
              )}
            >
              {c}
              <span className={cn("font-mono text-xs", category === c ? "text-on-dark-muted" : "text-muted")}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {category !== "All" ? ` in ${category}` : ""}
      </p>

      <div className="mt-12">
        {featured && <ArticleCard insight={featured} featured headingLevel="h2" />}
        {rest.length > 0 && (
          <div
            className={cn(
              "grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
              featured && "mt-16 border-t border-line pt-16",
            )}
          >
            {rest.map((i) => (
              <ArticleCard key={i.slug} insight={i} headingLevel="h2" />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
