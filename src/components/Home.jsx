"use client";
import React from 'react'
import CardsCarousel from './cards';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';
import { assets } from '@/constants/assets';
import { BoxReveal } from './ui/box-reveal';
import Link from 'next/link';
import Lottie from "lottie-react";
import girl_animation from "@/../public/animation/home_right.json";
import { useAtom } from 'jotai';
import { theme } from '@/hooks/Atoms';

export default function Home() {
    const [siteTheme] = useAtom(theme)
    return (
        <div className='flex items-center justify-center relative'>
            <div className='flex flex-col items-center justify-center flex-wrap relative pt-32 md:pt-28 w-full max-w-7xl antialiased'>
                <div className='flex flex-wrap justify-evenly items-center w-full'>
                    <div className="flex flex-col justify-center items-center text-center z-10 px-1 md:px-0 md:w-1/2 xl:w-fit">
                        <BoxReveal boxColor={"#eec14d"} duration={0.5} flag={false}>
                            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)] text-ktheme-500">Welcome to खुRaak</h1>
                        </BoxReveal>
                        <BoxReveal boxColor={"#eec14d"} duration={0.5}>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mt-2">Your Hub for Healthy Eating</h2>
                        </BoxReveal>
                        <BoxReveal boxColor={"#eec14d"} duration={0.5}>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold">With Fresh Meals.</h2>
                        </BoxReveal>

                        <BoxReveal boxColor={"#eec14d"} duration={0.5}>
                            <p className="text-bold text-base mt-4 max-w-lg px-1">
                                Easily order wholesome meals tailored to your unique lifestyle, featuring fresh, nutritious ingredients that promote well-being, and enjoy a healthier, happier you with every delicious bite.
                            </p>
                        </BoxReveal>

                        <div className="flex items-center justify-center flex-wrap gap-4 mt-6 px-2">
                        {/* <BoxReveal boxColor={"#eec14d"} duration={0.5}>
                            <Link href={'/about_us'} className="block bg-ktheme-500 hover:brightness-95 text-gray-800 font-semibold py-2 px-6 rounded-md">
                                About Us
                            </Link>
                        </BoxReveal> */}
                        <BoxReveal boxColor={"#eec14d"} duration={0.5}>
                            <button className="border-2 border-ktheme-500 text-ktheme-500 hover:bg-ktheme-50 dark:hover:bg-background/95 font-semibold py-2 px-6 rounded-md">
                                <span className='drop-shadow-[0_1px_0px_rgba(0,0,0,0.7)]'>Order Now</span>
                            </button>
                        </BoxReveal>
                        </div>
                    </div>
                    <div>
                        {/* <Image src={siteTheme === "light" ? assets.right_to_welcome : assets.right_to_welcome_dark} width={500} height={500} alt="Khuraak" className='w-[60vw] mt-12 md:mt-0 md:w-[25vw] drop-shadow-xl max-w-[380px]' /> */}
                        <Lottie animationData={girl_animation} loop={true} className='w-[80vw] mt-2 md:mt-0 md:w-[35vw] drop-shadow-xl max-w-[400px]' />
                    </div>
                </div>
                <div className='w-full'>
                    <CardsCarousel />
                </div>
            </div>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#ffde00"
            />
        </div>
    )
}
