import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const text = "Say Hi, I'm Kartikay";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 lg:px-20">
      {/* Introduce Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute top-24 lg:top-32 right-6 lg:right-32 px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition-colors cursor-pointer"
      >
        INTRODUCE
      </motion.button>

      <div className="max-w-6xl w-full text-center">
        {/* Main Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl mb-8"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-gray-400 max-w-2xl text-base md:text-lg mx-auto"
        >
          I design and code beautifully complex things simply
          and I love what I do. Just simple like that!
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={(e) => {
          e.stopPropagation();
          const projectsSection =
            document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-0 p-0 m-0 group"
      >
        {/* Floating circle container */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Circle with icon and text */}
          <div className="w-24 h-24 rounded-full border-2 border-white/30 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm gap-1">
            <ChevronDown className="w-5 h-5" />
            <span className="text-[9px] text-gray-400 group-hover:text-white transition-colors">
              MY PROJECTS
            </span>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}