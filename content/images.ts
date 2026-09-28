import type { StaticImageData } from "next/image";

import companyHero from "@/public/images/company-hero.jpg";
import companyStory from "@/public/images/company-story.jpg";
import servicesHero from "@/public/images/services-hero.jpg";
import corporateWebsites from "@/public/images/corporate-websites.jpg";
import ecommerce from "@/public/images/ecommerce.jpg";
import customSoftware from "@/public/images/custom-software.jpg";
import webApplications from "@/public/images/web-applications.jpg";
import mobileApps from "@/public/images/mobile-apps.jpg";
import uiUxDesign from "@/public/images/ui-ux-design.jpg";
import apiIntegration from "@/public/images/api-integration.jpg";
import cloudDevops from "@/public/images/cloud-devops.jpg";
import technologyConsulting from "@/public/images/technology-consulting.jpg";
import staffdem from "@/public/images/staffdem.jpg";
import insightCustomSoftware from "@/public/images/insight-custom-software.jpg";
import insightProjectPlanning from "@/public/images/insight-project-planning.jpg";
import insightCorporateWebsite from "@/public/images/insight-corporate-website.jpg";
import contact from "@/public/images/contact.jpg";
import startProject from "@/public/images/start-project.jpg";
import insightAutomation from "@/public/images/insight-automation.jpg";
import insightEmployeeSoftware from "@/public/images/insight-employee-software.jpg";
import insightMobileApp from "@/public/images/insight-mobile-app.jpg";
import insightApis from "@/public/images/insight-apis.jpg";
import insightSaas from "@/public/images/insight-saas.jpg";
import insightHrPayroll from "@/public/images/insight-hr-payroll.jpg";

