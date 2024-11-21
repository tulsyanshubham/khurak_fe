"use client";
import React from "react";
import { socialData } from "@/constants/social";
import SocialData from "./socialData";

export default function Social() {
    return (
        <div className="hidden w-full md:block">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center py-6 gap-8 mx-auto">
                <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Connect with Us on Social Media 🌍
                    </span>
                    <span className='text-base md:text-lg text-green-600 text-center'>
                        Stay updated, share your stories, and join the Khuraak community across your favorite platforms!
                    </span>
                </div>
                <SocialData data={socialData} />
            </div>
        </div>
    );
}
