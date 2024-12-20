import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-blue-50 py-8">
      <div className="relative">
        <h1 className="text-7xl lg:text-9xl font-extrabold text-blue-900 text-center leading-relaxed mb-6">
          Essential <span className="text-blue-900">Essential</span>
        </h1>

        <div className="container mx-auto px-4 py-0 lg:py-20 flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <p className="text-gray-600 text-lg">
              Online Medical Supplies
              <br />
              <strong>Get Your Vitamins & Minerals</strong>
            </p>
            <button className="bg-[#004B50] n text-white px-6 py-2 rounded-full border-2 border-[#004B50]  hover:bg-white hover:text-[#004B50]  transition">
              EXPLORE
            </button>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center my-8 lg:my-0">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-[50px] relative flex justify-center items-center">
              <Image
                src="/Assets/f2-1.png.png"
                alt="Probiotics Bottle"
                width={240}
                height={240}
                className="absolute"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-6 hidden lg:block">
            {[
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
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#004B50]  rounded-full flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
