import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { CaseStudy } from '../../types';

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
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Mobile App', 'IoT Solution', 'Cloud Solution'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Portfolio" 
          subtitle="Explore our latest projects and see how we've helped businesses transform their digital presence."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="text-white font-medium m-4 px-3 py-1 bg-primary-600 rounded-full text-sm">
                    {item.category}
                  </span>
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
                <Button to={`/portfolio/${item.id}`} variant="text">
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button to="/portfolio" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;