import React from "react";
import "../App.css";
import githubIco from "../assets/github-icon.png";
import linkIco from "../assets//link-icon.png";
import { motion } from "framer-motion";
import clsx from "clsx";
export default function ProjectCard({ project }) {
  const stateColors = {
    "on going ...": {
      bg: "bg-yellow-200",
      text: "text-yellow-600",
      border: "border-yellow-500",
    },
    finished: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    archived: {
      bg: "bg-gray-200",
      text: "text-gray-600",
      border: "border-gray-500",
    },
  };

  const { title, tech, github, demo, description, img, state } = project;
  return (
    <motion.article
      className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      <div className="flex h-full flex-col">
        <div className="h-1.5 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400" />

        {img != null ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div
              className={clsx(
                "absolute left-4 top-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize backdrop-blur-sm",
                stateColors[state].bg,
                stateColors[state].text,
                stateColors[state].border
              )}
            >
              {state}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3 px-5 pt-5">
            <div
              className={clsx(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize",
                stateColors[state].bg,
                stateColors[state].text,
                stateColors[state].border
              )}
            >
              {state}
            </div>
          </div>
        )}

        <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-semibold leading-tight text-gray-800 break-words">
              {title}
            </h1>

            <p className="text-sm sm:text-[15px] leading-6 text-gray-600 break-words">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium capitalize text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200/80"
              >
                <img className="h-5 w-5" src={githubIco} alt="" />
                Github
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                <img className="h-5 w-5" src={linkIco} alt="" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
