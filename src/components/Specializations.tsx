import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Smartphone, Database, Globe } from 'lucide-react';

const specializations = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive and performant web applications with modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that users love.',
  },
];

export function Specializations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl md:text-7xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Specializations
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="border border-white/10 rounded-3xl p-6 md:p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl mb-4">{spec.title}</h3>
                <p className="text-gray-400 text-base md:text-lg">{spec.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}