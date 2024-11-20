"use client";
import React from 'react'
import { blogData } from '@/constants/blog'
import BlogData from '@/components/BlogData';

export default function Page() {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='max-w-7xl flex flex-col items-center justify-center py-7'>
        <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2 py-4'>
          <span className='font-semibold text-2xl md:text-4xl text-center'>Khuraak Insights</span>
          <span className='text-base md:text-2xl text-green-600 dark:text-green-400 text-center'>Discover Healthy Living Tips, Nutritious Recipes, and Wellness Inspiration</span>
        </div>
        <BlogData page={"blog"} data={blogData} />
      </div>
    </div>
  )
}
