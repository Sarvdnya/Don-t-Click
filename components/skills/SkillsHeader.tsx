import SectionLabel from "@/components/ui/SectionLabel";
import Container from "@/components/ui/Container";
import SkillsVisual from "@/components/skills/SkillsVisual";

export default function SkillsHeader() {
  return (
    <header className="pt-[clamp(120px,16vw,220px)] pb-[clamp(48px,7vw,88px)]">
      <Container>
        <div className="sk-label flex items-center gap-2">
          <SectionLabel index="05">Capabilities</SectionLabel>
          <span className="font-mono text-[10px] tracking-[0.28em] text-muted/50">
            / 05
          </span>
        </div>

        <div className="mt-10 grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="sk-head font-display">
              <span className="block overflow-hidden py-1">
                <span className="sk-head-line block text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] tracking-[-0.02em] text-muted">
                  I BUILD WITH
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="sk-head-line block text-[clamp(2.8rem,7vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-accent">
                  TECHNOLOGY,
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="sk-head-line block text-[clamp(2.8rem,7vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-foreground">
                  BUT DESIGN
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="sk-head-line block text-[clamp(2.8rem,7vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-outline">
                  FOR PEOPLE.
                </span>
              </span>
            </h2>

            <p className="sk-intro mt-9 max-w-md text-base leading-relaxed text-muted">
              The technology I build with, the way I approach interfaces, and
              what I&rsquo;m actively exploring &mdash; as a frontend
              developer, UI engineer and Computer Science student.
            </p>
          </div>

          <div className="hidden sm:block lg:col-span-5">
            <div className="skills-visual w-full">
              <SkillsVisual />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}