"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { budgetRanges, contactPage, projectTypes, timelines, upload } from "@/content/contact";
import { submitCommission, type CommissionRequest } from "@/lib/submitCommission";

type Values = Omit<CommissionRequest, "files">;
type Field = keyof Values | "files";
type Errors = Partial<Record<Field, string>>;

const initial: Values = {
  name: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

// Order matters: the first invalid field in this list receives focus.
const FIELD_ORDER: Field[] = ["name", "email", "phone", "location", "projectType", "budget", "timeline", "description", "files"];
const MIN_DESCRIPTION = 40;

// Some browsers report an empty MIME type (notably for HEIC), so fall back to the extension.
const isAccepted = (f: File) => upload.accept.includes(f.type) || /\.(jpe?g|png|webp|heic|pdf)$/i.test(f.name);

function validate(values: Values, files: File[]): Errors {
  const e: Errors = {};
  if (values.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!values.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
  if (values.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(values.phone.trim()))
    e.phone = "Please enter a valid phone number, or leave this blank.";
  if (!values.projectType) e.projectType = "Please choose the type of project.";
  if (!values.budget) e.budget = "Please choose an approximate budget.";
  if (!values.timeline) e.timeline = "Please choose a timeline.";
  if (values.description.trim().length < MIN_DESCRIPTION)
    e.description = `Please share a little more — at least ${MIN_DESCRIPTION} characters.`;
  if (files.length > upload.maxFiles) e.files = `Please attach no more than ${upload.maxFiles} files.`;
  else if (files.some((f) => !isAccepted(f)))
    e.files = `Some files are not a supported type (${upload.acceptLabel}).`;
  else if (files.some((f) => f.size > upload.maxSizeMb * 1024 * 1024))
    e.files = `Each file must be smaller than ${upload.maxSizeMb} MB.`;
  return e;
}

export default function CommissionForm() {
  const [values, setValues] = useState<Values>(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const errors = validate(values, files);
  const shown = (f: Field) => ((submitted || touched[f]) && errors[f]) || undefined;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const onBlur = (e: { target: { name: string } }) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files ?? []));
    setTouched((t) => ({ ...t, files: true }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Honeypot: real visitors never see or fill this field.
    const trap = new FormData(e.currentTarget).get("company_website");
    if (trap) return;

    const first = FIELD_ORDER.find((f) => errors[f]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitCommission({ ...values, name: values.name.trim(), email: values.email.trim(), files });
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="animate-fade-up border border-brass/40 p-10 outline-none sm:p-14">
        <p className="eyebrow text-brass">Enquiry received</p>
        <h2 className="display mt-6 text-4xl text-cream sm:text-5xl">{contactPage.successTitle}</h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-stone">{contactPage.successBody}</p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="form-note" className="space-y-10">
      <p id="form-note" className="text-sm text-stone">
        Fields marked <span aria-hidden="true" className="text-brass">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div aria-live="assertive" className="empty:hidden">
        {submitted && errorCount > 0 && (
          <p className="border-l-2 border-[#e59a7f] pl-4 text-sm text-[#f0b8a4]">
            Please check the {errorCount === 1 ? "highlighted field" : `${errorCount} highlighted fields`} below.
          </p>
        )}
      </div>

      <fieldset className="space-y-10">
        <legend className="eyebrow mb-8 text-brass">About you</legend>
        <div className="grid gap-10 sm:grid-cols-2">
          <TextField label="Full name" name="name" required autoComplete="name" value={values.name} error={shown("name")} onChange={onChange} onBlur={onBlur} />
          <TextField label="Email" name="email" type="email" required autoComplete="email" value={values.email} error={shown("email")} onChange={onChange} onBlur={onBlur} />
          <TextField label="Phone" name="phone" type="tel" autoComplete="tel" hint="Optional" value={values.phone} error={shown("phone")} onChange={onChange} onBlur={onBlur} />
          <TextField label="Project location" name="location" autoComplete="address-level2" hint="Optional — area or city" value={values.location} error={shown("location")} onChange={onChange} onBlur={onBlur} />
        </div>
      </fieldset>

      <fieldset className="space-y-10">
        <legend className="eyebrow mb-8 text-brass">Your project</legend>
        <div className="grid gap-10 sm:grid-cols-3">
          <SelectField label="Project type" name="projectType" options={projectTypes} value={values.projectType} error={shown("projectType")} onChange={onChange} onBlur={onBlur} />
          <SelectField label="Approximate budget" name="budget" options={budgetRanges} value={values.budget} error={shown("budget")} onChange={onChange} onBlur={onBlur} />
          <SelectField label="Timeline" name="timeline" options={timelines} value={values.timeline} error={shown("timeline")} onChange={onChange} onBlur={onBlur} />
        </div>

        <FieldShell
          id="description"
          label="Tell us about the project"
          required
          hint="The space and its size, the scope of work, your role (owner, designer or contractor), and any drawings or references."
          error={shown("description")}
        >
          {(describedBy) => (
            <textarea
              id="description"
              name="description"
              rows={6}
              required
              value={values.description}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={!!shown("description")}
              aria-describedby={describedBy}
              className={`${inputClass} resize-y`}
            />
          )}
        </FieldShell>

        <FieldShell
          id="files"
          label="Drawings & references"
          hint={`Optional — up to ${upload.maxFiles} files, ${upload.maxSizeMb} MB each (${upload.acceptLabel}). Drawings, photos of the site or references.`}
          error={shown("files")}
        >
          {(describedBy) => (
            <div>
              <input
                id="files"
                name="files"
                type="file"
                multiple
                accept={upload.accept.join(",")}
                onChange={onFiles}
                aria-invalid={!!shown("files")}
                aria-describedby={describedBy}
                className="block w-full cursor-pointer border border-dashed border-cream/25 px-5 py-6 text-sm text-stone transition-colors file:mr-5 file:cursor-pointer file:border file:border-brass/60 file:bg-transparent file:px-5 file:py-2.5 file:text-[0.7rem] file:font-semibold file:tracking-[0.22em] file:text-cream file:uppercase hover:border-cream/45 hover:file:bg-brass hover:file:text-ink"
              />
              {files.length > 0 && (
                <ul className="mt-4 space-y-1 text-sm text-stone">
                  {files.map((f) => (
                    <li key={f.name + f.size}>
                      {f.name} <span className="text-stone/70">· {(f.size / (1024 * 1024)).toFixed(1)} MB</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </FieldShell>
      </fieldset>

      {/* Honeypot — hidden from people and assistive tech, catches naive bots. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-[#e59a7f] pl-4 text-sm text-[#f0b8a4]">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}

      <div className="flex flex-col items-start gap-6 border-t border-cream/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-stone">
          We use your details only to respond to this enquiry. We never share them.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-4 border border-brass/70 bg-brass px-10 py-4 text-xs font-semibold tracking-[0.24em] text-ink uppercase transition-colors duration-500 hover:bg-transparent hover:text-cream disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

/* ── Field primitives ─────────────────────────────────────────────────── */

const inputClass =
  "block w-full border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-base text-cream placeholder:text-stone/50 transition-colors focus:border-brass focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-[#e59a7f]";

function FieldShell({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: (describedBy: string | undefined) => ReactNode;
}) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.7rem] font-semibold tracking-[0.2em] text-cream/85 uppercase">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-brass">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs leading-relaxed text-stone">
          {hint}
        </p>
      )}
      <div className="mt-2">{children(describedBy)}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#f0b8a4]">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = {
  label: string;
  name: keyof Values;
  value: string;
  error?: string;
  hint?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur: (e: { target: { name: string } }) => void;
};

function TextField({
  type = "text",
  autoComplete,
  ...p
}: InputProps & { type?: string; autoComplete?: string }) {
  return (
    <FieldShell id={p.name} label={p.label} required={p.required} hint={p.hint} error={p.error}>
      {(describedBy) => (
        <input
          id={p.name}
          name={p.name}
          type={type}
          autoComplete={autoComplete}
          required={p.required}
          value={p.value}
          onChange={p.onChange}
          onBlur={p.onBlur}
          aria-invalid={!!p.error}
          aria-describedby={describedBy}
          className={inputClass}
        />
      )}
    </FieldShell>
  );
}

function SelectField({ options, ...p }: Omit<InputProps, "required"> & { options: string[] }) {
  return (
    <FieldShell id={p.name} label={p.label} required error={p.error}>
      {(describedBy) => (
        <div className="relative">
          <select
            id={p.name}
            name={p.name}
            required
            value={p.value}
            onChange={p.onChange}
            onBlur={p.onBlur}
            aria-invalid={!!p.error}
            aria-describedby={describedBy}
            className={`${inputClass} cursor-pointer appearance-none pr-8 ${p.value ? "" : "text-stone"}`}
          >
            <option value="" disabled>
              Select…
            </option>
            {options.map((o) => (
              <option key={o} value={o} className="bg-charcoal text-cream">
                {o}
              </option>
            ))}
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-xs text-brass">
            ▾
          </span>
        </div>
      )}
    </FieldShell>
  );
}
