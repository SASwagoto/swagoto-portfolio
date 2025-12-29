import React from "react";
import TorchBanner from "../components/home/Banner";
import Skills from "../components/home/Skills";
import AboutMe from "../components/home/AboutMe";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contacts";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#050505] selection:bg-green-500/30 selection:text-white">
      <TorchBanner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;