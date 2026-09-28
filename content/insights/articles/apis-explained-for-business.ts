import type { Insight } from "../types";

export const apisExplained: Insight = {
  slug: "apis-explained-for-business",
  title: "APIs explained: how business systems talk to each other",
  excerpt:
    "A plain-language guide to APIs and integrations for business leaders — what they are, why they fail, and what to ask before connecting your systems.",
  category: "Engineering",
  tags: ["APIs", "Integration", "Systems"],
  author: "JEV Technologies",
  date: "2026-09-28",
  cover: "insight-apis",
  status: "published",
  body: [
    {
      type: "p",
      text: "Most organizations run on several systems: accounting, payroll, a CRM, a payment provider, a website. Each holds part of the picture. When they don’t share information, people fill the gaps by exporting, copying and re-typing data. APIs are how systems share that information automatically.",
    },
    { type: "h2", text: "What an API is, in one paragraph" },
    {
      type: "p",
      text: "An API (application programming interface) is a set of agreed requests one system can make to another. A payment provider’s API lets your store ask “was this payment successful?” and get a reliable answer. An accounting API lets your sales system create an invoice without anyone typing it. The API is the contract; the integration is the work that uses it.",
    },
    { type: "h2", text: "Common integrations and what they replace" },
    {
      type: "ul",
      items: [
        "Payments → no more manually matching bank alerts to orders.",
        "Accounting → invoices and payments recorded once, not twice.",
        "HR and payroll → staff changes reflected everywhere automatically.",
        "CRM → customer details and history available to sales and support.",
        "SMS and email → notifications sent the moment something happens.",
      ],
    },
    { type: "h2", text: "Why integrations fail" },
    {
      type: "p",
      text: "Integrations rarely fail loudly. A payment confirmation arrives twice, a network request times out, a field is renamed in one system. Without careful design, these small failures lead to missing records, duplicate charges or reports that don’t reconcile — often discovered weeks later.",
    },
    {
      type: "p",
      text: "Well-built integrations assume things will go wrong. They retry safely, avoid processing the same event twice, reconcile regularly, and alert someone when something needs attention.",
    },
    {
      type: "quote",
      text: "A good integration isn’t one that never fails. It’s one where failures are caught, visible and easy to fix.",
    },
    { type: "h2", text: "Questions to ask before connecting systems" },
    {
      type: "ol",
      items: [
        "Which system is the source of truth for each piece of data?",
        "What should happen if one system is unavailable?",
        "How quickly does data need to move — instantly, hourly, daily?",
        "Who is alerted when something fails, and how?",
        "How is access secured, and who can see the data in transit?",
        "What happens when one of the vendors changes their API?",
      ],
    },
    { type: "h2", text: "When a system has no API" },
    {
      type: "p",
      text: "Older or specialist systems sometimes offer no API. Integration may still be possible through scheduled file exchanges, database connections or other automation — but these need extra care around security and reliability. It’s worth assessing the options before deciding a system has to be replaced.",
    },
    {
      type: "p",
      text: "Done well, integration is invisible: data simply appears where it’s needed, and your team stops being the glue between systems.",
    },
  ],
};
