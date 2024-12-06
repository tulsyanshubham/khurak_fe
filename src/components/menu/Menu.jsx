import Image from 'next/image';
import React, { useState } from 'react';

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
        {
            name: "Tofu (Fit Fuel) Brown Rice Bowl",
            category: "Lean Meals",
            price: 249,
            calories: 460,
            image_src: "/images/carousel/5.jpeg",
            description: "Grilled Tofu (150g) rests atop a bed of cilantro lime rice. Colorful bell peppers, red beans, sweet corn, and juicy cherry tomatoes add freshness. Drizzle with avocado cilantro lime dressing for a delightful finish."
        },
    ];
    const categories = ["All", "Lean Meals", "Keto Meals", "Vegan Meals", "Gluten-Free", "Dairy-Free", "Low Carb", "High Protein", "Low Calorie", "High Fiber", "Low Fat", "Low Sodium", "Sugar-Free", "Organic", "Non-GMO", "Paleo", "Whole30"];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    
    return (
        <div className="w-full transition-colors duration-300 pt-16">
            <div className="w-full px-5 max-w-7xl mx-auto">
                {/* Category Section */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
                    Our Healthy Menu 🍽️
                </h1>
                <div id="category" className="mb-5">
                    <ul className="flex items-center justify-center gap-2 mt-5 flex-wrap">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className='flex'
                            >
                                <input className='hidden' type="radio" id={category} name="category" value={category} onChange={handleCategoryChange} />
                                <label
                                    className={`text-sm md:text-lg font-semibold px-4 py-[3px] rounded-2xl border-2 border-gray-100 dark:border-gray-800 cursor-pointer
                                        ${selectedCategory === category ? "bg-green-500 dark:bg-ktheme-500 text-black dark:text-black" : "text-gray-700 dark:text-gray-200"}`}
                                    htmlFor={category}>
                                    {category}
                                    
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu Section */}
                <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center pt-2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border-2 border-gray-100 dark:border-gray-800 rounded-lg shadow-lg"
                        >
                            {/* Image Section */}
                            <div className="relative flex w-full justify-center">
                                <Image
                                    src={item.image_src}
                                    alt={item.name}
                                    height={300}
                                    width={300}
                                    className="relative w-full aspect-video object-cover"
                                />
                                <div className="absolute flex items-center justify-between gap-2 mb-4 w-full px-5 -bottom-8">
                                    <span className="bg-gray-200 dark:bg-gray-700 text-sm md:text-lg text-black dark:text-white px-2 py-[0.5px] rounded-2xl">
                                        {item.calories} KCAL
                                    </span>
                                    <span className="bg-gray-200 dark:bg-gray-700 text-sm md:text-lg text-black dark:text-white px-2 py-[0.5px] rounded-2xl">
                                        ₹{item.price}
                                    </span>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="text-center p-3">
                                <h2 className="text-xl md:text-lg font-semibold text-amber-500 my-2">
                                    {item.name}
                                </h2>
                                {/* <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                    {item.description}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
