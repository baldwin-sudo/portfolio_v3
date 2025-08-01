import React, { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import StackIcon from "tech-stack-icons";

const Skills = forwardRef((props, ref) => {
  const skills = [
    "html5",
    "css3",
    "tailwindcss",
    "js",
    "reactjs",
    "nextjs",
    "java",
    "spring",
    "go",

    "git",
    "postman",
    "python",
    "pytorch",
    "mysql",
    "postgresql",
    "mongodb",
    "elastic",
    "aws",
    "linux",
    "kubernetes",
    "docker",
  ];

  const isInView = useInView(ref, {
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
    <div ref={ref} className="max-w-250 mx-auto scroll-mt-30">
      <h1 className="text-center text-neutral-600 text-3xl sm:text-5xl mb-5">
        Tech Stack
      </h1>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-10 p-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-1.5"
          >
            <StackIcon name={skill} className="size-15 lg:size-20" />
            <p className="text-xl lg:text-2xl text-neutral-400">{skill}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});
export default Skills;
