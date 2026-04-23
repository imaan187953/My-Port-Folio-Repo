import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full min-h-screen bg-black text-white px-6 md:px-10 py-20 scroll-mt-48"
    >
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-light text-center mb-12 mt-7">
        Education
      </h2>

      {/* EDUCATION ROW */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-4xl mx-auto mb-2">

        {/* TEXT (LEFT) */}
        <div className="w-full md:w-1/2 space-y-2 transition duration-300 hover:translate-x-2">
          <h3 className="text-lg md:text-xl">BS Computer Science</h3>
          <p className="text-gray-400 text-sm md:text-base">
            University of the Punjab (2024–2028)
          </p>
        </div>

        {/* IMAGE (RIGHT) */}
        <img
          src="/PU.jpg"
          alt="University"
          className="w-full md:w-1/2 max-w-sm rounded-lg transition duration-500 hover:scale-105"
        />
      </div>

      {/* CERTIFICATIONS ROW */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-4xl mx-auto mt-10">

        {/* TEXT (LEFT) */}
        <div className="w-full md:w-1/2 space-y-4 transition duration-300 hover:translate-x-2">

          <h3 className="text-lg md:text-xl">Certifications</h3>

          <ul className="text-gray-300 space-y-2 text-sm md:text-base">
            <li className="hover:text-white transition duration-300">
              UI Development - Coursera
            </li>
            <li className="hover:text-white transition duration-300">
              Project Management - Coursera
            </li>
          </ul>

        </div>

        {/* IMAGE (RIGHT) */}
        <img
          src="/certificates.png"
          alt="Certificates"
          className="w-full md:w-1/2 max-w-sm rounded-lg transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Education;