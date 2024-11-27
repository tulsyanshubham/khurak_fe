"use client";
import React from "react";
import SocialData from "./SocialData";
import { socialData } from "@/constants/social";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

export default function Social() {
    return (
        <div className="w-full">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center py-6 gap-8 mx-auto">
                <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2'>
                    <span className='text-2xl md:text-4xl text-center font-semibold'>
                        Connect with us on Social Media 🌍
                    </span>
                    <span className='text-base md:text-lg text-ktheme-600 text-center'>
                        Stay updated, share your stories, and join the Khuraak community across your favorite platforms!
                    </span>
                </div>
            </div>
            <div className="hidden lg:block">
                <SocialData data={socialData} />
            </div>
            <div className="lg:hidden mt-12 flex items-center justify-center">
                <CardStack items={socialData} />
            </div>
        </div>
    );
}