import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-gray-600 text-white">
                    <FaMapMarkerAlt className="inline-block mr-2" /> {/* Location Icon */}
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-blue-600">
                    <FaPhone className="inline-block mr-2" style={{ transform: 'rotate(180deg)' }} /> {/* Rotated Phone Icon */}
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, z: 0 }}
                    initial={{ opacity: 0, z: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-purple-600">
                    <FaEnvelope className="inline-block mr-2" /> {/* Email Icon */}
                    {CONTACT.email}
                </motion.p>
            </div>
        </div>
    );
};

export default Contact;
