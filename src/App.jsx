import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-black text-white">

      <Navbar />
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* Education */}
      <section id="education">
        <Education />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default App;