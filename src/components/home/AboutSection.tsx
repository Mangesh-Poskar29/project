import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background wave shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-[10%] opacity-5">
          <path fill="#0099ff" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,224C672,213,768,171,864,133.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-[40%] opacity-5">
          <path fill="#00cba9" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,101.3C672,128,768,160,864,186.7C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="About Konkfinity" 
              subtitle="We are a innovative software technology startup rooted in the natural beauty of Konkan region."
            />
            
            <p className="text-gray-600 mb-6">
              At Konkfinity, we believe in the power of technology to transform businesses and improve lives. Founded with a vision to provide world-class software solutions with a local touch, we bring together expertise, innovation, and a deep understanding of our clients' needs.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team comprises talented engineers, designers, and strategists who are passionate about creating exceptional digital experiences. We take pride in our Konkan roots and blend this cultural richness with cutting-edge technology to deliver uniquely innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-primary-600">100+</h4>
                <p className="text-gray-600 mt-2">Successful Projects</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-primary-600">50+</h4>
                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-primary-600">15+</h4>
                <p className="text-gray-600 mt-2">Team Members</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-primary-600">5+</h4>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
            </div>
            
            <Button to="/about">
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Konkfinity Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl w-40 md:w-60">
                <img 
                  src="https://images.pexels.com/photos/7869251/pexels-photo-7869251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Konkan Coast" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;