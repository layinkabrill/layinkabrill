"use client";

import { ProjectGrid } from "@/components/ProjectGrid";
import { projectCategories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Filter = (typeof projectCategories)[number];

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {projectCategories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                active
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-accent/40 hover:text-zinc-950",
              )}
            >
              {category}
              <span
                className={cn(
                  "ml-2 text-xs",
                  active ? "text-white/60" : "text-zinc-400",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ProjectGrid projects={filtered} />
    </>
  );
}
