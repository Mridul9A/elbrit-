import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#004B50] text-white py-8 px-4 md:py-12 md:px-12 mb-8">
      <div className="container mx-auto">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Phone Card */}
          <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg hover:bg-[#005a60] transition-colors">
            <div className="flex items-center w-full">
              <Image 
                src="/Assets/telephone.png" 
                alt="Phone Icon" 
                width={32} 
                height={32} 
                className="md:w-[40px] md:h-[40px]"
              />
              <div className="ml-3 md:ml-4">
                <p className="text-xs md:text-sm font-medium">Phone Number</p>
                <p className="text-base md:text-lg font-bold">+974 3118 1843</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg hover:bg-[#005a60] transition-colors">
            <div className="flex items-center w-full">
              <Image 
                src="/Assets/email1.png" 
                alt="Email Icon" 
                width={32} 
                height={32} 
                className="md:w-[40px] md:h-[40px]"
              />
              <div className="ml-3 md:ml-4">
                <p className="text-xs md:text-sm font-medium">Email Address</p>
                <p className="text-base md:text-lg font-bold break-all">Elbrithcqr@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg hover:bg-[#005a60] transition-colors sm:col-span-2 md:col-span-1">
            <div className="flex items-center w-full">
              <Image 
                src="/Assets/location.png" 
                alt="Location Icon" 
                width={32} 
                height={32} 
                className="md:w-[40px] md:h-[40px]"
              />
              <div className="ml-3 md:ml-4">
                <p className="text-xs md:text-sm font-medium">Office Location</p>
                <p className="text-base md:text-lg font-bold">Ambassador Street, Zone 61</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image 
              src="/Assets/logo.png" 
              alt="Elbrit Logo" 
              width={200} 
              height={67} 
              className="md:w-[300px] md:h-[100px]"
            />
          </div>

          {/* Description */}
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm leading-relaxed">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm">
              &copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}