import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import photoProfile from "../assets/photo.jpeg";

const Hero = () => {
  return (
    <>
      <section
        id="about"
        className="w-full pt-28  mx-auto px-4 md:px-10 md:pt-32 lg:px-48 lg:h-screen lg:pt-28"
      >
        <div className="px-5 py-8 bg-gradient-to-tr from-cyan-500 via-purple-600 to-blue-600 rounded-3xl flex flex-col items-center space-y-5 text-white shadow-2xl">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white lg:w-32 lg:h-32">
            <img src={photoProfile} alt="" className="" />
          </div>
          <h1 className="text-xl text-center font-bold md:text-2xl">
            I'm Waman Daka Wardani👋
          </h1>
          <p className="text-center text-4xl md:w-[90%] lg:w-[50%] ">
            I have experience in developing Website using{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-sky-400 group relative inline-block"
            >
              ReactJS
              <span className="absolute left-0 -bottom-1 h-1 rounded-full bg-white transform w-0 transition-all group-hover:w-full"></span>{" "}
            </a>
            , and developing API using{" "}
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-400 group relative inline-block"
            >
              ExpressJS
              <span className="absolute left-0 -bottom-1 h-1 rounded-full bg-white transform w-0 transition-all group-hover:w-full"></span>{" "}
            </a>
            .
          </p>
          <div className="pt-3 flex items-center gap-2 md:gap-5">
            <a
              href="mailto:wamandaka122@gmail.com"
              className="py-2 px-6 bg-slate-800 rounded-full hover:shadow-md hover:shadow-cyan-500"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-1 md:gap-2">
              <a
                href="https://drive.google.com/file/d/1w8praDfuM49xpC2q0L0pZRQ5ou8uYHu6/view"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
              <IoArrowRedoSharp />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
