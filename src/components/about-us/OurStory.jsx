import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { assets } from '@/constants/assets'
import { revealOptions } from '@/constants/scrollRevealOptions'

export default function OurStory() {
  const story = useRef(null)
  const storyImg = useRef(null)
  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      if (story.current) {
        if(window.innerWidth < 768) {
          sr(revealOptions).reveal(story.current, { origin: 'bottom' })
        }else{
          sr(revealOptions).reveal(story.current, { origin: 'left' })
        }
      }
      if (storyImg.current) {
        if(window.innerWidth < 768) {
          sr(revealOptions).reveal(storyImg.current, { origin: 'bottom' })
        } else{
          sr(revealOptions).reveal(storyImg.current, { origin: 'right' })
        }
      }
    }
    animate()
  }, [])
  return (
    <div className='bg-gradient-to-r from-[#ffc8010d] to-[#ffc8004d] dark:from-gary-100 dark:to-gray-900 rounded-lg w-[92vw] px-5 md:px-14 mt-10'>
      <div className='flex flex-col items-center justify-center lg:flex-row w-full max-w-7xl mx-auto py-9 gap-5'>
        <div ref={story} className='flex flex-col items-center justify-center w-full lg:w-1/2 gap-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='spread text-3xl md:text-5xl font-extrabold'>OUR STORY</div>
            <div className='spread text-xl md:text-2xl text-indigo-800 dark:text-neutral-300'>We aim to inspire</div>
          </div>
          <div className='w-16 h-1 bg-black dark:bg-white rounded-full' />
          <div className='text-base md:text-lg lg:text-xl text-center px-0 lg:px-16 cursive'>
            {assets.about_us.story.text}
          </div>
        </div>
        <div ref={storyImg}>
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
