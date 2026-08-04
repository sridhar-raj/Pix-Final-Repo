"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

/** Mirrors the Framer "appear on scroll" effect: fade/rise/scale in on enter. */
export function Reveal({
  children,
  className,
  y = 30,
  scale = 0.9,
  delay = 0,
  duration = 0.5,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, scale },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.12, 0.23, 0.5, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
