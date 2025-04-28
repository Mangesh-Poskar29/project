import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Cloud, PenTool, Lightbulb } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button to="/services" variant="text" className="mt-auto">
        Learn more
      </Button>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and challenges.",
      icon: <Code2 size={24} />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Web Development",
      description: "Responsive and dynamic web applications built with modern frameworks and technologies.",
      icon: <Globe size={24} />
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure, and reliable cloud infrastructure and migration services.",
      icon: <Cloud size={24} />
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances user satisfaction and improves product usability.",
      icon: <PenTool size={24} />
    },
    {
      title: "Digital Transformation",
      description: "Strategic guidance to leverage digital technologies for business growth and innovation.",
      icon: <Lightbulb size={24} />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a comprehensive range of software development services to help businesses navigate the digital landscape and achieve their goals."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button to="/services" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;