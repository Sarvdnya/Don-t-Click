import { currentToolkit } from "@/data/experience";
import Container from "@/components/ui/Container";

export default function Toolkit() {
  return (
    <section aria-label="Current toolkit" className="pb-[clamp(88px,13vw,160px)]">
      <Container>
        <div className="border-t border-border-subtle pt-12">
          <p className="ex-toolkit-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Current toolkit
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3.5">
            {currentToolkit.map((tool) => (
              <li key={tool.name} className="ex-toolkit-chip">
                <span className="group inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent">
                  <span
                    aria-hidden="true"
                    className="select-none text-accent/70 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    /
                  </span>
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}