"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type Ref,
} from "react";
import { createPortal } from "react-dom";

type ProjectLightboxProps = {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ProjectLightbox({
  projects,
  index,
  onClose,
  onIndexChange,
}: ProjectLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [zoomOverride, setZoomOverride] = useState<{
    id: string;
    zoomed: boolean;
  } | null>(null);
  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = index !== null;
  const project = open ? projects[index] : null;
  const count = projects.length;
  // Full-page website screenshots are tall and narrow: open them scrollable rather than shrunk to fit.
  const zoomed =
    project !== null &&
    (zoomOverride?.id === project.id
      ? zoomOverride.zoomed
      : project.category === "Website");
  const toggleZoom = () => {
    if (project) setZoomOverride({ id: project.id, zoomed: !zoomed });
  };

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    setZoomOverride(null);
    setNaturalWidth(null);
    scrollRef.current?.scrollTo({ top: 0, left: 0 });
  }, [index]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose, go]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && index !== null && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-[100] flex flex-col bg-zinc-950/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 md:px-6">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold tracking-wider text-zinc-400">
                <span className="font-mono text-accent-bright">
                  Project {project.number}
                </span>
                <span className="mx-2 text-zinc-600">/</span>
                <span className="uppercase">{project.category}</span>
                <span className="mx-2 text-zinc-600">/</span>
                {project.platform}
              </p>
              <h2
                id="lightbox-title"
                className="font-display mt-0.5 truncate text-base font-semibold text-white md:text-lg"
              >
                {project.title}
              </h2>
            </div>

            <span className="hidden font-mono text-xs text-zinc-400 sm:block">
              {index + 1} / {count}
            </span>

            <div className="flex items-center gap-1.5">
              <ToolbarButton
                label={zoomed ? "Fit to screen" : "Zoom in"}
                onClick={toggleZoom}
              >
                {zoomed ? (
                  <ZoomOut className="h-4 w-4" aria-hidden />
                ) : (
                  <ZoomIn className="h-4 w-4" aria-hidden />
                )}
              </ToolbarButton>
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                aria-label="Open original image in a new tab"
                title="Open original"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-zinc-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <ToolbarButton
                ref={closeRef}
                label="Close"
                onClick={onClose}
                className="bg-white text-zinc-950 hover:bg-zinc-200 hover:text-zinc-950"
              >
                <X className="h-4 w-4" aria-hidden />
              </ToolbarButton>
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            <div
              ref={scrollRef}
              className="absolute inset-0 overflow-auto overscroll-contain"
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
              <div
                className={cn(
                  "flex min-h-full min-w-full p-4 md:p-8",
                  zoomed ? "items-start justify-center" : "items-center justify-center",
                )}
                onClick={(e) => {
                  if (e.target === e.currentTarget) onClose();
                }}
              >
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
                    zoomed ? "shrink-0" : "flex max-h-full",
                  )}
                  style={
                    zoomed && naturalWidth
                      ? { width: naturalWidth, maxWidth: "100%" }
                      : undefined
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    draggable={false}
                    onClick={toggleZoom}
                    ref={(node) => {
                      if (!node) return;
                      const apply = () => {
                        const dpr = window.devicePixelRatio || 1;
                        const width = node.naturalWidth / dpr;
                        setNaturalWidth(width);
                        node.style.maxWidth = `min(100%, ${width}px)`;
                      };
                      if (node.complete && node.naturalWidth) apply();
                      else node.onload = apply;
                    }}
                    className={cn(
                      "block h-auto max-w-full",
                      zoomed
                        ? naturalWidth
                          ? "w-full cursor-zoom-out"
                          : "w-auto cursor-zoom-out"
                        : "max-h-[calc(100dvh-10rem)] w-auto cursor-zoom-in object-contain md:max-h-[calc(100dvh-9rem)]",
                    )}
                  />
                </motion.div>
              </div>
            </div>

            {count > 1 && (
              <>
                <NavButton side="left" label="Previous project" onClick={() => go(-1)} />
                <NavButton side="right" label="Next project" onClick={() => go(1)} />
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 md:justify-center md:px-6">
            {count > 1 && (
              <ToolbarButton label="Previous project" onClick={() => go(-1)} className="md:hidden">
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </ToolbarButton>
            )}
            <p className="text-center text-xs text-zinc-400">
              <span className="font-mono sm:hidden">
                {index + 1} / {count} ·{" "}
              </span>
              {zoomed ? "Scroll to explore · tap image to fit" : "Tap image to zoom"}
              <span className="hidden md:inline"> · ← → to browse · Esc to close</span>
            </p>
            {count > 1 && (
              <ToolbarButton label="Next project" onClick={() => go(1)} className="md:hidden">
                <ChevronRight className="h-4 w-4" aria-hidden />
              </ToolbarButton>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

type ToolbarButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
};

function ToolbarButton({ label, onClick, className, children, ref }: ToolbarButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-zinc-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

function NavButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-900/80 text-white shadow-lg backdrop-blur transition hover:border-accent hover:bg-accent md:inline-flex",
        side === "left" ? "left-3 md:left-6" : "right-3 md:right-6",
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
}
