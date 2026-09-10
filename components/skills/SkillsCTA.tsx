import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/animations/Magnetic";

export default function SkillsCTA() {
  return (
    <section aria-label="Next step" className="pb-[clamp(96px,14vw,200px)]">
      <Container>
        <div className="border-t border-border-subtle" />

        <div className="pt-[clamp(72px,11vw,140px)]">
          <p className="sk-cta-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Have an idea?
          </p>

          <h2 className="sk-cta-title mt-8 font-display" data-cursor="">
            <span className="block overflow-hidden py-1">
              <span className="sk-cta-line block text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
                LET&rsquo;S BUILD
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="sk-cta-line block text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-accent">
                IT.
              </span>
            </span>
          </h2>

          <p className="sk-cta-meta mt-9 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted/60">
            <span>05 / 05 — End of index</span>
            <span className="hidden sm:inline">Next: contact</span>
          </p>

          <div className="sk-cta-actions mt-12 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href="#contact">Let&rsquo;s connect →</Button>
            </Magnetic>
            <Magnetic>
              <Button href="#work" variant="ghost">
                View my work
              </Button>
            </Magnetic>
          </div>
        </div>
      </Container>
    </section>
  );
}