"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Project } from "@/data/projects";
import { useState } from "react";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={(index % 2) * 0.05}>
            <ProjectCard
              project={project}
              onOpenImage={() => setOpenIndex(index)}
            />
          </FadeIn>
        ))}
      </div>

      <ProjectLightbox
        projects={projects}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
