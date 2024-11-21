"use client";
import React, { useEffect } from 'react'
import { blogData } from '@/constants/blog'
import BlogData from '@/components/BlogData';
import Header from '@/components/Header';
import { useTheme } from '@/components/theme-provider';

export default function Page() {

  const { theme } = useTheme();
  useEffect(() => {
    if (theme === 'dark')
      document.body.classList.add("dark");
    else
      document.body.classList.remove('dark');
    return () => {
      document.body.classList.remove(theme);
    }
  }, [theme]);

  return (
    <div className='w-full flex flex-col items-center'>
      <Header />
      <div className='max-w-7xl flex flex-col items-center justify-center py-7 mt-16'>
        <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-200 gap-2 py-4'>
          <span className='font-semibold text-2xl md:text-4xl text-center'>Khuraak Insights</span>
          <span className='text-base md:text-2xl text-green-600 dark:text-green-600 text-center'>Discover Healthy Living Tips, Nutritious Recipes, and Wellness Inspiration</span>
        </div>
        <BlogData page={"blogs"} data={blogData} />
      </div>
    </div>
  )
}
