/**
 * Enquiry form options and contact page copy.
 * Edit the option lists to change the dropdowns — the form updates itself.
 */

export const contactPage = {
  eyebrow: "Contact",
  title: "Let’s talk about your next project",
  lede:
    "Tell us about your project and we will get back to you to arrange a first meeting. You can also call us directly.",
  successTitle: "Thank you",
  successBody: "Your enquiry has reached Oakland. We will be in touch shortly to arrange a first conversation.",
};

export const projectTypes = [
  "Administrative / office",
  "Residential",
  "Hospitality",
  "Woodwork only",
  "Consulting",
  "Something else",
];

// PLACEHOLDER ranges — confirm or adjust to suit typical project sizes.
export const budgetRanges = [
  "Under EGP 1 million",
  "EGP 1 – 5 million",
  "EGP 5 – 15 million",
  "EGP 15 million +",
  "Not sure yet",
];

export const timelines = [
  "As soon as possible",
  "Within 3 months",
  "Within 3 – 6 months",
  "More than 6 months away",
  "Flexible",
];

export const upload = {
  maxFiles: 5,
  maxSizeMb: 10,
  accept: ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"],
  acceptLabel: "JPG, PNG, WEBP, HEIC or PDF",
};
