import type { ImageKey } from "../images";

export const insightCategories = ["Business & Technology", "Product", "Design", "Engineering", "Company"] as const;
export type InsightCategory = (typeof insightCategories)[number];

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  author: string;
  /** ISO date */
  date: string;
  cover: ImageKey;
  status: "draft" | "published";
  seo?: { title?: string; description?: string };
  body: Block[];
};

/** Card-sized data without the article body. */
export type InsightSummary = Omit<Insight, "body"> & { minutes: number };
