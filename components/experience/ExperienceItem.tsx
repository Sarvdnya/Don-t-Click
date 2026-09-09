import type { ExperienceItem } from "@/data/experience";

type ExperienceItemProps = {
  item: ExperienceItem;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="max-w-2xl">
      <h3 className="ex-item-role font-display text-[clamp(1.6rem,3.8vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
        {item.role}
      </h3>

      <p className="ex-item-org mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
        {item.organization}
      </p>

      <p className="ex-item-desc mt-7 max-w-xl text-base leading-relaxed text-muted">
        {item.description}
      </p>

      <div className="ex-resp mt-9">
        <p className="ex-resp-head font-mono text-[10px] uppercase tracking-[0.28em] text-muted/60">
          Responsibilities
        </p>
        <ul className="mt-5 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="ex-resp-item group flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-[9px] inline-block h-px w-4 shrink-0 bg-accent/60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-8"
              />
              <span className="text-sm leading-relaxed text-muted">
                {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ex-tags mt-9 flex flex-wrap gap-2.5">
        {item.technologies.map((technology) => (
          <span
            key={technology}
            className="ex-tag border border-border-subtle rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}