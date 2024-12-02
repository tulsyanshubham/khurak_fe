"use client";
import React from "react";

export function FloatigVideo() {
    return (
        <div className="w-full">
            <div className="max-w-7xl flex flex-col overflow-hidden mx-auto py-10 px-3">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-4xl font-semibold text-ktheme-500 dark:text-ktheme-500">
                        Why खुRaak
                    </span>
                    <span className="text-4xl md:text-7xl font-bold mt-1 pb-2 leading-none">
                        Word From Founder
                    </span>
                </div>
                <div className="relative max-w-5xl aspect-video mx-auto w-full border-2 md:border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[20px] md:rounded-[30px] shadow-2xl">
                    <div className="absolute md:h-3 h-1 md:w-3 w-1 rounded-full border-[1px] md:border-[3px] border-yellow-500 bg-black left-[2px] md:left-[6px] top-1/2 flex items-center justify-center" />
                    <div className="relatve h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                        <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/djv50lQtI2E?si=ABqD2EHMH8DHDzVQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
