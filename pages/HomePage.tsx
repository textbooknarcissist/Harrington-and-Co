import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import BlogPreview from '../components/BlogPreview';
import PracticePreview from '../components/PracticePreview';
import EnterpriseTicker from '../components/EnterpriseTicker';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <EnterpriseTicker />
      <PracticePreview />
      <BlogPreview />
      <FAQ />
      <ContactSection />
      <Testimonials />
    </>
  );
};

export default HomePage;