// Photography from Pexels (free for commercial use). Credits are kept for reference;
// replace with JEV's own photography as it becomes available.
export const images = {
  "company-hero": {
    src: companyHero,
    alt: "Four colleagues working together at a shared desk in a bright, modern office",
    credit: { photographer: "Edmond Dantès", url: "https://www.pexels.com/photo/people-working-at-the-office-8547344/" },
  },
  "company-story": {
    src: companyStory,
    alt: "Team member writing a plan on a flip-chart whiteboard while colleagues look on during a meeting",
    credit: { photographer: "Mikhail Nilov", url: "https://www.pexels.com/photo/people-having-a-meeting-9301243/" },
  },
  "services-hero": {
    src: servicesHero,
    alt: "Product team reviewing work together on a laptop in a light-filled office",
    credit: { photographer: "Edmond Dantès", url: "https://www.pexels.com/photo/people-looking-at-the-screen-of-a-laptop-8547282/" },
  },
  "corporate-websites": {
    src: corporateWebsites,
    alt: "Professional focused on a laptop at his desk in a bright office",
    credit: { photographer: "Ola Dapo", url: "https://www.pexels.com/photo/man-using-gray-laptop-6744352/" },
  },
  "ecommerce": {
    src: ecommerce,
    alt: "Close-up of a hand holding a payment card beside a smartphone for an online purchase",
    credit: { photographer: "Tima Miroshnichenko", url: "https://www.pexels.com/photo/person-holding-brown-credit-card-and-cellphone-5198284/" },
  },
  "custom-software": {
    src: customSoftware,
    alt: "Office professional working in business software on a desktop computer",
    credit: { photographer: "Thirdman", url: "https://www.pexels.com/photo/man-typing-on-a-computer-5058917/" },
  },
  "web-applications": {
    src: webApplications,
    alt: "Laptop displaying an analytics dashboard with charts and data tables",
    credit: { photographer: "Lukas Blazek", url: "https://www.pexels.com/photo/close-up-photo-of-gray-laptop-577210/" },
  },
  "mobile-apps": {
    src: mobileApps,
    alt: "Hands holding and using an app on a smartphone",
    credit: { photographer: "cottonbro studio", url: "https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-smartphone-7223927/" },
  },
  "ui-ux-design": {
    src: uiUxDesign,
    alt: "Hand-drawn website wireframes in a sketchbook beside a smartphone and keyboard",
    credit: { photographer: "picjumbo.com", url: "https://www.pexels.com/photo/blue-pen-beside-black-smartphone-on-white-paper-196646/" },
  },
  "api-integration": {
    src: apiIntegration,
    alt: "Software developer writing code across a desktop monitor and laptop",
    credit: { photographer: "Naboth Otieno", url: "https://www.pexels.com/photo/man-working-on-computer-in-an-office-19805876/" },
  },
  "cloud-devops": {
    src: cloudDevops,
    alt: "Rows of server racks lining an aisle in a data center",
    credit: { photographer: "Brett Sayles", url: "https://www.pexels.com/photo/server-racks-on-data-center-4508751/" },
  },
  "technology-consulting": {
    src: technologyConsulting,
    alt: "Consultant sketching a strategy on a whiteboard during a meeting with clients",
    credit: { photographer: "Sora Shimazaki", url: "https://www.pexels.com/photo/professional-woman-discussing-on-white-board-5668762/" },
  },
  "staffdem": {
    src: staffdem,
    alt: "Group of colleagues talking together in a bright office corridor",
    credit: { photographer: "PICHA Stock", url: "https://www.pexels.com/photo/women-having-a-conversation-3869641/" },
  },
  "insight-custom-software": {
    src: insightCustomSoftware,
    alt: "Businesswoman thinking while working on a laptop at her office desk",
    credit: { photographer: "Sora Shimazaki", url: "https://www.pexels.com/photo/thoughtful-black-businesswoman-working-on-project-in-office-5668845/" },
  },
  "insight-project-planning": {
    src: insightProjectPlanning,
    alt: "Planning board with sticky notes organised into backlog and weekly columns",
    credit: { photographer: "cottonbro studio", url: "https://www.pexels.com/photo/close-up-photo-of-sticky-notes-on-whiteboard-5990265/" },
  },
  "insight-corporate-website": {
    src: insightCorporateWebsite,
    alt: "Laptop showing a clean website on a desk beside a cup of coffee",
    credit: { photographer: "Pixabay", url: "https://www.pexels.com/photo/person-holding-a-cup-of-coffee-beside-macbook-461073/" },
  },
  "contact": {
    src: contact,
    alt: "Professional woman in glasses talking on the phone at her desk",
    credit: { photographer: "Anna Shvets", url: "https://www.pexels.com/photo/woman-in-black-blazer-talking-on-the-phone-3727462/" },
  },
  "start-project": {
    src: startProject,
    alt: "Two colleagues brainstorming ideas on a whiteboard",
    credit: { photographer: "Antoni Shkraba", url: "https://www.pexels.com/photo/a-woman-and-man-working-together-5466268/" },
  },
  "insight-automation": {
    src: insightAutomation,
    alt: "Professional reviewing printed documents beside her laptop at a bright office desk",
    credit: { photographer: "RDNE Stock project", url: "https://www.pexels.com/photo/woman-working-in-office-10375911/" },
  },
  "insight-employee-software": {
    src: insightEmployeeSoftware,
    alt: "Employee working in business software across a desktop monitor and laptop in a light-filled office",
    credit: { photographer: "RDNE Stock project", url: "https://www.pexels.com/photo/man-working-at-desk-with-computers-in-office-10376017/" },
  },
  "insight-mobile-app": {
    src: insightMobileApp,
    alt: "Hand using a smartphone app placed over hand-drawn app wireframe sketches",
    credit: { photographer: "Akshar Dave", url: "https://www.pexels.com/photo/a-person-holding-black-smartphone-11780441/" },
  },
  "insight-apis": {
    src: insightApis,
    alt: "Neatly connected fibre cables plugged into a network patch panel",
    credit: { photographer: "Brett Sayles", url: "https://www.pexels.com/photo/cable-plugged-on-a-patch-panel-2425567/" },
  },
  "insight-saas": {
    src: insightSaas,
    alt: "Product team discussing a plan around a table with laptops and a wall screen",
    credit: { photographer: "Moe Magners", url: "https://www.pexels.com/photo/people-having-a-discussion-at-the-office-7495644/" },
  },
  "insight-hr-payroll": {
    src: insightHrPayroll,
    alt: "Professional reviewing employee forms and records beside a laptop",
    credit: { photographer: "Alexander Suhorucov", url: "https://www.pexels.com/photo/black-woman-reading-information-of-important-document-6457522/" },
  },
} satisfies Record<string, { src: StaticImageData; alt: string; credit: { photographer: string; url: string } }>;

export type ImageKey = keyof typeof images;
