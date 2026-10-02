import { Screenshot } from "@/components/Screenshot";
import { SiteFrame } from "@/components/SiteFrame";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const index = projects.findIndex((item) => item.id === id);
  const project = projects[index];
  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const structureLabel =
    project.category === "Website"
      ? "Page structure"
      : project.category === "App"
        ? "App flow"
        : "Workflow";

  return (
    <SiteFrame>
      <article className="mx-auto w-full max-w-6xl px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All work
        </Link>

        <p className="mt-8 font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Project {project.number} / {project.category} / {project.platform}
        </p>
        <h1 className="font-display mt-3 max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-zinc-950 md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
          {project.summary}
        </p>

        <div className="mt-10">
          <Screenshot src={project.image} alt={project.imageAlt} />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Problem
            </h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-800">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Solution
            </h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-800">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            {structureLabel}
          </h2>
          <WorkflowStrip steps={project.workflow} animated={false} />
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Result
          </h2>
          <p className="mt-2 text-base text-zinc-800">{project.outcome}</p>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button href="/contact">Start a project like this</Button>
          <Link
            href={`/work/${next.id}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
          >
            Next: {next.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
