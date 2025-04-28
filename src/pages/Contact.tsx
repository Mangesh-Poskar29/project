import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ 
  icon, 
  title, 
  content 
}) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get in Touch with Our Team to Discuss Your Project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Let's Start a Conversation" 
                subtitle="We'd love to hear from you. Here's how you can reach us."
              />
              
              <div className="mt-12 space-y-8">
                <ContactInfo 
                  icon={<MapPin size={24} />}
                  title="Our Location"
                  content={
                    <p>
                      Konkfinity Tech Hub<br />
                      Guhagar, Ratnagiri<br />
                      Maharashtra, India 415703
                    </p>
                  }
                />
                
                <ContactInfo 
                  icon={<Phone size={24} />}
                  title="Phone"
                  content={
                    <p>
                      +91 7774966707<br />
                    </p>
                  }
                />
                
                <ContactInfo 
                  icon={<Mail size={24} />}
                  title="Email"
                  content={
                    <p>
                      konkfinity@gmail.com<br />
                    </p>
                  }
                />
                
                <ContactInfo 
                  icon={<Clock size={24} />}
                  title="Working Hours"
                  content={
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  }
                />
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Our Location</h3>
                <div className="rounded-xl overflow-hidden">
                  <MapSection />
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about working with us."
            centered
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "What is the typical process for starting a new project?",
                answer: "Our process typically begins with an initial consultation to understand your requirements, followed by a proposal and estimation. Once approved, we move to the planning, design, development, testing, and deployment phases, with regular check-ins throughout."
              },
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary based on complexity, scope, and requirements. A simple website might take 4-6 weeks, while a complex custom software solution could take several months. We'll provide a detailed timeline during our initial proposal."
              },
              {
                question: "Do you offer maintenance and support after launch?",
                answer: "Yes, we offer ongoing maintenance and support packages to ensure your solution continues to perform optimally after launch. These can include regular updates, performance monitoring, security patches, and technical support."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in a range of technologies including React, Node.js, Python, Flutter, AWS, MongoDB, and more. Our team stays up-to-date with the latest advancements to ensure we're using the best tools for each project."
              },
              {
                question: "Can you work with clients outside of India?",
                answer: "Absolutely! We work with clients globally and have experience in managing remote collaboration effectively. We use various communication tools and adapt to different time zones to ensure smooth project execution."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6 bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="ml-4 flex-shrink-0 rounded-full p-1.5 text-gray-400 sm:p-3 bg-gray-50 group-open:bg-primary-50 group-open:text-primary-600">
                      <svg 
                        className="h-5 w-5 group-open:hidden" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg 
                        className="hidden h-5 w-5 group-open:block" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;