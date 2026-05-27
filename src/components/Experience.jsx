import React, { forwardRef } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = forwardRef((props, ref) => {
  const experiences = [
     {
      role: "End of studies internship ",
      place:
        "Dassault Systémes  (France)",
      date: "April 2026 - September 2026",
      description:
        " Built ReAct-based AI agents with LangChain & MCP protocol to automate CAD workflows on the 3DEXPERIENCE platform.Leveraged knowledge graphs and ontologies to improve LLM response consistency and reduce hallucinations.Collaborated with cross-functional engineering teams to integrate AI modules into enterprise-grade CAD pipelines, ensuring scalability and maintainability",
    },
    {
      role: "Internship ",
      place:
        "National Office for Drinking Water (ONEP Branche eau )  (morocco)",
      date: "June 2025 - August 2025",
      description:
        "Designed an internal system to manage interns and internships, track offers and monitor progress; backend in Golang .",
    },
    {
      role: "Internship ",
      place:
        "The Ministry of National Territorial Planning, Urban Planning  (morocco)",
      date: "June 2024 - August 2024",
      description:
        "My internship at the Ministry of Land Planning focused on artificial intelligence, where I developed a system for evaluating companies' needs before their digitalization. I utilized Large Language Models (LLMs) to analyze requirements and built a web interface to manage the evaluation process.",
    },
    {
      role: "Internship ",
      place: "The Health ministry (morocco)",
      date: "June 2023 - July 2023",
      description:
        "I contributed to the design and development of an information system for managing pilgrimage phases, including medication, service providers, and patient management. This project was built using React and Node.js to create a modern and responsive solution.",
    },
  ];
  return (
    <div
      ref={ref}
      className="z-2 flex flex-col items-center justify-center scroll-mt-30"
    >
      <h1 className="text-neutral-600 text-center text-3xl sm:text-5xl">
        My Experience
      </h1>
      <div className="flex flex-col  items-center justify-center max-w-200 gap-10 p-10">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={experience.place}
              index={index}
              experience={experience}
            />
          );
        })}
      </div>
    </div>
  );
});
export default Experience;
