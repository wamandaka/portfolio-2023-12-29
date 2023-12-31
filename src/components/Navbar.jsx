import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={
          scroll
            ? "w-full fixed top-0 mx-auto px-4 md:px-16 lg:px-32 bg-white backdrop-blur-sm z-50 bg-opacity-5 drop-shadow-2xl"
            : "w-full fixed top-0 mx-auto px-4 md:px-16 lg:px-32"
        }
      >
        <div className="w-full h-24 flex justify-between items-center">
          <h1 className="font-lobster text-4xl">
            <a href="#" className="font-bold group relative inline-block">
              Daka
              <span class="absolute left-0 -bottom-1 h-1 rounded-full bg-slate-800 transform w-0 transition-all group-hover:w-full"></span>
            </a>
          </h1>
          <ul className="md:flex gap-4 hidden font-bold text-lg lg:gap-10">
            <li>
              <a href="#about" className="relative group">
                About
                <span class="absolute left-0 -bottom-1 h-1 rounded-full bg-slate-800 transform w-0 transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#project" className="relative group">
                Project
                <span class="absolute left-0 -bottom-1 h-1 rounded-full bg-slate-800 transform w-0 transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#skills" className="relative group">
                Skill
                <span class="absolute left-0 -bottom-1 h-1 rounded-full bg-slate-800 transform w-0 transition-all group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            {!nav ? <HiMenuAlt3 size={35} /> : <HiOutlineX size={35} />}
          </div>
          <div
            className={
              nav
                ? "bg-base-200 rounded-xl fixed top-28 right-10 z-50 bg-opacity-50 transition duration-500 bg-slate-600 px-10"
                : "fixed -top-full -left-full"
            }
          >
            <ul className="flex flex-col h-full px-7 py-2 gap-4 text-white font-bold items-center w-full">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
