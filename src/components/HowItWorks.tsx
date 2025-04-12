
import React from 'react';
import { FileText, Edit3, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText size={40} />,
      title: "اختر نوع الرسالة",
      description: "اختر من بين مجموعة متنوعة من قوالب الرسائل الرسمية"
    },
    {
      icon: <Edit3 size={40} />,
      title: "أدخل التفاصيل",
      description: "أجب على بعض الأسئلة البسيطة حول الرسالة التي تريد إنشاءها"
    },
    {
      icon: <Download size={40} />,
      title: "احصل على رسالتك",
      description: "استلم رسالتك جاهزة وقم بتنزيلها أو نسخها أو تعديلها حسب احتياجاتك"
    }
  ];

  return (
    <section className="py-12 bg-raseel-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">كيف يعمل رسائل الكتابة؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-raseel-primary shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
