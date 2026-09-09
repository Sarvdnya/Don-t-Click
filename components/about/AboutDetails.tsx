"use client";

import { useState } from "react";

const DETAIL_BLOCKS = [
  {
    label: "EDUCATION",
    lines: ["DY Patil International University", "B.Tech — Computer Science Engineering"],
  },
  {
    label: "FOCUS",
    lines: ["Software Enginnering", "AI / Emerging Technology", "Product Experiences"],
  },
  {
    label: "CURRENTLY",
    lines: ["Learning", "Building", "Experimenting"],
  },
];

const TECH_WORDS = ["WEB", "AI", "UI", "PRODUCT", "EXPERIMENTS"];

export default function AboutDetails() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-12 lg:sticky lg:top-28 lg:gap-16">
      <div className="flex flex-col gap-8">
        {DETAIL_BLOCKS.map((block) => (
          <div
            key={block.label}
            className="about-info-block border-t border-border-subtle pt-6 opacity-0"
          >
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              {block.label}
            </span>
            {block.lines.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-foreground/80">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="about-tech-line border-t border-border-subtle pt-6 opacity-0">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {TECH_WORDS.map((word) => (
            <button
              key={word}
              type="button"
              data-cursor="view"
              className="group relative font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-foreground"
              onMouseEnter={() => setHoveredWord(word)}
              onMouseLeave={() => setHoveredWord(null)}
              style={{
                transform:
                  hoveredWord === word ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {word}
              <span
                className="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300"
                style={{
                  width: hoveredWord === word ? "100%" : "0%",
                  transition: "width 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
