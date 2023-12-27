import React from "react";
// import VsImage from "../Assets/vs.jpg";
// import VsNew from "../Assets/vsnew.jpeg";
import Varsha from "../Assets/Varsha.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-6">I'm a Frontend Developer</h2>
          <p className="py-4 text-gray-500 max-w-md">
            Highly motivated and self driven frontend developer at NIUM IND PVT
            LTD with 6+ years of experience in total, including 3+ of years
            expertise creating front-end websites using HTML, CSS, JS, and
            ReactJS, along with technical documentation in previous years.
          </p>

      <div>
        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
        <Link to="portfolio"
              smooth
              duration={500}>Portfolio</Link>
          <span className="group-hover:rotate-90 duration-300">
            <MdKeyboardArrowRight size={30} className="ml-1" />
          </span>
        </button>
      </div>
      </div>
      <div>
        <img src={Varsha} alt="VS" className="rounded-2xl mx-auto w-60 h-80"/>
      </div>
      </div>  
    </div>
  );
}

export default Home;
