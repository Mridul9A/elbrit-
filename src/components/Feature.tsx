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
    <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 relative mt-20 xs:mt-24 sm:mt-28 md:mt-32">
      <div className="bg-[#004B50] text-white rounded-[16px] xs:rounded-[24px] sm:rounded-[48px] py-12 xs:py-16 sm:py-20 md:py-24 px-3 xs:px-4 sm:px-6 md:px-8 relative -mt-12 xs:-mt-14 sm:-mt-16 z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-3 xs:gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-16 xs:gap-y-20 sm:gap-y-24">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon Container */}
              <div className="absolute -top-10 xs:-top-12 sm:-top-16 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px]"
                  />
                </div>
              </div>
              
              {/* Content Container */}
              <div className="mt-10 xs:mt-12 sm:mt-14 space-y-1.5 xs:space-y-2 sm:space-y-3">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-[11px] xs:text-xs sm:text-sm text-gray-200 max-w-[200px] xs:max-w-[250px] sm:max-w-xs mx-auto leading-relaxed">
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