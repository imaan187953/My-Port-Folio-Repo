import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center px-6 md:px-10 pt-24 md:pt-0">

      {/* LEFT */}
      <div className="w-full md:w-1/2 space-y-6 px-6 md:px-20 animate-fadeIn text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-light leading-tight">
          Welcome to <br /> My Portfolio Website
        </h1>

        <p className="border border-white px-4 py-2 inline-block rounded-full text-sm hover:bg-white hover:text-black transition duration-300">
          Eman Sajjad / Front-end Development
        </p>

        <button className="border border-white px-5 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black hover:scale-105">
          Let’s build something amazing together
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/meeee.jpeg"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover transition duration-500 hover:scale-105 hover:rotate-1"
        />
      </div>

    </section>
  );
};

export default Hero;