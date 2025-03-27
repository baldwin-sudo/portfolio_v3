import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ExperienceCard({ experience, index }) {
  const isSlideLeft = index % 2 == 0;
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false,
  });
  const initial = isSlideLeft ? { x: "100%" } : { x: "100%" };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { x: "0%" } : initial}
      viewport={{ once: false, amount: 0.8 }} // Triggers when 30% of the div is visible
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex flex-col gap-3 w-fit  max-w-250 rounded-lg p-8 "
    >
      <h1 className="text-2xl sm:text-4xl">{experience.role}</h1>
      <p className="text-neutral-600 text-lg sm:text-xl">{experience.place}</p>
      <p className="text-sm sm:text-lg">{experience.description}</p>
      <p className="text-neutral-600">{experience.date}</p>
    </motion.div>
  );
}
