import React from 'react'
import BlogData from './BlogData'
import { blogData } from '@/constants/blog'

export default function Blog() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-green-800 rounded-lg w-[92vw] flex items-center justify-center'>
                <div className='w-full max-w-7xl flex flex-col items-center justify-center py-10 gap-6'>
                    <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100'>
                        <span className='font-semibold text-2xl md:text-4xl text-center'>Khuraak Insights</span>
                        <span className='text-base md:text-2xl text-indigo-900 dark:text-green-400 text-center'>Your Go-To Blog for Fresh Healthy Living Tips & Updates</span>
                    </div>
                    <BlogData data={blogData} />
                </div>
            </div>
        </div>
    )
}
