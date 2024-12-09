import { menuItems } from '@/constants/menu'; // Importing menuItems
import { useOutsideClick } from '@/hooks/use-outside-click';
import { AnimatePresence, motion } from 'framer-motion';
import { Beef, VeganIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';

export default function Menu() {
    // Initialize categories with "All" and dynamically extract unique categories from menuItems
    const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

    const [selectedCategories, setSelectedCategories] = useState(["All"]);

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

    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();
    const itemRefs = useRef([]);
    const [isVegOnly, setIsVegOnly] = useState(false);

    const handleVegOnlyToggle = () => {
        setIsVegOnly((prev) => !prev);
    };

    const filteredItems = menuItems
        .filter((item) => (selectedCategories.includes("All") || selectedCategories.includes(item.category)))
        .filter((item) => (isVegOnly ? item.veg : true))
        .sort((a, b) => a.name.localeCompare(b.name));

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));
    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full !z-20" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`item-${active.name}`}
                            ref={ref}
                            className="relative w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden md:pb-0 pb-6">
                            <motion.button
                                key={`button-${active.name}`}
                                layout
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.05,
                                    },
                                }}
                                className="flex md:hidden absolute bottom-3 right-2 lg:hidden items-center justify-center bg-gray-700 rounded-xl h-14 w-[96%] text-white z-40"
                                onClick={() => setActive(null)}>
                                <span className="text-lg">CLOSE</span>
                            </motion.button>
                            <motion.div layoutId={`image-${active.name}`} className="relative">
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.image_src}
                                    alt={active.name}
                                    className="w-full h-72 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center" />
                                <motion.div className="absolute bottom-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-1 right-2">
                                    {active.veg ? (
                                        <VeganIcon className="text-green-500 dark:text-green-500" size={40} />
                                    ) : (
                                        <Beef className="text-red-500 dark:text-red-500" size={40} />
                                    )}
                                </motion.div>
                            </motion.div>

                            <div className="relative overflow-y-auto">
                                <div className="flex flex-col justify-between items-start py-4 px-6">
                                    <motion.div className="flex flex-col w-full items-center justify-between text-2xl md:text-xl">
                                        <motion.div layoutId={`name-${active.name}`} className="font-semibold text-amber-500 w-full text-center">
                                            {active.name}
                                        </motion.div>
                                        <div className='w-full flex items-center justify-center gap-3'>
                                            <span
                                                className="text-green-500 dark:text-green-400">
                                                ({active.category})
                                            </span>
                                            <motion.span
                                                layoutId={`item-${active.calories}-${active.name}`}
                                                className="text-red-700 dark:text-red-400 font-semibold">
                                                [{active.calories !== null ? `${active.calories}KCAL` : "N/A"}]
                                            </motion.span>
                                            <motion.span
                                                className=''
                                                layoutId={`item-${active.price}-${active.name}`}>
                                                ₹{active.price}
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                    <motion.p
                                        layoutId={`description-${active.description}`}
                                        className="text-neutral-700 dark:text-neutral-300 text-base mt-2 w-full text-center">
                                        {active.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="w-full transition-colors duration-300 pt-12">
                <div className="w-full px-5 py-5 max-w-7xl mx-auto">
                    {/* Category Section */}
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center">
                        Our Healthy Menu 🍽️
                    </h1>
                    <div id="category" className="mb-5 flex items-center justify-between px-0 md:px-8 mt-5 gap-1 md:gap-5">
                        <ul className="flex items-center justify-center gap-2 flex-wrap">
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
                                        className={`text-sm md:text-lg font-semibold px-4 py-1 md:py-[3px] rounded-2xl border-2 border-gray-100 dark:border-gray-800 cursor-pointer
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
                            <span className='font-semibold text-base text-green-500 dark:text-ktheme-500 md:text-xl pl-3'>
                                {filteredItems.length} items
                            </span>
                        </ul>
                        <div
                            className="flex items-center justify-center cursor-pointer "
                            onClick={handleVegOnlyToggle}
                        >
                            <button
                                className={`text-sm md:text-lg font-semibold p-2 rounded-2xl border-2 border-gray-100 dark:border-gray-800 ${isVegOnly ? "bg-green-500 text-black dark:text-black" : "text-gray-700 dark:text-gray-200"}`}
                            >
                                <VeganIcon className={`${isVegOnly ? "opacity-100 text-gray-800" : "opacity-50 text-green-400"}`} size={24} />
                            </button>
                            <span className='text-center'>
                                {isVegOnly ? "Veg Only" : "All Items"}
                            </span>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center pt-2 items-stretch">
                        {filteredItems.map((item, index) => (
                            <div
                                key={`item-${item.name}`}
                            >
                                <motion.div
                                    layoutId={`item-${item.name}`}
                                    onClick={() => setActive(item)}
                                    className="flex flex-col items-center border-2 border-gray-100 dark:border-gray-800 rounded-lg shadow-lg h-full"
                                >
                                    {/* Image Section */}
                                    <motion.div layoutId={`image-${item.name}`} className="relative flex w-full justify-center">
                                        <Image
                                            src={item.image_src}
                                            alt={item.name}
                                            height={300}
                                            width={300}
                                            className="relative w-full aspect-video object-cover"
                                        />
                                        <motion.div className="absolute bottom-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-1 right-2">
                                            {item.veg ? (
                                                <VeganIcon className="text-green-500 dark:text-green-500" size={24} />
                                            ) : (
                                                <Beef className="text-red-500 dark:text-red-500" size={24} />
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    {/* Details Section */}
                                    <motion.div className="px-3 py-1 flex items-center justify-between w-full">
                                        <motion.div layoutId={`name-${item.name}`} className="text-lg md:text-base font-semibold  text-amber-500 my-2 w-[75%]">
                                            {`${item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}`}
                                        </motion.div>
                                        <motion.div className="flex flex-col text-base gap-1 items-center w-[25%]">
                                            <motion.span layoutId={`item-${item.price}-${item.name}`}>₹{item.price}</motion.span>

                                            <motion.span layoutId={`item-${item.calories}-${item.name}`} className="text-red-700 dark:text-red-400 text-sm font-semibold">
                                                {item.calories !== null ? `${item.calories}KCAL` : "N/A"}
                                            </motion.span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
