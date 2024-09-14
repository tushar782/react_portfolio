import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>

      <div className="m-8 flex items-center justify-center gap-4">
        <motion.a
          href="https://www.linkedin.com/in/tusharpimple782"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="popover"
          title="LinkedIn"
          data-bs-content="Visit my LinkedIn profile"
          whileHover={{ scale: 1.2, rotate: -15, color: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/tushar782"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="popover"
          title="GitHub"
          data-bs-content="Check out my GitHub repositories"
          whileHover={{ y: -10, color: "#333" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://twitter.com/TusharPimple017"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="popover"
          title="Twitter"
          data-bs-content="Follow me on Twitter"
          whileHover={{ rotate: 360, color: "#1DA1F2" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/tusharpimple_07"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="popover"
          title="Instagram"
          data-bs-content="See my Instagram posts"
          whileHover={{ scale: 1.5, color: "#E1306C" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
