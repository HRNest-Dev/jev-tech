import type { Block } from "./insights/types";
import { site } from "@/lib/site";

// TODO(legal): drafts written around what this website actually does. Have
// them reviewed by counsel, confirm the legal entity name and retention
// period, and update `updated` before launch.

export type LegalDoc = { title: string; description: string; updated: string; body: Block[] };

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information shared through this website.`,
  updated: "2026-09-28",
  body: [
    {
      type: "p",
      text: `This policy explains how ${site.legalName} (“JEV”, “we”, “us”) handles personal information you share with us through ${new URL(site.url).hostname}. We process personal data in line with the Nigeria Data Protection Act 2023 and other applicable laws.`,
    },
    { type: "h2", text: "Information we collect" },
    {
      type: "p",
      text: "We only collect information you choose to give us, and basic technical information needed to run the website.",
    },
    {
      type: "ul",
      items: [
        "Project enquiries: the services you’re interested in, your project description, budget range, preferred start date, your name, company, email address, phone number and any file you attach.",
        "Contact messages: the topic, your name, email address, company and message.",
        "Insights subscriptions: your email address, used only to send new articles.",
        "Technical information: standard server logs such as IP address, browser type and pages requested, kept by our hosting provider for security and reliability.",
      ],
    },
    {
      type: "p",
      text: "We don’t currently use advertising or analytics cookies. If we introduce them, we will update this policy and ask for your consent where required.",
    },
    { type: "h2", text: "How we use your information" },
    {
      type: "ul",
      items: [
        "To respond to your enquiry or message.",
        "To understand your project and prepare proposals, estimates or recommendations.",
        "To arrange and hold conversations about working together.",
        "To send new Insights articles if you subscribed. Every email includes a way to unsubscribe, and you can ask us to remove you at any time.",
        "To keep the website secure and working properly.",
      ],
    },
    {
      type: "p",
      text: "We rely on your consent when you submit a form, on steps you ask us to take before entering a contract, and on our legitimate interest in running and securing our website. We don’t sell your personal information or use it for unrelated marketing.",
    },
    { type: "h2", text: "Who we share it with" },
    {
      type: "p",
      text: "Your information is accessible to the JEV team members who need it to respond to you. We use trusted service providers — for example website hosting and email — who process data on our behalf under appropriate agreements. We may disclose information where required by law.",
    },
    {
      type: "p",
      text: "Some of these providers may store data outside Nigeria. Where this happens, we take steps to ensure your information remains protected in line with Nigerian data protection law.",
    },
    { type: "h2", text: "How long we keep it" },
    {
      type: "p",
      text: "We keep enquiry information for as long as needed to respond and, if we work together, for the duration of that relationship and any period required by law. Enquiries that don’t lead to an engagement are reviewed and deleted periodically.",
    },
    { type: "h2", text: "How we protect it" },
    {
      type: "p",
      text: "We use encrypted connections, access controls and reputable infrastructure providers to protect personal information. No system is completely secure, but we work to protect your data and will act promptly if an incident occurs.",
    },
    { type: "h2", text: "Your rights" },
    {
      type: "p",
      text: "Under the Nigeria Data Protection Act 2023, you have the right to:",
    },
    {
      type: "ul",
      items: [
        "Access the personal information we hold about you.",
        "Ask us to correct inaccurate or incomplete information.",
        "Ask us to delete your information.",
        "Object to or ask us to restrict certain processing.",
        "Receive your information in a portable format.",
        "Withdraw consent at any time, without affecting earlier processing.",
      ],
    },
    {
      type: "p",
      text: `To exercise any of these rights, email ${site.email}. If you’re unhappy with how we’ve handled your information, you can also contact the Nigeria Data Protection Commission.`,
    },
    { type: "h2", text: "Changes to this policy" },
    {
      type: "p",
      text: "We may update this policy as our website and services change. The date at the top of this page shows when it was last updated.",
    },
    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `Questions about this policy or your personal information can be sent to ${site.email}.`,
    },
  ],
};

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
    { type: "h2", text: "Privacy" },
    {
      type: "p",
      text: "Our Privacy Policy explains how we handle personal information you share through the website.",
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
