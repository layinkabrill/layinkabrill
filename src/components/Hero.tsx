"use client";

import { Button } from "@/components/ui/Button";
import { heroWorkflow, siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      {/* Full-bleed atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#fafafa]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_0%,rgba(212,20,25,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_20%,rgba(212,20,25,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.55]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-l from-zinc-100/90 via-zinc-50/40 to-transparent lg:block" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col justify-center gap-14 px-5 py-14 md:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-16 xl:gap-16">
        {/* Copy — brand first, then one headline, one line, CTAs */}
        <div className="relative max-w-xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[2.75rem] leading-none font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Smile<span className="text-accent">BrilL</span>
            </p>
            <p className="mt-3 text-sm font-medium tracking-[0.22em] text-accent uppercase">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-8 max-w-[18ch] text-3xl leading-[1.12] font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-[2.75rem] lg:mt-10 lg:text-5xl"
          >
            Websites, apps &amp; AI systems built to convert.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-md text-base leading-relaxed text-zinc-600 md:text-lg"
          >
            I design websites and apps, then automate the busywork behind them —
            in any niche — so the business looks sharper and runs faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" size="lg" className="group">
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              View My Work
            </Button>
          </motion.div>
        </div>

        {/* Dominant visual plane — workflow system */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mx-5 md:mx-0 lg:self-stretch"
          aria-label="Automation workflow visualization"
        >
          <div className="relative flex h-full min-h-[420px] flex-col justify-center border-y border-zinc-200 bg-white/70 px-5 py-10 backdrop-blur-sm md:rounded-none md:border md:border-zinc-200 md:px-8 md:py-12 lg:min-h-[520px] lg:border-r-0 lg:pr-0 xl:pl-10">
            <div className="absolute top-0 left-0 h-full w-1 bg-accent" aria-hidden />

            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
                  System preview
                </p>
                <p className="font-display mt-1 text-xl font-semibold text-zinc-950">
                  Lead → Revenue flow
                </p>
              </div>
              <motion.span
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono text-[11px] tracking-wider text-accent uppercase"
              >
                Live
              </motion.span>
            </div>

            <ol className="relative space-y-0">
              {heroWorkflow.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.09,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-4 pb-5 last:pb-0"
                >
                  {index < heroWorkflow.length - 1 && (
                    <span
                      className="absolute top-9 left-[15px] h-[calc(100%-1.25rem)] w-px bg-zinc-200"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-zinc-900 bg-zinc-950 font-mono text-[11px] font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-h-8 flex-1 items-center justify-between gap-3 border-b border-zinc-200 pb-5">
                    <span className="text-sm font-medium tracking-tight text-zinc-900 md:text-[15px]">
                      {step}
                    </span>
                    {index < heroWorkflow.length - 1 ? (
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        aria-hidden
                      />
                    ) : (
                      <span className="text-[11px] font-semibold tracking-wider text-accent uppercase">
                        Done
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
