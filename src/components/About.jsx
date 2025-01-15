import myImg from "../assets/me2.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const StyledSection = ({ title, children, className = "" }) => (
  <div className={`mb-6 ${className}`}>
    <h2 className="font-mono text-xl mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {children}
  </div>
);

const About = () => {
  const createMarkup = () => {
    const styledText = ABOUT_TEXT
      // Replace existing paragraphs with styled ones
      .replace(
        /<p>/g,
        '<p class="text-orange-300 font-serif text-lg mb-4 leading-relaxed">'
      )
      // Replace list items with styled ones
      .replace(
        /<li>/g,
        '<li class="text-emerald-300 font-serif text-lg mb-2 leading-relaxed hover:text-orange-300 transition-colors duration-300">'
      )
      // Replace unordered lists with styled ones
      .replace(
        /<ul class="list-disc list-inside mb-4">/g,
        '<ul class="space-y-2 ml-4 list-none mb-6">'
      );

    return { __html: styledText };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 border-b border-indigo-900/30">
      <h1 className="mb-16 text-center text-4xl sm:text-5xl md:text-6xl font-serif">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About
        </span>
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Me
        </span>
      </h1>

      <div className="flex flex-wrap gap-8 lg:gap-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[45%]"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img
                className="rounded-2xl w-full object-cover shadow-xl"
                src={myImg}
                alt="About"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[45%]"
        >
          <div className="bg-gradient-to-br from-indigo-950/90 to-violet-950/90 backdrop-blur-sm p-6 rounded-xl border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;