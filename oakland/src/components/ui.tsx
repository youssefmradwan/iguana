import Link from "next/link";
import type { ReactNode } from "react";

/** Horizontal page gutter + max width, shared by every section. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 ${className}`}>{children}</div>;
}

type Tone = "dark" | "light";

export function Eyebrow({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${tone === "dark" ? "text-brass" : "text-brass-deep"} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-70" />
      {children}
    </p>
  );
}

/** Understated text link with an arrow, used for all calls to action. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`link-line ${className}`}>
      {children}
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </Link>
  );
}

/** Solid button-style link, reserved for the primary commission CTA. */
export function ButtonLink({ href, children, tone = "dark" }: { href: string; children: ReactNode; tone?: Tone }) {
  const colours =
    tone === "dark"
      ? "border-brass/70 text-cream hover:bg-brass hover:text-ink"
      : "border-brass-deep text-ink hover:bg-ink hover:text-cream hover:border-ink";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-4 border px-8 py-4 text-xs font-semibold tracking-[0.24em] uppercase transition-colors duration-500 ${colours}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
