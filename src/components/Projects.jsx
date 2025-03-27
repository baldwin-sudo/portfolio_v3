import React from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="">
      <h1 className=" text-center text-3xl sm:text-5xl">My Projects </h1>
      <div className="flex flex-col  items-center gap-15 p-10 ">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
