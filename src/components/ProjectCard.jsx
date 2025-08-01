import React, { useRef } from "react";
import "../App.css";
import githubIco from "../assets/github-icon.png";
import linkIco from "../assets//link-icon.png";
import StackIcon from "tech-stack-icons";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false,
    threshold: 0.8,
  });
  const { title, tech, github, demo, description, img } = project;
  return (
    <div className="project-card-overlay shadow-lg bg-white hover:shadow-xl  p-4 lg:p-8 rounded-lg  border-1 border-l-4 border-l-blue-500 border-neutral-50 transition-all duration-100 ">
      <motion.div
        className="  flex  w-fit sm:w-150 lg:w-225 xl:w-250  "
        initial={{ scale: 0.95, opacity: 0.6 }}
        viewport={{ once: false, amount: 0.8 }} // Triggers when 30% of the div is visible
        animate={
          inView ? { scale: 1.0, opacity: 1 } : { scale: 0.8, opacity: 0.6 }
        }
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div ref={ref} className="flex flex-col gap-5 w-full lg:w-150 ">
          <h1 className="text-xl text-blue-500 font-semibold">{title}</h1>
          <div className="flex items-center gap-1">
            <span className="font-medium  text-blue-500">Made with :</span>{" "}
            {tech.map((t, index) => {
              return (
                <p key={index} className="inline">
                  {<StackIcon name={t} className="size-10 lg:size-15" /> || (
                    <p className="text-black">{t}</p>
                  )}
                </p>
              );
            })}
          </div>
          <p className="text-lg z-10 text-neutral-500">{description}</p>
          <div className="flex gap-10 mt-5 z-20">
            {github && (
              <a
                href={github}
                target="_blank"
                className="w-30 lg:w-35 flex  items-center justify-center gap-1 border-2 rounded-full px-4 sm:px-6 py-3 bg-white hover:opacity-80 text-lg sm:text-xl border-blue-300 cursor-pointer "
              >
                {" "}
                <img className="w-6 h-6" src={githubIco} alt="" />
                <span className="text-blue-400">Github</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="w-30 lg:w-35  flex  items-center justify-center gap-1  rounded-full px-4 sm:px-6 py-3 bg-blue-400 hover:opacity-80 text-white text-lg sm:text-xl cursor-pointer "
              >
                <img className="z-1 w-6 h-6" src={linkIco} alt="" />
                <p>Live</p>
              </a>
            )}
          </div>
        </div>{" "}
        {img != null ? (
          <div className="z-20 relative self-end   lg:w-250 xl:w-300 h-0 lg:h-70 xl:h-80 overflow-clip ">
            <img
              src={img}
              alt="project img"
              className="z-10 hidden absolute -right-5 bottom-0  lg:block lg:h-70 xl:h-80 w-350    rounded-md  border-1 border-b-0 border-neutral-300 "
            />
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
