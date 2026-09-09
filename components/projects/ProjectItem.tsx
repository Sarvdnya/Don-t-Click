import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { cn } from "@/lib/utils";

type ProjectItemProps = {
  project: Project;
  first?: boolean;
};

export default function ProjectItem({ project, first }: ProjectItemProps) {
  const { id, number, title, category, description, technologies, visualType, href, align } =
    project;

  const titleLines = title.split("\n");
  const textAlign = align === "right" ? "lg:col-start-8 lg:col-end-13" : "lg:col-start-1 lg:col-end-6";
  const visualAlign =
    align === "right"
      ? "lg:col-start-1 lg:col-end-8"
      : "lg:col-start-6 lg:col-end-13";

  return (
    <section
      id={id}
      className={cn(
        "pj-item py-[clamp(64px,10vw,140px)]",
        !first && "border-t border-border-subtle/60"
      )}
    >
      <Container>
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-stretch">
          {/* Intro block: number, category, title */}
          <div className={cn("lg:col-span-5 lg:row-start-1", textAlign)}>
            <p className="pj-num font-mono text-xs tracking-[0.3em] text-muted">
              {number}
            </p>
            <p className="pj-cat mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              {category}
            </p>

            <h3
              data-cursor="view"
              className="pj-title group/title mt-6 inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <span className="pj-title-inner block text-[clamp(2.2rem,5.5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
                    {line}
                  </span>
                </span>
              ))}
              <span
                aria-hidden="true"
                className="mt-4 inline-block h-px w-10 bg-border-subtle transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/title:w-16 group-hover/title:bg-accent"
              />
            </h3>
          </div>

          {/* Visual block */}
          <div className={cn("lg:col-span-7 lg:row-start-1", visualAlign)}>
            <div className="pj-visual relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
              <ProjectVisual visualType={visualType} />
            </div>
          </div>

          {/* Detail block: description, technology, button */}
          <div className={cn("lg:col-span-5 lg:row-start-2", textAlign)}>
            <p className="pj-desc max-w-md text-base leading-relaxed text-muted">
              {description}
            </p>

            <div className="pj-tech mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted/60">
                Tech stack
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80">
                {technologies.join(" · ")}
              </p>
            </div>

            <div className="pj-btn mt-9">
              <a
                href={href}
                data-cursor="view"
                className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:text-accent focus-visible:outline-accent"
              >
                <span className="inline-block h-px w-8 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12" />
                <span>View case study</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}