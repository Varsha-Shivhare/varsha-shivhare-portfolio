import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Portfolio",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between w-full h-20 px-4 text-white items-center fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Varsha Shivhare</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 capitalize font-medium 
                    cursor-pointer text-gray-500 hover:scale-105 
                    duration-200"
          >
            <ScrollLink to={link.toLowerCase()} smooth duration={500}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center text-center 
                absolute top-0 left-0 w-full h-screen 
                bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-4 text-4xl cursor-pointer capitalize"
            >
              <ScrollLink to={link.toLowerCase()} smooth duration={500}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
