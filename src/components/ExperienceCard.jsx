import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";
import "../App.css";
export default function ExperienceCard({ experience, index }) {
  const isSlideLeft = index % 2 == 0;
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false,
  });
  const initial = isSlideLeft ? { x: "100%" } : { x: "100%" };
  return (
    <div className="project-card-overlay">
      <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? { x: "0%" } : initial}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex flex-col gap-3 w-fit  max-w-250 rounded-lg p-8 "
      >
        <h1 className="text-blue-400 text-2xl sm:text-4xl">
          {experience.role}
        </h1>
        <p className="text-blue-400 text-lg sm:text-xl">{experience.place}</p>
        <p className="text-neutral-500 text-sm sm:text-lg">
          {experience.description}
        </p>
        <p className="text-neutral-500">{experience.date}</p>
      </motion.div>
    </div>
  );
}
