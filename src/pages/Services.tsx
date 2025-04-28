import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Cloud, PenTool, Lightbulb, Zap, Users } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button to="/contact" variant="outline">
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements.",
      features: [
        "Requirement analysis and planning",
        "Custom architecture design",
        "Full-stack development",
        "Testing and quality assurance",
        "Deployment and maintenance"
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across devices.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "App testing and optimization",
        "App store submission and support"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Responsive and dynamic web applications built with modern frameworks and technologies.",
      features: [
        "Frontend development",
        "Backend development",
        "CMS integration",
        "E-commerce solutions",
        "Progressive web apps"
      ]
    },
  
    {
      icon: <Lightbulb size={32} />,
      title: "Digital Transformation",
      description: "Strategic guidance to leverage digital technologies for business growth and innovation.",
      features: [
        "Digital strategy consulting",
        "Process automation",
        "Legacy system modernization",
        "Digital adoption planning",
        "Technology roadmap creation"
      ]
    },
  
    {
      icon: <Users size={32} />,
      title: "IT Consulting",
      description: "Expert advice and guidance on technology decisions and implementations.",
      features: [
        "Technology assessment",
        "IT strategy planning",
        "Vendor selection assistance",
        "Technical due diligence",
        "Process optimization consulting"
      ]
    }
  ];

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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive Software Solutions to Drive Your Business Forward
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Our range of services designed to meet all your software development needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Development Process" 
            subtitle="We follow a proven methodology to ensure successful project outcomes."
            centered
          />
          
          <div className="mt-16 relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100 z-0"></div>
            
            {[
              {
                title: "Discovery",
                description: "We start by understanding your business, goals, and challenges through in-depth consultations.",
                index: 1
              },
              {
                title: "Planning",
                description: "Based on our findings, we create a detailed project plan, including timelines, requirements, and deliverables.",
                index: 2
              },
              {
                title: "Design",
                description: "Our design team creates wireframes and prototypes, ensuring the solution meets both functional and aesthetic needs.",
                index: 3
              },
              {
                title: "Development",
                description: "Our engineers bring the designs to life, writing clean, efficient code following best practices.",
                index: 4
              },
              {
                title: "Testing",
                description: "Rigorous testing ensures the solution is bug-free, secure, and performs optimally across all scenarios.",
                index: 5
              },
              {
                title: "Deployment",
                description: "We carefully launch your solution, ensuring a smooth transition and minimal disruption.",
                index: 6
              },
              {
                title: "Support",
                description: "Our relationship continues after launch with ongoing support, maintenance, and improvements.",
                index: 7
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={`relative z-10 flex items-center md:justify-${index % 2 === 0 ? 'end' : 'start'} mb-12 md:mb-24`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 md:${index % 2 === 0 ? 'pr-16' : 'pl-16'} flex flex-col md:items-${index % 2 === 0 ? 'end' : 'start'} text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="mb-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-primary-50 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-primary-600 font-semibold">{step.index}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Technologies We Use" 
            subtitle="We leverage the latest technologies to deliver high-quality solutions."
            centered
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
              { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
              { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-16 mb-4"
                />
                <p className="font-medium text-gray-800">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Ideas into Reality?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to discuss your project and discover how Konkfinity can help you achieve your digital goals.
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

export default Services;