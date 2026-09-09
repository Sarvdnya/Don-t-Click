"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = DURATION.base,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : duration,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}