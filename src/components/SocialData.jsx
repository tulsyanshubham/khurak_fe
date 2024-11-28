import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import Image from 'next/image'
import Link from 'next/link'
import { contactInfo } from '@/constants/footer_data';
import { cn } from '@/lib/utils';

export default function SocialData({ data }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-9 xl:px-0">
            {data.map(
                (
                    {
                        key,
                        heading,
                        description,
                        imageSrc,
                        imageAlt,
                        link,
                    },
                    index
                ) => (
                    <WobbleCard
                        key={key}
                        containerClassName={cn(`${styleData[key].containerClass}`)}
                        className="lg:h-72 h-52"
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                                {heading}
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-neutral-200">
                                {description}
                            </p>
                        </div>
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                width={500}
                                height={500}
                                alt={imageAlt}
                                className={cn(`left-2/3 lg:left-1/2 ${styleData[key].imageClassName}`)}
                            />
                        )}
                        <Link href={link} target="_blank" className="bg-black/20 border-2 border-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block mt-2">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
                                <span>
                                    Visit
                                </span>
                                <svg
                                    fill="none"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </Link>
                    </WobbleCard>
                )
            )}
        </div>
    )
}

const styleData = {
    1: {
        containerClass: "col-span-1 lg:col-span-2 h-full bg-pink-600 dark:bg-pink-800 min-h-[500px] lg:min-h-[300px]",
        imageClassName: "absolute lg:-right-[22%] top-10 object-contain rounded-2xl",
    },
    2: {
        containerClass: "col-span-1 bg-teal-700 dark:bg-teal-900 min-h-[300px] xl:min-h-[300px]",
        imageClassName: "absolute -right-6 lg:-right-[15%] -bottom-10 object-contain rounded-xl",
    },
    3: {
        containerClass: "col-span-1 bg-rose-700 dark:bg-rose-900 min-h-[300px]",
        imageClassName: "absolute -right-8 lg:-right-[20%] -bottom-10 object-contain rounded-xl",
    },
    4: {
        containerClass: "col-span-1 bg-blue-700 dark:bg-blue-900 lg:col-span-2 min-h-[300px]",
        imageClassName: "absolute -right-6 md:-right-[20%] lg:-right-[12%] top-10 object-contain rounded-lg",
    },
    5: {
        containerClass: "col-span-1 lg:col-span-2 bg-red-700 dark:bg-red-900 min-h-[500px] lg:min-h-[300px]",
        imageClassName: "absolute -right-4 lg:-right-[12%] filter drop-shadow-xl top-10 object-contain rounded-2xl",
    },
    6: {
        containerClass: "col-span-1 min-h-[300px] bg-purple-500 dark:bg-purple-900",
        imageClassName: "absolute -right-10 filter contrast-125 -bottom-10 object-contain rounded-xl",
    },
};
