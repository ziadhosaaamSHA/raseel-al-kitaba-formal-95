
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LetterTypes from '../components/LetterTypes';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LetterTypes />
        <HowItWorks />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
