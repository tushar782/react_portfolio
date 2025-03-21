import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaDownload, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import resume from "../assets/projects/Tushu.pdf";

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

      <div className="grid grid-cols-1 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-950/90 to-violet-950/90 border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="w-full lg:w-2/3 p-6 lg:p-8">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-5">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex gap-4 flex-wrap">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          <span>View Live Demo</span>
                        </motion.a>
                      )}
                      
                      {/* You can add GitHub repo link if available */}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <FaGithub />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 mx-auto block text-white font-bold px-6 py-3 rounded-full shadow-lg text-base flex items-center justify-center"
        style={{ backgroundColor: colors[currentColorIndex], transition: "background-color 0.1s ease" }}
      >
        <a
          href={resume}
          download="Tushar_Pimple.pdf"
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
