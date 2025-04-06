import React, { forwardRef } from "react";
import githubIco from "../assets/github-icon.png";
import linkdedinIco from "../assets/linkedin-icon.png";
import tabIco from "../assets/tab-ico.png";
import TyperWriterEffect from "./TyperWriterEffect";
const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-radial-gradient from-neutral-500 to-neutral-900 h-150 w-full pt-40 sm:pt-50 flex flex-col items-center text-center"
      style={{ background: "radial-gradient(circle, #404543, #070707)" }}
    >
      <h1 className="text-white  mb-5  text-xl sm:text-5xl lg:text-5xl font-semibold">
        <img
          className=" size-5 sm:size-10  lg:size-10 m-1 inline"
          src={tabIco}
          alt=""
        />
        Baldwin-sudo's Portfolio{" "}
        <img
          className=" size-5 sm:size-10  lg:size-10 m-1 inline"
          src={tabIco}
          alt=""
        />
      </h1>

      <div className=" flex gap-1 text-center text-neutral-400 text-lg sm:text-xl  lg:text-2xl font-medium ">
        <TyperWriterEffect
          pause={1750}
          text="Software Developer & Machine learning engineer"
        />
      </div>

      <div className="absolute bottom-0 -translate-y-full flex gap-2 sm:gap-4 mt-5 sm:mt-15 ">
        <a
          href={"https://github.com/baldwin-sudo"}
          className="flex  items-center justify-center gap-3 rounded-full px-5 sm:px-8 py-2 bg-white text-xl sm:text-2xl lg:text-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
        >
          <img className="w-10 h-10" src={githubIco} alt="" />
          Github
        </a>
        <a
          href={"https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"}
          className="flex  items-center justify-center gap-3 rounded-full px-5 sm:px-8 py-2 bg-neutral-900 border-2 border-white text-white  text-xl  sm:text-2xl lg:text-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
        >
          <img className="w-10 h-10" src={linkdedinIco} alt="" />
          Linkedin
        </a>
      </div>
    </div>
  );
});
export default About;
