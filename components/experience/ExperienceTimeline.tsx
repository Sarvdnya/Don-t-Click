import type { ExperienceItem } from "@/data/experience";
import Container from "@/components/ui/Container";
import ExperienceItemContent from "@/components/experience/ExperienceItem";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="experience-timeline">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Rail: number + vertical timeline line */}
          <div className="lg:col-span-4 lg:row-start-1">
            <div className="ex-rail flex h-full flex-col">
              <p className="ex-item-num font-display text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-none tracking-[-0.02em]">
                01
              </p>
              <p className="ex-item-cat mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                Tech Experience
              </p>
              <div className="ex-timeline-rail relative mt-10 hidden min-h-48 flex-1 lg:block">
                <div className="absolute inset-y-0 left-0 w-px bg-border-subtle" />
                <div className="ex-timeline-line absolute inset-y-0 left-0 w-px origin-top bg-accent" />
                <span
                  className="ex-timeline-dot absolute -left-1 top-0 flex size-2.5 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="size-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,90,31,0.15)]" />
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:pb-16">
            <ExperienceItemContent item={items[0]} />
          </div>
        </div>
      </Container>
    </div>
  );
}