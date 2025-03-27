import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StackIcon from "tech-stack-icons";

export default function Skills() {
  const skills = [
    "html5",
    "css3",
    "js",
    "nodejs",
    "reactjs",
    "nextjs",
    "java",
    "spring",
    "git",
    "python",
    "pytorch",
    "mysql",
    "postgresql",
    "oracle",
    "mongodb",
    "elastic",
    "aws",
    "linux",
    "docker",
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.1, // Trigger when 10% of the section is in view
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of child elements
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div ref={containerRef} className="max-w-250 mx-auto">
      <h1 className="text-3xl xl:text-5xl text-center mb-5">My Skills</h1>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-10 p-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-1.5"
          >
            <StackIcon name={skill} className="size-15 lg:size-20" />
            <p className="text-xl lg:text-2xl">{skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
