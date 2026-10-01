import { ProjectGrid } from "@/components/ProjectGrid";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { featuredProjects, projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Portfolio() {
  const moreCount = projects.length - featuredProjects.length;

  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Featured Projects"
      description="A selection of apps, websites, and automations built for real businesses."
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-semibold text-zinc-900">
            {featuredProjects.length}
          </span>{" "}
          of {projects.length} projects
        </p>
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-bright"
        >
          View all projects
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <ProjectGrid projects={featuredProjects} />

      <FadeIn>
        <div className="glass mt-12 flex flex-col items-center gap-5 rounded-[1.75rem] border px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-zinc-900">
              {moreCount} more projects in the full portfolio
            </p>
            <p className="mt-1.5 text-sm text-zinc-600">
              Browse every app, website, and automation, filtered by type.
            </p>
          </div>
          <Button href="/portfolio" size="lg" className="group shrink-0">
            View Full Portfolio
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
