"use client";
import React, { useEffect, useRef } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { newsData } from "@/constants/news";
import { revealOptions } from "@/constants/scrollRevealOptions";

export default function News() {
    const fromTop = useRef(null)
    const fromBottom = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (fromTop.current) {
                sr(revealOptions).reveal(fromTop.current,{ origin: 'top' })
            }
            if (fromBottom.current) {
                sr(revealOptions).reveal(fromBottom.current, { origin: 'bottom' })
            }
        }
        animate()
    }, [])
    return (
        (<div className="py-5 w-full">
            <div className="h-screen max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
                <div ref={fromTop} className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Latest Insights and Trends 🌟
                    </span>
                    <span className='text-base md:text-lg drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 text-center'>
                        Discover articles and updates shaping the future of healthy living with Khuraak!
                    </span>
                </div>
                <LayoutGrid ref={fromBottom} cards={newsData} />
            </div>
        </div>)
    );
}

