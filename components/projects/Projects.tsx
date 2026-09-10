"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import ProjectItem from "@/components/projects/ProjectItem";
import ProjectIndex from "@/components/projects/ProjectIndex";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const ids = projects.map((project) => project.id);

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pj-intro-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pj-intro-label",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".pj-intro-line",
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1.15,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".pj-intro-title",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".pj-intro-desc",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pj-intro-desc",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".project-index",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".pj-item");
      items.forEach((item) => {
        const q = gsap.utils.selector(item);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            once: true,
          },
        });

        tl.fromTo(
          q(".pj-num"),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        )
          .fromTo(
            q(".pj-cat"),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            q(".pj-title-inner"),
            { yPercent: 116 },
            { yPercent: 0, duration: 1, stagger: 0.09, ease: "power4.out" },
            "-=0.35"
          )
          .fromTo(
            q(".pj-visual"),
            { opacity: 0.4, y: 60, clipPath: "inset(8% 5% 8% 5%)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.1,
              ease: "power3.out",
            },
            "-=0.6"
          )
          .fromTo(
            q(".pj-desc"),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.65"
          )
          .fromTo(
            q(".pj-tech"),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            q(".pj-btn"),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.45"
          );

        gsap.fromTo(
          q(".project-visual"),
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={sectionRef} id="projects" aria-label="Selected work">
      <Container>
        <header className="pt-[clamp(120px,16vw,220px)] pb-[clamp(40px,6vw,80px)]">
          <div className="pj-intro-label flex items-center gap-2">
            <SectionLabel index="03">Selected Work</SectionLabel>
            <span className="font-mono text-[10px] tracking-[0.28em] text-muted/50">
              / 06
            </span>
          </div>

          <h2
            className="pj-intro-title mt-10 font-display"
            data-cursor="view"
          >
            <span className="block overflow-hidden py-1">
              <span className="pj-intro-line block text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-muted">
                THINGS
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="pj-intro-line block text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-muted">
                I&rsquo;VE
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="pj-intro-line block text-[clamp(3.4rem,9vw,8rem)] font-semibold leading-[1] tracking-[-0.02em] text-accent">
                BUILT.
              </span>
            </span>
          </h2>

          <p className="pj-intro-desc mt-9 max-w-md text-base leading-relaxed text-muted">
            A selection of products, experiments and digital experiences I&rsquo;ve
            worked on.
          </p>
        </header>
      </Container>

      <ProjectIndex projects={projects} ids={ids} />

      <div className="pj-list">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} first={index === 0} />
        ))}
      </div>
    </section>
  );
}