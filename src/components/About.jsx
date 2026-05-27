import React, { forwardRef } from "react";
import { motion } from "framer-motion";
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
            Hi, I'm El Mehdi Kasmi 
          </h1>

          <div className="mb-10 w-full sm:w-auto flex justify-start sm:justify-center">
            <div className="text-center text-neutral-300 text-sm sm:text-xl lg:text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              <TyperWriterEffect
                pause={1750}
                text="Software Developer & AI Engineer"
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
      <motion.div
        initial={{ x: "100vw", y: "100vh", opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1,duration: 2 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="fixed top-6  lg:top-6 left-0 z-50 flex gap-2 bg-neutral-900/90 backdrop-blur-md shadow-lg rounded-br-full border-2 border-white/90 rounded-tr-full p-2 pr-4 sm:p-6 sm:pr-8"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: 0, ease: "easeInOut" }}
          className="flex gap-2"
        >
          <motion.a
            href="https://github.com/baldwin-sudo"
            target="_blank"
            className="h-fit flex items-center justify-center gap-1 transform transition-all duration-200 hover:scale-110 hover:opacity-90 text-white text-sm sm:text-lg cursor-pointer"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.2, repeat: 0, ease: "easeInOut", repeatType: "reverse" }}
          >
            <motion.img className="w-6 h-6 sm:w-6 sm:h-6" src={githubIco} alt="" />
            <span className="hidden">Github</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/el-mehdi-kasmi-04ab45231/"
            target="_blank"
            className="h-fit flex items-center justify-center gap-1 transform transition-all duration-200 hover:scale-110 hover:opacity-90 text-white text-sm sm:text-lg cursor-pointer"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          >
            <motion.img className="z-1 w-6 h-6 sm:w-6 sm:h-6" src={linkdedinIco} alt="" />
            <p className="hidden">Linkedin</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
});
export default About;
