/**
 * Commission form submission.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  TODO(backend): PLACEHOLDER HANDLER — nothing is sent anywhere yet.
 *
 *  Replace the body of `submitCommission` with a real integration, e.g.:
 *    • a form service (Formspree, Basin, Getform):
 *        await fetch("https://formspree.io/f/<id>", { method: "POST", body: toFormData(data) })
 *    • your own API route / serverless function that emails the studio
 *      (Resend, Postmark, SendGrid) and/or creates a CRM lead (HubSpot, Pipedrive)
 *
 *  `toFormData` below already packages every field and uploaded file as
 *  multipart/form-data, which most services accept directly.
 *  Throw an Error on failure — the form will show a friendly retry message.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type CommissionRequest = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  files: File[];
};

export async function submitCommission(data: CommissionRequest): Promise<void> {
  // PLACEHOLDER: log the enquiry and simulate a short network delay.
  console.log("[Oakland] Project enquiry (placeholder handler — not sent):", {
    ...data,
    files: data.files.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`),
  });
  await new Promise((resolve) => setTimeout(resolve, 900));
}

/** Packages the request as multipart/form-data for a real endpoint. */
export function toFormData(data: CommissionRequest): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (key !== "files") fd.append(key, value as string);
  }
  data.files.forEach((file) => fd.append("references", file, file.name));
  return fd;
}
