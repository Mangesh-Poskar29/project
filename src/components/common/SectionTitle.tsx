import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`font-display font-bold text-3xl md:text-4xl leading-tight ${light ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`mt-4 max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className={`w-20 h-1 mt-5 ${centered ? 'mx-auto' : ''} bg-gradient-to-r from-primary-500 to-secondary-400`}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  );
};

export default SectionTitle;