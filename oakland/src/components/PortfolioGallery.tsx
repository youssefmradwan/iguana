"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/content/portfolio";
import type { Category } from "@/content/types";
import Photo from "./Photo";

type Filter = "All" | Category;

export default function PortfolioGallery({ projects, categories }: { projects: Project[]; categories: Category[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );
  const active = openIndex === null ? null : visible[openIndex];

  const open = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && openIndex !== null && !dialog.open) dialog.showModal();
  }, [openIndex]);

  return (
    <>
      <div className="flex flex-col gap-6 border-b border-cream/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter projects by category" className="-mx-1 flex flex-wrap gap-x-2 gap-y-2">
          {(["All", ...categories] as Filter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-2 text-[0.72rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                filter === cat ? "text-brass" : "text-stone hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-xs tracking-[0.2em] text-stone uppercase">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <ul className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3 lg:gap-10">
        {visible.map((project, i) => (
          <li key={project.id} className="animate-fade-up mb-12 break-inside-avoid" style={{ animationDelay: `${(i % 6) * 70}ms` }}>
            <figure>
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                className="group block w-full cursor-zoom-in overflow-hidden text-left"
                aria-label={`View details: ${project.title}`}
              >
                <Photo
                  image={project.image}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={project.tall ? "aspect-[4/5]" : "aspect-[4/3]"}
                  imgClassName="transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                />
              </button>
              <figcaption className="mt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="display text-2xl text-cream">{project.title}</h2>
                  <span className="shrink-0 text-xs text-stone">{project.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone">{project.materials}</p>
                <p className="mt-1 text-xs tracking-[0.12em] text-stone/80 uppercase">{project.dimensions}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        onClose={() => {
          setOpenIndex(null);
          triggerRef.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[100dvh] w-full max-w-6xl bg-transparent p-0 text-cream backdrop:bg-ink/90"
      >
        {active && (
          <div className="grid max-h-[100dvh] overflow-y-auto bg-charcoal md:grid-cols-12">
            <Photo
              key={active.id}
              image={active.image}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="aspect-[4/3] md:col-span-8 md:aspect-auto md:min-h-[70vh]"
            />
            <div className="flex flex-col p-8 sm:p-10 md:col-span-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="-mt-2 -mr-2 p-2 text-xs font-semibold tracking-[0.22em] text-stone uppercase hover:text-cream"
                >
                  Close <span aria-hidden="true">✕</span>
                </button>
              </div>
              <p className="eyebrow mt-6 text-brass">{active.category}</p>
              <h2 id="lightbox-title" className="display mt-4 text-4xl">
                {active.title}
              </h2>
              <dl className="mt-8 space-y-5 text-sm">
                {[
                  ["Materials", active.materials],
                  ["Dimensions", active.dimensions],
                  ["Year", String(active.year)],
                  ["Setting", active.location],
                ].map(([term, value]) => (
                  <div key={term} className="border-t border-cream/10 pt-4">
                    <dt className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">{term}</dt>
                    <dd className="mt-1.5 text-cream/90">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto flex justify-between pt-10 text-xs font-semibold tracking-[0.22em] uppercase">
                <button type="button" onClick={() => step(-1)} className="py-2 text-stone hover:text-cream">
                  <span aria-hidden="true">←</span> Previous
                </button>
                <button type="button" onClick={() => step(1)} className="py-2 text-stone hover:text-cream">
                  Next <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
