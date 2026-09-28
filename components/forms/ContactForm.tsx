"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { contactTopics } from "@/content/enquiry";
import { EMAIL_PATTERN, submitContactEnquiry } from "@/lib/enquiries";
import { Button, Field, Input, Select, TextArea } from "@/components/ui";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

/** Reads ?topic=<value> to preselect the topic. */
export function ContactFormWithParams() {
  const topic = useSearchParams().get("topic");
  const preset = contactTopics.some((t) => t.value === topic) ? topic! : "general";
  return <ContactForm key={preset} initialTopic={preset} />;
}

export default function ContactForm({ initialTopic = "general" }: { initialTopic?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return setSentTo("");

    const data = {
      topic: String(fd.get("topic") ?? "general"),
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    const next: Errors = {};
    if (!data.name) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(data.email)) next.email = "Please enter a valid email address.";
    if (data.message.length < 5) next.message = "Please enter a message.";
    setErrors(next);
    // Focus the first invalid field in form order (the error state hasn't rendered yet).
    const firstInvalid = (["name", "email", "message"] as const).find((k) => next[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);
    const result = await submitContactEnquiry(data);
    setSubmitting(false);
    if (result.ok) setSentTo(data.name);
    else setErrors({ ...result.fieldErrors, form: result.message });
  };

  if (sentTo !== null) {
    return (
      <div role="status" className="flex min-h-96 flex-col items-start justify-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2 className="mt-6 text-h3 font-semibold">Thanks{sentTo ? `, ${sentTo.split(" ")[0]}` : ""}. We&rsquo;ve got your message.</h2>
        <p className="mt-3 max-w-md text-muted">We&rsquo;ll get back to you by email as soon as we can.</p>
        <Button variant="outline" className="mt-8" onClick={() => setSentTo(null)}>
          Send another message
        </Button>
      </div>
    );
  }

  const invalid = (key: keyof Errors) =>
    errors[key] ? { "aria-invalid": true as const, "aria-describedby": `${key}-error` } : {};

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Topic" htmlFor="topic" className="sm:col-span-2">
        <Select id="topic" name="topic" defaultValue={initialTopic}>
          {contactTopics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Your name" htmlFor="name" error={errors.name}>
        <Input id="name" name="name" autoComplete="name" required {...invalid("name")} />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email}>
        <Input id="email" name="email" type="email" autoComplete="email" required {...invalid("email")} />
      </Field>
      <Field label="Company" htmlFor="company" optional className="sm:col-span-2">
        <Input id="company" name="company" autoComplete="organization" />
      </Field>
      <Field label="Message" htmlFor="message" error={errors.message} className="sm:col-span-2">
        <TextArea id="message" name="message" rows={6} required {...invalid("message")} />
      </Field>

      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We only use your details to respond to this message.</p>
        <Button type="submit" size="lg" arrow={!submitting} disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
      {errors.form && (
        <p role="alert" className="text-sm text-danger sm:col-span-2">
          {errors.form}
        </p>
      )}
    </form>
  );
}
