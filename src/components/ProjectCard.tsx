import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  onOpenImage: () => void;
};

export function ProjectCard({ project, onOpenImage }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <button
        type="button"
        onClick={onOpenImage}
        className={cn(
          "group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-zinc-200",
          project.imageFit === "cover"
            ? "bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#f4f4f5_60%,#e7e7ea_100%)]"
            : "bg-zinc-100",
        )}
        aria-label={`View full screenshot of ${project.title}`}
      >
        {project.imageFit === "cover" ? (
          // Native pixel width: these screenshots are narrow, and stretching them softens the text.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.imageAlt}
            draggable={false}
            className="absolute top-0 left-1/2 h-auto w-auto max-w-full -translate-x-1/2 select-none shadow-[0_10px_28px_-12px_rgba(0,0,0,0.45)]"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute inset-0 bg-zinc-950/0 transition group-hover:bg-zinc-950/25" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden />
          View full
        </span>
      </button>

      <div className="px-6 pt-6 md:px-7">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider">
          <span className="font-mono text-accent">Project {project.number}</span>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-500 uppercase">{project.category}</span>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-500">{project.platform}</span>
        </div>
        <h3 className="font-display mt-3 text-2xl font-semibold text-zinc-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5 px-6 py-6 md:px-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Problem
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Solution
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
              {project.solution}
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            {project.category === "Website"
              ? "Page Structure"
              : project.category === "App"
                ? "App Flow"
                : "Workflow"}
          </p>
          <WorkflowStrip steps={project.workflow} animated={false} />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-auto rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Result
          </p>
          <p className="mt-1 text-sm text-zinc-800">{project.outcome}</p>
        </div>
      </div>
    </Card>
  );
}
