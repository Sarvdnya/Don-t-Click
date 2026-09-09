import { focusAreas } from "@/data/experience";
import Container from "@/components/ui/Container";

export default function FocusAreas() {
  return (
    <section aria-label="What I work on" className="py-[clamp(88px,13vw,160px)]">
      <Container>
        <p className="ex-focus-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          What I work on
        </p>

        <ul className="mt-9 border-t border-border-subtle">
          {focusAreas.map((area, index) => (
            <li
              key={area}
              className="ex-focus-item border-b border-border-subtle"
            >
              <div
                className="group flex items-center gap-5 py-[clamp(18px,3vw,30px)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-2 lg:gap-8"
                data-cursor="view"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-5 bg-border-subtle transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-9 group-hover:bg-accent"
                />
                <h3 className="font-display text-[clamp(1.7rem,5vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">
                  {area}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}