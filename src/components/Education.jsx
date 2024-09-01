import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const container = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay },
    },
});

const educationData = {
    ssc: {
        title: "SSC",
        content: (
            <>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>School Name:</strong> <span className="text-pink-500">Deepchand Choudhari Vidyalaya, Seloo High School</span>
                </motion.p>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>Board Name:</strong> <span className="text-pink-500">Maharashtra State Board</span>
                </motion.p>
                <motion.p variants={container(0.2)} className="text-cyan-500">
                    <strong>Passing Year:</strong> <span className="text-pink-500">2016</span>
                </motion.p>
                <motion.p variants={container(0.3)} className="text-cyan-500">
                    <strong>Percentage:</strong> <span className="text-pink-500">62%</span>
                </motion.p>
            </>
        ),
    },
    hsc: {
        title: "HSC",
        content: (
            <>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>College Name:</strong> <span className="text-pink-500">Indraprastha New Arts Commerce and Science College, Wardha</span>
                </motion.p>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>Board Name:</strong> <span className="text-pink-500">Maharashtra State Board</span>
                </motion.p>
                <motion.p variants={container(0.2)} className="text-cyan-500">
                    <strong>Passing Year:</strong> <span className="text-pink-500">2018</span>
                </motion.p>
                <motion.p variants={container(0.3)} className="text-cyan-500">
                    <strong>Percentage:</strong> <span className="text-pink-500">52%</span>
                </motion.p>
            </>
        ),
    },
    graduation: {
        title: "GRADUATION",
        content: (
            <>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>College Name:</strong> <span className="text-pink-500">Shree Binzani City College, Nagpur</span>
                </motion.p>
                <motion.p variants={container(0.2)} className="text-cyan-500">
                    <strong>Degree:</strong> <span className="text-pink-500">Bachelor of Commerce in Computer Application</span>
                </motion.p>
                <motion.p variants={container(0.3)} className="text-cyan-500">
                    <strong>Passing Year:</strong> <span className="text-pink-500">2021</span>
                </motion.p>
                <motion.p variants={container(0.4)} className="text-cyan-500">
                    <strong>CGPA:</strong> <span className="text-pink-500">67.57%</span>
                </motion.p>
            </>
        ),
    },
    postGraduation: {
        title: "POST GRADUATION",
        content: (
            <>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>College Name:</strong> <span className="text-pink-500">Chhatrapati Shahu Institute of Business Education And Research, Kolhapur</span>
                </motion.p>
                <motion.p variants={container(0.1)} className="text-cyan-500">
                    <strong>University Name:</strong> <span className="text-pink-500">Shivaji University, Kolhapur</span>
                </motion.p>
                <motion.p variants={container(0.2)} className="text-cyan-500">
                    <strong>Degree:</strong> <span className="text-pink-500">Master of Computer Applications</span>
                </motion.p>
                <motion.p variants={container(0.3)} className="text-cyan-500">
                    <strong>Passing Year:</strong> <span className="text-pink-500">2024</span>
                </motion.p>
                <motion.p variants={container(0.4)} className="text-cyan-500">
                    <strong>CGPA / Percentage:</strong> <span className="text-pink-500">6.10 / 67.76%</span>
                </motion.p>
            </>
        ),
    },
};

const Education = () => {
    const [activeTab, setActiveTab] = useState("ssc");

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 text-center text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Education
            </h1>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4 mb-6 sm:mb-8">
                {Object.keys(educationData).map((key) => (
                    <button
                        key={key}
                        className={`px-2 py-1 sm:px-4 sm:py-2 font-semibold ${activeTab === key
                            ? "text-cyan-300 border-b-2 border-cyan-300"
                            : "text-neutral-500"
                            }`}
                        onClick={() => setActiveTab(key)}
                    >
                        {educationData[key].title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={container()}
                    className="px-4 py-6 text-center"
                >
                    {educationData[activeTab].content}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Education;
