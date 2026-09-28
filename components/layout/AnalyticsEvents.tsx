"use client";

import { useEffect } from "react";
import { eventForHref, track } from "@/lib/analytics";

/** One delegated listener that reports clicks on tracked links (see eventForHref). */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;
      const event = eventForHref(href);
      if (event) track(event, { href, label: link?.textContent?.trim().slice(0, 60) });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
