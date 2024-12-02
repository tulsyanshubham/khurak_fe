"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { newsData } from "@/constants/news";

export default function News() {
    return (
        (<div className="py-5 w-full">
            <div className="h-screen max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
                <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Latest Insights and Trends 🌟
                    </span>
                    <span className='text-base md:text-lg text-ktheme-500 text-center'>
                        Discover articles and updates shaping the future of healthy living with Khuraak!
                    </span>
                </div>
                <LayoutGrid cards={newsData} />
            </div>
        </div>)
    );
}

