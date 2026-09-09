"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectIndexProps = {
  projects: Project[];
  ids: string[];
};

export default function ProjectIndex({ projects, ids }: ProjectIndexProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = ids.indexOf(entry.target.id);
            if (index >= 0) setActive(index);
            break;
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav
      aria-label="Project navigation"
      className="project-index fixed right-7 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
    >
      <ol className="flex flex-col items-center gap-4">
        {projects.map((project, index) => {
          const isActive = active === index;
          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to project ${project.number} ${project.title.replace("\n", " ")}`}
                className="group flex items-center gap-3 focus-visible:outline-accent"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-block h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "w-10 bg-accent"
                      : "w-4 bg-border-subtle group-hover:w-8 group-hover:bg-muted"
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[10px] transition-colors duration-500",
                    isActive
                      ? "text-accent"
                      : "text-muted/50 group-hover:text-muted"
                  )}
                >
                  {project.number}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}