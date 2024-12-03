import React, { useEffect, useRef } from 'react'
import BlogData from './BlogData'
import { blogData } from '@/constants/blog'
import Link from 'next/link'
import { revealOptions } from '@/constants/scrollRevealOptions'

export default function Blog() {
    const fromTop = useRef(null)
    const fromLeft = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (fromTop.current) {
                sr(revealOptions).reveal(fromTop.current,{ origin: 'top' })
            }
            if (fromLeft.current) {
                sr(revealOptions).reveal(fromLeft.current,{ origin: 'left' })
            }
        }
        animate()
    }, [])
    return (
        <div className='w-full flex items-center justify-center pt-3'>
            <div className='bg-gradient-to-r from-[#ffc8010d] to-[#ffc8004d] dark:from-gary-100 dark:to-gray-900 rounded-lg w-[92vw] flex items-center justify-center overflow-hidden'>
                <div className='w-full max-w-7xl flex flex-col items-center justify-center py-10 gap-6'>
                    <div ref={fromTop} className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100'>
                        <span className='font-semibold text-2xl md:text-4xl text-center'>खुRaak Insights</span>
                        <span className='text-base md:text-2xl text-green-700 dark:text-ktheme-300 text-center'>Your Go-To Blog for Fresh Healthy Living Tips & Updates</span>
                    </div>
                    <BlogData page={"home"} data={blogData} />
                    <div className='flex items-center justify-end w-full px-7'>
                        <Link ref={fromLeft} href="/blogs" className="bg-black/20 border-2 border-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 inline-block mt-2">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10 ">
                                <span className='text-gray-50'>
                                    Explore More
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
                    </div>
                </div>
            </div>
        </div>
    )
}
