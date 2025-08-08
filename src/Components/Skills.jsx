import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

import { DiMongodb, DiVisualstudio } from "react-icons/di";

import { AiFillApi, AiOutlineCloudServer } from "react-icons/ai";

import { BsFillLightningChargeFill, BsFillSendFill } from "react-icons/bs";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: BsFillSendFill },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: AiFillApi },
  { name: "Redux", icon: BsFillLightningChargeFill },
  { name: "MongoDB", icon: DiMongodb },
  { name: "Postman", icon: BsFillSendFill },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: DiVisualstudio },
  { name: "Vercel", icon: AiOutlineCloudServer },
  { name: "Netlify", icon: AiOutlineCloudServer },
];

const Skills = () => {
  return (
    <section className="w-full bg-black text-[aliceblue] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map(({ name, icon: Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-[aliceblue] hover:scale-110 hover:text-orange-500 transition-transform duration-300"
          >
            <Icon className="text-3xl mb-2" />
            <span className="text-sm text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
