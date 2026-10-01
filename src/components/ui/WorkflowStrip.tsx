"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type WorkflowStripProps = {
  steps: readonly string[] | string[];
  className?: string;
  animated?: boolean;
};

export function WorkflowStrip({
  steps,
  className,
  animated = true,
}: WorkflowStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 md:gap-3",
        className,
      )}
    >
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-center gap-2 md:gap-3">
          <motion.span
            initial={animated ? { opacity: 0, y: 8 } : false}
            whileInView={animated ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 md:text-sm"
          >
            {step}
          </motion.span>
          {index < steps.length - 1 && (
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-accent sm:block"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}
