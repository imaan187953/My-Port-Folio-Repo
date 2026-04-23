import React from "react";

const Projects = () => {
  const projects = [
    { title: "Book Store", desc: "HTML CSS JS", img: "/BOOKSTORE.png" },
    { title: "Currency Converter", desc: "React API Tailwind", img: "/CURRENCYCONVERTER.png" },
    { title: "Restaurant UI", desc: "React Tailwind", img: "/restaurat.png" },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black text-white px-6 md:px-10 py-20 scroll-mt-28 flex flex-col justify-center"
    >
      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl mb-12 font-light text-center">
        Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-6 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="group space-y-4 transition duration-500 hover:-translate-y-2"
          >

            <img
              src={p.img}
              alt={p.title}
              className="w-full h-44 md:h-48 object-cover rounded-md transition duration-500 group-hover:scale-105"
            />

            <div>
              <p className="text-gray-300 group-hover:text-white transition">
                ↳ {p.title}
              </p>
              <p className="text-gray-500 text-sm">
                {p.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;