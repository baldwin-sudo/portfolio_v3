import React, { forwardRef } from "react";
import githubIco from "../assets/github-icon.png";
import linkIco from "../assets//link-icon.png";

import linkdedinIco from "../assets/linkedin-icon.png";
import tabIco from "../assets/tab-ico.png";
import myImage from "../assets/me.jpeg";
import TyperWriterEffect from "./TyperWriterEffect";
//TODO:add contact button
const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative z-1  h-screen pt-35 pb-10 lg:min-h-150  bg-blue-300/30 w-full  flex flex-col  justify-around   lg:gap-5 lg:justify-around  px-10 "
      //style={{ background: "radial-gradient(circle, #9cbbff, #3877ff)" }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-around
      "
      >
        <div className="self-center">
          <h1 className="text-left text-blue-500  text-xl sm:text-4xl lg:text-5xl font-semibold ">
            Baldwin-sudo's Portfolio{" "}
          </h1>

          <div className=" mb-10 flex gap-1 text-left text-blue-400 text-lg   lg:text-2xl font-medium ">
            <TyperWriterEffect
              pause={1750}
              text="Software Developer & Machine learning engineer"
            />
          </div>
        </div>{" "}
        <div
          className="w-40 h-60 sm:w-60 sm:h-80 lg:w-80 lg:h-100 rounded-lg border-4 border-blue-400 hover:scale-115 transition-all duration-200 bg-cover bg-center scale-110 m-5 "
          style={{ backgroundImage: `url(${myImage})` }}
        ></div>
      </div>

      <div className="self-center flex sm:self-start w-fit gap-2 sm:px-10 lg:px-20 xl:px-25">
        <a
          href="https://github.com/baldwin-sudo"
          target="_blank"
          className="min-w-25  sm:min-w-35 h-fit py-2 sm:py-3 lg:w-35  flex  items-center justify-center gap-1  rounded-full px-6 sm:px-6  bg-white border-2 hover:opacity-80 text-blue-400 text-sm sm:text-lg cursor-pointer "
        >
          {" "}
          <img className=" w-4 h-4 sm:w-6 sm:h-6" src={githubIco} alt="" />
          <span className="text-blue-400">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"
          target="_blank"
          className="min-w-25  sm:min-w-35 h-fit py-2 sm:py-3 lg:w-35  flex  items-center justify-center gap-1  rounded-full px-6 sm:px-6  bg-blue-400 hover:opacity-80 text-white text-sm sm:text-lg cursor-pointer "
        >
          <img className="z-1 w-4 h-4 sm:w-6 sm:h-6" src={linkIco} alt="" />
          <p>Live</p>
        </a>
      </div>
    </div>
  );
});
export default About;
