"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { logo } from "@/content/images";
import { site } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // While the mobile menu is open: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    menu?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menu || !toggle) return;
      const focusables = [toggle, ...menu.querySelectorAll<HTMLElement>("a")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,border-color] duration-700 ${
        solid ? "border-b border-cream/10 bg-ink/90 py-4 backdrop-blur-md" : "border-b border-transparent py-6 sm:py-8"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="relative z-10 block" aria-label={`${site.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.wordmark} alt="" width={1054} height={172} className="h-5 w-auto sm:h-6" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-14">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative text-[0.72rem] font-semibold tracking-[0.24em] uppercase transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brass after:transition-all after:duration-500 ${
                    isActive(item.href)
                      ? "text-cream after:w-full"
                      : "text-cream/75 after:w-0 hover:text-cream hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true" className="relative block h-3 w-7">
            <span
              className={`absolute left-0 h-px w-full bg-cream transition-transform duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-cream transition-transform duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="fixed inset-0 flex flex-col justify-between bg-ink px-6 pt-32 pb-12 sm:px-10 md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-6">
            {site.nav.map((item, i) => (
              <li key={item.href} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`display block text-5xl ${isActive(item.href) ? "text-brass" : "text-cream"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm text-stone">
          {site.contact.people.map((p) => (
            <a key={p.phone} href={p.phoneHref} className="block hover:text-cream">
              {p.name} · <span className="text-cream">{p.phone}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
