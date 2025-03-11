import React, { memo } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-4 sm:mb-20 sm:py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Uncomment and optimize your logo if needed */}
      </div>

      <div className="mx-4 my-2 flex items-center justify-center gap-3 sm:mx-8 sm:gap-4">
        <motion.a
          href="https://www.linkedin.com/in/tusharpimple782"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          whileHover={{ scale: 1.2, rotate: -15, color: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/tushar782"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          whileHover={{ y: -10, color: "#333" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://twitter.com/TusharPimple017"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          whileHover={{ rotate: 360, color: "#1DA1F2" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/tusharpimple_07"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          whileHover={{ scale: 1.5, color: "#E1306C" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default memo(Navbar);
