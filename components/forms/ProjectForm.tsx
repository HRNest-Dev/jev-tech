"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ATTACHMENT_ACCEPT, MAX_ATTACHMENT_MB, budgets, projectTypes, timelines } from "@/content/enquiry";
import { EMAIL_PATTERN, submitProjectEnquiry, type ProjectEnquiry } from "@/lib/enquiries";
import { track } from "@/lib/analytics";
import { Button, ButtonLink, Choice, Field, FieldError, Input, TextArea } from "@/components/ui";

type Errors = Partial<Record<"services" | "description" | "name" | "email" | "attachment" | "form", string>>;

/** Reads ?service=<slug> to preselect a project type. */
export function ProjectFormWithParams() {
  const params = useSearchParams();
  const slug = params.get("service");
  const preset = projectTypes.find((t) => t.service === slug)?.value;
  return <ProjectForm key={preset ?? "none"} initialServices={preset ? [preset] : []} />;
}

export default function ProjectForm({ initialServices = [] }: { initialServices?: string[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [services, setServices] = useState<string[]>(initialServices);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<ProjectEnquiry | null>(null);
  const started = useRef(false);

  const toggleService = (value: string) =>
    setServices((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return setDone({} as ProjectEnquiry); // honeypot

    const file = fd.get("attachment");
    const data: ProjectEnquiry = {
      services,
      description: String(fd.get("description") ?? "").trim(),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      attachment: file instanceof File && file.size > 0 ? file : null,
    };

    const next: Errors = {};
    if (data.services.length === 0) next.services = "Choose at least one option — “I’m not sure yet” is fine.";
    if (data.description.length < 10) next.description = "Tell us a little about the project.";
    if (!data.name) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(data.email)) next.email = "Please enter a valid email address.";
    if (data.attachment && data.attachment.size > MAX_ATTACHMENT_MB * 1024 * 1024)
      next.attachment = `Files must be under ${MAX_ATTACHMENT_MB}MB.`;

    setErrors(next);
    // Focus the first invalid field in form order. Looked up by id, not by
    // aria-invalid, because the error state hasn't rendered yet.
    const firstInvalid = (["services", "description", "attachment", "name", "email"] as const).find((k) => next[k]);
    if (firstInvalid) {
      const selector = firstInvalid === "services" ? "input[name='services']" : `#${firstInvalid}`;
      formRef.current?.querySelector<HTMLElement>(selector)?.focus();
      return;
    }

    setSubmitting(true);
    const result = await submitProjectEnquiry(data);
    setSubmitting(false);
    if (result.ok) {
      track("form_submit", { form: "project", services: data.services.join(","), budget: data.budget || undefined });
      setDone(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrors({ ...result.fieldErrors, form: result.message });
    }
  };

  if (done) return <Success enquiry={done} />;

  const invalid = (key: keyof Errors) =>
    errors[key] ? { "aria-invalid": true as const, "aria-describedby": `${key}-error` } : {};

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocus={() => {
        if (started.current) return;
        started.current = true;
        track("form_start", { form: "project" });
      }}
      noValidate
      className="space-y-14"
    >
      <Step number={1} title="What can we help you with?" hint="Choose all that apply.">
        <fieldset data-error={Boolean(errors.services)} aria-describedby={errors.services ? "services-error" : undefined}>
          <legend className="sr-only">Project type</legend>
          <div className="flex flex-wrap gap-2.5">
            {projectTypes.map((t) => (
              <Choice
                key={t.value}
                type="checkbox"
                name="services"
                value={t.value}
                label={t.label}
                checked={services.includes(t.value)}
                onChange={() => toggleService(t.value)}
              />
            ))}
          </div>
          <FieldError id="services-error" message={errors.services} />
        </fieldset>
      </Step>

      <Step number={2} title="Tell us about the project">
        <Field
          label="Project details"
          htmlFor="description"
          error={errors.description}
          hint="What are you trying to build or solve? Who is it for? Anything you already have in place?"
        >
          <TextArea id="description" name="description" rows={7} required {...invalid("description")} />
        </Field>
        <Field
          label="Attachment"
          htmlFor="attachment"
          optional
          error={errors.attachment}
          hint={`A brief, spec or reference — PDF, Office documents or images up to ${MAX_ATTACHMENT_MB}MB.`}
          className="mt-6"
        >
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept={ATTACHMENT_ACCEPT}
            {...invalid("attachment")}
            className="block w-full rounded-xl border border-dashed border-line-strong bg-canvas p-3 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-surface-strong file:px-4 file:py-2 file:text-sm file:font-medium file:text-fg hover:border-muted"
          />
        </Field>
      </Step>

      <Step number={3} title="Approximate budget" hint="A broad range helps us recommend the right approach.">
        <fieldset>
          <legend className="sr-only">Budget</legend>
          <div className="flex flex-wrap gap-2.5">
            {budgets.map((b) => (
              <Choice key={b} type="radio" name="budget" value={b} label={b} />
            ))}
          </div>
        </fieldset>
      </Step>

      <Step number={4} title="When would you like to start?">
        <fieldset>
          <legend className="sr-only">Timeline</legend>
          <div className="flex flex-wrap gap-2.5">
            {timelines.map((t) => (
              <Choice key={t} type="radio" name="timeline" value={t} label={t} />
            ))}
          </div>
        </fieldset>
      </Step>

      <Step number={5} title="Your details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" error={errors.name}>
            <Input id="name" name="name" autoComplete="name" required {...invalid("name")} />
          </Field>
          <Field label="Company" htmlFor="company" optional>
            <Input id="company" name="company" autoComplete="organization" />
          </Field>
          <Field label="Work email" htmlFor="email" error={errors.email}>
            <Input id="email" name="email" type="email" autoComplete="email" required {...invalid("email")} />
          </Field>
          <Field label="Phone" htmlFor="phone" optional>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </Field>
        </div>
      </Step>

      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col-reverse gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-muted">
          We only use your details to respond to this enquiry.
        </p>
        <Button type="submit" size="lg" arrow={!submitting} disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Submitting…" : "Submit Project"}
        </Button>
      </div>
      {errors.form && (
        <p role="alert" className="text-sm text-danger">
          {errors.form}
        </p>
      )}
    </form>
  );
}

function Step({ number, title, hint, children }: { number: number; title: string; hint?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`step-${number}`} className="grid gap-6 sm:grid-cols-[3rem_1fr]">
      <span className="flex size-9 items-center justify-center rounded-full border border-line-strong font-mono text-sm">
        {number}
      </span>
      <div>
        <h2 id={`step-${number}`} className="text-h4 font-semibold">
          {title}
        </h2>
        {hint && <p className="mt-1 text-sm text-muted">{hint}</p>}
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

function Success({ enquiry }: { enquiry: ProjectEnquiry }) {
  const firstName = enquiry.name?.split(" ")[0];
  const labels = (enquiry.services ?? []).map((v) => projectTypes.find((t) => t.value === v)?.label).filter(Boolean);
  return (
    <div role="status" className="py-4">
      <span className="flex size-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <h2 className="mt-8 text-h2 font-semibold text-balance">
        Thank you{firstName ? `, ${firstName}` : ""}. Your project is with us.
      </h2>
      <p className="mt-4 max-w-xl text-lead text-muted">
        We&rsquo;ll review what you&rsquo;ve shared and reply{enquiry.email ? ` to ${enquiry.email}` : ""} to arrange a
        conversation.
      </p>

      {labels.length > 0 && (
        <dl className="mt-10 grid gap-6 rounded-2xl bg-surface p-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-caption uppercase text-muted">Looking for</dt>
            <dd className="mt-2 text-sm">{labels.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-mono text-caption uppercase text-muted">Budget</dt>
            <dd className="mt-2 text-sm">{enquiry.budget || "Not specified"}</dd>
          </div>
          <div>
            <dt className="font-mono text-caption uppercase text-muted">Start</dt>
            <dd className="mt-2 text-sm">{enquiry.timeline || "Not specified"}</dd>
          </div>
        </dl>
      )}

      <h3 className="mt-12 text-h4 font-semibold">What happens next</h3>
      <ol className="mt-5 space-y-4">
        {[
          "We read your brief and, if needed, ask a few clarifying questions by email.",
          "We meet to talk through the problem, goals and constraints.",
          "We share a recommended approach, scope and next steps.",
        ].map((s, i) => (
          <li key={s} className="flex gap-4">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-xs">
              {i + 1}
            </span>
            <span className="pt-0.5 text-muted">{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href="/insights" variant="secondary" arrow>
          Read our insights
        </ButtonLink>
        <Link href="/" className="inline-flex h-11 items-center px-3 text-[0.9375rem] font-medium hover:underline hover:underline-offset-4">
          Back to home
        </Link>
      </div>
    </div>
  );
}
