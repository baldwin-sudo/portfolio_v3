import React from "react";
import EducationCard from "./EducationCard";

export default function Education() {
  const educations = [
    {
      degreeName: "Artificial Intelligence & Data Science ",
      schoolName: "Ensam-R , Morocco",
      graduationDate: " Graduating class : 2021 - 2026",
      schoolImgUrl: null,
      description:
        "I contributed to the design and development of an information system for managing pilgrimage phases, including medication, service providers, and patient management. This project was built using React and Node.js to create a modern and responsive solution.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl sm:text-5xl">My Education</h1>
      <div className="flex flex-col  items-center justify-center max-w-200 gap-10 p-10">
        {educations.map((education, index) => {
          return <EducationCard education={education} />;
        })}
      </div>
    </div>
  );
}
