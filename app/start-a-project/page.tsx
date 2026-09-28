import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";
import Breadcrumbs from "@/components/page/Breadcrumbs";
import Photo from "@/components/page/Photo";
import ProjectForm, { ProjectFormWithParams } from "@/components/forms/ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell us what you're building. Share your idea or problem and we'll help you shape the right approach — from strategy and design to engineering and launch.",
  alternates: { canonical: "/start-a-project" },
};

export default function StartProjectPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <Breadcrumbs items={[{ label: "Start a Project", href: "/start-a-project" }]} />
        <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Start a project</Eyebrow>
              <h1 className="mt-5 text-h1 font-semibold text-balance">Tell us what you&rsquo;re building.</h1>
              <p className="mt-5 text-lead text-muted">
                Share as much or as little as you know. A clear idea and an open question are both good places to start.
              </p>
              <Photo image="start-project" aspect="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, 100vw" className="mt-10 hidden lg:block" />
              <div className="mt-10 border-t border-line pt-6 text-sm">
                <p className="text-muted">Prefer email or a call?</p>
                <a href={`mailto:${site.email}`} className="mt-2 block font-medium hover:text-brand-700">
                  {site.email}
                </a>
                <p className="mt-1 text-muted">{site.phones.join("  ·  ")}</p>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-line p-6 sm:p-10">
              <Suspense fallback={<ProjectForm />}>
                <ProjectFormWithParams />
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
