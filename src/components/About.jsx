import React, { forwardRef } from "react";
import githubIco from "../assets/github-icon.png";
import linkdedinIco from "../assets/linkedin-icon.png";
const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-radial-gradient from-neutral-500 to-neutral-900 h-150 w-full pt-40 sm:pt-50 flex flex-col items-center text-center"
      style={{ background: "radial-gradient(circle, #404543, #070707)" }}
    >
      <h1 className="text-white mb-5  text-4xl sm:text-6xl lg:text-7xl font-bold">
        Baldwin-sudo's Portfolio
      </h1>
      <div className="w-80 sm:w-150 text-start space-y-3">
        <p className=" flex gap-1 text-white text-lg sm:text-xl  lg:text-2xl font-medium ">
          <p className="inline"> {">"} </p>Software Developer & Machine learning
          engineer
        </p>
        <p className="flex gap-1 text-white  text-lg sm:text-xl lg:text-2xl font-medium ">
          <p className="inline"> {">"} </p> Majoring in Computer Science at
          Ensam RABAT
        </p>

        <p className=" flex gap-1 text-white  text-lg sm:text-xl lg:text-2xl  font-medium ">
          <p className="inline"> {">"} </p> I work with passion , wether while
          i'am developing an App , or finetunning a model
        </p>
      </div>
      <div className="flex gap-2 sm:gap-4 mt-5 sm:mt-15 ">
        <a
          href={"https://github.com/baldwin-sudo"}
          className="flex  items-center justify-center gap-3 rounded-full px-5 sm:px-10 py-3 bg-white text-xl sm:text-2xl lg:text-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
        >
          <img className="w-10 h-10" src={githubIco} alt="" />
          Github
        </a>
        <a
          href={"https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"}
          className="flex  items-center justify-center gap-3 rounded-full px-5 sm:px-10 py-3 bg-neutral-900 border-2 border-white text-white  text-xl  sm:text-2xl lg:text-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
        >
          <img className="w-10 h-10" src={linkdedinIco} alt="" />
          Linkedin
        </a>
      </div>
    </div>
  );
});
export default About;
