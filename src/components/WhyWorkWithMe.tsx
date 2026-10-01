"use client";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { whyPoints } from "@/data/site";
import {
  Brain,
  Briefcase,
  Puzzle,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Brain,
  Puzzle,
  TrendingUp,
  Users,
};

export function WhyWorkWithMe() {
  return (
    <Section
      eyebrow="Why Work With Me"
      title="Automation That Solves Real Business Problems"
      description="Technology supports the outcome. The outcome is less manual work, faster response, and clearer processes."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whyPoints.map((point, index) => {
          const Icon = iconMap[point.icon];
          return (
            <FadeIn
              key={point.title}
              delay={index * 0.05}
              className={index === whyPoints.length - 1 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : undefined}
            >
              <Card className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-accent">
                  {Icon && <Icon className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {point.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
