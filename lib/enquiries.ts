/**
 * Enquiry submission.
 *
 * TODO(backend): these functions currently simulate a successful submission so
 * the front end can be built and reviewed without a server. Replace the bodies
 * with real requests (e.g. POST to `${process.env.NEXT_PUBLIC_API_URL}/api/...`)
 * — the form components only depend on the `SubmitResult` shape.
 */

export type SubmitResult = { ok: true } | { ok: false; message: string; fieldErrors?: Record<string, string> };

export type ProjectEnquiry = {
  services: string[];
  description: string;
  budget: string;
  timeline: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  attachment?: File | null;
};

export type ContactEnquiry = {
  topic: string;
  name: string;
  email: string;
  company: string;
  message: string;
};

const simulate = () => new Promise<SubmitResult>((resolve) => setTimeout(() => resolve({ ok: true }), 800));

export async function submitProjectEnquiry(data: ProjectEnquiry): Promise<SubmitResult> {
  void data;
  return simulate();
}

export async function submitContactEnquiry(data: ContactEnquiry): Promise<SubmitResult> {
  void data;
  return simulate();
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
