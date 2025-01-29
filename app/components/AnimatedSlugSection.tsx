"use client";

import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Image {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

interface Service {
  id: string;
  title: string;
  slug: string;
  image: Image;
  summary: { id: string; description: string }[];
  details: string;
  keyPoints: { id: string; point: string }[];
}

interface Props {
  service: Service;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.2 },
  },
};

const imageVariant = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const AnimatedSlugSection = ({ service }: Props) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-[55%_45%] gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16"
    >
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        <motion.h2
          variants={fadeInUp}
          className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
        >
          {service?.title}
        </motion.h2>

        <motion.div variants={staggerContainer} className="space-y-4">
          {service?.summary.map((desc) => (
            <motion.p
              key={desc.id}
              variants={fadeInUp}
              className="text-sm md:text-base"
            >
              {desc.description}
            </motion.p>
          ))}
        </motion.div>

        <motion.ul variants={staggerContainer} className="flex flex-col gap-2">
          {service?.keyPoints.map((keyPoint) => (
            <motion.li
              key={keyPoint.id}
              variants={fadeInUp}
              className="flex items-center gap-2"
            >
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">{keyPoint.point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div variants={imageVariant}>
        <Image
          src={service?.image.src}
          alt={service?.title}
          width={service?.image.width}
          height={service?.image.height}
          style={{ objectFit: "cover" }}
          className="w-full sm:w-5/6 md:w-3/4 lg:w-4/5 mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSlugSection;
