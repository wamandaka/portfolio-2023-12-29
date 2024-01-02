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
  SiFig,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <>
      <section
        id="skills"
        className="w-full mx-auto px-4 lg:flex lg:flex-col lg:items-center"
      >
        <div className="flex flex-col pt-24 justify-center text-center gap-3 md:mx-auto md:w-[60%]">
          <h1 className=" text-5xl font-bold md:text-6xl">Skills</h1>
          <p className=" text-xl font-bold md:text-2xl">
            Here is my list of skills and technologies I use.
          </p>
        </div>
        <div className="w-full flex flex-wrap rounded-lg p-5 gap-2 text-white mt-10 justify-center lg:w-1/2 ">
          <SkillCard
            skillName="HTML"
            icon={FaHtml5}
            iconSize={40}
            cardWidth={"[40%]"}
            bgColor={"[#ED7854]"}
          />
          <SkillCard
            skillName="CSS"
            icon={FaCss3}
            iconSize={40}
            cardWidth={"[55%]"}
            bgColor={"[#ED7854]"}
          />
          <SkillCard
            skillName="Javascript"
            icon={FaJs}
            iconSize={40}
            cardWidth="[55%]"
            bgColor="[#ED7854]"
          />
          <SkillCard
            skillName="ReactJS"
            icon={FaReact}
            iconSize={40}
            cardWidth="[40%]"
            bgColor="[#ED7854]"
          />
          <SkillCard
            skillName="TailwindCSS"
            icon={SiTailwindcss}
            iconSize={40}
            cardWidth="[40%]"
            bgColor="[#ED7854]"
          />
          <SkillCard
            skillName="NodeJS"
            icon={FaNodeJs}
            iconSize={40}
            cardWidth="[55%]"
            bgColor="[#E13738]"
          />
          <SkillCard
            skillName="ExpressJS"
            icon={SiExpress}
            iconSize={40}
            cardWidth="[55%]"
            bgColor="[#E13738]"
          />
          <SkillCard
            skillName="PostgreSQL"
            icon={SiPostgresql}
            iconSize={40}
            cardWidth="[40%]"
            bgColor="[#E13738]"
          />
          <SkillCard
            skillName="Prisma ORM"
            icon={SiPrisma}
            iconSize={40}
            cardWidth="[40%]"
            bgColor="[#E13738]"
          />
          <SkillCard
            skillName="Github"
            icon={FaGithub}
            iconSize={40}
            cardWidth="[55%]"
            bgColor="[#E13738]"
          />
          <SkillCard
            skillName="Figma"
            icon={SiFigma}
            iconSize={40}
            cardWidth="[55%]"
            bgColor="[#ED7854]"
          />
          <SkillCard
            skillName="Photoshop"
            icon={SiAdobephotoshop}
            iconSize={40}
            cardWidth="[40%]"
            bgColor="[#ED7854]"
            className="hidden md:inline-block"
          />
        </div>
      </section>
    </>
  );
};

export default Skill;
