"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProfileImage from "@/components/hero/ProfileImage";
import { EASE } from "@/lib/animations";

type HeroVisualProps = {
  started: boolean;
};

export default function HeroVisual({ started }: HeroVisualProps) {
  const reduce = useReducedMotion();

  return (
    <div className="hero-image-parallax relative mx-auto w-full max-w-[420px] lg:max-w-none">
      <div
        className="absolute -right-12 -top-12 size-52 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <figure className="relative border border-border-subtle bg-surface shadow-[0_50px_90px_-40px_rgba(0,0,0,0.85)]">
        <span
          className="absolute -left-px -top-px z-10 h-8 w-8 border-l-2 border-t-2 border-accent"
          aria-hidden="true"
        />

        <div className="relative aspect-[4/5] overflow-hidden">
          <ProfileImage started={started} />
        </div>

        <motion.span
          className="absolute -bottom-px left-0 z-10 h-px w-full origin-left bg-accent/70"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={started ? { scaleX: 1 } : undefined}
          transition={{
            duration: reduce ? 0 : 0.9,
            ease: EASE,
            delay: started ? 0.55 : 0,
          }}
        />

        <span
          className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.45)]"
          aria-hidden="true"
        />
      </figure>

      <figcaption className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-muted">
        <span>Sarvdnya Purnale</span>
        <span className="flex items-center gap-2">
          <span className="status-dot" aria-hidden="true" />
          Pune, India
        </span>
      </figcaption>
    </div>
  );
}