"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data/experience";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import FocusAreas from "@/components/experience/FocusAreas";
import Direction from "@/components/experience/Direction";
import Toolkit from "@/components/experience/Toolkit";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      /* Header choreography */
      gsap.fromTo(
        q(".ex-label"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-head-line"),
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 1.15,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q(".ex-head"),
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-intro"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-intro"),
            start: "top 90%",
            once: true,
          },
        }
      );

      /* Timeline choreography */
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: q(".experience-timeline"),
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .fromTo(
          q(".ex-item-num"),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          q(".ex-item-cat"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(
          q(".ex-timeline-line"),
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 1.1, ease: "power3.inOut" },
          "-=0.4"
        )
        .fromTo(
          q(".ex-timeline-dot"),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
          "-=0.7"
        )
        .fromTo(
          q(".ex-item-role"),
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=1.0"
        )
        .fromTo(
          q(".ex-item-org"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          q(".ex-item-desc"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          q(".ex-resp-head"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          q(".ex-resp-item"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          q(".ex-tag"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" },
          "-=0.5"
        );

      /* Focus areas */
      gsap.fromTo(
        q(".ex-focus-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-focus-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-focus-item"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-focus-label"),
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Direction */
      gsap.fromTo(
        q(".ex-dir-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-dir-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-dir-line"),
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q(".ex-dir-title"),
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-dir-copy"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-dir-copy"),
            start: "top 90%",
            once: true,
          },
        }
      );

      /* Toolkit */
      gsap.fromTo(
        q(".ex-toolkit-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-toolkit-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ex-toolkit-chip"),
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ex-toolkit-label"),
            start: "top 84%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="Experience and professional identity"
      className="relative"
    >
      <div className="pt-[clamp(40px,6vw,80px)]">
        <ExperienceHeader />
      </div>
      <ExperienceTimeline items={experience} />
      <FocusAreas />
      <Direction />
      <Toolkit />
    </section>
  );
}