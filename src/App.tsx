import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Specializations } from './components/Specializations';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'specializations', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 150, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 120, -60, 0],
            scale: [1, 1.4, 1.1, 1],
            rotate: [360, 270, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 1.3, 1],
            rotate: [0, 180, 270, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 90, -70, 0],
            scale: [1, 1.25, 1.15, 1],
            rotate: [0, -90, -180, -360],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl"
        />
        
        {/* Animated curved lines - FEWER BUT SMOOTHER */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.path
            d="M 0,300 Q 400,100 800,300 T 1600,300"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            fill="none"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
          <motion.path
            d="M 0,500 Q 300,350 600,500 T 1200,500"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            fill="none"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.7, 1, 0],
            }}
            transition={{ 
              duration: 12,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5
            }}
          />
          <motion.path
            d="M 200,700 Q 500,550 800,700 T 1400,700"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="2.5"
            fill="none"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.9, 0.6, 0],
            }}
            transition={{ 
              duration: 13,
              delay: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
          <motion.path
            d="M 100,200 Q 450,50 900,200 T 1700,200"
            stroke="rgba(255,255,250,0.17)"
            strokeWidth="3"
            fill="none"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 1, 0],
            }}
            transition={{ 
              duration: 14,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.8
            }}
          />
          <motion.path
            d="M 150,600 Q 500,450 850,600 T 1550,600"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="3"
            fill="none"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 0.7, 0],
            }}
            transition={{ 
              duration: 11,
              delay: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2.5
            }}
          />
        </svg>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="ml-0 lg:ml-64">
        <section id="home" className="min-h-screen flex items-center pt-16 lg:pt-0">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen flex items-center -mt-20">
          <About />
        </section>
        
        <section id="specializations" className="min-h-screen flex items-center -mt-20">
          <Specializations />
        </section>
        
        <section id="skills" className="min-h-screen flex items-center">
          <Skills />
        </section>
        
        <section id="experience" className="min-h-screen flex items-center -mt-20">
          <Experience />
        </section>
        
        <section id="projects" className="min-h-screen flex items-center">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen flex items-center -mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}