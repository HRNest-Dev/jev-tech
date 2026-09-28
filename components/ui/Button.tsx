import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-dark" | "link" | "link-dark";
type Size = "md" | "lg";

type StyleProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-200 ease-out-quint disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-brand-500 text-ink hover:bg-brand-400 shadow-[inset_0_-1px_0_rgb(0_0_0/0.12)]",
  secondary: "rounded-full bg-ink text-white hover:bg-graphite-700",
  outline: "rounded-full border border-line-strong text-fg hover:border-fg hover:bg-surface",
  "outline-dark": "rounded-full border border-graphite-600 text-on-dark hover:border-on-dark hover:bg-graphite-800",
  link: "text-fg underline-offset-4 hover:underline",
  "link-dark": "text-on-dark underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses({ variant = "primary", size = "md", className }: StyleProps = {}) {
  const isLink = variant === "link" || variant === "link-dark";
  return cn(base, variants[variant], !isLink && sizes[size], className);
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 transition-transform duration-200 ease-out-quint group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function Button({ variant, size, arrow, className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

type ButtonLinkProps = StyleProps & Omit<ComponentProps<typeof Link>, "className"> & { children: ReactNode };

export function ButtonLink({ variant, size, arrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
