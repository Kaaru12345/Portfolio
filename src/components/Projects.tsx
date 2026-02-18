import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import escapeRoomImg from 'figma:asset/7071ce05d6ecee59a1487773138466ef52a07863.png';

const projects = [
  {
    title: 'Escape Room',
    description: 'An immersive interactive escape room experience with puzzles and challenges',
    image: escapeRoomImg,
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://escape-room-vyy9.vercel.app/',
    codeUrl: 'https://github.com/Kaaru12345/Escape-room',
  },
  {
    title: 'Dog_Vision',
    description: 'Deep learning model to identify dog breeds using computer vision and TensorFlow',
    image: 'https://images.unsplash.com/photo-1701513519108-b0a234f26161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjb21wdXRlciUyMHZpc2lvbnxlbnwxfHx8fDE3Njc1NDU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'Flask', 'Computer Vision'],
  },
  {
    title: 'notesy',
    description: 'A simple and elegant note-taking application built with Flask for quick thoughts',
    image: 'https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlcyUyMHdyaXRpbmclMjBhcHB8ZW58MXx8fHwxNzcxNDAzMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Flask', 'Python', 'SQLite', 'HTML/CSS'],
    codeUrl: 'https://github.com/Kaaru12345/notesy',
  },
  {
    title: 'Web Vulnerability Scanner',
    description: 'Advanced security tool for detecting and analyzing web application vulnerabilities',
    image: 'https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdnVsbmVyYWJpbGl0eSUyMHNjYW5uZXJ8ZW58MXx8fHwxNzcxMzA3Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Security', 'Networking', 'Flask'],
  },
];

export function Projects() {
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
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 md:gap-4">
                  {project.liveUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </motion.button>
                  )}
                  {project.codeUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.codeUrl, '_blank')}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
