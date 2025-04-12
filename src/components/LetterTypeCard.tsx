
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface LetterTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const LetterTypeCard: React.FC<LetterTypeCardProps> = ({ title, description, icon, href }) => {
  return (
    <Card className="card-shadow bg-white hover:bg-raseel-softGray transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="mb-4 bg-raseel-soft p-4 rounded-full inline-block text-raseel-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button asChild className="bg-raseel-primary hover:bg-raseel-secondary text-white w-full">
          <Link to={href}>إنشاء الآن</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default LetterTypeCard;
