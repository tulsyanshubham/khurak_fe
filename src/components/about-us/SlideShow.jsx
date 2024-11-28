"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { assets } from "@/constants/assets";

export function SlideShow() {
    return (
        (<ImagesSlider className="h-[45vh] md:h-[60vh] lg:h-[80vh] 2xl:h-[60vh]" images={assets.about_us.main}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center gap-2">
                <motion.p
                    className="text-center text-white text-4xl md:text-7xl spread font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        NOURISHING LIVES
                    </span>
                </motion.p>
                <motion.p
                    className="text-center text-white text-2xl md:text-3xl cursive">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Our Journey, Your Health
                    </span>
                </motion.p>
                {/* <button
                    className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-2">
                    <span>Join now →</span>
                    <div
                        className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button> */}
            </motion.div>
        </ImagesSlider>)
    );
}
