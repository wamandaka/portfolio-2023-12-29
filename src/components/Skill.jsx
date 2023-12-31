import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiAdobephotoshop,
  SiFigma,
  SiFig
} from "react-icons/si";

const Skill = () => {
  return (
    <>
      <section id="skills" className="w-full mx-auto px-4 lg:flex lg:flex-col lg:items-center">
        <div className="flex flex-col pt-24 justify-center text-center gap-3 md:mx-auto md:w-[60%]">
          <h1 className=" text-5xl font-bold md:text-6xl">Skills</h1>
          <p className=" text-xl font-bold md:text-2xl">
            Here is my list of skills and technologies I use.
          </p>
        </div>
        <div className="w-full flex flex-wrap rounded-lg p-5 gap-2 text-white mt-10 justify-center lg:w-1/2 ">
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[40%]">
            <FaHtml5 size={40} />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[55%]">
            <FaCss3 size={40} />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[55%]">
            <FaJs size={40} />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[40%]">
            <FaReact size={40} />
            <p>ReactJS</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[40%]">
            <SiTailwindcss size={40} />
            <p>TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center bg-[#E13738] rounded-xl gap-1 py-2 w-[55%]">
            <FaNodeJs size={40} />
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col items-center bg-[#E13738] rounded-xl gap-1 py-2 w-[55%]">
            <SiExpress size={40} />
            <p>ExpressJS</p>
          </div>
          <div className="flex flex-col items-center bg-[#E13738] rounded-xl gap-1 py-2 w-[40%]">
            <SiPostgresql size={40} />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center bg-[#E13738] rounded-xl gap-1 py-2 w-[40%]">
            <SiPrisma size={40} />
            <p>Prisma ORM</p>
          </div>
          <div className="flex flex-col items-center bg-[#E13738] rounded-xl gap-1 py-2 w-[55%]">
            <FaGithub size={40} />
            <p>Github</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[55%]">
            <SiFigma size={40} />
            <p>Figma</p>
          </div>
          <div className="flex flex-col items-center bg-[#ED7854] rounded-xl gap-1 py-2 w-[40%]">
            <SiAdobephotoshop size={40} />
            <p>Adobe Photoshop</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
