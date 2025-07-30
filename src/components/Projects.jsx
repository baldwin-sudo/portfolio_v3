import React, { forwardRef } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="scroll-mt-30">
      <h1 className="text-center text-3xl sm:text-5xl text-blue-500">
        My Projects
      </h1>
      <div className="flex flex-col items-center gap-15 p-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
});

export default Projects;
