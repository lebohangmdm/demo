"use client";

import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Default animation variants
const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SectionWrapper = ({
  children,
  className = "",
  delay = 0.3,
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
      className={`section-container ${className}`}
      style={{
        willChange: "opacity, transform",
        transition: `delay ${delay}s`,
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
