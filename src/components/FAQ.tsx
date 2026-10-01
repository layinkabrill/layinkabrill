"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/site";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      eyebrow="FAQ"
      title="Questions Business Owners Ask"
      description="Clear answers for non-technical decision makers evaluating automation."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <FadeIn key={faq.question} delay={index * 0.03}>
              <div className="glass overflow-hidden rounded-2xl border">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-medium text-zinc-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-zinc-200 px-5 py-4 text-sm leading-relaxed text-zinc-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
