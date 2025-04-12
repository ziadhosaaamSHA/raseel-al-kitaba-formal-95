
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-raseel-primary">رسائل الكتابة</h3>
            <p className="mb-4">
              منصة ذكية لإنشاء الرسائل الرسمية باللغة العربية بسهولة وسرعة.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-raseel-primary">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-raseel-primary transition-colors">الرئيسية</Link></li>
              <li><Link to="/generate" className="hover:text-raseel-primary transition-colors">إنشاء رسالة</Link></li>
              <li><Link to="/pricing" className="hover:text-raseel-primary transition-colors">الأسعار</Link></li>
              <li><Link to="/dashboard" className="hover:text-raseel-primary transition-colors">لوحة التحكم</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-raseel-primary">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>البريد الإلكتروني: info@raseel-al-kitaba.com</li>
              <li>الهاتف: +966 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} رسائل الكتابة - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
