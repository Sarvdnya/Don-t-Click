import SectionLabel from "@/components/ui/SectionLabel";

export default function ExperienceHeader() {
  return (
    <header className="pt-[clamp(120px,16vw,220px)] pb-[clamp(48px,7vw,96px)]">
      <div className="ex-label flex items-center gap-2">
        <SectionLabel index="04">Experience</SectionLabel>
        <span className="font-mono text-[10px] tracking-[0.28em] text-muted/50">
          / 05
        </span>
      </div>

      <h2 className="ex-head mt-10 font-display">
        <span className="block overflow-hidden py-1">
          <span className="ex-head-line block text-[clamp(1.5rem,3.8vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-muted">
            I LEARN BY
          </span>
        </span>
        <span className="block overflow-hidden py-1">
          <span className="ex-head-line block text-[clamp(2.6rem,6.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            BUILDING
          </span>
        </span>
        <span className="block overflow-hidden py-1">
          <span className="ex-head-line block text-[clamp(2.6rem,6.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-accent">
            REAL THINGS.
          </span>
        </span>
      </h2>

      <p className="ex-intro mt-9 max-w-md text-base leading-relaxed text-muted">
        I&rsquo;m a Computer Science student focused on frontend development,
        interface design and emerging technologies. I enjoy turning ideas into
        clean, interactive and useful digital experiences.
      </p>
    </header>
  );
}