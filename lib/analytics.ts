/**
 * Conversion events from the brief. `track` hands events to whichever analytics
 * tool is installed on the page (a tag manager's dataLayer, or Plausible) and
 * does nothing otherwise — so no data is collected until a provider is added.
 * If the chosen provider sets cookies, add a consent banner before enabling it.
 */
export type AnalyticsEvent =
  | "start_project_click"
  | "staffdem_demo_click"
  | "email_click"
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "newsletter_signup";

type Props = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...props, path: window.location.pathname };
  window.dataLayer?.push({ event, ...payload });
  window.plausible?.(event, { props: payload });
  if (process.env.NODE_ENV === "development") console.debug("[analytics]", event, payload);
}

/** Maps a clicked link to an event, based on where it goes. */
export function eventForHref(href: string): AnalyticsEvent | null {
  if (href.startsWith("mailto:")) return "email_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("topic=staffdem")) return "staffdem_demo_click";
  if (href.startsWith("/start-a-project")) return "start_project_click";
  return null;
}
