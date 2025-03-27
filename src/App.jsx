import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import SectionSeparator from "./components/SectionSeparator";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import heartIco from "./assets/heart-icon.png";
export default function App() {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
  };

  // Function to scroll to a section dynamically
  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="relative flex flex-col gap-5 sm:gap-10 lg:gap-15">
      <div className="absolute top-0 bg-neutral-50 h-200" />
      <NavBar scrollToSection={scrollToSection} />
      <About ref={sectionRefs.about} />
      <SectionSeparator />
      <Projects ref={sectionRefs.projects} />
      <Skills ref={sectionRefs.skills} />
      <Experience ref={sectionRefs.experience} />
      <Education ref={sectionRefs.education} />
      <div className="px-5 py-2 w-fit mx-auto text-neutral-500 italic">
        <p>
          Made with <img src={heartIco} alt="" className="size-5 inline" /> by
          el mehdi kasmi
        </p>
      </div>
    </div>
  );
}
