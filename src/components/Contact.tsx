import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS Configuration
    const serviceId = 'service_aptort7';
    const templateId = 'template_qbsatkx';
    const publicKey = '9a5kRIXyD_z7AprDU';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'kartikaysharma824@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again or email me directly.');
      });
  };

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 w-full">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-5xl md:text-7xl mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your vision.
        </motion.p>

        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm mb-12 max-w-md mx-auto"
        >
          <Mail className="w-6 h-6" />
          <div className="text-center">
            <h3 className="text-xl mb-1">Email</h3>
            <a 
              href="mailto:kartikaysharma824@gmail.com"
              className="text-gray-400 hover:text-white transition-colors text-base"
            >
              kartikaysharma824@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 md:space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-white/30 transition-colors backdrop-blur-sm text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-white/30 transition-colors backdrop-blur-sm text-sm md:text-base"
            />
          </div>

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-white/30 transition-colors resize-none backdrop-blur-sm text-sm md:text-base"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 md:py-4 bg-white text-black rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-base md:text-lg"
          >
            <Send className="w-4 md:w-5 h-4 md:h-5" />
            Send Message
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>© 2026 Kartikay. Built with React</p>
        </motion.div>
      </div>
    </div>
  );
}