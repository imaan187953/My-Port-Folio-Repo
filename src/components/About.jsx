import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-10 py-20 text-center">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-light mb-6">
        About Me
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-300 max-w-2xl leading-relaxed hover:text-white transition duration-300 mb-12 text-sm md:text-base">
        I am a Computer Science student passionate about front-end development.
        I enjoy building real-world projects that improve my skills and help me grow.
      </p>

      {/* IMAGES ROW */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-wrap justify-center items-center">

        <img
          src="/abouttwo.jpeg"
          className="w-72 md:w-80 h-52 md:h-60 object-cover rounded-lg transition duration-500 hover:scale-105 hover:rotate-1"
        />

        <img
          src="/about.jpeg"
          className="w-72 md:w-80 h-52 md:h-60 object-cover rounded-lg transition duration-500 hover:scale-105 hover:-rotate-1"
        />

        <img
          src="/aboutthree.jpeg"
          className="w-72 md:w-80 h-52 md:h-60 object-cover rounded-lg transition duration-500 hover:scale-105 hover:rotate-1"
        />

      </div>

    </section>
  );
};

export default About;