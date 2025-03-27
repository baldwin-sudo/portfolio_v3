import React from "react";

export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-neutral-50 hover:bg-neutral-200 border-1 border-neutral-200  flex flex-col gap-3 w-fit  max-w-250 rounded-lg p-8 ">
      <h1 className="text-2xl sm:text-4xl">{experience.role}</h1>
      <p className="text-neutral-600 text-lg sm:text-xl">{experience.place}</p>
      <p className="text-sm sm:text-lg">{experience.description}</p>
      <p className="text-neutral-600">{experience.date}</p>
    </div>
  );
}
