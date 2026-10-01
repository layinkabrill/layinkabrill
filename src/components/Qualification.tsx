"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { qualificationQuestions } from "@/data/site";
import { Check } from "lucide-react";

export function Qualification() {
  return (
    <Section
      title="Is Automation Right for Your Business?"
      description="If any of these sound familiar, you're likely leaving time and opportunities on the table."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {qualificationQuestions.map((question, index) => (
          <FadeIn key={question} delay={index * 0.03}>
            <div className="glass flex items-start gap-3 rounded-2xl border px-4 py-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                {question}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="mt-8 text-lg font-medium text-zinc-900">
        If you answered YES to any of these, let&apos;s talk.
      </p>
    </Section>
  );
}
