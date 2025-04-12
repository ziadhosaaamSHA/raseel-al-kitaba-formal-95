
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const freePlanFeatures = [
    { text: "إنشاء رسالتين يومياً", included: true },
    { text: "الأسلوب القياسي فقط", included: true },
    { text: "نسخ النص", included: true },
    { text: "تنزيل بصيغة PDF", included: false },
    { text: "تنزيل بصيغة Word", included: false },
    { text: "حفظ الرسائل", included: false },
    { text: "إرسال الرسائل بالبريد", included: false },
    { text: "اقتراحات لتحسين الصياغة", included: false }
  ];

  const premiumPlanFeatures = [
    { text: "رسائل غير محدودة", included: true },
    { text: "جميع أساليب الكتابة", included: true },
    { text: "نسخ النص", included: true },
    { text: "تنزيل بصيغة PDF", included: true },
    { text: "تنزيل بصيغة Word", included: true },
    { text: "حفظ الرسائل", included: true },
    { text: "إرسال الرسائل بالبريد", included: true },
    { text: "اقتراحات لتحسين الصياغة", included: true }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">خطط الأسعار</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="الخطة المجانية"
            price="مجاني"
            description="مثالية للاستخدام العرضي"
            features={freePlanFeatures}
            buttonText="البدء مجاناً"
          />
          
          <PricingCard
            title="الخطة المميزة"
            price="٣٩ ر.س."
            description="للاحتياجات المهنية والمتكررة"
            features={premiumPlanFeatures}
            buttonText="اشترك الآن"
            popular={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
