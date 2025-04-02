import { motion } from 'framer-motion';
import { Code, Database, Layout, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern web technologies',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Proficient in Node.js, API design, and database management',
    },
    {
      icon: Layout,
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first user experiences',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user interfaces',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a
            love for creating seamless user experiences. With years of experience
            in web development, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <skill.icon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/30 rounded-lg p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-300 mb-4">
            With a year of experience, including a 6-month UI/UX internship and a 6-month full-stack development internship, I've worked on a variety of projects ranging from small business websites to scalable applications. My passion for clean code and user-centric design drives me to create solutions that are both functional and provide an exceptional user experience.
          </p>
          <p className="text-gray-300">
            I am constantly learning and staying up-to-date with the latest technologies and best practices in web development. My goal is to deliver high-quality solutions that help businesses grow and succeed in the digital world.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;