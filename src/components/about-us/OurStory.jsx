import Image from 'next/image'
import React from 'react'
import { assets } from '@/constants/assets'

export default function OurStory() {
  return (
    <div className='bg-gradient-to-r from-[#ffc8010d] to-[#ffc8004d] dark:from-gary-100 dark:to-gray-900 rounded-lg w-[92vw] px-5 md:px-14 mt-10'>
      <div className='flex flex-col items-center justify-center lg:flex-row w-full max-w-7xl mx-auto py-9 gap-5'>
        <div className='flex flex-col items-center justify-center w-full lg:w-1/2 gap-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='spread text-2xl md:text-5xl font-extrabold'>OUR STORY</div>
            <div className='spread text-xl md:text-2xl text-indigo-800 dark:text-neutral-300'>We aim to inspire</div>
          </div>
          <div className='w-16 h-1 bg-black dark:bg-white rounded-full' />
          <div className='text-base md:text-lg lg:text-xl text-center px-0 lg:px-16 cursive'>
            {assets.about_us.story.text}
          </div>
        </div>
        <div>
          <Image
            src={assets.about_us.story.image}
            alt='Our Story'
            width={500}
            height={500}
            className='w-[60vw] lg:w-[36vw] max-w-[600px] dark:brightness-110 rounded-3xl'
          />
        </div>
      </div>
    </div>
  )
}
