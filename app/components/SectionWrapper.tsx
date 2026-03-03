"use client";

import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const SectionWrapper = ({
  children,
  className = "",
  delay = 0.5,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
      className={`section-container ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
