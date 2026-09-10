"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactCTA from "@/components/contact/ContactCTA";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactStatus from "@/components/contact/ContactStatus";
import ContactFinale from "@/components/contact/ContactFinale";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      /* Section label */
      gsap.fromTo(
        q(".ct-label"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-label"),
            start: "top 88%",
            once: true,
          },
        }
      );

      /* Headline lines */
      gsap.fromTo(
        q(".ct-line"),
        { clipPath: "inset(100% 0 0 0)", y: 30 },
        {
          clipPath: "inset(0 0 0 0)",
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: q(".ct-head"),
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Supporting copy */
      gsap.fromTo(
        q(".ct-intro"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-intro"),
            start: "top 90%",
            once: true,
          },
        }
      );

      /* Main CTA */
      gsap.fromTo(
        q(".ct-cta-wrap"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-cta-wrap"),
            start: "top 85%",
            once: true,
          },
        }
      );

      /* Social links */
      gsap.fromTo(
        q(".ct-social"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-social"),
            start: "top 90%",
            once: true,
          },
        }
      );

      /* Status */
      gsap.fromTo(
        q(".ct-status-label"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-status-label"),
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".ct-status"),
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".ct-status"),
            start: "top 92%",
            once: true,
          },
        }
      );

      /* Finale */
      gsap.fromTo(
        q(".ct-finale"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: q(".ct-finale"),
            start: "top 92%",
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
      id="contact"
      aria-label="Contact"
      className="relative"
    >
      <Container>
        <header className="pt-[clamp(120px,16vw,220px)]">
          <div className="ct-label flex items-center gap-2">
            <SectionLabel index="06">Contact</SectionLabel>
            <span className="font-mono text-[10px] tracking-[0.28em] text-muted/50">
              / 06
            </span>
          </div>

          <h2 className="ct-head mt-10 font-display">
            <span className="ct-line block text-[clamp(1.5rem,3.8vw,2.4rem)] leading-[1.05] tracking-[-0.02em] text-muted">
              LET&rsquo;S BUILD
            </span>
            <span className="ct-line block text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.96] tracking-[-0.02em]">
              SOMETHING
            </span>
            <span className="ct-line block text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-accent">
              USEFUL.
            </span>
          </h2>

          <p className="ct-intro mt-9 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
            Have an idea, project, experiment, or problem worth solving?
            I&rsquo;m always interested in building thoughtful digital
            experiences and exploring new technology.
          </p>
        </header>

        <ContactCTA />

        <div className="mt-[clamp(72px,10vw,130px)] grid gap-12 border-t border-border-subtle pt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SocialLinks />
          </div>
          <ContactStatus />
        </div>

        <ContactFinale />
      </Container>
    </section>
  );
}