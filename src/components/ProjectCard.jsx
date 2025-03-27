import React from "react";
import githubIco from "../assets/github-icon.png";

export default function ProjectCard({ project }) {
  const { title, tech, github, demo, description, img } = project;
  return (
    <div className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex gap-3 w-fit  max-w-250 rounded-lg p-8 ">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div>
          <span className="font-bold  text-neutral-600">Made with :</span>{" "}
          {tech.map((t, index) => {
            return (
              <p key={index} className="inline">
                {t}
              </p>
            );
          })}
        </div>
        <p className="text-lg  text-neutral-500">{description}</p>
        <div className="flex gap-10 mt-5">
          {github && (
            <button className="flex  items-center justify-center gap-1 border-1 rounded-full px-4 sm:px-6 py-3 bg-white text-lg sm:text-xl  cursor-pointer ">
              {" "}
              <img className="w-6 h-6" src={githubIco} alt="" />
              Github
            </button>
          )}
          {demo && (
            <button className="flex  items-center justify-center gap-1  rounded-full px-4 sm:px-6 py-3 bg-neutral-900 text-white text-lg sm:text-xl cursor-pointer ">
              <img className="w-6 h-6" src={githubIco} alt="" />
              demo
            </button>
          )}
        </div>
      </div>{" "}
      <div>
        <img
          src={img}
          alt="project img"
          className="hidden lg:block w-100 h-80 border-2 "
        />
      </div>
    </div>
  );
}
