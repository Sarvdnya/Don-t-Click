"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE, signalPreloaderDone } from "@/lib/animations";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    if (reduce) signalPreloaderDone();
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence onExitComplete={signalPreloaderDone}>
      {visible && (
        <motion.div
          className="preloader fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <motion.p
            className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          >
            Sarvdnya Purnale
          </motion.p>

          <motion.div
            className="mt-6 h-px w-40 overflow-hidden bg-border-subtle sm:w-52"
            aria-hidden="true"
          >
            <motion.span
              className="block h-full w-full origin-left bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}