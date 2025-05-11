import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WavesBackground from '../3d/WavesBackground';
import Button from '../common/Button';
import Logo from '../../components/logo.png';
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background waves using Three.js */}
      <WavesBackground />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-20 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white mt-16 md:mt-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Infinite Innovation from the Shores of Konkan
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-200 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We blend advanced technology with the natural beauty of Konkan to create software solutions that transform businesses and elevate user experiences.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button to="/contact" size="lg">
              Ready to Innovate?
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Explore Services
            </Button>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 mb-12 md:mt-0 md:mb-0 flex justify-center items-center h-[400px] md:h-[500px]">
          <motion.div 
            className="w-64 h-64 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img 
              src={Logo}  // Your logo source here
              alt="Logo"
              className="w-full h-full object-contain"
              animate={{ rotateY: 360 }} // Apply the rotation along the Y-axis
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-sm mb-2">Scroll to explore</p>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;