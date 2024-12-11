import { menuItems } from '@/constants/menu';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import MenuItems from './Menuitems';
import Image from 'next/image';

export default function Menu() {
    // Initialize categories with "All" and dynamically extract unique categories from menuItems
    const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

    const [selectedCategories, setSelectedCategories] = useState(["All"]);
    const [searchValue, setSearchValue] = useState("");
    const [isVegOnly, setIsVegOnly] = useState(false);
    const [isNonVegOnly, setIsNonVegOnly] = useState(false);

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;

        // "All" selection logic
        if (value === "All") {
            if (!checked && selectedCategories.length === 1) {
                return;
            }
            setSelectedCategories(checked ? ["All"] : []);
        } else {
            setSelectedCategories((prev) => {
                const updated = checked
                    ? [...prev.filter((cat) => cat !== "All"), value]
                    : prev.filter((cat) => cat !== value);
                return updated.length === 0 ? ["All"] : updated;
            });
        }
    };

    const handleVegOnlyToggle = () => {
        setIsVegOnly((prev) => !prev);
        if (isNonVegOnly) setIsNonVegOnly(false);
    };

    const handleNonVegOnlyToggle = () => {
        setIsNonVegOnly((prev) => !prev);
        if (isVegOnly) setIsVegOnly(false);
    };


    const filteredItems = menuItems
        .filter((item) => (selectedCategories.includes("All") || selectedCategories.includes(item.category)))
        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter((item) => (isVegOnly ? item.veg : true))
        .filter((item) => (isNonVegOnly ? !item.veg : true))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="w-full transition-colors duration-300 pt-12">
            <div className="w-full px-5 py-5 max-w-7xl mx-auto">
                {/* Category Section */}
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center">
                    Our Healthy Menu 🍽️
                </h1>
                <div id="category" className="mb-5 flex flex-col items-center justify-center mt-5 gap-4 md:gap-5 w-full">
                    <ul className="flex items-center justify-center gap-1 flex-wrap max-h-[13vh] overflow-auto">
                        {categories.map((category, index) => (
                            <li key={index} className="flex">
                                <input
                                    className="hidden"
                                    type="checkbox"
                                    id={category}
                                    name="category"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={handleCategoryChange}
                                />
                                <label
                                    className={`text-sm md:text-base font-semibold px-3 py-1 md:py-[3px] rounded-2xl border-2 border-gray-100 dark:border-gray-800 cursor-pointer
                                            ${selectedCategories.includes(category)
                                            ? "bg-ktheme-500 text-black dark:text-black"
                                            : "text-gray-700 dark:text-gray-200"
                                        }`}
                                    htmlFor={category}
                                >
                                    {category}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div id="input" className='w-full px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5'>
                        <Input
                            type={"text"}
                            placeholder={"Search for items..."}
                            value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full md:w-2/3 xl:w-2/5 rounded-3xl px-5"
                        />
                        <div className='flex items-center justify-center gap-4 w-fit'>
                            <button
                                onClick={handleVegOnlyToggle}
                                className={`text-sm md:text-base font-semibold cursor-pointer flex items-center justify-center gap-1`}
                            >
                                <Image
                                    src="/images/icons/veg.png"
                                    alt="Veg"
                                    width={33}
                                    height={33}
                                    className={`p-1 rounded-sm border-2 border-gray-100 dark:border-gray-800
                                ${isVegOnly ? "bg-ktheme-500 text-black dark:text-black" : "text-gray-700 dark:text-gray-200"}`}
                                />
                                <span>Veg</span>
                            </button>
                            <button
                                onClick={handleNonVegOnlyToggle}
                                className={`text-sm md:text-base font-semibold cursor-pointer flex items-center justify-center gap-1`}
                            >
                                <Image
                                    src="/images/icons/non-veg.png"
                                    alt="Veg"
                                    width={33}
                                    height={33}
                                    className={`p-1 rounded-sm border-2 border-gray-100 dark:border-gray-800
                                ${isNonVegOnly ? "bg-ktheme-500 text-black dark:text-black" : "text-gray-700 dark:text-gray-200"}`}
                                />
                                <span>Non-Veg</span>
                            </button>
                        </div>
                    </div>
                </div>
                <MenuItems filteredItems={filteredItems} />
            </div>
        </div>
    );
}