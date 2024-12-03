"use client";
import React, { useEffect, useRef } from "react";
import SocialData from "./SocialData";
import { socialData } from "@/constants/social";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { revealOptions } from "@/constants/scrollRevealOptions";

export default function Social() {
    const fromTop = useRef(null)
    const fromBottom = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (fromTop.current) {
                sr(revealOptions).reveal(fromTop.current, { origin: 'top' })
            }
            if (fromBottom.current) {
                sr(revealOptions).reveal(fromBottom.current, { origin: 'bottom' })
            }
        }
        animate()
    }, [])
    return (
        <div className="w-full">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center py-6 gap-8 mx-auto">
                <div ref={fromTop} className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Connect with us on Social Media 🌍
                    </span>
                    <span className='text-base md:text-lg text-ktheme-500 text-center'>
                        Stay updated, share your stories, and join the Khuraak community across your favorite platforms!
                    </span>
                </div>
            </div>
            <div className="hidden lg:block">
                <SocialData data={socialData} />
            </div>
            <div className="lg:hidden mt-12 flex items-center justify-center">
                <CardStack ref={fromBottom} items={socialData} />
            </div>
        </div>
    );
}