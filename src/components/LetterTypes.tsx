
import React from 'react';
import LetterTypeCard from './LetterTypeCard';
import { FileText, Briefcase, Award, AlertCircle, Calendar, Send } from 'lucide-react';

const LetterTypes = () => {
  const letterTypes = [
    {
      title: "طلب إجازة",
      description: "إنشاء رسالة لطلب إجازة من العمل بشكل رسمي",
      icon: <Calendar size={32} />,
      href: "/generate?type=leave"
    },
    {
      title: "طلب نقل",
      description: "إنشاء رسالة لطلب نقل إلى قسم أو فرع آخر",
      icon: <Send size={32} />,
      href: "/generate?type=transfer"
    },
    {
      title: "خطاب توصية",
      description: "إنشاء خطاب توصية احترافي لزميل أو موظف",
      icon: <Award size={32} />,
      href: "/generate?type=recommendation"
    },
    {
      title: "تقديم شكوى",
      description: "إنشاء رسالة شكوى رسمية بأسلوب محترف",
      icon: <AlertCircle size={32} />,
      href: "/generate?type=complaint"
    },
    {
      title: "خطاب استقالة",
      description: "إنشاء خطاب استقالة بأسلوب مهني ومحترف",
      icon: <Briefcase size={32} />,
      href: "/generate?type=resignation"
    },
    {
      title: "أنواع أخرى",
      description: "استكشف المزيد من أنواع الرسائل الرسمية",
      icon: <FileText size={32} />,
      href: "/generate"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">أنواع الرسائل</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {letterTypes.map((type, index) => (
            <LetterTypeCard
              key={index}
              title={type.title}
              description={type.description}
              icon={type.icon}
              href={type.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LetterTypes;
