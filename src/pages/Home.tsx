import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroImage from '../assets/hero-image.jpg';

const Home = () => {
 

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[calc(100vh-4rem)] flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Creative Developer & Designer
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Crafting beautiful digital experiences through code and creativity.
              Specialized in building modern web applications with cutting-edge technologies.
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="flex space-x-4">
              <Link to="/projects" className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/contact" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors">
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="hidden md:block">
            <img src={HeroImage} alt="Developer working" className="w-96 h-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
