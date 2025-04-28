import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { BlogPost } from '../../types';

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
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Latest Insights" 
          subtitle="Stay updated with our latest articles, industry insights, and technology trends."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
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
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button to="/blog">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;