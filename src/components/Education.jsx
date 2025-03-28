import React, { forwardRef } from "react";
import EducationCard from "./EducationCard";

const Education = forwardRef((props, ref) => {
  const educations = [
    {
      degreeName: "Artificial Intelligence & Data Science Engineering Degree",
      schoolName: "Ensam-R , Morocco",
      graduationDate: " Graduating class : 2021 - 2026",
      schoolImgUrl: null,
      description: "",
    },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center scroll-mt-0"
    >
      <h1 className="text-center text-3xl sm:text-5xl">My Education</h1>
      <div className="flex flex-col items-center justify-center max-w-200 gap-10 p-10">
        {educations.map((education) => (
          <EducationCard key={education.degreeName} education={education} />
        ))}
      </div>
    </div>
  );
});

export default Education;
