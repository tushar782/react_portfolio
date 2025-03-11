import React, { memo } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/me1.jpeg";
import { motion } from "framer-motion";

// IMPORTANT: Preload the LCP image in your index.html using:
// <link rel="preload" as="image" href="/assets/me1.jpeg">

// Variants for motion animations
const containerVariant = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-16">
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h1
            variants={containerVariant(0)}
            className="text-4xl md:text-6xl font-bold tracking-tight text-center lg:text-left mb-4 sm:mb-6"
          >
            TUSHAR PIMPLE
          </motion.h1>
          <motion.span
            variants={containerVariant(0.3)}
            className="text-2xl md:text-3xl tracking-tight text-center lg:text-left"
          >
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Software
            </span>{" "}
            <span className="text-blue-500">Developer</span>
          </motion.span>
          <motion.p
            variants={containerVariant(0.6)}
            className="my-4 max-w-lg text-sm md:text-base font-light text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img
            src={profilepic}
            alt="Tushar"
            width="300"
            height="300"
            loading="eager"
            className="rounded-full shadow-lg"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Hero);

