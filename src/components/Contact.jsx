import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                    Get in Touch
                </span>
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-gray-600 text-white">
                    <a 
                        href="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                    >
                        <FaMapMarkerAlt className="inline-block mr-2" /> {/* Location Icon */}
                        {CONTACT.address}
                    </a>
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-blue-600">
                    <a href={`tel:${CONTACT.phoneNo}`} className="text-blue-600 hover:underline">
                        <FaPhone className="inline-block mr-2" style={{ transform: 'rotate(90deg)' }} /> {/* Rotated Phone Icon */}
                        {CONTACT.phoneNo}
                    </a>
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, z: 0 }}
                    initial={{ opacity: 0, z: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-purple-600">
                    <a href={`mailto:${CONTACT.email}`} className="text-purple-600 hover:underline">
                        <FaEnvelope className="inline-block mr-2" /> {/* Email Icon */}
                        {CONTACT.email}
                    </a>
                </motion.p>
            </div>
            <div className="mt-10 text-center">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center space-x-4"
                >
                    <a href="https://www.linkedin.com/in/tusharpimple782" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="https://github.com/tushar782" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-700">
                        <FaGithub className="text-3xl" />
                    </a>
                    <a href="https://twitter.com/TusharPimple017" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                        <FaTwitter className="text-3xl" />
                    </a>
                </motion.div>
                <p className="mt-4 text-gray-500">&copy; 2024 Tushar Pimple. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Contact;
