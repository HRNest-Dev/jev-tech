/** Options for the Start a Project form. `service` links an option to a /services/[slug] page. */
export const projectTypes: { value: string; label: string; service?: string }[] = [
  { value: "corporate-website", label: "Corporate Website", service: "corporate-websites" },
  { value: "business-website", label: "Business Website" },
  { value: "ecommerce", label: "E-Commerce", service: "ecommerce" },
  { value: "custom-software", label: "Custom Software", service: "custom-software" },
  { value: "web-application", label: "Web Application", service: "web-applications" },
  { value: "mobile-application", label: "Mobile Application", service: "mobile-apps" },
  { value: "ui-ux", label: "UI/UX", service: "ui-ux-design" },
  { value: "product-design", label: "Product Design" },
  { value: "integration", label: "APIs & Integration", service: "api-integration" },
  { value: "cloud-devops", label: "Cloud & DevOps", service: "cloud-devops" },
  { value: "existing-product", label: "Existing Product Improvement" },
  { value: "consulting", label: "Technology Consulting", service: "technology-consulting" },
  { value: "not-sure", label: "I’m not sure yet" },
];

// TODO(content): confirm currency and bands with the business.
export const budgets = [
  "Under ₦5M",
  "₦5M – ₦15M",
  "₦15M – ₦40M",
  "₦40M – ₦100M",
  "₦100M+",
  "Not sure yet",
];

export const timelines = ["Immediately", "Within one month", "1–3 months", "3–6 months", "Just exploring"];

export const contactTopics = [
  { value: "general", label: "General enquiry" },
  { value: "project", label: "A new project" },
  { value: "staffdem", label: "StaffDem" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
];

export const MAX_ATTACHMENT_MB = 10;
export const ATTACHMENT_ACCEPT = ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg";
