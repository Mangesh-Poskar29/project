import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 -z-10"></div>
      
      {/* Wave patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full opacity-10">
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,181.3C672,160,768,160,864,181.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Innovate? Let's Create the Future Together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Partner with Konkfinity to transform your ideas into innovative digital solutions that drive growth and success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              to="/contact" 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get in Touch Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;