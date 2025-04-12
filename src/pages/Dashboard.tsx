
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Edit, Trash2 } from 'lucide-react';

const Dashboard = () => {
  // Mock data for saved letters
  const [savedLetters, setSavedLetters] = useState([
    {
      id: 1,
      title: "طلب إجازة",
      date: new Date(2025, 3, 10),
      recipient: "مدير الموارد البشرية",
      preview: "طلب إجازة لمدة أسبوع بسبب ظروف عائلية..."
    },
    {
      id: 2,
      title: "خطاب توصية",
      date: new Date(2025, 3, 5),
      recipient: "من يهمه الأمر",
      preview: "توصية لزميل العمل السابق للانضمام إلى شركتكم..."
    },
    {
      id: 3,
      title: "طلب نقل",
      date: new Date(2025, 3, 1),
      recipient: "مدير الموارد البشرية",
      preview: "طلب نقل إلى فرع الشركة في المدينة المنورة..."
    }
  ]);

  // Mock user data
  const userData = {
    name: "محمد أحمد",
    email: "mohammed@example.com",
    plan: "الخطة المميزة",
    joinDate: new Date(2025, 0, 15),
    lettersCreated: 24,
    lettersRemaining: "غير محدود"
  };

  // Handle letter deletion
  const handleDelete = (id: number) => {
    setSavedLetters(savedLetters.filter(letter => letter.id !== id));
    // Here you would show a toast notification
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">لوحة التحكم</h1>
          
          <Tabs defaultValue="letters">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="letters">الرسائل المحفوظة</TabsTrigger>
              <TabsTrigger value="account">معلومات الحساب</TabsTrigger>
            </TabsList>
            
            <TabsContent value="letters">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedLetters.map((letter) => (
                  <Card key={letter.id} className="card-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{letter.title}</CardTitle>
                          <CardDescription>
                            {letter.date.toLocaleDateString('ar-SA')}
                          </CardDescription>
                        </div>
                        <div className="p-2 bg-raseel-soft rounded-full text-raseel-primary">
                          <FileText size={24} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>المستلم:</strong> {letter.recipient}</p>
                      <p className="mb-4 text-gray-600 line-clamp-2">{letter.preview}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                          <Edit size={16} />
                          <span>تعديل</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                          <Download size={16} />
                          <span>تنزيل</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 flex items-center justify-center gap-1 text-red-500 hover:text-red-700 hover:border-red-300"
                          onClick={() => handleDelete(letter.id)}
                        >
                          <Trash2 size={16} />
                          <span>حذف</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {savedLetters.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 mb-4">لا توجد رسائل محفوظة حالياً</p>
                    <Button asChild className="bg-raseel-primary hover:bg-raseel-secondary">
                      <a href="/generate">إنشاء رسالة جديدة</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="account">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>معلومات الحساب</CardTitle>
                  <CardDescription>عرض وتعديل معلومات حسابك الشخصي</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-500 mb-1">الاسم</p>
                      <p>{userData.name}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">البريد الإلكتروني</p>
                      <p>{userData.email}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">خطة الاشتراك</p>
                      <p className="text-raseel-primary font-bold">{userData.plan}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">تاريخ الانضمام</p>
                      <p>{userData.joinDate.toLocaleDateString('ar-SA')}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">الرسائل المُنشأة</p>
                      <p>{userData.lettersCreated}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500 mb-1">الرسائل المتبقية</p>
                      <p>{userData.lettersRemaining}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 flex flex-wrap gap-4">
                    <Button className="flex-1 bg-raseel-primary hover:bg-raseel-secondary">
                      تعديل الملف الشخصي
                    </Button>
                    <Button variant="outline" className="flex-1">
                      تغيير كلمة المرور
                    </Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">الاشتراك والفوترة</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="mb-2"><strong>الخطة الحالية:</strong> {userData.plan}</p>
                      <p className="mb-2"><strong>تاريخ التجديد:</strong> 15 مايو 2025</p>
                      <p><strong>المبلغ:</strong> ٣٩ ر.س.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" className="flex-1">
                        ترقية الاشتراك
                      </Button>
                      <Button variant="outline" className="flex-1 text-red-500 hover:text-red-700 hover:border-red-300">
                        إلغاء الاشتراك
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
