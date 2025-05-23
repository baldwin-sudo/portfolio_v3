import React from "react";

export default function EducationCard({ education }) {
  return (
    <div className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex flex-col gap-3 w-fit  max-w-250 rounded-lg p-8 ">
      <img src={education.schoolImgUrl} alt="" />
      <h1 className="text-xl sm:text-2xl">{education.degreeName}</h1>
      <p className="text-neutral-600 text-lg sm:text-xl">
        {education.schoolName}
      </p>
      <p className="text-sm sm:text-lg">{education.description}</p>
      <p className="text-neutral-600">{education.graduationDate}</p>
    </div>
  );
}
