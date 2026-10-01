"use client";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { problems } from "@/data/site";
import {
  ArrowLeftRight,
  BellOff,
  EyeOff,
  MessageCircleQuestion,
  Repeat,
  Table,
  Timer,
  UserX,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MessageCircleQuestion,
  UserX,
  BellOff,
  ArrowLeftRight,
  Table,
  Timer,
  Repeat,
  EyeOff,
};

export function ProblemSection() {
  return (
    <Section
      id="solutions"
      eyebrow="The Problem"
      title="Your Business Shouldn't Depend on Manual Work"
      description="These friction points show up in growing businesses every day — and they're exactly where intelligent automation creates leverage."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => {
          const Icon = iconMap[problem.icon];
          return (
            <FadeIn key={problem.title} delay={index * 0.04}>
              <Card className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  {Icon && <Icon className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="font-display text-base font-semibold text-zinc-900">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {problem.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
      <p className="mt-10 max-w-3xl text-base text-zinc-700 md:text-lg">
        If a task happens repeatedly, there&apos;s a good chance it can be
        improved or automated.
      </p>
    </Section>
  );
}
