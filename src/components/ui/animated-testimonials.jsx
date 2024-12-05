"use client";
import { assets } from "@/constants/assets";
import { revealOptions } from "@/constants/scrollRevealOptions";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

    const image = useRef(null)
    const imageData = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (image.current) {
                if (window.innerWidth > 768) {
                    sr(revealOptions).reveal(image.current, { origin: 'left' })
                } else {
                    sr(revealOptions).reveal(image.current, { origin: 'bottom' })
                }
            }
            if (imageData.current) {
                if (window.innerWidth > 768) {
                    sr(revealOptions).reveal(imageData.current, { origin: 'right' })
                } else {
                    sr(revealOptions).reveal(imageData.current, { origin: 'bottom' })
                }
            }
        }
        animate()
    }, [])

    return (
        <div className="max-w-md md:max-w-4xl mx-auto antialiased font-sans px-4 md:pl-8 lg:px-12 py-5 md:pt-12 md:pb-10">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20">
                <div className="pt-1 pb-10 md:py-5 px-10 md:px-0 md:h-full h-[40vh]">
                    <div ref={image} className="relative h-full md:h-5/6 w-full drop-shadow-[0_0_5rem_#f5da94] dark:drop-shadow-[0_0_5rem_#be9a3e91]">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.image}
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
                                    className="absolute inset-0 origin-bottom ">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-top " />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div ref={imageData} className="flex justify-between flex-col py-0 md:py-4">
                    <motion.div
                    className="text-center md:text-start"
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
                            {testimonials[active].name}
                        </h3>
                        <p className="text-base text-gray-800 dark:text-neutral-100">
                            {testimonials[active].heading}
                        </p>
                        <motion.p className="text-sm md:text-lg text-gray-900 mt-4 md:mt-8 dark:text-neutral-50">
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
                                        duration: 0.01,
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
                                <Link href={testimonials[active].url} target="_blank" rel="noopener noreferrer">
                                    <span className="px-3 py-1 rounded-full text-base text-center bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center gap-1">
                                        <Image
                                            src={assets.icons.instagram_line}
                                            height={25}
                                            width={25}
                                            className="inline-block"
                                            alt="instagram" />
                                        {`${testimonials[active].url.split("/")[3]}`}
                                    </span>

                                </Link>
                            </motion.span>
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-5 justify-center md:justify-start">
                        <button
                            onClick={handlePrev}
                            className="h-12 md:h-9 w-12 md:w-9 rounded-full dark:bg-gray-100 bg-neutral-500 flex items-center justify-center group/button">
                            <IconArrowLeft
                                className="h-7 md:h-5 w-7 md:w-5 dark:text-black text-neutral-100 group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-12 md:h-9 w-12 md:w-9 rounded-full dark:bg-gray-100 bg-neutral-500 flex items-center justify-center group/button">
                            <IconArrowRight
                                className="h-7 md:h-5 w-7 md:w-5 dark:text-black text-neutral-100 group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
