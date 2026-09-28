import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { site, startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Photo from "@/components/page/Photo";
import Faq from "@/components/page/Faq";
import JsonLd from "@/components/page/JsonLd";
import ServiceCard from "@/components/page/ServiceCard";
import ServiceScene from "@/components/visuals/ServiceScene";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.summary,
      url: path,
    },
  };
}

function Check({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter((s) => s !== undefined);
  const startHref = `${startProjectHref}?service=${service.slug}`;

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
        eyebrow={service.name}
        title={service.headline}
        description={service.intro}
        actions={
          <>
            <ButtonLink href={startHref} size="lg" arrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Ask a question
            </ButtonLink>
          </>
        }
        visual={<ServiceScene visual={service.visual} toast={service.toast} />}
      />

      {/* Is this for you? */}
      <Section className="pt-8!" aria-labelledby="signs-title">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="signs-title"
              eyebrow="Is this for you?"
              title="Signs it’s time."
              description="If any of these sound familiar, it’s worth a conversation."
            />
          </div>
          <ul className="reveal grid gap-px self-start overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {service.signs.map((s, i) => (
              <li key={s} className="flex gap-4 bg-canvas p-6 sm:p-8">
                <span className="font-mono text-sm text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[1.0625rem] leading-relaxed">{s}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* What we build */}
      <Section tone="surface" aria-labelledby="offerings-title">
        <Container>
          <SectionHeading id="offerings-title" eyebrow="What we build" title={`${service.name}, done properly.`} />
          <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2">
            {service.offerings.map((o) => (
              <li key={o.title} className="reveal rounded-3xl bg-canvas p-7 ring-1 ring-line sm:p-9">
                <span aria-hidden="true" className="block size-2.5 rounded-full border-2 border-brand-500" />
                <h3 className="mt-6 text-h3 font-semibold">{o.title}</h3>
                <p className="mt-3 max-w-md text-muted">{o.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Approach */}
      <Section aria-labelledby="approach-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Photo image={service.image} aspect="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <SectionHeading
              id="approach-title"
              eyebrow="Our approach"
              title={service.approach.title}
              description={service.approach.intro}
            />
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {service.approach.points.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-2 py-6">
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-h4 font-semibold">{p.title}</h3>
                    <p className="mt-2 text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="surface" aria-labelledby="capabilities-title">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="capabilities-title"
              eyebrow="Capabilities"
              title="What’s included."
              description="Everything we can take care of, from first plan to long-term support. We tailor the scope to what your project needs."
            />
          </div>
          <ul className="grid content-start gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {service.capabilities.map((c) => (
              <li key={c} className="flex items-center gap-3 border-b border-line py-4">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full border-2 border-brand-500" />
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Deliverables & timeline */}
      <Section tone="dark" aria-labelledby="timeline-title">
        <Container>
          <SectionHeading
            id="timeline-title"
            tone="dark"
            eyebrow="How a project runs"
            title="What you get, and when."
            description="Indicative timings for a typical project. We confirm scope and schedule with you after discovery."
          />

          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {service.timeline.map((t, i) => (
              <li key={t.phase} className="reveal relative pt-8">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line-dark" />
                <span aria-hidden="true" className="absolute top-0 left-0 size-3 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-ink" />
                <p className="font-mono text-sm text-brand-400">
                  {String(i + 1).padStart(2, "0")} · {t.duration}
                </p>
                <h3 className="mt-3 text-h3 font-semibold text-white">{t.phase}</h3>
                <p className="mt-3 text-on-dark-muted">{t.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 rounded-3xl bg-graphite-900 p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <h3 className="text-h3 font-semibold text-white">What you get</h3>
              <p className="mt-3 text-on-dark-muted">Every engagement ends with assets your organization owns.</p>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-8">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-on-dark">
                  <Check className="mt-1 size-4 shrink-0 text-brand-400" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={startHref} size="lg" arrow>
              Plan your project
            </ButtonLink>
            <ButtonLink href="/contact" variant="link-dark" arrow>
              Or ask us a question
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Faq items={service.faqs} />

      {related.length > 0 && (
        <Section tone="surface" aria-labelledby="related-title">
          <Container>
            <SectionHeading id="related-title" eyebrow="Related" title="Often paired with." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.intro,
          serviceType: service.name,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
    </>
  );
}
