import Container from "@/components/ui/Container";

const DIRECTION_LINES = [
  { text: "FRONTEND", accent: false },
  { text: "+", accent: true, small: true },
  { text: "INTERACTION", accent: false },
  { text: "+", accent: true, small: true },
  { text: "AI", accent: true },
];

export default function Direction() {
  return (
    <section aria-label="My current direction" className="pb-[clamp(88px,13vw,160px)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="ex-dir-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              My current direction
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="ex-dir-title font-display font-semibold">
              {DIRECTION_LINES.map((line, index) => (
                <span key={`${line.text}-${index}`} className="block overflow-hidden py-0.5">
                  <span
                    className={`ex-dir-line block leading-[1.02] tracking-[-0.02em] ${
                      line.small
                        ? "pt-1 text-[clamp(1.3rem,3.4vw,3rem)]"
                        : "text-[clamp(2.2rem,6vw,5rem)]"
                    } ${line.accent ? "text-accent" : "text-foreground"}`}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </p>

            <p className="ex-dir-copy mt-8 max-w-xl text-base leading-relaxed text-muted">
              I&rsquo;m particularly interested in building interfaces that feel
              fast, intuitive and intentional &mdash; while exploring how AI can make
              digital products more useful.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}