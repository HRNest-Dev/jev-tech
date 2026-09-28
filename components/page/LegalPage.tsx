import type { LegalDoc } from "@/content/legal";
import { Container, Eyebrow } from "@/components/ui";
import Breadcrumbs from "./Breadcrumbs";
import Prose, { TableOfContents } from "./Prose";
import { formatDate } from "./ArticleCard";

export default function LegalPage({ doc, href }: { doc: LegalDoc; href: string }) {
  return (
    <article className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <Breadcrumbs items={[{ label: doc.title, href }]} />
        <header className="mt-10 max-w-3xl lg:mt-14">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 text-h1 font-semibold">{doc.title}</h1>
          <p className="mt-5 text-sm text-muted">
            Last updated <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
          </p>
        </header>

        <div className="mt-14 grid gap-12 border-t border-line pt-14 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <TableOfContents blocks={doc.body} />
          </aside>
          <div className="text-[1.0625rem] leading-[1.75] text-graphite-700 lg:col-span-7 lg:col-start-4">
            <Prose blocks={doc.body} />
          </div>
        </div>
      </Container>
    </article>
  );
}
