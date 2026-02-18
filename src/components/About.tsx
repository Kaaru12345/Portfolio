import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-gray-400 mb-6">
                I began my journey as a developer and gradually explored new technologies, 
                gaining experience in building web and digital products. I'm naturally curious, 
                quietly confident, and always eager to learn and improve.
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <p className="text-lg md:text-xl text-gray-400">
                My goal is to create digital experiences that not only look great but also solve 
                real problems and make a positive impact. I believe in continuous learning and 
                staying updated with the latest trends in web development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}