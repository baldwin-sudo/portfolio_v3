import React, { useRef } from "react";
import githubIco from "../assets/github-icon.png";
import linkIco from "../assets//link-icon.png";
import StackIcon from "tech-stack-icons";
import { motion, useInView } from "framer-motion";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false,
    threshold: 0.8,
  });
  const { title, tech, github, demo, description, img } = project;
  return (
    <motion.div
      className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex  w-fit lg:w-225 xl:w-250 rounded-lg  "
      initial={{ scale: 0.7, opacity: 0.6 }}
      viewport={{ once: false, amount: 0.8 }} // Triggers when 30% of the div is visible
      animate={
        inView ? { scale: 1.05, opacity: 1 } : { scale: 0.8, opacity: 0.6 }
      }
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <div
        ref={ref}
        className="flex flex-col gap-5 p-4 lg:p-8 w-full lg:w-150 "
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-1">
          <span className="font-bold  text-neutral-600">Made with :</span>{" "}
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
        <p className="text-lg  text-neutral-500">{description}</p>
        <div className="flex gap-10 mt-5">
          {github && (
            <a
              href={github}
              className="w-30 lg:w-35 flex  items-center justify-center gap-1 border-1 rounded-full px-4 sm:px-6 py-3 bg-white hover:opacity-80 text-lg sm:text-xl  cursor-pointer "
            >
              {" "}
              <img className="w-6 h-6" src={githubIco} alt="" />
              Github
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="w-30 lg:w-35  flex  items-center justify-center gap-1  rounded-full px-4 sm:px-6 py-3 bg-neutral-900 hover:opacity-80 text-white text-lg sm:text-xl cursor-pointer "
            >
              <img className="w-6 h-6" src={linkIco} alt="" />
              <p>Live</p>
            </a>
          )}
        </div>
      </div>{" "}
      {img != null ? (
        <div className="relative self-end   lg:w-250 xl:w-300 h-0 lg:h-70 xl:h-80 overflow-clip ">
          <img
            src={img}
            alt="project img"
            className="hidden absolute -right-5 bottom-0  lg:block lg:h-70 xl:h-80 w-350    rounded-md  border-1 border-b-0 border-neutral-300 "
          />
        </div>
      ) : null}
    </motion.div>
  );
}
