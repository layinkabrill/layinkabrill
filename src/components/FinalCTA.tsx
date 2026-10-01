"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="glass overflow-hidden rounded-[1.75rem] border px-6 py-12 text-center md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,30,36,0.12),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
                Your Team Should Spend Time Growing the Business — Not Repeating
                the Same Tasks.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
                Let&apos;s build a stronger website or app, and turn the repetitive
                processes slowing your business down into intelligent workflows —
                whatever niche you&apos;re in.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="#contact" size="lg">
                  Book a Free Automation Consultation
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
