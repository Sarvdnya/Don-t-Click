"use client";

import { useEffect, useRef, useState } from "react";
import { marqueeTechnologies } from "@/data/skills";
import { cn } from "@/lib/utils";

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
  const ref = useRef<HTMLElement | null>(null);
  const [offscreen, setOffscreen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOffscreen(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Technologies I work with"
      className="tech-marquee border-y border-border-subtle py-5"
    >
      <div
        className={cn(
          "tech-marquee__track",
          offscreen && "tech-marquee__track--paused"
        )}
      >
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </div>
    </section>
  );
}