import React, { forwardRef, useEffect, useRef, useState } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import { map } from "framer-motion/client";
import { motion } from "framer-motion"; // Import motion from framer-motion
import clsx from "clsx";

const Projects = forwardRef((props, ref) => {
  const menuItems = [
    {
      idx: 0,
      text: "Frontend",
      ref: useRef(null),
    },
    {
      idx: 1,
      text: "Full Stack",
      ref: useRef(null),
    },
    {
      idx: 2,
      text: "ML & AI",
      ref: useRef(null),
    },
  ];
  const [clickedTypeIdx, setClickTypeIdx] = useState(0);

  const [bubbleDimensions, setBubbleDimensions] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  useEffect(() => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
      menuItems[clickedTypeIdx].ref.current;
    setBubbleDimensions({
      top: offsetTop,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight,
    });
  }, [clickedTypeIdx]);
  return (
    <div ref={ref} className="scroll-mt-30">
      <h1 className="text-center text-3xl sm:text-5xl text-blue-500">
        My Projects
      </h1>
      {/* projects types  bar*/}
      <div className="relative mt-5 flex items-center justify-center lg:text-lg  lg:gap-5  p-2 rounded-full bg-white border-2 border-blue-100/50 shadow-xl  text-blue-600 w-fit mx-auto">
        <motion.div
          className="bg-linear-60 from-blue-300 to-blue-400 px-8 py-4 font-semibold text-white  rounded-full"
          // Animate when this value changes:
          animate={{
            left: bubbleDimensions.left,
            top: bubbleDimensions.top,
            width: `${bubbleDimensions.width}px`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 40 }}
          style={{
            top: `${bubbleDimensions.top}px`, // Corrected
            height: `${bubbleDimensions.height}px`,
            position: "absolute",
            zIndex: 1,
          }}
        />
        {menuItems.map((item, idx) => {
          return (
            <div
              onClick={() => {
                setClickTypeIdx(item.idx);
              }}
              key={item.idx}
              ref={item.ref}
              className={` z-2 rounded-full  px-5 py-2 transition-all  duration-200 ${
                clickedTypeIdx === item.idx
                  ? "text-white font-medium"
                  : "text-blue-400 hover:scale-110   duration-200"
              }`}
            >
              {/* bubble style<div > */}
              {item.text}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-15 p-10">
        {projects.map((project, index) => {
          if (project.type == clickedTypeIdx)
            return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
});

export default Projects;
