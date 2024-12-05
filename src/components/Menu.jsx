import Image from 'next/image';
import React from 'react';

export default function Menu() {
    const items = [
        {
            name: "Chicken (Fit Fuel) Brown Rice Bowl",
            category: "Lean Meals",
            price: 299,
            calories: 440,
            image_src: "/images/carousel/1.jpeg",
            description: "Tender, seasoned chicken (150g) rests atop a bed of cilantro lime rice. Colorful bell peppers, red beans, sweet corn, and juicy cherry tomatoes add freshness. Drizzle with avocado cilantro lime dressing for a delightful finish."
        },
        {
            name: "Egg (Fit Fuel) Brown Rice Bowl",
            category: "Lean Meals",
            price: 249,
            calories: 384,
            image_src: "/images/carousel/2.jpeg",
            description: "Scrambled eggs (3) rest atop a bed of cilantro lime rice. Colorful bell peppers, red beans, sweet corn, and juicy cherry tomatoes add freshness. Drizzle with avocado cilantro lime dressing for a delightful finish. Perfect for health-conscious foodies!"
        },
        {
            name: "Tofu (Fit Fuel) Brown Rice Bowl",
            category: "Lean Meals",
            price: 249,
            calories: 460,
            image_src: "/images/carousel/3.jpeg",
            description: "Grilled Tofu (150g) rests atop a bed of cilantro lime rice. Colorful bell peppers, red beans, sweet corn, and juicy cherry tomatoes add freshness. Drizzle with avocado cilantro lime dressing for a delightful finish."
        },
        {
            name: "Tofu (Fit Fuel) Brown Rice Bowl",
            category: "Lean Meals",
            price: 249,
            calories: 460,
            image_src: "/images/carousel/4.jpeg",
            description: "Grilled Tofu (150g) rests atop a bed of cilantro lime rice. Colorful bell peppers, red beans, sweet corn, and juicy cherry tomatoes add freshness. Drizzle with avocado cilantro lime dressing for a delightful finish."
        },
    ];

    return (
        <div className="w-full transition-colors duration-300">
            <div className="w-full px-5 max-w-7xl mx-auto">
                {/* Category Section */}
                <div id="category" className="mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
                        Lean Meals
                    </h1>
                </div>

                {/* Menu Section */}
                <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border-2 border-gray-100 dark:border-gray-800 overflow-hidden rounded-lg shadow-lg"
                        >
                            {/* Image Section */}
                            <div className="flex w-full justify-center">
                                <Image
                                    src={item.image_src}
                                    alt={item.name}
                                    height={300}
                                    width={300}
                                    className="w-full aspect-video object-cover"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="text-center p-4">
                                <h2 className="text-xl md:text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                    {item.name}
                                </h2>
                                {/* <div className="flex items-center justify-center gap-2 mb-4">
                                    <span className="bg-ktheme-500 text-sm md:text-lg text-black px-3 py-1 rounded-2xl">
                                        {item.calories} KCAL
                                    </span>
                                    <span className="bg-green-400 dark:bg-green-600 text-sm md:text-lg text-black px-3 py-1 rounded-2xl">
                                        ₹{item.price}
                                    </span>
                                </div> */}
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
