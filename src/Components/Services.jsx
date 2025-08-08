import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const expertiseTimeline = [
  {
    title: "Frontend Development",
    color: "from-orange-500 to-blue-500",
    description:
      "Crafting responsive, accessible UIs with React, TailwindCSS, and JavaScript.",
    icons: [SiReact, SiTailwindcss, SiJavascript],
  },
  {
    title: "Backend Development",
    color: "from-purple-500 to-pink-500",
    description:
      "Building secure, scalable APIs with Node.js, Express, and MongoDB.",
    icons: [SiNodedotjs, SiExpress, SiMongodb],
  },
  {
    title: "Deployment & Hosting",
    color: "from-yellow-300 to-orange-500",
    description:
      "CI/CD, hosting, and domain setup using Vercel, GitHub, and other platforms.",
    icons: [SiVercel, SiGithub],
  },
];

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-8">
      <div className="relative border-l-2 border-white/10 pl-6 max-w-4xl mx-auto space-y-20">
        {expertiseTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
          >
            {/* Bullet marker with dynamic gradient */}
            <span
              className={`absolute -left-[17px] w-4 h-4 rounded-full shadow-lg animate-pulse bg-gradient-to-br ${item.color}`}
            ></span>

            {/* Content card */}
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 transition-transform group-hover:scale-[1.02]">
              <h3
                className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>

              {/* Icons */}
              <div className="flex gap-4 text-2xl mt-4">
                {item.icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-orange-300 hover:text-orange-500 hover:scale-125 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
