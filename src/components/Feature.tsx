import React from "react";
import Image from "next/image";

interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC = () => {
  const featureData: FeatureData[] = [
    {
      icon: "/Assets/clinically-studied.png",
      title: "Clinically Studied",
      description: "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: "/Assets/vegetarian.png",
      title: "Vegetarian Friendly",
      description: "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: "/Assets/flag-india.png",
      title: "Made In India",
      description: "Shop local and explore health products made right here in India",
    },
    {
      icon: "/Assets/delivery-cart.png",
      title: "Free Shipping",
      description: "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: "/Assets/delivery-status.png",
      title: "No Risk",
      description: "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: "/Assets/biodegradable.png",
      title: "GMO Free",
      description: "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 relative">
      <div className="bg-[#004B50] text-white rounded-[48px] py-24 px-8 relative -mt-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-14 space-y-3">
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-200 max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;