"use client";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/site";
import {
  Bot,
  CalendarCheck,
  Database,
  Globe,
  Mail,
  Send,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Target,
  Send,
  Sparkles,
  Workflow,
  CalendarCheck,
  Mail,
  Database,
  Globe,
  Smartphone,
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I Can Build For You"
      description="Websites, apps, and automation for any niche — built around how that business actually works, not buzzwords."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <FadeIn key={service.id} delay={index * 0.04}>
              <Card
                className="float-card h-full"
                style={{ animationDelay: `${-(index % 4) * 1.5}s` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-accent-bright to-accent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_18px_-6px_rgba(212,20,25,0.55)]">
                  {Icon && <Icon className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="font-display text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
