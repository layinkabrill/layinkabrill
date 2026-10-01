"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { reviews } from "@/data/site";
import { Star } from "lucide-react";
import Image from "next/image";

const approach = [
  "Understand the process.",
  "Find the bottleneck.",
  "Design the solution.",
  "Automate what makes sense.",
  "Continuously improve the system.",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" className="overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent/15 blur-2xl" />
            <div className="glass overflow-hidden rounded-[1.75rem] border p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-zinc-100">
                <Image
                  src="/profile.jpg"
                  alt="SmileBrilL, AI automation, website, and app developer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-5">
                  <p className="font-display text-lg font-semibold text-white">
                    Smile<span className="text-accent">BrilL</span>
                  </p>
                  <p className="mt-0.5 text-xs tracking-[0.16em] text-zinc-200 uppercase">
                    AI Automation × Websites & Apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-zinc-900 md:text-4xl">
            I Build Websites, Apps & Systems That Give Businesses Their Time Back.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
            I handle website development, app development, and AI automation.
            The automation is not tied to one industry — it fits real estate,
            legal, fitness, agencies, local services, and any other niche.
            I design the product, then turn repetitive work into intelligent
            workflows with AI, APIs, and automation platforms.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            My approach is simple
          </p>
          <ul className="mt-4 space-y-3">
            {approach.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-zinc-700"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      {reviews.length > 0 && (
        <div className="mt-16 md:mt-20">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Client Reviews
            </p>
            <h3 className="font-display mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              What clients say after working with me
            </h3>
          </FadeIn>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <FadeIn key={review.id} delay={0.04 + (index % 3) * 0.06}>
                <article className="glass glass-hover flex h-full flex-col rounded-[1.5rem] border p-5 md:p-6">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating
                            ? "fill-accent text-accent"
                            : "fill-transparent text-zinc-300"
                        }`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">
                    “{review.quote}”
                  </blockquote>
                  <footer className="mt-5 flex items-center gap-3 border-t border-zinc-200/80 pt-4">
                    <Image
                      src={review.image}
                      alt={review.imageAlt}
                      width={128}
                      height={128}
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold text-zinc-950">
                        {review.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {review.role}
                        {review.company ? ` · ${review.company}` : ""}
                      </p>
                      {review.project ? (
                        <p className="mt-1 text-[10px] font-medium tracking-[0.14em] text-accent uppercase">
                          {review.project}
                        </p>
                      ) : null}
                    </div>
                  </footer>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
