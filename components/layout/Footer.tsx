"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { contactData, socialLinks } from "@/data/contact";
import BackToTop from "@/components/layout/BackToTop";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const footer = ref.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ft-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 96%",
            once: true,
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <footer ref={ref} className="relative border-t border-border-subtle">
      <BackToTop />
      <Container>
        <div className="grid items-center gap-y-6 py-8 md:grid-cols-3 md:gap-x-6">
          <p className="ft-item font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            {contactData.name}
          </p>
          <p className="ft-item font-mono text-[10px] uppercase tracking-[0.24em] text-muted md:text-center">
            © 2026
          </p>
          <div className="ft-item flex items-center gap-6 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group font-mono text-[10px] uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-accent"
              >
                <span className="inline-flex items-baseline gap-1">
                  {link.label.toUpperCase()}
                  <span
                    aria-hidden="true"
                    className="inline-block text-[8px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle py-7">
          <p className="ft-item font-mono text-[10px] uppercase tracking-[0.24em] text-muted/60">
            Portfolio — 2026
          </p>
          <a
            href="#top"
            className="ft-item group inline-flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-accent"
          >
            Back to top
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}