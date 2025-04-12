
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false 
}) => {
  return (
    <Card className={`border ${popular ? 'border-raseel-primary ring-2 ring-raseel-primary/20' : 'border-gray-200'} card-shadow`}>
      {popular && (
        <div className="bg-raseel-primary text-white text-center py-1 text-sm rounded-t-lg">
          الأكثر شعبية
        </div>
      )}
      <CardHeader className={`${popular ? '' : 'pt-8'} text-center`}>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "مجاني" && <span className="text-gray-500"> / شهريًا</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`mr-2 ${feature.included ? 'text-green-500' : 'text-gray-400'}`}>
                <Check size={18} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular 
            ? 'bg-raseel-primary hover:bg-raseel-secondary text-white' 
            : 'bg-white border border-raseel-primary text-raseel-primary hover:bg-raseel-soft'}`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
