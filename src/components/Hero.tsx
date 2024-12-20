import Image from "next/image";

const Hero = () => {
  const features = [
    {
      icon: "/Assets/vitamin.png",
      title: "Vitamins",
      description: "Increased Vitamins and minerals in your diet",
    },
    {
      icon: "/Assets/weight-loss.png",
      title: "Weight Loss",
      description: "Find scientifically proven solutions",
    },
    {
      icon: "/Assets/functional-foods.png",
      title: "Functional Foods",
      description: "From protein powders to baby formula",
    },
  ];

  return (
    <div className="relative bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="pt-8 md:pt-12 lg:pt-16">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-blue-900 text-center">
            Essential <br className="md:hidden" />
            <span className="text-blue-900">Essential</span>
          </h1>

          {/* Three Column Layout */}
          <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
              <p className="text-gray-600 text-lg sm:text-xl">
                Online Medical Supplies
                <br />
                <strong>Get Your Vitamins & Minerals</strong>
              </p>
              <button className="bg-[#004B50] text-white px-8 py-3 rounded-full border-2 border-[#004B50] hover:bg-white hover:text-[#004B50] transition-colors duration-300 text-lg">
                EXPLORE
              </button>
            </div>

            {/* Center Column - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/Assets/f2-1.png.png"
                  alt="Probiotics Bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6 md:space-y-8">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl hover:bg-white/70 transition-colors duration-300"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#004B50] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 md:w-7 md:h-7"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;