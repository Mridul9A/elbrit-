import React from "react";
import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <div className="w-full bg-white px-6 flex justify-start items-center py-4">
            {/* Logo */}
            <div className="w-full md:w-1/3">
                <Image
                    src="/Assets/logo.png"
                    alt="Elbrit Logo"
                    width={300}
                    height={100}
                />
            </div>
        </div>
    );
};

export default Nav;
