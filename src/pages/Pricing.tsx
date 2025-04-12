
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import { Check } from 'lucide-react';

const Pricing = () => {
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

  const comparisonFeatures = [
    { name: "عدد الرسائل", free: "رسالتين يومياً", premium: "غير محدود" },
    { name: "أساليب الكتابة", free: "الأسلوب القياسي فقط", premium: "جميع الأساليب" },
    { name: "تنزيل PDF", free: "غير متاح", premium: "متاح" },
    { name: "تنزيل Word", free: "غير متاح", premium: "متاح" },
    { name: "حفظ الرسائل", free: "غير متاح", premium: "متاح" },
    { name: "الإرسال بالبريد", free: "غير متاح", premium: "متاح" },
    { name: "اقتراحات تحسين", free: "غير متاح", premium: "متاح" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-raseel-softGray">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">اختر الخطة المناسبة لاحتياجاتك</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              خطط مرنة تناسب جميع الاحتياجات، ابدأ مجاناً أو اشترك للحصول على كافة المميزات
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
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

        {/* Features Comparison Table */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">مقارنة المميزات</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto border-collapse">
                <thead>
                  <tr className="bg-raseel-primary text-white">
                    <th className="py-4 px-6 text-right">الميزة</th>
                    <th className="py-4 px-6 text-center">الخطة المجانية</th>
                    <th className="py-4 px-6 text-center">الخطة المميزة</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="py-4 px-6 font-medium">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {feature.free === "غير متاح" ? 
                          <span className="text-red-500">✕</span> : 
                          <span>{feature.free}</span>
                        }
                      </td>
                      <td className="py-4 px-6 text-center">
                        {feature.premium === "متاح" ? 
                          <span className="text-green-500"><Check size={18} className="inline" /></span> : 
                          <span>{feature.premium}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">الأسئلة الشائعة</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">هل يمكنني تجربة الخدمة قبل الاشتراك؟</h3>
                <p>نعم، يمكنك استخدام الخطة المجانية التي تتيح لك إنشاء رسالتين يومياً دون الحاجة لبطاقة ائتمان.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">هل يمكنني إلغاء الاشتراك في أي وقت؟</h3>
                <p>نعم، يمكنك إلغاء اشتراكك في أي وقت وسيظل الاشتراك فعالاً حتى نهاية الفترة المدفوعة.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">هل الرسائل المُنشأة تتوافق مع المعايير الرسمية؟</h3>
                <p>نعم، جميع الرسائل المُنشأة تتبع المعايير الرسمية للمراسلات باللغة العربية وتم تدريب النظام على أفضل الممارسات في كتابة الرسائل الرسمية.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">هل يمكنني تعديل الرسائل بعد إنشائها؟</h3>
                <p>نعم، يمكنك تعديل الرسائل بعد إنشائها مباشرة قبل نسخها أو تنزيلها.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
