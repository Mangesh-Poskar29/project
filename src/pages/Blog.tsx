import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Cloud Computing in Rural Development',
    excerpt: 'Exploring how cloud technologies can bridge the digital divide and empower rural communities in the Konkan region.',
    date: 'June 15, 2025',
    author: 'Rahul Sharma',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cloud Computing'
  },
  {
    id: '2',
    title: 'Sustainable Tech: Balancing Innovation with Environmental Responsibility',
    excerpt: 'How technology companies can lead the way in creating sustainable digital solutions without compromising on innovation.',
    date: 'May 28, 2025',
    author: 'Priya Desai',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sustainability'
  },
  {
    id: '3',
    title: 'Mobile First: Designing for the Next Billion Users',
    excerpt: 'Key principles for creating mobile applications that serve users in emerging markets with limited connectivity.',
    date: 'May 12, 2025',
    author: 'Ajay Patil',
    image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Development'
  },
  {
    id: '4',
    title: 'The Rise of AI in Software Development',
    excerpt: 'How artificial intelligence is transforming the way we build and maintain software applications.',
    date: 'April 30, 2025',
    author: 'Vikram Desai',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Artificial Intelligence'
  },
  {
    id: '5',
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Essential security measures that small businesses should implement to protect their digital assets.',
    date: 'April 15, 2025',
    author: 'Neha Kadam',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cybersecurity'
  },
  {
    id: '6',
    title: 'The Impact of Digital Transformation on Traditional Industries',
    excerpt: 'How digital technologies are revolutionizing traditional sectors like agriculture, fishing, and handicrafts in the Konkan region.',
    date: 'March 29, 2025',
    author: 'Rahul Sharma',
    image: 'https://images.pexels.com/photos/3328246/pexels-photo-3328246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Digital Transformation'
  },
  {
    id: '7',
    title: 'Building Accessible Web Applications',
    excerpt: 'Guidelines and best practices for creating web applications that are accessible to users with disabilities.',
    date: 'March 15, 2025',
    author: 'Priya Desai',
    image: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development'
  },
  {
    id: '8',
    title: 'IoT Solutions for Environmental Monitoring',
    excerpt: 'How Internet of Things technologies can help track and preserve the natural environment of the Konkan coast.',
    date: 'February 28, 2025',
    author: 'Ajay Patil',
    image: 'https://images.pexels.com/photos/1454373/pexels-photo-1454373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT'
  },
  {
    id: '9',
    title: 'The Evolution of UX Design: Trends to Watch',
    excerpt: 'Emerging trends in user experience design that are shaping the future of digital products.',
    date: 'February 12, 2025',
    author: 'Vikram Desai',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UX Design'
  }
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Cloud Computing', 'Sustainability', 'Mobile Development', 'Artificial Intelligence', 'Cybersecurity', 'Digital Transformation', 'Web Development', 'IoT', 'UX Design'];
  
  const filteredPosts = blogPosts
    .filter(post => filter === 'All' || post.category === filter)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
              Blog & Insights
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Latest Articles, Industry Insights, and Technology Trends
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="p-8 lg:p-12 flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-display font-bold mb-4">The Future of Cloud Computing in Rural Development</h2>
                <p className="text-gray-600 mb-4">Exploring how cloud technologies can bridge the digital divide and empower rural communities in the Konkan region.</p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    June 15, 2025
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <User size={14} className="mr-1" />
                    Rahul Sharma
                  </span>
                </div>
                <Button to="/blog/1" className="self-start">
                  Read Full Article
                </Button>
              </motion.div>
              
              <motion.div
                className="lg:h-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cloud Computing Article" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <SectionTitle 
              title="Latest Articles" 
              subtitle="Stay updated with our latest insights and technology trends."
            />
            
            <div className="mt-6 md:mt-0 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
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
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Button to={`/blog/${post.id}`} variant="text">
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Subscribe to Our Newsletter" 
              subtitle="Stay updated with our latest articles, insights, and technology trends."
              centered
            />
            
            <motion.form 
              className="mt-8 flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;