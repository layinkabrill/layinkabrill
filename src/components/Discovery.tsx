"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Discovery() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[1.75rem] border border-accent/25 bg-gradient-to-br from-accent/15 via-white to-zinc-50 px-6 py-10 md:px-12 md:py-14">
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Discovery
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Not Sure What You Should Automate?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              That&apos;s exactly where I can help. I can review your current
              business process, identify repetitive tasks and bottlenecks, and
              show you where AI or automation could save time and improve your
              workflow.
            </p>
            <div className="mt-8">
              <Button href="#contact" size="lg">
                Get a Free Automation Assessment
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
