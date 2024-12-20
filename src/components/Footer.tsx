import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#004B50] text-white py-12 px-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <Image src="/Assets/telephone.png" alt="Phone Icon" width={40} height={40} />
            <div className="ml-4">
              <p className="text-sm font-medium">Phone Number</p>
              <p className="text-lg font-bold">+974 3118 1843</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <Image src="/Assets/email1.png" alt="Email Icon" width={40} height={40} />
            <div className="ml-4">
              <p className="text-sm font-medium">Email Address</p>
              <p className="text-lg font-bold">Elbrithcqr@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start bg-[#004B50]-800 p-4 rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <Image src="/Assets/location.png" alt="Location Icon" width={40} height={40} />
            <div className="ml-4">
              <p className="text-sm font-medium">Office Location</p>
              <p className="text-lg font-bold">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 flex ">
          <Image src="/Assets/logo.png" alt="Elbrit Logo" width={300} height={100} />
        </div>

        <div className="col-span-1 md:col-span-1 p-4 ">
          <p className="text-xs text-left leading-relaxed">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
        <br />

        <div>
          <p className="text-xs ">
            &copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </p>
        </div>
      </div>
    </footer>
  );
}
