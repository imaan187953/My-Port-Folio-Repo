import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", img: "html" },
    { name: "CSS", img: "css" },
    { name: "JavaScript", img: "js" },
    { name: "SQL", img: "sql" },
    { name: "React", img: "react" },
    { name: "Tailwind", img: "tailwind_css" },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black text-white px-6 md:px-10 py-20 scroll-mt-28 flex flex-col justify-center"
    >
      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl mb-12 font-light text-center">
        Technical Skills
      </h2>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-6 max-w-4xl mx-auto place-items-center">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-2 group"
          >
            <img
              src={`/${skill.img}.png`}
              alt={skill.name}
              className="w-16 md:w-20 transition duration-300 group-hover:scale-125 group-hover:rotate-3"
            />

            {/* SKILL NAME */}
            <p className="text-gray-400 text-xs md:text-sm group-hover:text-white transition">
              {skill.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;