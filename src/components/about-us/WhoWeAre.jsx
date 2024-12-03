"use client";
import React, { useEffect, useRef } from 'react'
import { FocusCards } from '../ui/focus-cards';
import { assets } from '@/constants/assets';
import { revealOptions } from '@/constants/scrollRevealOptions';

export default function WhoWeAre() {

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
    <div className='w-full mt-3 py-4 px-3 md:px-0'>
      <div ref={fromTop} className='flex flex-col gap-2 items-center justify-center py-5 px-2'>
        <span className='text-2xl md:text-4xl text-center font-semibold'>
          Who We Are 🤔
        </span>
        <span className='text-base md:text-lg text-ktheme-600 text-center'>
          Know more about us
        </span>
      </div>
      <FocusCards cards={assets.about_us.whoWeAre} />
    </div>
  )
}
