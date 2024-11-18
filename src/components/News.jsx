import React from 'react'
import NewsData from './NewsData'
import { newsData } from '@/constants/news'

export default function News() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-green-800 rounded-lg w-[92vw] flex items-center justify-center'>
                <div className='w-full max-w-7xl flex flex-col items-center justify-center py-5 gap-6'>
                    <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100'>
                        <span className='font-semibold text-2xl md:text-4xl '>What's New at Khuraak</span>
                        <span className='text-lg md:text-2xl text-indigo-900 dark:text-green-400'>News and Updates</span>
                    </div>
                    <NewsData data={newsData} />
                </div>
            </div>
        </div>
    )
}
