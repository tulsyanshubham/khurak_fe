"use client";
import React from 'react'
import CardsCarousel from './cards';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';
import { assets } from '@/constants/assets';

export default function Home() {
    return (
        <div className='flex items-center justify-center relative'>
            <div className='flex flex-col items-center justify-center flex-wrap relative pt-32 w-full max-w-7xl antialiased'>
                <div className='flex flex-wrap justify-evenly items-center w-full mb-10'>
                    <div className="flex flex-col justify-center items-center text-center z-10 px-1 md:px-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Welcome to Khurak</h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mt-2">Your Hub for Healthy Eating</h2>
                        <h2 className="text-2xl md:text-3xl font-semibold">With Fresh Meals.</h2>

                        <p className="text-bold mt-4 max-w-lg">
                            Easily order wholesome meals tailored to your unique lifestyle, featuring fresh, nutritious ingredients that promote well-being, and enjoy a healthier, happier you with every delicious bite.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 mt-6">
                            <button className="bg-green-600 hover:brightness-95 text-white font-semibold py-2 px-6 rounded-md">
                                Explore Meal Plans
                            </button>
                            <button className="border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-background/95 font-semibold py-2 px-6 rounded-md">
                                Try Khurak App
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image src={assets.right_to_welcome} width={500} height={500} alt="Khurak" className='w-[60vw] mt-12 md:mt-0 md:w-[25vw] drop-shadow-xl max-w-[380px]' />
                    </div>
                </div>
                <div className='w-full'>
                    <CardsCarousel />
                </div>
            </div>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="green"
            />
        </div>
    )
}
