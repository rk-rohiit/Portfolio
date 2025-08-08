import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "../Components/Social";
import { assets } from "../assets/assets";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 1, text: "Years of Experience" },
  { num: 10, text: "Projects Completed" },
  { num: 15, text: "Technologies Mastered" },
  { num: 0, text: "Hackathons Participated" },
];

const revealLine = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i = 1) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  const handleDownload = () => {
    const fileUrl = "/Rohit_Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "fullstack _Rohit_Kumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[aliceblue]">
      {/* Main Section */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 pt-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mt-10 sm:mt-14 md:mt-20 lg:mt-24 ml-0 md:ml-auto lg:ml-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <div className="overflow-hidden">
            <motion.span
              className="block text-lg sm:text-xl text-orange-500 mb-3"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLine}
            >
              Full Stack Developer
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="block text-3xl sm:text-4xl md:text-5xl leading-tight mb-3"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLine}
            >
              Hello, I'm
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.span
              className="block text-3xl sm:text-4xl md:text-5xl leading-tight text-orange-500 mb-3"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLine}
            >
              Rohit Kumar
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              className="text-white/80 max-w-xl mx-auto lg:mx-0 mb-5 text-sm sm:text-base"
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLine}
            >
              I specialize in building scalable and responsive full-stack web
              applications using the MERN stack, focusing on user experience,
              performance, and clean code.
            </motion.p>
          </div>

          {/* Buttons + Social */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            variants={fadeUp}
          >
            <button
              onClick={handleDownload}
              className="relative overflow-hidden bg-transparent border border-orange-500 text-orange-500 px-3 py-1 rounded-lg transition flex items-center gap-2 group hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <FiDownload className="text-xl" />
              </span>
              <span className="absolute inset-0 bg-orange-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
            </button>

            <Social />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img
            src={assets.about_img}
            alt="About Rohit"
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[500px] object-contain mix-blend-lighten rounded-sm"
            loading="lazy"
          />
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="w-full py-5 pb-10 px-4 sm:px-6 md:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-[900px] ml-auto rounded-xl bg-white/5 backdrop-blur-md p-5 sm:p-7 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-500">
                  <CountUp end={item.num} duration={3} delay={0.5} />
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
