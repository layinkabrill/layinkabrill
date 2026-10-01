import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  className,
  children,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-12 max-w-3xl md:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-zinc-900 md:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
