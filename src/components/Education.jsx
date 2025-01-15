import React, { useState } from 'react';
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const educationData = {
  postGraduation: {
    title: "POST GRADUATION (MCA)",
    content: (
      <div className="grid gap-4 text-center">
        <motion.div variants={container(0.1)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">COLLEGE</h3>
          <p className="text-orange-300 font-serif text-lg">Chhatrapati Shahu Institute of Business Education And Research, Kolhapur</p>
        </motion.div>
        <motion.div variants={container(0.2)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">UNIVERSITY</h3>
          <p className="text-orange-300 font-serif text-lg">Shivaji University, Kolhapur</p>
        </motion.div>
        <motion.div variants={container(0.3)} className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">DEGREE</h3>
            <p className="text-orange-300 font-serif text-lg">Master of Computer Applications</p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">YEAR</h3>
            <p className="text-orange-300 font-serif text-lg">2024</p>
          </div>
        </motion.div>
        <motion.div variants={container(0.4)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">CGPA</h3>
          <p className="text-orange-300 font-serif text-lg">6.10 (67.76%)</p>
        </motion.div>
      </div>
    ),
  },
  graduation: {
    title: "GRADUATION (BCA)",
    content: (
      <div className="grid gap-4 text-center">
        <motion.div variants={container(0.1)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">COLLEGE</h3>
          <p className="text-orange-300 font-serif text-lg">Shree Binzani City College, Nagpur</p>
        </motion.div>
        <motion.div variants={container(0.2)} className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">DEGREE</h3>
            <p className="text-orange-300 font-serif text-lg">Bachelor of Commerce in Computer Application</p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">YEAR</h3>
            <p className="text-orange-300 font-serif text-lg">2021</p>
          </div>
        </motion.div>
        <motion.div variants={container(0.3)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">CGPA</h3>
          <p className="text-orange-300 font-serif text-lg">67.57%</p>
        </motion.div>
      </div>
    ),
  },
  hsc: {
    title: "HSC (12th)",
    content: (
      <div className="grid gap-4 text-center">
        <motion.div variants={container(0.1)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">COLLEGE</h3>
          <p className="text-orange-300 font-serif text-lg">Indraprastha New Arts Commerce and Science College, Wardha</p>
        </motion.div>
        <motion.div variants={container(0.2)} className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">BOARD</h3>
            <p className="text-orange-300 font-serif text-lg">Maharashtra State Board</p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">YEAR</h3>
            <p className="text-orange-300 font-serif text-lg">2018</p>
          </div>
        </motion.div>
        <motion.div variants={container(0.3)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">PERCENTAGE</h3>
          <p className="text-orange-300 font-serif text-lg">52%</p>
        </motion.div>
      </div>
    ),
  },
  ssc: {
    title: "SSC (10th)",
    content: (
      <div className="grid gap-4 text-center">
        <motion.div variants={container(0.1)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">SCHOOL</h3>
          <p className="text-orange-300 font-serif text-lg">Deepchand Choudhari Vidyalaya, Seloo High School</p>
        </motion.div>
        <motion.div variants={container(0.2)} className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">BOARD</h3>
            <p className="text-orange-300 font-serif text-lg">Maharashtra State Board</p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-950/30">
            <h3 className="text-violet-300 font-mono text-sm mb-1">YEAR</h3>
            <p className="text-orange-300 font-serif text-lg">2016</p>
          </div>
        </motion.div>
        <motion.div variants={container(0.3)} className="p-3 rounded-lg bg-indigo-950/30">
          <h3 className="text-violet-300 font-mono text-sm mb-1">PERCENTAGE</h3>
          <p className="text-orange-300 font-serif text-lg">62%</p>
        </motion.div>
      </div>
    ),
  },
};

const Education = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-b border-indigo-900/30">
      <h1 className="mb-12 text-center text-4xl sm:text-5xl md:text-6xl font-serif">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Edu</span>
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">cation</span>
      </h1>

      <div className="space-y-6">
        {Object.entries(educationData).map(([key, { title, content }]) => (
          <div 
            key={key} 
            className="border-2 border-indigo-500/20 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950/90 to-violet-950/90 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(key)}
              className={`w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 ${
                activeAccordion === key 
                  ? 'text-amber-400 bg-indigo-950/50' 
                  : 'text-emerald-400 hover:text-amber-400'
              }`}
            >
              <span className="font-mono text-xl sm:text-2xl tracking-wider">{title}</span>
              <svg
                className={`w-8 h-8 transform transition-transform duration-200 ${
                  activeAccordion === key ? 'rotate-180 text-amber-400' : 'text-emerald-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeAccordion === key
                  ? 'max-h-[800px] opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 py-6">
                <motion.div
                  initial="hidden"
                  animate={activeAccordion === key ? "visible" : "hidden"}
                  variants={container()}
                >
                  {content}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;