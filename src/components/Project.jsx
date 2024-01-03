import React from "react";
import landingPage from "../assets/landing-page.png";
import prakiraanCuaca from "../assets/prakiraan-cuaca.jpg";
import reverse from "../assets/reverse.png";
import { IoLogoGithub } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

const Project = () => {
  return (
    <>
      <section id="project" className="w-full mx-auto px-4">
        <div className="flex flex-col pt-32 justify-center text-center gap-3 md:pt-28 md:mx-auto md:w-[60%]">
          <h1 className=" text-5xl font-bold md:text-6xl">Projects</h1>
          <p className=" text-xl font-bold md:text-2xl">
            Explore my latest projects showcased in the center of attention.
          </p>
        </div>
        <div className="flex flex-col pt-16 gap-16 md:gap-10 md:justify-between md:flex-wrap md:w-[90%] md:mx-auto md:pt-10 md:flex-row lg:pt-20">
          <div className="flex flex-col justify-center gap-3 md:w-[45%] lg:w-[30%]">
            <h1 className=" text-3xl font-bold lg:text-2xl">Landing Page</h1>
            <div className="flex gap-3 text-white md:gap-2">
              <span className="px-5 py-2 bg-blue-800 rounded-full md:px-4 md:py-1">
                ReactJS
              </span>
              <span className="px-5 py-2 bg-sky-400 rounded-full md:px-4 md:py-1">
                TailwindCSS
              </span>
            </div>
            <div className="w-full p-5 bg-[#ED7854] rounded-3xl md:p-3">
              <img
                src={landingPage}
                alt=""
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex gap-5 ml-5">
              <a
                href="https://github.com/wamandaka/landing-page-reactjs.git"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <IoLogoGithub size={30} />
              </a>
              <a
                href="https://wamandaka.github.io/react-app-landingpage/"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <TbWorldWww size={30} />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 md:w-[45%] lg:w-[30%]">
            <h1 className=" text-3xl font-bold lg:text-2xl">Weather App</h1>
            <div className="flex gap-3 text-white md:gap-2">
              <span className="px-5 py-2 bg-blue-800 rounded-full md:px-4 md:py-1">
                ReactJS
              </span>
              <span className="px-5 py-2 bg-sky-400 rounded-full md:px-4 md:py-1">
                TailwindCSS
              </span>
              <span className="px-5 py-2 bg-sky-600 rounded-full md:px-4 md:py-1">
                Axios
              </span>
            </div>
            <div className="w-full p-5 bg-[#ED7854] rounded-3xl md:p-3">
              <img
                src={prakiraanCuaca}
                alt=""
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex gap-5 ml-5">
              <a
                href="https://github.com/wamandaka/weather-app-reactjs.git"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <IoLogoGithub size={30} />
              </a>
              <a
                href="https://wamandaka.github.io/react-app-weatherapp/"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <TbWorldWww size={30} />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 md:w-[45%] lg:w-[30%]">
            <h1 className=" text-3xl font-bold lg:text-2xl">
              Reverse 1999 Character List
            </h1>
            <div className="flex gap-3 text-white flex-wrap md:gap-2 lg:flex-nowrap lg:overflow-scroll">
              <span className="px-5 py-2 bg-green-800 rounded-full md:px-4 md:py-1">
                NodeJS
              </span>
              <span className="px-5 py-2 bg-emerald-500 rounded-full md:px-4 md:py-1">
                ExpressJS
              </span>
              <span className="px-5 py-2 bg-sky-400 rounded-full md:px-4 md:py-1">
                TailwindCSS
              </span>
              <span className="px-5 py-2 bg-yellow-500 rounded-full md:px-4 md:py-1">
                DaisyUI
              </span>
            </div>
            <div className="w-full p-5 bg-[#E13738] rounded-3xl md:p-3">
              <img src={reverse} alt="" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="flex gap-5 ml-5">
              <a
                href="https://github.com/wamandaka/reverse-1999-characters-api-fanmade.git"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <IoLogoGithub size={30} />
              </a>
              <a
                href="https://reverse1999-characters-kang-piscok.koyeb.app/"
                className="font-bold text-xl flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <TbWorldWww size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
