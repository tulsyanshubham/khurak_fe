"use client";
import React from 'react'
import image1 from "@/assets/images/home/1.jpeg";
import image2 from "@/assets/images/home/2.jpeg";
import image3 from "@/assets/images/home/3.jpeg";
import image4 from "@/assets/images/home/4.jpeg";
import image5 from "@/assets/images/home/5.jpeg";
import image6 from "@/assets/images/home/6.jpeg";
import Image from 'next/image';
import { AppleCardsCarouselDemo } from './cards';

export default function Home() {
    const images = [image1, image2, image3, image4, image5];
    return (
        <div className='flex flex-col items-center justify-center flex-wrap relative pt-32 overflow-hidden'>
            <div className="flex flex-col justify-center items-center text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-green-700">Welcome to Khurak</h1>
                <h2 className="text-2xl md:text-4xl font-semibold mt-2">Your Hub for Healthy Eating</h2>
                <h2 className="text-2xl md:text-4xl font-semibold">With Fresh Meals.</h2>

                <p className="text-bold mt-4 max-w-lg">
                    Easily order wholesome meals tailored to your unique lifestyle, featuring fresh, nutritious ingredients that promote well-being, and enjoy a healthier, happier you with every delicious bite.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <button className="bg-green-600 hover:brightness-95 text-white font-semibold py-2 px-6 rounded-md">
                        Explore Meal Plans
                    </button>
                    {/* <button className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-md">
                        Try Khurak
                    </button> */}
                </div>
            </div>
            <div>
                <AppleCardsCarouselDemo />
            </div>
        </div>
    )
}
