import type { Metadata } from "next";
import { Suspense } from "react";
import { site, startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import Breadcrumbs from "@/components/page/Breadcrumbs";
import Photo from "@/components/page/Photo";
import ContactForm, { ContactFormWithParams } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Email ${site.email} or send us a message.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Container>
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
          <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 text-h1 font-semibold text-balance">Let&rsquo;s talk.</h1>
              <p className="mt-5 text-lead text-muted">
                Questions about our services, StaffDem, partnerships or careers — send us a message and the right person
                will get back to you.
              </p>

              <dl className="mt-10 space-y-6 border-t border-line pt-8">
                <div>
                  <dt className="font-mono text-caption uppercase text-muted">Email</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${site.email}`} className="text-h4 font-medium hover:text-brand-700">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-caption uppercase text-muted">Phone</dt>
                  <dd className="mt-2 space-y-1">
                    {site.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-h4 font-medium hover:text-brand-700">
                        {p}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-caption uppercase text-muted">Location</dt>
                  <dd className="mt-2 text-h4 font-medium">{site.location}</dd>
                </div>
              </dl>

              <div className="mt-10 rounded-2xl bg-surface p-6">
                <p className="font-medium">Starting a new project?</p>
                <p className="mt-1 text-sm text-muted">Our project form helps us understand your needs faster.</p>
                <ButtonLink href={startProjectHref} variant="link" arrow className="mt-4">
                  Start a Project
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-line p-6 sm:p-10">
                <Suspense fallback={<ContactForm />}>
                  <ContactFormWithParams />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="pb-20 sm:pb-28">
        <Photo image="contact" aspect="aspect-[16/9] lg:aspect-[21/8]" />
      </Container>
    </>
  );
}
