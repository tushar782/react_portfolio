import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import resume from "../assets/projects/TusharCV.pdf";

const Project = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["#FF0000", "#00FF00", "#0000FF"]; // Define your colors here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-indigo-900/30">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl sm:text-5xl md:text-6xl font-serif"
      >
        <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap gap-8 lg:gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[30%]"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[65%] bg-gradient-to-br from-indigo-950/90 to-violet-950/90 p-6 rounded-xl border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
            >
              <h6 className="mb-2 font-bold text-lg">{project.title}</h6>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-neutral-900 text-white rounded-full px-3 py-1 text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.button
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        className="mt-8 mx-auto block bg-white text-white font-bold px-4 py-2 rounded-md shadow-lg text-base"
        style={{ backgroundColor: colors[currentColorIndex], transition: "background-color 0.1s ease" }}
      >
        <a
          href={resume}
          download="Tushar_Pimple_Resume.pdf"
          className="flex items-center justify-center space-x-2"
        >
          <FaDownload className="text-lg" />
          <span>Download CV</span>
        </a>
      </motion.button>
    </div>
  );
};

export default Project;
