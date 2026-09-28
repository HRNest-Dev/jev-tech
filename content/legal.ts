import type { Block } from "./insights/types";
import { site } from "@/lib/site";

// TODO(legal): draft written around what this website actually does. Have it
// reviewed by counsel, confirm the legal entity name, and update `updated`
// before launch. (The Privacy Policy was removed for now at the user's request.)

export type LegalDoc = { title: string; description: string; updated: string; body: Block[] };

export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  description: `The terms that apply when you use the ${site.name} website.`,
  updated: "2026-09-28",
  body: [
    {
      type: "p",
      text: `These terms apply to your use of ${new URL(site.url).hostname}, operated by ${site.legalName}. By using the website, you agree to them. Work we carry out for clients is governed by separate written agreements, not by these terms.`,
    },
    { type: "h2", text: "Using the website" },
    {
      type: "ul",
      items: [
        "Use the website lawfully and don’t attempt to disrupt, damage or gain unauthorized access to it.",
        "Only submit information through our forms that is accurate and that you’re entitled to share.",
        "Don’t use automated means to collect content or submit forms.",
      ],
    },
    { type: "h2", text: "Content and intellectual property" },
    {
      type: "p",
      text: `The website’s design, text, graphics, logos and product names — including StaffDem — belong to ${site.legalName} or its licensors. You may view and share pages for personal or internal business use, but may not copy, modify or republish content without our permission. Some photography is used under licence from third parties.`,
    },
    { type: "h2", text: "Information on this website" },
    {
      type: "p",
      text: "We aim to keep information accurate and up to date, but it is provided for general information only. Timelines, examples and descriptions of services are indicative and don’t form an offer. Specific scope, pricing and commitments are agreed in writing for each engagement.",
    },
    { type: "h2", text: "Links to other websites" },
    {
      type: "p",
      text: "Where we link to other websites, we do so for convenience. We aren’t responsible for their content or practices.",
    },
    { type: "h2", text: "Liability" },
    {
      type: "p",
      text: "The website is provided “as is”. To the extent permitted by law, we aren’t liable for losses arising from use of, or inability to use, the website or reliance on its content. Nothing in these terms limits liability that can’t be limited by law.",
    },
    { type: "h2", text: "Changes and governing law" },
    {
      type: "p",
      text: "We may update these terms from time to time; the date at the top of this page shows the latest version. These terms are governed by the laws of the Federal Republic of Nigeria.",
    },
    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `Questions about these terms can be sent to ${site.email}.`,
    },
  ],
};
