import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
  onClick?: () => void;
};

/** Mark + wordmark lockup for horizontal placements (navbar, footer). */
export default function Logo({ tone = "light", className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image src="/brand/jev-mark.png" alt="" width={208} height={192} priority className="h-8 w-auto" />
      <span className="flex items-baseline gap-1.5 text-[1.0625rem] leading-none tracking-tight">
        <span className={cn("font-bold", tone === "dark" ? "text-white" : "text-ink")}>JEV</span>
        <span className={cn("font-medium", tone === "dark" ? "text-on-dark-muted" : "text-muted")}>Technologies</span>
      </span>
    </Link>
  );
}
