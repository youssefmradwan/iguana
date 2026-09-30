"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/content/portfolio";
import type { Sector } from "@/content/types";
import Photo from "./Photo";

type Filter = "All" | Sector;

export default function PortfolioGallery({ projects, sectors }: { projects: Project[]; sectors: Sector[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // A link like /portfolio/#residential opens with that sector selected.
  useEffect(() => {
    const fromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1)).toLowerCase();
      const match = sectors.find((s) => s.toLowerCase() === hash);
      if (match) setFilter(match);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [sectors]);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.sector === filter)),
    [filter, projects],
  );
  const active = projects.find((p) => p.id === openId) ?? null;

  const open = (project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setImageIndex(0);
    setOpenId(project.id);
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (delta: number) => {
      if (!active) return;
      setImageIndex((i) => (i + delta + active.images.length) % active.images.length);
    },
    [active],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && openId !== null && !dialog.open) dialog.showModal();
  }, [openId]);

  return (
    <>
      <div className="flex flex-col gap-6 border-b border-cream/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter projects by sector" className="-mx-1 flex flex-wrap gap-x-2 gap-y-2">
          {(["All", ...sectors] as Filter[]).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => setFilter(s)}
              className={`px-3 py-2 text-[0.72rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                filter === s ? "text-brass" : "text-stone hover:text-cream"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-xs tracking-[0.2em] text-stone uppercase">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* Masonry columns so every cover photo keeps its own proportions. */}
      <ul className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3 lg:gap-10">
        {visible.map((project, i) => (
          <li
            key={project.id}
            data-sector={project.sector}
            className="animate-fade-up mb-14 break-inside-avoid"
            style={{ animationDelay: `${(i % 6) * 70}ms` }}
          >
            <article aria-labelledby={`${project.id}-title`}>
              <button
                type="button"
                onClick={(e) => open(project, e.currentTarget)}
                className="group relative block w-full cursor-zoom-in overflow-hidden text-left"
                aria-label={`View ${project.images.length} photos: ${project.title}`}
              >
                <Photo
                  image={project.images[0]}
                  natural
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 bottom-3 bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-cream uppercase backdrop-blur-sm">
                  {project.images.length} photos
                </span>
              </button>
              <p className="eyebrow mt-5 text-brass">{project.sector}</p>
              <h2 id={`${project.id}-title`} className="display mt-2 text-2xl text-cream sm:text-[1.7rem]">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {[project.client, project.location ?? project.scope].filter(Boolean).join(" · ")}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        onClose={() => {
          setOpenId(null);
          triggerRef.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[100dvh] w-full max-w-7xl bg-transparent p-0 text-cream"
      >
        {active && (
          <div className="grid max-h-[100dvh] grid-cols-1 overflow-y-auto bg-charcoal lg:grid-cols-12">
            <div className="flex min-w-0 flex-col bg-black/30 lg:col-span-8">
              {/* Whole photo, never cropped */}
              <div className="flex min-w-0 flex-1 items-center justify-center p-3 sm:p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={active.images[imageIndex].src}
                  src={active.images[imageIndex].src}
                  alt={active.images[imageIndex].alt}
                  width={active.images[imageIndex].width}
                  height={active.images[imageIndex].height}
                  className="animate-fade-up block h-auto max-h-[62vh] w-auto max-w-full min-w-0 object-contain lg:max-h-[78vh]"
                />
              </div>
              <ol className="flex gap-2 overflow-x-auto px-3 pb-3 sm:px-6 sm:pb-6" aria-label="Photos in this project">
                {active.images.map((img, i) => (
                  <li key={img.src} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setImageIndex(i)}
                      aria-label={`Photo ${i + 1} of ${active.images.length}`}
                      aria-current={i === imageIndex ? "true" : undefined}
                      className={`block h-14 w-20 overflow-hidden border transition-opacity ${
                        i === imageIndex ? "border-brass opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                      }`}
                    >
                      <Photo image={img} sizes="80px" className="h-full w-full" />
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col p-8 sm:p-10 lg:col-span-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="-mt-2 -mr-2 p-2 text-xs font-semibold tracking-[0.22em] text-stone uppercase hover:text-cream"
                >
                  Close <span aria-hidden="true">✕</span>
                </button>
              </div>
              <p className="eyebrow mt-4 text-brass">{active.sector}</p>
              <h2 id="lightbox-title" className="display mt-4 text-4xl">
                {active.title}
              </h2>
              <dl className="mt-8 space-y-5 text-sm">
                {(
                  [
                    ["Client", active.client],
                    ["Location", active.location],
                    ["Scope", active.scope],
                  ] as const
                )
                  .filter(([, v]) => v)
                  .map(([term, value]) => (
                    <div key={term} className="border-t border-cream/10 pt-4">
                      <dt className="text-[0.68rem] tracking-[0.22em] text-stone uppercase">{term}</dt>
                      <dd className="mt-1.5 text-cream/90">{value}</dd>
                    </div>
                  ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-stone">{active.images[imageIndex].alt}</p>
              <div className="mt-auto flex items-center justify-between pt-10 text-xs font-semibold tracking-[0.22em] uppercase">
                <button type="button" onClick={() => step(-1)} className="py-2 text-stone hover:text-cream">
                  <span aria-hidden="true">←</span> Previous
                </button>
                <span className="text-stone tabular-nums" aria-live="polite">
                  {imageIndex + 1} / {active.images.length}
                </span>
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
