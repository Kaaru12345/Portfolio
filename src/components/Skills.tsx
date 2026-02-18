import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { name: 'React', level: 55 },
  { name: 'MySQL', level: 55 },
  { name: 'Git', level: 55 },
  { name: 'Tailwind CSS', level: 65 },
  { name: 'Python', level: 70 },
  { name: 'REST APIs', level: 30 },
];

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js', 'MySQL', 'Redis'],
  },
  {
    title: 'Tools & Others',
    items: ['Git', 'AWS', 'Figma'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl md:text-7xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Skill bars */}
          <div className="space-y-6 md:space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-base md:text-lg">{skill.name}</span>
                  <span className="text-gray-400 text-sm md:text-base">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-6 md:space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl md:text-2xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + itemIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-full text-xs md:text-sm hover:bg-white/20 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}