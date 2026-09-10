import { exploring } from "@/data/skills";
import Container from "@/components/ui/Container";

export default function Exploring() {
  return (
    <section
      aria-label="Currently exploring"
      className="pb-[clamp(96px,14vw,180px)]"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="sk-explore-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              Currently exploring
            </p>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.24em] text-muted/50">
              Learning / experimenting / building
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Currently exploring the intersection of frontend interfaces and
              intelligent systems &mdash; where design, data and AI meet.
            </p>

            <ul className="mt-10 border-t border-border-subtle">
              {exploring.map((item, index) => (
                <li
                  key={item.label}
                  className="sk-explore-item border-b border-border-subtle"
                >
                  <div
                    data-cursor=""
                    className="group flex items-center gap-5 py-[clamp(16px,2.4vw,24px)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-2 lg:gap-7"
                  >
                    <span className="font-mono text-[10px] tracking-[0.26em] text-muted/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden w-32 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80 sm:block">
                      {item.status}
                    </span>
                    <h4 className="font-display text-[clamp(1.2rem,2.6vw,1.9rem)] font-semibold tracking-[-0.02em]">
                      {item.label}
                    </h4>
                    <span className="ml-auto hidden text-right text-sm text-muted md:block">
                      {item.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}