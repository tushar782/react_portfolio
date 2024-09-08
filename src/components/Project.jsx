import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import resume from "../assets/projects/CurriculumVitae.pdf"

const Project = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['#FF0000', '#00FF00', '#0000FF']; // Define your colors here

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000); // Adjust the interval duration as needed

        return () => clearInterval(interval);
    }, [colors.length]);

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Projects
                </span>
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4">
                            <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-bold">{project.title}</h6>
                            <p>{project.description}</p>
                            <div className="mt-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="inline-block bg-neutral-900 text-white rounded-full px-2 py-1 mr-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Download CV Button */}
            <motion.button
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
                className="mt-6 mx-auto block bg-white text-white font-bold px-3 py-2 rounded-md shadow-lg text-sm md:text-base"
                style={{ backgroundColor: colors[currentColorIndex], transition: 'background-color 0.1s ease' }}
            >
                <a href={resume} download className="flex items-center justify-center space-x-2">
                    <FaDownload className="text-lg md:text-xl" />
                    <span className="hidden md:inline">Download CV</span>
                </a>
            </motion.button>
        </div>
    );
};

export default Project;
