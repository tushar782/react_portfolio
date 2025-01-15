import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-indigo-900/30">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl sm:text-5xl md:text-6xl font-serif"
      >
        <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap gap-8 lg:gap-16 items-start lg:items-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="text-lg text-teal-300 font-mono mb-4">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 bg-gradient-to-br from-indigo-950/90 to-violet-950/90 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
            >
              <h6 className="mb-4 font-bold text-xl text-orange-300">
                {experience.role}{" "}
                <span className="text-sm text-purple-200 font-light">
                  - {experience.company}
                </span>
              </h6>
              <p className="text-lg text-neutral-400 font-serif mb-6">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
