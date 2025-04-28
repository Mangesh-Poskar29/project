import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import AboutSection from '../components/home/AboutSection';
import Portfolio from '../components/home/Portfolio';
import CallToAction from '../components/home/CallToAction';
import BlogSection from '../components/home/BlogSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <Portfolio />
      <CallToAction />
      <BlogSection />
    </>
  );
};

export default Home;