import type { Metadata } from "next";
import { collaboration, howWeWorkFaqs, ownership, phases, standards, support } from "@/content/how-we-work";
import { startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Photo from "@/components/page/Photo";
import Faq from "@/components/page/Faq";
import EngagementModels from "@/components/home/EngagementModels";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "How JEV Technologies delivers software: a structured path from discovery to launch and growth, with regular demos, clear decisions and engineering standards you can rely on.",
  alternates: { canonical: "/how-we-work" },
};

function Check({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "How we work", href: "/how-we-work" }]}
        eyebrow="How we work"
        title="A clear, structured way to deliver software."
        description="Every engagement follows the same path from idea to running product — so you always know where things stand, what comes next and what we need from you."
        actions={
          <ButtonLink href={startProjectHref} size="lg" arrow>
            Start a Project
          </ButtonLink>
        }
        image="insight-saas"
      />

      {/* Phases */}
      <Section className="pt-0!" aria-labelledby="phases-title">
        <Container>
          <SectionHeading
            id="phases-title"
            eyebrow="From idea to execution"
            title="Six phases, one team."
            description="The depth of each phase depends on your project, but the path is always the same."
          />
          <ol className="mt-14 border-t border-line">
            {phases.map((p, i) => (
              <li key={p.title} className="reveal grid gap-8 border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="font-mono text-sm text-brand-700">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-h2 font-semibold">{p.title}</h3>
                  <p className="mt-3 max-w-sm text-muted">{p.summary}</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
                  <div>
                    <p className="font-mono text-caption uppercase text-muted">What happens</p>
                    <ul className="mt-4 space-y-2.5">
                      {p.happens.map((h) => (
                        <li key={h} className="flex gap-2.5 text-[0.9375rem]">
                          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase text-muted">What you get</p>
                    <ul className="mt-4 space-y-2.5">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5 text-[0.9375rem]">
                          <Check className="mt-1 size-4 shrink-0 text-brand-600" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="font-mono text-caption uppercase text-muted">Your involvement</p>
                    <p className="mt-4 text-[0.9375rem]">{p.involvement}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Collaboration */}
      <Section tone="surface" aria-labelledby="collab-title">
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              id="collab-title"
              eyebrow="Working together"
              title="No black boxes."
              description="You should always know what’s being built, why, and what it will take. This is how we make that happen."
            />
            <Photo image="start-project" aspect="aspect-[3/2]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {collaboration.map((c) => (
              <li key={c.title} className="bg-canvas p-7 sm:p-8">
                <span aria-hidden="true" className="block size-2.5 rounded-full border-2 border-brand-500" />
                <h3 className="mt-5 text-h4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Engineering standards */}
      <Section tone="dark" aria-labelledby="standards-title">
        <Container>
          <SectionHeading
            id="standards-title"
            tone="dark"
            eyebrow="Engineering standards"
            title="Quality is a process, not a promise."
            description="These practices apply to every project, whatever its size — because they’re what keep software reliable long after launch."
          />
          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((s) => (
              <li key={s.title} className="reveal border-t border-line-dark pt-6">
                <h3 className="flex items-center gap-2.5 text-h4 font-semibold text-white">
                  <Check className="size-4 shrink-0 text-brand-400" />
                  {s.title}
                </h3>
                <p className="mt-2 text-on-dark-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <EngagementModels />

      {/* Ownership & support */}
      <Section tone="surface" aria-labelledby="ownership-title">
        <Container>
          <SectionHeading
            id="ownership-title"
            eyebrow="After launch"
            title="Yours to own. Ours to support."
            description="Launch is the start of a product’s life. You own everything we build, and we stay available to keep it healthy and improving."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { title: "What you own", items: ownership },
              { title: "How we support you", items: support },
            ].map((col) => (
              <div key={col.title} className="reveal rounded-3xl bg-canvas p-8 ring-1 ring-line sm:p-10">
                <h3 className="text-h3 font-semibold">{col.title}</h3>
                <ul className="mt-6 space-y-3.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Faq items={howWeWorkFaqs} title="Questions about working with us" />
    </>
  );
}
