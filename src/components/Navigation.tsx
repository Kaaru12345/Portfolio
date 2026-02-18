import { motion } from 'motion/react';
import { Home, User, Briefcase, Code, Mail, Award } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'specializations', icon: Code, label: 'Specializations' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'experience', icon: Award, label: 'Experience' },
  { id: 'projects', icon: Briefcase, label: 'Works' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.id)}
              className="relative group"
            >
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-white text-black border-white'
                    : 'bg-black/50 border-white/20 hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-white text-black px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}