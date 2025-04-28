import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Konkfinity
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Where Innovation Meets the Natural Beauty of Konkan
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Our Story" 
                subtitle="Founded in 2025, Konkfinity emerged as a passionate endeavor to bridge the technology gap in the Konkan region."
              />
              
              <p className="text-gray-600 mb-6">
                Our journey began with a simple idea: to create world-class software solutions that are deeply rooted in our heritage. Konkfinity was established by a team of tech enthusiasts who were born and raised in the serene coastal region of Konkan, Maharashtra.
              </p>
              
              <p className="text-gray-600 mb-6">
                As professionals who had gained experience in major tech hubs across the country, we recognized the untapped potential of bringing technological innovation back to our hometown. We envisioned a company that would not only deliver exceptional digital products but would also contribute to the economic growth and digital literacy of the Konkan region.
              </p>
              
              <p className="text-gray-600">
                Today, Konkfinity stands as a testament to that vision - a thriving software technology startup that seamlessly blends global tech standards with the unique cultural nuances of Konkan. We're proud of our roots and even prouder of how far we've come.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Team" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-semibold text-lg mb-2">Founded: 2025</p>
                <p>Empowering Tomorrow, Inspired by Konkan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle 
              title="Our Mission & Vision" 
              subtitle="We're driven by a clear purpose and an ambitious vision for the future."
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To deliver innovative software solutions that empower businesses and communities in the Konkan region and beyond, while promoting sustainable technological growth that honors our cultural heritage.
              </p>
              <p className="text-gray-600">
                We are committed to bridging the digital divide by creating accessible technology that addresses real-world challenges and improves quality of life.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To establish Konkan as a recognized hub for technological innovation in India, where tradition and technology thrive together in harmony.
              </p>
              <p className="text-gray-600">
                We envision a future where our solutions are at the forefront of digital transformation, setting new standards for excellence while creating meaningful employment opportunities in our region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The talented people behind Konkfinity who make our vision a reality."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Founder 1',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'With over 10 years of experience in software development, Anish leads Konkfinity with a vision to make Konkan a tech innovation hub.'
              },
              {
                name: 'Founder 2',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'Priya oversees all technical aspects of the company, bringing her expertise in cloud architecture and AI to drive innovation.'
              },
              {
                name: 'Rahul Sharma',
                role: 'Design Director',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'Rahul combines his creative vision with user-centered design principles to create exceptional digital experiences.'
              },
              {
                name: 'Meera Joshi',
                role: 'Lead Developer',
                image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'Meera brings technical excellence to every project, specializing in full-stack development and performance optimization.'
              },
              {
                name: 'Arjun Naik',
                role: 'Mobile Specialist',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'Arjun leads our mobile development initiatives, creating seamless experiences across iOS and Android platforms.'
              },
              {
                name: 'Neha Kadam',
                role: 'Project Manager',
                image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                bio: 'Neha ensures that all our projects are delivered on time and exceed client expectations through meticulous planning.'
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Growing Team
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're always looking for talented individuals who share our passion for technology and innovation. Explore current openings and become part of our journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                to="/careers" 
                className="bg-white text-primary-600 hover:bg-gray-100"
                size="lg"
              >
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;