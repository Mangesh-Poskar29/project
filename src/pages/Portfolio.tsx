import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { CaseStudy } from '../types';

const portfolioItems: CaseStudy[] = [
  {
    id: '1',
    title: 'Konkan Tourism Platform',
    description: 'A comprehensive digital platform showcasing the beauty of Konkan region to tourists around the world.',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '2',
    title: 'AgriConnect Mobile App',
    description: 'Mobile application helping Konkan farmers connect directly with buyers, eliminating middlemen.',
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: '3',
    title: 'Smart Fishery Management System',
    description: 'IoT-based system helping coastal fishermen track and manage their catches efficiently.',
    image: 'https://images.pexels.com/photos/2143839/pexels-photo-2143839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT Solution',
    technologies: ['IoT', 'Python', 'AWS']
  },
  {
    id: '4',
    title: 'Coastal Weather Monitoring',
    description: 'Real-time weather monitoring system for the Konkan coast, providing alerts and forecasts.',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cloud Solution',
    technologies: ['AWS', 'React', 'Node.js']
  },
  {
    id: '5',
    title: 'Konkani Language Learning App',
    description: 'Interactive mobile application designed to help users learn the Konkani language through gamified lessons.',
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile App',
    technologies: ['Flutter', 'Firebase', 'TensorFlow']
  },
  {
    id: '6',
    title: 'Healthcare Management System',
    description: 'Comprehensive solution for hospitals and clinics to manage patients, appointments, and medical records.',
    image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['React', 'Express', 'PostgreSQL']
  },
  {
    id: '7',
    title: 'Smart Home Automation',
    description: 'IoT solution for controlling home appliances, lighting, and security systems remotely.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT Solution',
    technologies: ['IoT', 'MQTT', 'React Native']
  },
  {
    id: '8',
    title: 'E-commerce Platform',
    description: 'Feature-rich online marketplace for local artisans to sell traditional Konkan handicrafts.',
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['Next.js', 'Stripe', 'MongoDB']
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Mobile App', 'IoT Solution', 'Cloud Solution'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

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
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Innovative Solutions That Drive Success
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                    <span className="text-white font-medium m-4 px-3 py-1 bg-primary-600 rounded-full text-sm">
                      {item.category}
                    </span>
                    <Button 
                      to={`/portfolio/${item.id}`} 
                      className="m-4 bg-white/90 text-primary-600 hover:bg-white"
                      size="sm"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Case Study" 
            subtitle="A detailed look at one of our most impactful projects."
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Konkan Tourism Platform" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold mb-4">Konkan Tourism Platform</h3>
              <div className="flex gap-2 mb-6">
                {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                The Konkan Tourism Platform was developed to showcase the natural beauty and cultural richness of the Konkan region to tourists worldwide. This comprehensive digital solution transformed how visitors discover and experience the coastal paradise.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">The Challenge</h4>
                <p className="text-gray-600">
                  The Konkan region, despite its breathtaking landscapes and rich heritage, lacked a unified digital presence to attract tourists. Local businesses were struggling to reach potential visitors, and travelers had limited access to reliable information about accommodations, attractions, and experiences.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Our Solution</h4>
                <p className="text-gray-600">
                  We created an interactive platform featuring immersive 360° views of beaches, virtual tours of historical sites, comprehensive listings of accommodations and restaurants, and an itinerary planner powered by AI. The platform also integrated a booking system for local experiences and a community forum for travelers to share tips.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Results</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">60% increase in tourism inquiries within six months</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Over 200 local businesses registered on the platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">25,000+ monthly active users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Featured in national travel publications</span>
                  </li>
                </ul>
              </div>
              
              <Button to="/contact">
                Discuss Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="Hear what our clients have to say about working with us."
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "CEO, Konkan Tourism Board",
                testimonial: "Konkfinity transformed our digital presence with their innovative tourism platform. Their understanding of both technology and our local context made all the difference. We've seen remarkable growth in tourist interest since launching.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Priti Shetty",
                position: "Founder, AgriConnect",
                testimonial: "The mobile app developed by Konkfinity has revolutionized how our farmers connect with buyers. The team's attention to detail and commitment to understanding our unique challenges resulted in a solution that truly works for rural users.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Vikram Desai",
                position: "Director, Coastal Fisheries Association",
                testimonial: "The Smart Fishery Management System has significantly improved efficiency for our members. Konkfinity delivered a sophisticated IoT solution that's intuitive enough for fishermen with limited tech experience to use daily.",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-yellow-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how we can help you achieve your digital goals with our expertise in software development and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100"
                size="lg"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;