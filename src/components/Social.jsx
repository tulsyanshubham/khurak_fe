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
                    <span className='text-base md:text-lg text-green-600 text-center'>
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

export const Highlight = ({
    children,
    className
  }) => {
    return (
      (<span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}>
        {children}
      </span>)
    );
  };
  
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];
  