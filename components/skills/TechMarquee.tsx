import { marqueeTechnologies } from "@/data/skills";

function Segment() {
  return (
    <div className="tech-marquee__segment" aria-hidden="true">
      {marqueeTechnologies.map((tech, index) => (
        <span key={`${tech}-${index}`} className="tech-marquee__item">
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="tech-marquee border-y border-border-subtle py-5"
    >
      <div className="tech-marquee__track">
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </div>
    </section>
  );
}