
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
        <div className="container mx-auto py-8 px-4">
          <div className="bg-raseel-soft rounded-lg p-6 mb-12 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">تجربة محادثة ذكية لتخصيص رسائلك</h2>
            <p className="text-center text-gray-700 mb-4">
              نقدم الآن واجهة محادثة مع الذكاء الاصطناعي لمساعدتك في تخصيص رسائلك بشكل أكثر دقة وسهولة. أخبر المساعد الذكي كيف تريد تعديل رسالتك وسيقوم بتنفيذ طلبك فوراً!
            </p>
            <div className="flex justify-center">
              <img 
                src="/placeholder.svg" 
                alt="واجهة المحادثة الذكية" 
                className="max-w-full h-auto rounded-lg shadow-lg border border-raseel-primary/20"
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>
        </div>
        <LetterTypes />
        <HowItWorks />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
