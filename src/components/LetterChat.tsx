
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Edit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface LetterChatProps {
  onUpdateLetter: (letter: string) => void;
  letterType: string;
  sender: string;
  recipient: string;
  reason: string;
  tone: string;
}

const LetterChat: React.FC<LetterChatProps> = ({ 
  onUpdateLetter, 
  letterType, 
  sender, 
  recipient, 
  reason, 
  tone 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial system message
  useEffect(() => {
    if (letterType && !messages.length) {
      const initialMessages: Message[] = [
        {
          id: '1',
          content: `مرحباً! سأساعدك في إنشاء رسالة ${
            letterType === 'leave' ? 'طلب إجازة' : 
            letterType === 'transfer' ? 'طلب نقل' : 
            letterType === 'recommendation' ? 'خطاب توصية' :
            letterType === 'complaint' ? 'تقديم شكوى' :
            letterType === 'resignation' ? 'خطاب استقالة' : 'رسمية'
          }. هل تريد تخصيص الرسالة المُنشأة أو تعديلها؟`,
          role: 'assistant',
          timestamp: new Date()
        }
      ];
      setMessages(initialMessages);
    }
  }, [letterType]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responseContent = generateResponse(input, letterType, sender, recipient, reason, tone);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent.message,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
      
      // Update the main letter if the AI response includes a new letter
      if (responseContent.updatedLetter) {
        onUpdateLetter(responseContent.updatedLetter);
      }
    }, 1500);
  };

  const generateResponse = (
    message: string, 
    letterType: string, 
    sender: string, 
    recipient: string, 
    reason: string, 
    tone: string
  ): { message: string, updatedLetter?: string } => {
    // Keywords to match in user input
    const formalKeywords = ['رسمي', 'رسمية', 'احترافي', 'محترف'];
    const friendlyKeywords = ['ودي', 'ودود', 'غير رسمي', 'لطيف'];
    const shortenerKeywords = ['اختصر', 'أقصر', 'موجز'];
    const expandKeywords = ['وسع', 'أطول', 'تفصيل', 'شرح'];
    
    let newTone = tone;
    let shouldUpdateLetter = false;
    let responseMessage = 'تم تحديث الرسالة وفقاً لطلبك.';
    
    // Check for tone change requests
    if (formalKeywords.some(keyword => message.includes(keyword))) {
      newTone = 'formal';
      shouldUpdateLetter = true;
      responseMessage = 'تم تغيير نبرة الرسالة إلى رسمية أكثر.';
    } else if (friendlyKeywords.some(keyword => message.includes(keyword))) {
      newTone = 'friendly';
      shouldUpdateLetter = true;
      responseMessage = 'تم تغيير نبرة الرسالة إلى ودية أكثر.';
    }
    
    // Check for length modification requests
    if (shortenerKeywords.some(keyword => message.includes(keyword))) {
      shouldUpdateLetter = true;
      responseMessage = 'تم اختصار الرسالة كما طلبت.';
    } else if (expandKeywords.some(keyword => message.includes(keyword))) {
      shouldUpdateLetter = true;
      responseMessage = 'تم توسيع الرسالة بتفاصيل إضافية.';
    }
    
    // If no specific request matches, give a general response
    if (!shouldUpdateLetter) {
      return { 
        message: 'أفهم طلبك. هل يمكنك توضيح كيف تريد تحديداً أن أعدل الرسالة؟ مثلاً، هل تريدها أكثر رسمية، أقصر، أو إضافة معلومات معينة؟' 
      };
    }
    
    // Generate updated letter based on the new parameters
    let updatedLetter = '';
    
    if (letterType === 'leave') {
      // Modify the leave letter based on the new tone and length requests
      updatedLetter = `بسم الله الرحمن الرحيم

السيد/ ${recipient} المحترم
مدير الموارد البشرية

الموضوع: طلب إجازة

تحية ${newTone === 'formal' ? 'رسمية واحتراماً،' : 'طيبة وبعد،'}

${newTone === 'formal' ? 
  `يشرفني أن أتقدم إلى سيادتكم أنا ${sender} بطلب الموافقة الكريمة على منحي إجازة لمدة أسبوع، وذلك اعتباراً من تاريخ 20 أبريل 2025م وحتى 27 أبريل 2025م، وذلك ${reason}.` :
  `أتقدم إليكم أنا ${sender} بطلب إجازة لمدة أسبوع، من 20 أبريل وحتى 27 أبريل 2025م، وذلك ${reason}.`
}

${newTone === 'formal' ? 
  `وأتعهد لسيادتكم بإنجاز كافة المهام المنوطة بي قبل بدء الإجازة وتسليمها في الموعد المحدد لها، كما سأقوم بترتيب كافة مسؤوليات العمل مع زملائي الكرام لضمان استمرارية سير العمل بالشكل الأمثل خلال فترة غيابي.` :
  `سأقوم بإنهاء جميع المهام المطلوبة قبل الإجازة وترتيب العمل مع زملائي لضمان سير العمل بشكل طبيعي خلال غيابي.`
}

${newTone === 'formal' ? 
  `وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير،` :
  `وتفضلوا بقبول فائق الاحترام والتقدير،`
}

${sender}
قسم تطوير البرمجيات
التاريخ: ${new Date().toLocaleDateString('ar-SA')}`;
    } else if (letterType === 'transfer') {
      // Similar modification for transfer letter
      updatedLetter = `بسم الله الرحمن الرحيم

السيد/ ${recipient} المحترم
مدير الموارد البشرية

الموضوع: طلب نقل إلى قسم آخر

تحية ${newTone === 'formal' ? 'رسمية واحتراماً،' : 'طيبة وبعد،'}

${newTone === 'formal' ? 
  `يشرفني أن أتقدم إلى سيادتكم أنا ${sender} بطلب النظر في إمكانية نقلي من قسمي الحالي إلى قسم آخر، وذلك ${reason}.` :
  `أتقدم إليكم أنا ${sender} بطلب نقلي من قسمي الحالي إلى قسم آخر، وذلك ${reason}.`
}

${newTone === 'formal' ? 
  `وأود أن أؤكد لسيادتكم أن لدي الخبرات والمهارات اللازمة للعمل في القسم الجديد، وسأبذل قصارى جهدي للتكيف مع مهام العمل الجديدة وإنجازها على الوجه الأكمل.` :
  `لدي الخبرة والمهارات اللازمة للعمل في القسم الجديد، وسأبذل قصارى جهدي للتكيف مع مهام العمل الجديدة وإنجازها بشكل جيد.`
}

${newTone === 'formal' ? 
  `وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير،` :
  `وتفضلوا بقبول فائق الاحترام والتقدير،`
}

${sender}
قسم تطوير البرمجيات
التاريخ: ${new Date().toLocaleDateString('ar-SA')}`;
    } else {
      // Generic letter for other types
      updatedLetter = `هذا نموذج لرسالة ${letterType} من ${sender} إلى ${recipient} بخصوص ${reason} بنبرة ${
        newTone === 'formal' ? 'رسمية جداً' : newTone === 'friendly' ? 'ودية' : 'قياسية'
      }`;
    }
    
    return { 
      message: responseMessage,
      updatedLetter
    };
  };

  return (
    <Card className="max-h-[500px] flex flex-col overflow-hidden bg-raseel-softGray">
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-raseel-primary text-white' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.role === 'user' ? (
                    <User size={16} />
                  ) : (
                    <Bot size={16} />
                  )}
                  <span className="text-xs opacity-75">
                    {message.role === 'user' ? 'أنت' : 'المساعد'}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب هنا لتخصيص الرسالة... (مثال: اجعلها أكثر رسمية)"
            className="flex-grow min-h-[50px] max-h-[100px]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isProcessing || !input.trim()}
            className="bg-raseel-primary hover:bg-raseel-secondary h-auto"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LetterChat;
