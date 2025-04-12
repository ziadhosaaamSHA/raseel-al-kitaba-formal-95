
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Download, MessageCircle, Send, X } from 'lucide-react';
import LetterChat from '../components/LetterChat';

const Generate = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get('type');

  // State for letter details
  const [letterType, setLetterType] = useState(typeFromUrl || '');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [reason, setReason] = useState('');
  const [tone, setTone] = useState('standard');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const letterTypes = [
    { value: 'leave', label: 'طلب إجازة' },
    { value: 'transfer', label: 'طلب نقل' },
    { value: 'recommendation', label: 'خطاب توصية' },
    { value: 'complaint', label: 'تقديم شكوى' },
    { value: 'resignation', label: 'خطاب استقالة' },
    { value: 'other', label: 'نوع آخر' }
  ];

  const toneTypes = [
    { value: 'formal', label: 'رسمي جداً' },
    { value: 'standard', label: 'رسمي قياسي' },
    { value: 'friendly', label: 'ودي' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const sampleLetters = {
        leave: `بسم الله الرحمن الرحيم

السيد/ ${recipient} المحترم
مدير الموارد البشرية

الموضوع: طلب إجازة

تحية طيبة وبعد،

أتقدم إليكم أنا ${sender} بطلب الموافقة على منحي إجازة لمدة أسبوع، وذلك بدءاً من تاريخ 20 أبريل 2025م وحتى 27 أبريل 2025م، وذلك ${reason}.

وأتعهد بإنجاز جميع المهام المطلوبة مني قبل بدء الإجازة وتسليمها في الوقت المحدد، كما سأقوم بترتيب مهام العمل مع زملائي لضمان سير العمل بشكل طبيعي خلال فترة غيابي.

وتفضلوا بقبول فائق الاحترام والتقدير،

${sender}
قسم تطوير البرمجيات
التاريخ: ${new Date().toLocaleDateString('ar-SA')}`,
        
        transfer: `بسم الله الرحمن الرحيم

السيد/ ${recipient} المحترم
مدير الموارد البشرية

الموضوع: طلب نقل إلى قسم آخر

تحية طيبة وبعد،

أتقدم إليكم أنا ${sender} بطلب الموافقة على نقلي من قسمي الحالي إلى قسم آخر، وذلك ${reason}.

أود أن أؤكد لكم أن لدي الخبرة والمهارات اللازمة للعمل في القسم الجديد، وسأبذل قصارى جهدي للتكيف مع مهام العمل الجديدة وإنجازها على أكمل وجه.

وتفضلوا بقبول فائق الاحترام والتقدير،

${sender}
قسم تطوير البرمجيات
التاريخ: ${new Date().toLocaleDateString('ar-SA')}`
      };
      
      // Set the generated letter based on the letter type
      if (letterType === 'leave') {
        setGeneratedLetter(sampleLetters.leave);
      } else if (letterType === 'transfer') {
        setGeneratedLetter(sampleLetters.transfer);
      } else {
        setGeneratedLetter(`هذا نموذج لرسالة ${letterTypes.find(t => t.value === letterType)?.label || 'رسمية'} من ${sender} إلى ${recipient} بخصوص ${reason}`);
      }
      
      setIsGenerating(false);
      // Show chat automatically once the letter is generated
      setShowChat(true);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    // Here you would show a toast notification
  };

  const handleUpdateLetter = (newLetter: string) => {
    setGeneratedLetter(newLetter);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">إنشاء رسالة رسمية</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل الرسالة</CardTitle>
                <CardDescription>أدخل المعلومات اللازمة لإنشاء رسالتك</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="letterType">نوع الرسالة</Label>
                    <Select 
                      value={letterType} 
                      onValueChange={setLetterType}
                    >
                      <SelectTrigger id="letterType">
                        <SelectValue placeholder="اختر نوع الرسالة" />
                      </SelectTrigger>
                      <SelectContent>
                        {letterTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sender">اسم المرسل</Label>
                    <Input 
                      id="sender" 
                      value={sender} 
                      onChange={(e) => setSender(e.target.value)}
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="recipient">اسم المستلم أو الجهة</Label>
                    <Input 
                      id="recipient" 
                      value={recipient} 
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="أدخل اسم المستلم أو الجهة"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reason">سبب الرسالة</Label>
                    <Textarea 
                      id="reason" 
                      value={reason} 
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="اشرح سبب الرسالة بالتفصيل"
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tone">أسلوب الكتابة</Label>
                    <Select 
                      value={tone} 
                      onValueChange={setTone}
                    >
                      <SelectTrigger id="tone">
                        <SelectValue placeholder="اختر أسلوب الكتابة" />
                      </SelectTrigger>
                      <SelectContent>
                        {toneTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-raseel-primary hover:bg-raseel-secondary"
                    disabled={isGenerating || !letterType || !sender || !recipient || !reason}
                  >
                    {isGenerating ? 'جاري الإنشاء...' : 'إنشاء الرسالة'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Result Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>الرسالة المُنشأة</CardTitle>
                    <CardDescription>يمكنك تعديل النص أو نسخه أو تنزيله</CardDescription>
                  </div>
                  {generatedLetter && (
                    <Button 
                      onClick={() => setShowChat(!showChat)} 
                      variant="outline" 
                      size="icon"
                      className="rounded-full"
                    >
                      {showChat ? <X size={18} /> : <MessageCircle size={18} />}
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea 
                    value={generatedLetter} 
                    onChange={(e) => setGeneratedLetter(e.target.value)}
                    placeholder="ستظهر هنا الرسالة المُنشأة بعد ملء النموذج والضغط على زر الإنشاء..."
                    className="min-h-[300px] font-arabic leading-relaxed"
                    readOnly={!generatedLetter}
                  />
                  
                  {generatedLetter && (
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        onClick={copyToClipboard}
                        className="flex-1 flex items-center justify-center gap-2 bg-raseel-primary hover:bg-raseel-secondary"
                      >
                        <Copy size={18} />
                        نسخ
                      </Button>
                      <Button 
                        className="flex-1 flex items-center justify-center gap-2 bg-raseel-primary hover:bg-raseel-secondary"
                      >
                        <Download size={18} />
                        تنزيل PDF
                      </Button>
                      <Button 
                        className="flex-1 flex items-center justify-center gap-2 bg-raseel-primary hover:bg-raseel-secondary"
                      >
                        <Send size={18} />
                        إرسال بالبريد
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Chat Interface */}
              {showChat && generatedLetter && (
                <LetterChat 
                  onUpdateLetter={handleUpdateLetter}
                  letterType={letterType}
                  sender={sender}
                  recipient={recipient}
                  reason={reason}
                  tone={tone}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generate;
