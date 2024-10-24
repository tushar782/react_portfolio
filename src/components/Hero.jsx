import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/me1.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-bold tracking-tight lg:mt-12 lg:text-6xl">
                            TUSHAR PIMPLE
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-3xl tracking-tight">
                            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Software </span>
                            <span className="text-blue-500">Developer</span>
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter font-serif">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilepic} alt="tushar" style={{ maxWidth: "400px", maxHeight: "400px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
