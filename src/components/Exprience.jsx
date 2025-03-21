import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  // Function to convert description string into bullet points
  const formatDescriptionToBullets = (description) => {
    // Split by periods, filter out empty strings, and trim each point
    return description
      .split(".")
      .filter(point => point.trim().length > 0)
      .map(point => point.trim());
  };

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
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 lg:left-1/4 w-px h-full bg-gradient-to-b from-teal-400 via-indigo-500 to-purple-600 hidden lg:block"></div>
        
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap gap-8 lg:gap-16 items-start"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/4 relative"
            >
              <div className="lg:text-right">
                <div className="flex items-center lg:justify-end mb-2">
                  <FaCalendarAlt className="text-teal-400 mr-2 lg:order-2 lg:ml-2 lg:mr-0" />
                  <p className="text-lg text-teal-300 font-mono">
                    {experience.year}
                  </p>
                </div>
                
                <div className="hidden lg:block absolute right-0 top-0 w-4 h-4 rounded-full bg-white border-4 border-teal-500 transform translate-x-10 mt-2"></div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-3/5 bg-gradient-to-br from-indigo-950/90 to-violet-950/90 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
                  <FaBriefcase className="text-xl text-teal-400" />
                </div>
                <div>
                  <h6 className="font-bold text-xl text-white">
                    {experience.role}
                  </h6>
                  <p className="text-purple-300 font-medium">
                    {experience.company}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {index === 0 ? (
                  // For VISUAL INFOSYSTEMS experience
                  <>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-teal-300 mb-1">Core Responsibilities:</h3>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Lead a team in developing and maintaining web applications, including a School/College ERP management system</p>
                      </div>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Implemented stored procedures and functions for efficient data handling and retrieval</p>
                      </div>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Optimized database queries to handle large volumes of student data and performance metrics efficiently</p>
                      </div>
                    </div>
                    
                    {/* Render projects for the first experience */}
                    {experience.projects && experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="space-y-3 mt-6 p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
                        <h3 className="text-xl font-semibold text-teal-300 mb-1">{project.title}</h3>
                        <p className="text-neutral-300 mb-4">{project.description}</p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-teal-300 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Links */}
                        <div className="flex gap-4">
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                              <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors">
                              <FaGithub className="mr-2" /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <div className="space-y-3 mt-6">
                      <h3 className="text-lg font-semibold text-teal-300 mb-1">System-wide Features:</h3>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Implemented real-time notification system using WebSockets to alert both teachers and parents of important events</p>
                      </div>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Created responsive dashboards that prioritize the most critical information for quick access</p>
                      </div>
                      <div className="flex items-start">
                        <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                        <p className="text-neutral-300">Designed and implemented a cross-platform communication system between both applications</p>
                      </div>
                    </div>
                  </>
                ) : (
                  // For other experiences
                  formatDescriptionToBullets(experience.description).map((point, i) => (
                    <div key={i} className="flex items-start">
                      <FaCircle className="text-teal-500 mt-1.5 mr-3 text-xs" />
                      <p className="text-neutral-300">{point}</p>
                    </div>
                  ))
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-teal-300 mb-3">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
