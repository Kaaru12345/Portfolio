import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "Cubical Research Capital",
    period: "Oct 2025 - Dec 2025",
    location: "Mumbai, INDIA",
    responsibilities: [
      "Developed and deployed the company website using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.",
      "Implemented responsive UI and reusable components to ensure cross-device compatibility and maintainability.",
      "Optimized performance and user experience through clean layouts and frontend best practices.",
      "Converted functional requirements into scalable frontend architecture using component-based development.",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl md:text-7xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <motion.h3
                      className="text-2xl md:text-3xl mb-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg md:text-xl text-gray-300 flex items-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Briefcase className="w-5 h-5" />
                      {experience.company}
                    </motion.p>
                  </div>

                  <div className="flex flex-col gap-2 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <motion.ul
                  className="space-y-3 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {experience.responsibilities.map(
                    (responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + idx * 0.1,
                        }}
                        className="flex gap-3 text-sm md:text-base"
                      >
                        <span className="text-white mt-1">
                          •
                        </span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ),
                  )}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
