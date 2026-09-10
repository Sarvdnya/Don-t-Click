"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillsHeader from "@/components/skills/SkillsHeader";
import TechMarquee from "@/components/skills/TechMarquee";
import SkillGroups from "@/components/skills/SkillGroups";
import Exploring from "@/components/skills/Exploring";
import SkillsCTA from "@/components/skills/SkillsCTA";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      /* Header */
      gsap.fromTo(
        q(".sk-label"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-head-line"),
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1.15,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q(".sk-head"),
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-intro"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-intro"),
            start: "top 90%",
            once: true,
          },
        }
      );

      /* Technical visual */
      gsap.fromTo(
        q(".skills-visual"),
        { opacity: 0.2, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".skills-visual"),
            start: "top 85%",
            once: true,
          },
        }
      );

      /* Marquee */
      gsap.fromTo(
        q(".tech-marquee"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: q(".tech-marquee"),
            start: "top 92%",
            once: true,
          },
        }
      );

      /* Capability groups */
      gsap.fromTo(
        q(".sk-group"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-groups"),
            start: "top 78%",
            once: true,
          },
        }
      );

      /* Currently exploring */
      gsap.fromTo(
        q(".sk-explore-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-explore-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-explore-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-explore-label"),
            start: "top 84%",
            once: true,
          },
        }
      );

      /* CTA */
      gsap.fromTo(
        q(".sk-cta-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-cta-label"),
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-cta-line"),
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q(".sk-cta-title"),
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-cta-meta"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: q(".sk-cta-meta"),
            start: "top 94%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".sk-cta-actions"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".sk-cta-actions"),
            start: "top 94%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={sectionRef} id="skills" aria-label="Skills and capabilities">
      <SkillsHeader />
      <TechMarquee />
      <SkillGroups />
      <Exploring />
      <SkillsCTA />
    </section>
  );
}