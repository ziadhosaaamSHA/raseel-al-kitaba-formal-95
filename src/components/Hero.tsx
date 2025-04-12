
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-raseel-soft to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
          إنشاء الرسائل الرسمية بسهولة وسرعة
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          استخدم الذكاء الاصطناعي لإنشاء رسائل رسمية احترافية بالعربية في ثوانٍ. رسائل طلب إجازة، نقل، توصية، شكاوى وغيرها.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-raseel-primary hover:bg-raseel-secondary text-white px-8 py-6 text-lg rounded-lg">
            <Link to="/generate">ابدأ الآن</Link>
          </Button>
          <Button asChild variant="outline" className="border-raseel-primary text-raseel-primary hover:bg-raseel-soft px-8 py-6 text-lg rounded-lg">
            <Link to="/pricing">معرفة الأسعار</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
