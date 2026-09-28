"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { EMAIL_PATTERN, subscribeToInsights } from "@/lib/enquiries";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui";

/** "Get new insights by email" signup. Submits through the stub in lib/enquiries.ts. */
export default function SubscribeCard({ className }: { className?: string }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setError("Please enter a valid email address.");
      document.getElementById(`${id}-email`)?.focus();
      return;
    }
    setError(null);
    setStatus("sending");
    const result = await subscribeToInsights(value);
    if (result.ok) {
      track("newsletter_signup");
      setStatus("done");
    } else {
      setError(result.message);
      setStatus("idle");
    }
  };

  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn("rounded-3xl bg-ink p-8 text-on-dark sm:p-10 lg:p-12", className)}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id={`${id}-title`} className="text-h3 font-semibold text-white">
            Get new insights by email.
          </h2>
          <p className="mt-3 text-on-dark-muted">
            Practical articles on software, product and technology decisions. Occasional, useful, and easy to
            unsubscribe from.
          </p>
        </div>

        <div className="lg:col-span-6">
          {status === "done" ? (
            <p role="status" className="flex items-center gap-3 text-lead text-white">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
              </span>
              You&rsquo;re subscribed. Thanks for reading.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor={`${id}-email`} className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id={`${id}-email`}
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${id}-error` : `${id}-note`}
                  className="h-12 w-full rounded-full border border-graphite-600 bg-graphite-900 px-5 text-[0.9375rem] text-white placeholder:text-on-dark-muted/70 focus:border-brand-500 focus:ring-3 focus:ring-brand-500/25 focus:outline-none aria-invalid:border-danger"
                />
                <Button type="submit" size="md" disabled={status === "sending"} className="h-12 shrink-0">
                  {status === "sending" ? "Subscribing…" : "Subscribe"}
                </Button>
              </div>
              {error ? (
                <p id={`${id}-error`} className="mt-3 text-sm text-red-300">
                  {error}
                </p>
              ) : (
                <p id={`${id}-note`} className="mt-3 text-xs text-on-dark-muted">
                  We&rsquo;ll only use your email to send new articles. See our{" "}
                  <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
