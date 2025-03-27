import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import SectionSeparator from "./components/SectionSeparator";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import heartIco from "./assets/heart-icon.png";
export default function App() {
  return (
    <div className="relative flex flex-col gap-5 sm:gap-10 lg:gap-15">
      <div className="absolute top-0 bg-neutral-50 h-200" />
      <About />
      <NavBar />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <Experience />
      <SectionSeparator />
      <Education />
      <div className="px-5 py-2 w-fit mx-auto text-neutral-500 italic">
        <p>
          Made with <img src={heartIco} alt="" className="size-5 inline" /> by
          el mehdi kasmi
        </p>
      </div>
    </div>
  );
}
