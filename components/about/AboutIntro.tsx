"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { EASE, fadeUp } from "@/lib/animations";

function MaskedLine({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: reduce ? 0 : "112%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const PROCESS_WORDS = [
  { word: "UNDERSTAND.", indent: "lg:ml-0" },
  { word: "BUILD.", indent: "lg:ml-16" },
  { word: "BREAK.", indent: "lg:ml-32" },
  { word: "IMPROVE.", indent: "lg:ml-48" },
  { word: "SHIP.", indent: "lg:ml-64" },
];

export default function AboutIntro() {
  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          <SectionLabel index="02">About</SectionLabel>
        </motion.div>

        <h2 className="mt-8 font-display font-semibold tracking-[-0.03em]">
          <MaskedLine
            delay={0.05}
            className="text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] text-muted"
          >
            I&apos;M INTERESTED IN
          </MaskedLine>
          <MaskedLine
            delay={0.12}
            className="mt-1 text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-accent"
          >
            TURNING IDEAS INTO
          </MaskedLine>
          <MaskedLine
            delay={0.19}
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-foreground"
          >
            THINGS PEOPLE
          </MaskedLine>
          <MaskedLine
            delay={0.26}
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-outline"
          >
            CAN USE.
          </MaskedLine>
        </h2>
      </div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-lg text-base leading-relaxed text-muted lg:text-lg"
      >
        I&apos;m Sarvdnya Purnale, a Computer Science student and developer
        who enjoys turning ideas into thoughtful digital experiences. I work
        across web development, product interfaces and emerging technologies,
        constantly experimenting with better ways to build, design and solve
        problems.
      </motion.p>

      <div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted"
        >
          I LIKE TO
        </motion.p>

        <div className="flex flex-col gap-0">
          {PROCESS_WORDS.map((item) => (
            <div
              key={item.word}
              className={`about-process-word overflow-hidden opacity-0 ${item.indent}`}
            >
              <span className="block font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
                {item.word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
