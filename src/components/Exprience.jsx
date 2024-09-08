import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="my-20 text-center text-4xl">
                    <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        Experience
                    </span>
                </motion.h1>
                <div>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 texttext-sm text-neutral-400">{experience.year}</p>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-100">{experience.company}</span></h6>
                                <p className="mb-4 text-neutral-400">{experience.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
