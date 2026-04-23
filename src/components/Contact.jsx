import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white px-6 md:px-10 pt-28 md:pt-40 pb-20 md:pb-28 scroll-mt-40 flex flex-col justify-between"
    >
      {/* TOP CONTENT */}
      <div className="flex flex-col md:flex-row items-start max-w-4xl mx-auto w-full gap-10 md:gap-16">

        {/* LEFT: HEADING */}
        <h2 className="text-3xl md:text-5xl font-light transition-all duration-300 ease-in-out hover:text-gray-400 hover:-translate-y-1">
          Contact Me
        </h2>

        {/* RIGHT: CONTACT INFO */}
        <div className="space-y-6 text-sm w-full md:w-auto">

          {/* LinkedIn */}
          <div className="transition-all duration-300 ease-in-out hover:translate-x-1">
            <p className="text-white">LinkedIn</p>
            <a
              href="https://linkedin.com/in/eman-sajjad-53965433a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:text-white hover:underline break-words"
            >
              linkedin.com/in/eman-sajjad-53965433a/
            </a>
          </div>

          {/* Email */}
          <div className="transition-all duration-300 ease-in-out hover:translate-x-1">
            <p className="text-white">Email</p>
            <a
              href="mailto:imanchoudhry57@gmail.com"
              className="text-gray-400 transition-all duration-300 hover:text-white hover:underline break-words"
            >
              imanchoudhry57@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="transition-all duration-300 ease-in-out hover:translate-x-1">
            <p className="text-white">GitHub</p>
            <a
              href="https://github.com/imaan187953n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:text-white hover:underline break-words"
            >
              github.com/imaan187953n
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="w-full max-w-4xl mx-auto text-right mt-16 md:mt-20">
        <a
          href="https://linkedin.com/in/eman-sajjad-53965433a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all duration-300 ease-in-out hover:tracking-wider hover:text-gray-400 hover:-translate-y-1"
        >
          ↳ Let’s collaborate
        </a>
      </div>
    </section>
  );
};

export default Contact;