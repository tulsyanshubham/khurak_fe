"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false
}) => {
    const [active, setActive] = useState(0);
    const [rotations, setRotations] = useState([]);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    useEffect(() => {
        // Generate random rotations after the component has mounted
        const randomRotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
        setRotations(randomRotations);
    }, [testimonials]);

    return (
        (<div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:pl-8 lg:px-12 py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: rotations[index] || 0,  // Use the pre-generated rotation value
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : rotations[index] || 0,
                                        zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: rotations[index] || 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom">
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.reviewer}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}>
                        <h3 className="text-2xl font-bold dark:text-white text-black">
                            {testimonials[active].reviewer}
                        </h3>
                        <p className="text-base text-gray-800 dark:text-neutral-100">
                            {testimonials[active].title}
                        </p>
                        <motion.p className="text-lg text-gray-900 mt-8 dark:text-neutral-50">
                            {testimonials[active].content.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block">
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                        <motion.p>
                            <motion.span
                                initial={{
                                    filter: "blur(10px)",
                                    opacity: 0,
                                    y: 5,
                                }}
                                animate={{
                                    filter: "blur(0px)",
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                    delay: 0.02 * testimonials[active].content.split(" ").length,
                                }}
                                className="inline-block mt-3 text-xl">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="flex">
                                        {Array.from({ length: Math.floor(testimonials[active].stars) }, (_, index) => (
                                            <FaStar key={index} color="orange" />
                                        ))}
                                        {testimonials[active].stars % 1 >= 0.5 && (
                                            <FaStarHalf color="orange" />
                                        )}
                                    </span>
                                    {testimonials[active].stars}
                                </span>
                            </motion.span>
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-9 w-9 rounded-full dark:bg-gray-100 bg-neutral-500 flex items-center justify-center group/button">
                            <IconArrowLeft
                                className="h-5 w-5 dark:text-black text-neutral-100 group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-9 w-9 rounded-full dark:bg-gray-100 bg-neutral-500 flex items-center justify-center group/button">
                            <IconArrowRight
                                className="h-5 w-5 dark:text-black text-neutral-100 group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>)
    );
};
