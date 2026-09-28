import type { Metadata } from "next";
import { audiences, principles, stack } from "@/content/company";
import { site, startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Photo from "@/components/page/Photo";
import Process from "@/components/home/Process";

export const metadata: Metadata = {
  title: "Company",
  description:
    "JEV Technologies is a digital product and software engineering company that designs and builds technology around how businesses actually work.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Company", href: "/company" }]}
        eyebrow="Company"
        title="Technology should solve real problems."
        description="We’re a digital product and software engineering company. We help organizations go from a problem or an idea to technology that works — and keeps working."
        image="company-hero"
      />

      {/* Story */}
      <Section className="pt-0!" aria-labelledby="story-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="story-title" eyebrow="Our story" title="Why JEV exists." />
          </div>
          <div className="space-y-5 text-lead text-muted lg:col-span-7 lg:pt-12">
            <p>
              Too many organizations end up with software that doesn&rsquo;t fit how they work. Staff re-enter the same
              data in several places, critical processes live in spreadsheets, and the tools meant to help become things
              to work around.
            </p>
            <p>
              {site.name} was founded to do the opposite: to start with the business, understand the people involved
              and engineer technology around them. We bring strategy, design, engineering and long-term support together
              in one team, so nothing gets lost between handovers.
            </p>
            <p>
              We also build and operate our own products, including StaffDem. Running software for real customers every
              day shapes how we design, build and support everything else.
            </p>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section tone="surface" aria-labelledby="principles-title">
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              id="principles-title"
              eyebrow="Our principles"
              title="How we approach every project."
              description="These aren’t slogans. They’re the decisions we make on every engagement, especially when there’s pressure to cut corners."
            />
            <Photo image="company-story" aspect="aspect-[3/2]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <li key={p.title} className="bg-canvas p-7 sm:p-8">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-h4 font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Who we work with */}
      <Section aria-labelledby="clients-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="clients-title"
              eyebrow="Who we work with"
              title="Organizations ready to move forward."
              description="Some arrive with a detailed specification. Many arrive with a problem. Both are good starting points."
            />
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-7">
            {audiences.map((a) => (
              <li key={a.title} className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-8">
                <h3 className="text-h4 font-semibold">{a.title}</h3>
                <p className="text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Process />

      {/* Engineering */}
      <Section aria-labelledby="engineering-title">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="engineering-title"
              eyebrow="Engineering"
              title="Proven technology, chosen with care."
              description="We favour well-supported tools your future team can maintain. Reliability, security and maintainability come before novelty."
            />
          </div>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7 lg:pt-12">
            {stack.map((s) => (
              <div key={s.area}>
                <dt className="font-mono text-caption uppercase text-muted">{s.area}</dt>
                <dd className="mt-4 space-y-2">
                  {s.tools.map((t) => (
                    <span key={t} className="block">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Careers */}
      <Section tone="surface" aria-labelledby="careers-title">
        <Container>
          <div className="flex flex-col gap-8 rounded-3xl border border-line bg-canvas p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="careers-title" className="text-h2 font-semibold">
                Work with us.
              </h2>
              <p className="mt-4 text-lead text-muted">
                We&rsquo;re always glad to hear from thoughtful engineers, designers and product people. Tell us about
                yourself and the work you&rsquo;re proud of.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${site.email}?subject=Careers%20at%20JEV`} variant="secondary" arrow>
                Get in touch
              </ButtonLink>
              <ButtonLink href={startProjectHref} variant="outline">
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
