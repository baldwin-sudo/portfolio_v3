import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      role: "Internship",
      place: "The Health ministry (morocco)",
      date: "June 2023 - July 2023",
      description:
        "I contributed to the design and development of an information system for managing pilgrimage phases, including medication, service providers, and patient management. This project was built using React and Node.js to create a modern and responsive solution.",
    },
    {
      role: "Internship",
      place:
        "The Ministry of National Territorial Planning, Urban Planning, ...  (morocco)",
      date: "June 2024 - August 2024",
      description:
        "My internship at the Ministry of Land Planning focused on artificial intelligence, where I developed a system for evaluating companies' needs before their digitalization. I utilized Large Language Models (LLMs) to analyze requirements and built a web interface to manage the evaluation process.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl sm:text-5xl">My Experience</h1>
      <div className="flex flex-col  items-center justify-center max-w-200 gap-10 p-10">
        {experiences.map((experience, index) => {
          return <ExperienceCard experience={experience} />;
        })}
      </div>
    </div>
  );
}
