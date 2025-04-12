
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-raseel-primary">رسائل الكتابة</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-0 space-x-reverse space-x-6">
          <Link to="/" className="text-gray-700 hover:text-raseel-primary transition-colors">الرئيسية</Link>
          <Link to="/generate" className="text-gray-700 hover:text-raseel-primary transition-colors">إنشاء رسالة</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-raseel-primary transition-colors">الأسعار</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-raseel-primary transition-colors">لوحة التحكم</Link>
          <Button className="bg-raseel-primary hover:bg-raseel-secondary text-white rounded-lg px-6">
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-raseel-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white border-t animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-raseel-primary py-2 transition-colors" onClick={toggleMenu}>الرئيسية</Link>
            <Link to="/generate" className="text-gray-700 hover:text-raseel-primary py-2 transition-colors" onClick={toggleMenu}>إنشاء رسالة</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-raseel-primary py-2 transition-colors" onClick={toggleMenu}>الأسعار</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-raseel-primary py-2 transition-colors" onClick={toggleMenu}>لوحة التحكم</Link>
            <Button className="bg-raseel-primary hover:bg-raseel-secondary text-white rounded-lg">
              تسجيل الدخول
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
