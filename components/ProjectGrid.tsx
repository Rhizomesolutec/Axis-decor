"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { filters, type Project, type ProjectFilter } from "@/lib/content";

export function ProjectGrid({ items }: { items: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible =
    filter === "All" ? items : items.filter((item) => item.categories.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-5 gap-y-2">
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`min-h-11 border-b text-sm transition-colors duration-300 ${
                selected ? "border-ink text-ink" : "border-transparent text-stone hover:text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12">
        {visible.map((project, index) => {
          const wide = index % 3 === 0;
          return (
            <div
              key={project.id}
              className={wide ? "sm:col-span-2 lg:col-span-7" : "lg:col-span-5"}
            >
              <ProjectCard
                project={project}
                sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 36vw, (min-width: 640px) 50vw, 100vw"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
