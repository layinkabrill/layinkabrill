"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { tools } from "@/data/site";

export function Tools() {
  return (
    <Section
      id="tools"
      eyebrow="Technology"
      title="Tools I Work With"
      description="Tools are selected based on your requirements — not forced into a one-size-fits-all stack."
      align="center"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {tools.map((tool, index) => (
          <FadeIn key={tool} delay={index * 0.03}>
            <div className="glass glass-hover flex h-20 items-center justify-center rounded-2xl border px-3 text-center text-sm font-medium text-zinc-700 hover:text-zinc-900">
              {tool}
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-500">
        From Next.js and React for websites and apps to Claude, n8n, and CRMs for
        automation — the right mix depends on your process, team, and goals.
      </p>
    </Section>
  );
}
