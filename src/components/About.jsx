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
      className="relative  h-fit min-h-screen sm:h-screen pt-15 sm:pt-25    sm:pb-0 lg:min-h-150   bg-linear-60 from-black/70 to-gray-800/90 w-full  flex flex-col  justify-center gap-5   lg:gap-5 lg:justify-around  px-10 "
      //style={{ background: "radial-gradient(circle, #9cbbff, #3877ff)" }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-around
      "
      >
        <div className="self-center w-fit mx-auto   ">
          <h1 className=" text-neutral-50  text-xl text-center sm:text-4xl lg:text-5xl font-semibold ">
            Baldwin-sudo's Portfolio{" "}
          </h1>

          <div className="mb-10 w-full sm:w-auto flex justify-start sm:justify-center">
            <div className="text-center text-neutral-300 text-sm sm:text-xl lg:text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              <TyperWriterEffect
                pause={1750}
                text="Software Developer & Machine Learning Engineer"
              />
            </div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            reprehenderit alias illo nisi quibusdam nulla ullam fuga quo non,
            consequuntur odio error pariatur facere possimus architecto
            accusamus nostrum consectetur doloribus.
          </p> */}
        </div>{" "}
      </div>
      {/* contact buttons */}
      <div
        className="fixed top-100 left-0 translate-y-50 lg:translate-y-0 lg:top-0 z-50 flex  gap-2
                bg-neutral-900/90 backdrop-blur-md   shadow-lg rounded-br-full rounded-tr-full p-2 pr-4 sm:p-6 sm:pr-8 hover:bg-green-400  "
      >
        <a
          href="https://github.com/baldwin-sudo"
          target="_blank"
          className="h-fit   flex  items-center justify-center gap-1    hover:opacity-80 text-white text-sm sm:text-lg cursor-pointer "
        >
          {" "}
          <img className=" w-6 h-6 sm:w-6 sm:h-6" src={githubIco} alt="" />
          <span className="hidden ">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"
          target="_blank"
          className=" h-fit   flex  items-center justify-center gap-1    hover:opacity-80 text-white text-sm sm:text-lg cursor-pointer "
        >
          <img
            className="z-1 w-6 h-6 sm:w-6 sm:h-6"
            src={linkdedinIco}
            alt=""
          />
          <p className="hidden">Linkedin</p>
        </a>
      </div>
    </div>
  );
});
export default About;
