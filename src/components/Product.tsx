import React from "react";
import ProductCard from "./ProductCard";

interface ProductItem {
    title: string;
    description: string;
    link: string;
    background: string;
}

const products: ProductItem[] = [
    { title: "Vitamin C", description: "Vitamin C as ascorbic acid", link: "#", background: "/Assets/h2-b1.jpg.png" },
    { title: "Vitamin B3", description: "Niacin for healthy gut and skin", link: "#", background: "/Assets/bn2-2.jpg.png" },
    { title: "Magnesium", description: "Boost energy and support muscle function", link: "#", background: "/Assets/bn2-3.jpg.png" },
    { title: "Hyaluronic Acid", description: "For smooth, supple and soft skin!", link: "#", background: "/Assets/bn2-4.jpg.png" },
    { title: "Lactobacillus", description: "Invigorate your gut microbiome", link: "#", background: "/Assets/bn2-5.jpg.png" },
];

const Product: React.FC = () => {
    return (
        <section className="py-6 sm:py-10 px-4 sm:px-5 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
                {/* First Row: Title + Description, Vitamin C, Vitamin B3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6">
                    {/* Title and Description */}
                    <div className="w-full sm:flex-1 sm:min-w-[300px] sm:max-w-[500px] text-center sm:text-left px-4 sm:px-0">
                        <h3 className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-widest mb-2">
                            Ingredients
                        </h3>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-3 sm:mb-4">
                            Better Ingredients
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
                        </p>
                    </div>

                    {/* Vitamin C and Vitamin B3 */}
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-6">
                        {products.slice(0, 2).map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>

                {/* Second Row: Magnesium, Hyaluronic Acid, Lactobacillus */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Products */}
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-6 flex-wrap justify-center">
                        {products.slice(2).map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    {/* Placeholder Image */}
                    <div
                        className="w-full sm:flex-1 sm:min-w-[200px] h-48 sm:h-64 relative mt-6 sm:mt-0"
                        style={{
                            backgroundImage: `url('/Assets/img101.png')`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Product;