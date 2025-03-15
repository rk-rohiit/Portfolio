import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface GalleryProps {
  images: string[]; // Defines 'images' as an array of strings (image URLs)
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
      <div className="flex justify-center">
        <motion.div
          className="relative w-[500px] h-[500px] flex items-center justify-center"
          animate={controls}
          whileHover={{ rotate: 0 }}
        >
          <motion.img
            src={images[4]}
            alt="Center"
            className="absolute w-40 h-40 rounded-full border-4 border-white"
          />
          <motion.img
            src={images[1]}
            alt="Gallery 1"
            className="absolute w-32 h-32 rounded-full border-4 border-white top-0 left-1/2 transform -translate-x-1/2"
          />
          <motion.img
            src={images[2]}
            alt="Gallery 2"
            className="absolute w-32 h-32 rounded-full border-4 border-white bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <motion.img
            src={images[3]}
            alt="Gallery 3"
            className="absolute w-32 h-32 rounded-full border-4 border-white left-0 top-1/2 transform -translate-y-1/2"
          />
          <motion.img
            src={images[0]}
            alt="Gallery 4"
            className="absolute w-32 h-32 rounded-full border-4 border-white right-0 top-1/2 transform -translate-y-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
