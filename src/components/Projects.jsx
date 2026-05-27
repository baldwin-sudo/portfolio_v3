import React, { forwardRef, useState } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";
import repoIco from "../assets/repo.svg";
const Projects = forwardRef((props, ref) => {
  // Tags filter
  const [selectedTags, setSelectedTags] = useState([]);

  const typeTwoProjects = projects.filter((project) => project.type === 2);

  const tagCounts = typeTwoProjects.reduce((counts, project) => {
    (project.tech || []).forEach((tech) => {
      const tag = tech.toLowerCase();
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
  }, {});

  const allTags = Array.from(
    new Set(
      typeTwoProjects
        .flatMap((p) => p.tech || [])
        .filter(Boolean)
        .map((t) => t.toLowerCase())
    )
  );

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const visibleProjects = typeTwoProjects.filter((p) => {
    if (selectedTags.length === 0) return true;
    const techs = (p.tech || []).map((t) => t.toLowerCase());
    return selectedTags.every((tag) => techs.includes(tag));
  });

  function tagStyle(tag) {
    const palette = {
      python: ["bg-yellow-50", "text-yellow-700", "bg-yellow-400"],
      pytorch: ["bg-rose-50", "text-rose-700", "bg-rose-400"],
      aws: ["bg-amber-50", "text-amber-700", "bg-amber-400"],
      terraform: ["bg-teal-50", "text-teal-700", "bg-teal-400"],
      docker: ["bg-sky-50", "text-sky-700", "bg-sky-400"],
      reactjs: ["bg-cyan-50", "text-cyan-700", "bg-cyan-400"],
      tailwindcss: ["bg-blue-50", "text-blue-700", "bg-blue-400"],
      nextjs: ["bg-slate-50", "text-slate-700", "bg-slate-400"],
      postgresql: ["bg-indigo-50", "text-indigo-700", "bg-indigo-400"],
      redis: ["bg-red-50", "text-red-700", "bg-red-400"],
      go: ["bg-emerald-50", "text-emerald-700", "bg-emerald-400"],
      mysql: ["bg-orange-50", "text-orange-700", "bg-orange-400"],
      elastic: ["bg-orange-50", "text-orange-700", "bg-orange-400"],
      openai: ["bg-purple-50", "text-purple-700", "bg-purple-400"],
      streamlit: ["bg-pink-50", "text-pink-700", "bg-pink-400"],
      rust: ["bg-amber-50", "text-amber-700", "bg-amber-400"],
    };
    return palette[tag] || ["bg-gray-50", "text-gray-700", "bg-gray-400"];
  }
  return (
    <div ref={ref} className="scroll-mt-30">
      <h1 className="text-center text-3xl sm:text-5xl text-neutral-700">
        My Projects
      </h1>
      <div className="w-full max-w-5xl mx-auto mt-6 px-4 sm:px-0">
        <div className="rounded-2xl border border-gray-200 bg-white/80 shadow-sm p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center mb-3">
            <div>
              {/* <p className="text-sm font-semibold text-gray-500">  Click one or more tags to highlight them and filter the projects.</p> */}
              <p className="text-sm text-gray-500">
              
              </p>
            </div>
            <button
              onClick={() => setSelectedTags([])}
              className={clsx(
                "w-36 text-center px-3 py-2 rounded-full text-sm bg-gray-100 text-gray-700",
                "visible hover:bg-gray-200"
                  
              )}
            >
              Clear filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const [bg, text, dot] = tagStyle(tag);
              const selected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={clsx(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm capitalize transition-all border",
                    selected
                      ? "bg-green-600 text-white border-green-600 shadow-lg scale-100"
                      : `${bg} ${text} border-gray-200 hover:brightness-95`
                  )}
                >
                  <span className={clsx("h-2 w-2 rounded-full", dot)} />
                  <span className="truncate max-w-[8rem]">{tag}</span>
                  <span
                    className={clsx(
                      "ml-2 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
                      selected ? "bg-white/20 text-white" : "bg-white/80 text-gray-700"
                    )}
                  >
                    {tagCounts[tag] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    
      <div className="w-full p-4 sm:p-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visibleProjects.map((project, index) => (
            <div key={index} className="w-full h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://github.com/baldwin-sudo?tab=repositories"
        className="flex  items-center justify-center gap-5 bg-green-500 w-fit mx-auto px-5 lg:px-10 lg:py-3 py-2.5 rounded-lg font-semibold text-white transition-all duration-200 hover:bg-gray/80 hover:-translate-y-0.5"
      >
        {" "}
        <img className="h-8 w-6" src={repoIco} alt="" />
        Other Projects on my GitHub
      </a>
    </div>
  );
});

export default Projects;
