import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 md:px-20 py-5 z-50 border-b border-gray-800">

      {/* LEFT - NAME */}
      <a href="#hero" className="text-xl md:text-2xl font-semibold tracking-wide hover:text-gray-400 transition">
        Eman Sajjad
      </a>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-sm">

        {["Home", "About", "Education", "Projects", "Skills", "Contact"].map((item, i) => (
          <li key={i}>
            <a href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`} className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}

      </ul>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-6 space-y-6 md:hidden">

          {["Home", "About", "Education", "Projects", "Skills", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-gray-400 transition"
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;