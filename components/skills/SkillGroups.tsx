import { skillGroups } from "@/data/skills";
import Container from "@/components/ui/Container";

export default function SkillGroups() {
  return (
    <section aria-label="Capability groups" className="sk-groups py-[clamp(80px,12vw,160px)]">
      <Container>
        <div className="flex items-center justify-between gap-6 pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Stack / 2026
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted/50">
            {String(skillGroups.length).padStart(2, "0")} groups
          </p>
        </div>

        <div className="grid gap-x-14 border-t border-border-subtle lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="sk-group border-b border-border-subtle"
            >
              <div
                data-cursor=""
                className="group flex items-baseline gap-5 py-[clamp(22px,3vw,40px)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1.5 lg:gap-7"
              >
                <span className="sk-group-num font-mono text-[10px] tracking-[0.26em] text-muted/70">
                  {group.number}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.9rem)] font-semibold leading-none tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-accent">
                  {group.title}
                </h3>
                <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.24em] text-muted/50 sm:block">
                  {group.meta}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-px w-6 bg-border-subtle transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12 group-hover:bg-accent lg:block"
                />
              </div>

              <div className="sk-group-tech pb-[clamp(20px,3vw,36px)] pl-[46px] lg:pl-[54px]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                  {group.items.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}