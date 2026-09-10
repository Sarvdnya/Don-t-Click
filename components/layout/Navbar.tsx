"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/animations";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CAPABILITIES", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = NAV_LINKS.map((link) => link.href.slice(1)).filter((id) =>
      document.getElementById(id)
    );
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "nav-enter fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-border-subtle bg-background/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-[72px]">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-[0.28em] text-foreground"
          >
            SARVDNYA
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.24em] transition-colors duration-300 hover:text-foreground",
                  active === link.href ? "text-accent" : "text-muted"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted lg:flex">
              <span className="status-dot" aria-hidden="true" />
              Available to build
            </span>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border-subtle text-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background/95 px-6 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "true" : undefined}
                  className={cn(
                    "border-b border-border-subtle py-6 font-display text-4xl font-semibold tracking-tight transition-colors duration-300",
                    active === link.href ? "text-accent" : "text-foreground"
                  )}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: DURATION.base,
                    delay: 0.05 * index,
                    ease: EASE,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <p className="mt-10 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              <span className="status-dot" aria-hidden="true" />
              Available to build
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}