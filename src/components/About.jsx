import React, { forwardRef } from "react";
import githubIco from "../assets/github-icon.png";
import linkdedinIco from "../assets/linkedin-icon.png";
import tabIco from "../assets/tab-ico.png";
import myImage from "../assets/me.jpeg";
import TyperWriterEffect from "./TyperWriterEffect";
const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative z-1  h-fit pt-35 pb-10 lg:min-h-150  bg-blue-300/30 w-full  flex flex-col  justify-around items-center lg:flex-row lg:gap-5 lg:justify-between  px-10 "
      //style={{ background: "radial-gradient(circle, #9cbbff, #3877ff)" }}
    >
      <div
        className="flex flex-col 
      "
      >
        <h1 className="text-left text-blue-500  text-xl sm:text-4xl lg:text-5xl font-semibold ">
          Baldwin-sudo's Portfolio{" "}
        </h1>

        <div className=" mb-10 flex gap-1 text-left text-blue-400 text-lg   lg:text-2xl font-medium ">
          <TyperWriterEffect
            pause={1750}
            text="Software Developer & Machine learning engineer"
          />
        </div>
      </div>
      <div
        className="w-60 h-80 lg:w-80 lg:h-100 rounded-full border-4 border-blue-400 hover:scale-120 transition-all duration-200 bg-cover bg-center scale-110 m-5 "
        style={{ backgroundImage: `url(${myImage})` }}
      ></div>
    </div>
  );
});
export default About;
