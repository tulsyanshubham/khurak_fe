import React, { useEffect, useRef } from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { FaStar } from "react-icons/fa";
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { revealOptions } from '@/constants/scrollRevealOptions';
import { reviewsData } from '@/constants/review';

export default function Review() {
    const fromTop = useRef(null)
    const fromBottom = useRef(null)
    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default
            if (fromTop.current) {
                sr(revealOptions).reveal(fromTop.current,{ origin: 'top' })
            }
            if (fromBottom.current) {
                sr(revealOptions).reveal(fromBottom.current,{ origin: 'bottom' })
            }
        }
        animate()
    }, [])
    return (
        <div className='w-full overflow-x-hidden flex justify-center py-5 over'>
            <div className='w-[94%]'>
                <div className='bg-gradient-to-r from-[#ffc8010d] to-[#ffc8004d] dark:from-gary-100 dark:to-gray-900 w-full mx-auto rounded-2xl flex justify-center py-3 md:pt-14 overflow-hidden flex-col'>
                    <div className='flex flex-col items-center justify-center text-3xl font-semibold w-full'>
                        <div className='flex flex-col items-start text-xl md:text-4xl font-bold md:font-semibold py-3 md:py-0 md:pl-0 text-neutral-800 dark:text-gray-100 z-10'>
                            <div ref={fromTop} className="text-center px-6">
                                {/* <span className='drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 dark:drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500'>खुRaak </span>
                                Received <span className='drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 dark:drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500'>4.8/5 </span>
                                Starts in over
                                <span className='drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 dark:drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500'> 10,000+</span> Reviews */}
                                Here’s What Fuels Our Flavor
                                <span className='text-green-700 dark:text-ktheme-500'> Customer Love!❤️</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full filter drop-shadow-[0_0_10rem_#f5da94] dark:drop-shadow-[0_0_10rem_#be9a3e]'>
                        {/* <div className='hidden md:flex w-full items-center justify-center'>
                            <AnimatedTestimonials testimonials={reviewsData} />
                        </div> */}
                        <div ref={fromBottom} className='w-full'>
                            <InfiniteMovingCards
                                items={reviewsData}
                                direction="left"
                                speed="slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
