import React from "react";

interface ProductCardProps {
    title: string;
    description: string;
    link: string;
    background: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link, background }) => {
    return (
        <div
            className="flex-1 min-w-full sm:min-w-[250px] max-w-full sm:max-w-[300px] p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-start relative"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                minHeight: "200px",
                backgroundColor: "#EAF5FF",
            }}
        >
            <div className="relative z-10 text-gray-900">
                <h3 className="text-base sm:text-lg font-bold mb-1">{title}</h3>
                <p className="text-xs sm:text-sm mb-4">{description}</p>
                <a
                    href={link}
                    className="text-blue-600 font-semibold text-xs sm:text-sm hover:underline"
                >
                    SEE MORE
                </a>
            </div>
        </div>
    );
};

export default ProductCard;