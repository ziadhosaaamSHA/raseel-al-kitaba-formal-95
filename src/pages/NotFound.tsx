
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-raseel-primary mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
          <Button asChild className="bg-raseel-primary hover:bg-raseel-secondary text-white px-8 py-6 text-lg">
            <Link to="/">العودة إلى الصفحة الرئيسية</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
