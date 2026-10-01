"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { processFlow, processSteps } from "@/data/site";

export function HowItWorks() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="From Manual Process to Intelligent System"
      description="A clear path from bottleneck to reliable automation — designed around how your business already works."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <FadeIn key={step.step} delay={index * 0.06}>
            <div className="glass glass-hover h-full rounded-2xl border p-6">
              <span className="font-mono text-sm font-semibold text-accent">
                {step.step}
              </span>
              <h3 className="font-display mt-3 text-xl font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12" delay={0.15}>
        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-accent/10 via-transparent to-zinc-50 p-5 md:p-7">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            End-to-end path
          </p>
          <WorkflowStrip steps={processFlow} />
        </div>
      </FadeIn>
    </Section>
  );
}
