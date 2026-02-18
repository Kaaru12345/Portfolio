import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/062765e12aff7cbe4eb22f472ddda8b48edfe877.png';
import profileImage from 'figma:asset/cdfa9b7273fc5674e0252bd8040a150583af9739.png';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <>
      {/* Mobile header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="lg:hidden fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 p-3 md:p-4 border-b border-white/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img src={logoImage} alt="KS Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs md:text-sm">Developer</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 z-40"
      >
        <div className="flex flex-col items-center p-8 h-full">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="w-24 h-24 flex items-center justify-center mb-8"
          >
            <img src={logoImage} alt="KS Logo" className="w-full h-full object-contain" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="text-sm text-gray-400">Developer</div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-40 h-40 rounded-3xl overflow-hidden mb-6 border-4 border-white/10"
          >
            <img
              src={profileImage}
              alt="Kartikay Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-6"
          >
            <div className="text-sm text-gray-400 mb-2">kartikaysharma824@gmail.com</div>
            <div className="text-sm text-gray-400">INDIA</div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Kaaru12345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/kartikay-sharma-915308268"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Hire Me Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveSection('contact');
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-3 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            HIRE ME!
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
}