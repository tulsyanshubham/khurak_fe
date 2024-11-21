import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialData({ data }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-9 xl:px-0">
            {data.map(
                (
                    {
                        containerClass,
                        heading,
                        description,
                        imageSrc,
                        imageAlt,
                        imageClassName,
                        link,
                    },
                    index
                ) => (
                    <WobbleCard
                        key={index}
                        containerClassName={containerClass}
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
                                className={`${imageClassName} left-2/3 lg:left-1/2`}
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
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </Link>
                    </WobbleCard>
                )
            )}
        </div>
    )
}
