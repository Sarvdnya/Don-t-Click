"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";

type ProfileImageProps = {
  started: boolean;
  priority?: boolean;
};

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-surface p-8">
      <span className="font-display text-6xl font-semibold tracking-tight text-foreground/90">
        SP
      </span>
      <span className="h-px w-14 bg-accent" aria-hidden="true" />
      <p className="text-center font-mono text-[9px] uppercase leading-[1.8] tracking-[0.24em] text-muted">
        Portrait
        <br />
        public/images/profile.pnj
      </p>
    </div>
  );
}

export default function ProfileImage({
  started,
  priority = true,
}: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ y: "7%", scale: 1.06 }}
      animate={started ? { y: "0%", scale: 1 } : undefined}
      transition={{ duration: 1.15, ease: EASE, delay: 0.1 }}
    >
      {failed ? (
        <PortraitPlaceholder />
      ) : (
        <Image
          src="/images/profile.png"
          alt="Portrait of Sarvdnya Purnale, developer and builder based in Pune, India"
          fill
          sizes="(min-width: 1024px) 38vw, 92vw"
          priority={priority}
          quality={92}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}