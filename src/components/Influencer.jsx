"use client";
import React, { useEffect, useRef } from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { influencerReviews } from '@/constants/influencer'
import { revealOptions } from '@/constants/scrollRevealOptions'

export default function Influencer() {
  const fromTop = useRef(null)
  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      if (fromTop.current) {
        sr(revealOptions).reveal(fromTop.current, { origin: 'top' })
      }
    }
    animate()
  }, [])
  return (
    <div className='w-full overflow-x-hidden flex justify-center py-5 over'>
      <div className='w-full mx-auto rounded-2xl flex justify-center py-3 md:pt-14 flex-col'>
        <div ref={fromTop} className='flex flex-col gap-2 items-center justify-center px-6'>
          <span className='text-2xl md:text-4xl text-center font-semibold'>
            Real Reviews from Real Influencers
          </span>
          <span className='text-base md:text-lg drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500 text-center'>
            Why They Love Khuraak!
          </span>
        </div>

        <div className='flex w-full filter'>
          <div className='flex w-full items-center justify-center'>
            <AnimatedTestimonials testimonials={influencerReviews} />
          </div>
        </div>
      </div>
    </div>
  )
}
