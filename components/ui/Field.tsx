import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const control =
  "block w-full rounded-xl border border-line-strong bg-canvas px-4 py-3 text-[0.9375rem] text-fg placeholder:text-muted/70 transition-colors duration-150 hover:border-muted focus:border-brand-600 focus:outline-none focus:ring-3 focus:ring-brand-500/20 aria-invalid:border-danger aria-invalid:ring-danger/15";

type FieldProps = {
  label: string;
  htmlFor: string;
  optional?: boolean;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
  className?: string;
};

/** Error/hint element ids are `${htmlFor}-error` and `${htmlFor}-hint` for aria-describedby. */
export function Field({ label, htmlFor, optional, hint, error, children, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 flex items-baseline justify-between text-sm font-medium text-fg">
        {label}
        {optional && <span className="text-xs font-normal text-muted">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${htmlFor}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      <FieldError id={`${htmlFor}-error`} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-danger">
      {message}
    </p>
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(control, "h-12", className)} {...props} />;
}

export function TextArea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(control, "min-h-36 resize-y", className)} {...props} />;
}

export function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select className={cn(control, "h-12 appearance-none pr-10", className)} {...props}>
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </div>
  );
}

type ChoiceProps = Omit<ComponentProps<"input">, "type"> & { type: "checkbox" | "radio"; label: string };

/** Pill-style checkbox/radio. Keeps the native input for keyboard and screen-reader support. */
export function Choice({ label, className, ...props }: ChoiceProps) {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center rounded-full border border-line-strong bg-canvas px-4 py-2.5 text-sm text-fg transition-colors select-none hover:border-muted has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:ring-3 has-focus-visible:ring-brand-500/40",
        className,
      )}
    >
      <input className="sr-only" {...props} />
      {label}
    </label>
  );
}
