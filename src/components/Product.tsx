import React from "react";

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
        <section className="py-10 px-5 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {/* First Row: Title + Description, Vitamin C, Vitamin B3 */}
                <div className="flex flex-wrap items-start justify-start gap-6">
                    {/* Title and Description */}
                    <div className="flex-1 min-w-[300px] max-w-[500px] text-center md:text-left">
                        <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2">Ingredients</h3>
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Better Ingredients</h2>
                        <p className="text-gray-600 text-lg">
                            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
                        </p>
                    </div>

                    {/* Vitamin C and Vitamin B3 */}
                    {products.slice(0, 2).map((product, index) => (
                        <div
                            key={index}
                            className="flex-1 min-w-[250px] max-w-[300px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-start relative"
                            style={{
                                backgroundImage: `url(${product.background})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center bottom",
                                minHeight: "250px",
                                backgroundColor: "#EAF5FF",
                            }}
                        >
                            <div className="relative z-10 text-gray-900">
                                <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                                <p className="text-sm mb-4">{product.description}</p>
                                <a
                                    href={product.link}
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    SEE MORE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row: Magnesium, Hyaluronic Acid, Lactobacillus */}
                <div className="flex flex-wrap items-start justify-center gap-6">
                    {/* Products */}
                    {products.slice(2).map((product, index) => (
                        <div
                            key={index}
                            className="flex-1 min-w-[250px] max-w-[300px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-start relative"
                            style={{
                                backgroundImage: `url(${product.background})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center bottom",
                                minHeight: "250px",
                                backgroundColor: "#EAF5FF",
                            }}
                        >
                            <div className="relative z-10 text-gray-900">
                                <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                                <p className="text-sm mb-4">{product.description}</p>
                                <a
                                    href={product.link}
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    SEE MORE
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder Image */}
                    <div
  className="flex-1 text-center relative"
  style={{
    backgroundImage: `url('/Assets/img101.png')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "250px",
    minWidth:'0',
    margin: "0", // Remove margin
    padding: "0", // Remove padding
  }}
></div>


                </div>
            </div>
        </section>
    );
};

export default Product;
