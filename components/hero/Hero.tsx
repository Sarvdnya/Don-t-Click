"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/animations/Magnetic";
import HeroVisual from "@/components/hero/HeroVisual";
import { EASE, preloaderDone, fadeUp, staggerParent } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

function MaskedLine({
  children,
  started,
  delay,
  className,
}: {
  children: React.ReactNode;
  started: boolean;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="block overflow-hidden py-1">
      <motion.span
        className={className}
        initial={{ y: reduce ? 0 : "112%" }}
        animate={started ? { y: 0 } : undefined}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    preloaderDone.then(() => setStarted(true));
  }, []);

  useEffect(() => {
    if (reduce) return;
    const root = rootRef.current;
    if (!root) return;

    let xTo: ((value: number) => void) | null = null;
    let yTo: ((value: number) => void) | null = null;

    const onMove = (event: MouseEvent) => {
      if (!xTo || !yTo) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      xTo(x * -16);
      yTo(y * -12);
    };

    const ctx = gsap.context(() => {
      gsap.to(".hero-image-parallax", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-copy", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-scroll-hint", {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "8% top",
          scrub: true,
        },
      });

      const finePointer = window.matchMedia("(pointer: fine)").matches;
      xTo = gsap.quickTo(".hero-image-parallax", "x", {
        duration: 0.9,
        ease: "power3.out",
      });
      yTo = gsap.quickTo(".hero-image-parallax", "y", {
        duration: 0.9,
        ease: "power3.out",
      });

      if (finePointer) {
        window.addEventListener("mousemove", onMove, { passive: true });
      }
    }, root);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, [reduce]);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-28 lg:pt-20"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="hero-copy lg:col-span-7"
            variants={staggerParent}
            initial="hidden"
            animate={started ? "show" : "hidden"}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>
                Computer Science Student · Developer · Builder
              </SectionLabel>
            </motion.div>

            <h1 className="mt-8 font-display font-semibold tracking-[-0.02em]">
              <MaskedLine
                started={started}
                delay={0.18}
                className="text-[clamp(1.4rem,3.6vw,2.2rem)] leading-none text-muted"
              >
                I BUILD
              </MaskedLine>
              <MaskedLine
                started={started}
                delay={0.3}
                className="mt-1 text-[clamp(3.4rem,9.5vw,8.25rem)] leading-[0.95] text-accent"
              >
                DIGITAL
              </MaskedLine>
              <MaskedLine
                started={started}
                delay={0.42}
                className="text-[clamp(3.4rem,9.5vw,8.25rem)] leading-[0.95] text-outline"
              >
                EXPERIENCES.
              </MaskedLine>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-md text-base leading-relaxed text-muted lg:text-lg"
            >
              I build thoughtful digital products, web experiences and
              experiments at the intersection of technology and creativity.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button href="#projects">
                  View my work
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#contact" variant="ghost">
                  Let&rsquo;s connect
                </Button>
              </Magnetic>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5">
            <HeroVisual started={started} />
          </div>
        </div>
      </Container>

      <div
        className="hero-scroll-hint absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
          Scroll to explore
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-border-subtle">
          <motion.span
            className="absolute inset-x-0 top-0 h-6 bg-accent"
            animate={
              reduce
                ? undefined
                : { y: ["-100%", "320%"] }
            }
            transition={{
              duration: 1.9,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.25,
            }}
          />
        </span>
      </div>

      <span className="absolute bottom-8 left-8 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-muted sm:block">
        01 / 06
      </span>

      <span className="absolute right-8 top-1/2 hidden origin-center -translate-y-1/2 rotate-90 font-mono text-[9px] uppercase tracking-[0.3em] text-muted lg:block">
        Portfolio — 2026
      </span>
    </section>
  );
}