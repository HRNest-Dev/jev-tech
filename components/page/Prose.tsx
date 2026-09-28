import type { Block } from "@/content/insights/types";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function headingsOf(blocks: Block[]) {
  return blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} id={slugify(block.text)} className="mt-14 scroll-mt-28 text-h3 font-semibold text-fg first:mt-0">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-6">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-6 space-y-3">
          {block.items.map((item, n) => (
            <li key={item} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-xs text-fg">
                {n + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-12 border-l-2 border-brand-500 pl-6 text-h3 font-medium text-balance text-fg">
          {block.text}
        </blockquote>
      );
  }
}

/** Long-form reading text (articles, legal pages) rendered from content blocks. */
export default function Prose({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map(renderBlock)}</>;
}

/** Sticky "On this page" navigation built from the h2 blocks. */
export function TableOfContents({ blocks }: { blocks: Block[] }) {
  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="font-mono text-caption uppercase text-muted">On this page</p>
      <ul className="mt-4 space-y-2.5 border-l border-line text-sm">
        {headingsOf(blocks).map((h) => (
          <li key={h.text}>
            <a
              href={`#${slugify(h.text)}`}
              className="-ml-px block border-l border-transparent pl-4 text-muted hover:border-fg hover:text-fg"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
