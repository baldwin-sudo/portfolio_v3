import React from "react";
import githubIco from "../assets/github-icon.png";
import linkIco from "../assets//link-icon.png";
import StackIcon from "tech-stack-icons";
import { p } from "framer-motion/client";

export default function ProjectCard({ project }) {
  const { title, tech, github, demo, description, img } = project;
  return (
    <div className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex gap-3 w-fit  max-w-250 rounded-lg p-8 ">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">{title}</h1>
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
            <button className="w-30 lg:w-35 flex  items-center justify-center gap-1 border-1 rounded-full px-4 sm:px-6 py-3 bg-white hover:opacity-80 text-lg sm:text-xl  cursor-pointer ">
              {" "}
              <img className="w-6 h-6" src={githubIco} alt="" />
              Github
            </button>
          )}
          {demo && (
            <button className="w-30 lg:w-35  flex  items-center justify-center gap-1  rounded-full px-4 sm:px-6 py-3 bg-neutral-900 hover:opacity-80 text-white text-lg sm:text-xl cursor-pointer ">
              <img className="w-6 h-6" src={linkIco} alt="" />
              <a href={demo}>Live</a>
            </button>
          )}
        </div>
      </div>{" "}
      <div className="flex items-center">
        {img != null ? (
          <img
            src={img}
            alt="project img"
            className="hidden lg:block w-140 h-50 border-2 border-neutral-300 "
          />
        ) : null}
      </div>
    </div>
  );
}
