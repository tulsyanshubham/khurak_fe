"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/constants/assets'
import { contactInfo } from '@/constants/footer_data'

export default function Footer() {
    const [year, setYear] = useState(2024);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setYear(new Date().getFullYear());
        }
    }, []);

    const imgClass = "invert-[.75] hover:invert w-8 sm:w-10 md:w-12 dark:invert-[.25] dark:hover:invert-0";

    return (
        <div className='flex flex-col items-center justify-center w-screen border-t-2 mt-2 bg-green-50 dark:bg-footergDarkBg dark:text-white'>
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-3 py-2">
                <div className='flex items-center justify-evenly w-full flex-wrap py-7 gap-5 md:gap-10 dark:text-gray-100'>
                    <div className='text-4xl sm:text-5xl text-green-800 dark:text-white'>KHURAK </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex font-medium text-2xl sm:text-3xl md:text-4xl md:text-start justify-center md:justify-start'>Contact Us</div>
                        <a href={`tel:${contactInfo.phone}`} className='flex gap-1 text-base sm:text-lg justify-center md:justify-start' >
                            <Image width={500} height={500} src={assets.icons.call} alt='call' className="invert-[.75] w-6 sm:w-7 dark:invert-[.25]" /><span>{contactInfo.phone}</span>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className='flex gap-1 text-base sm:text-lg justify-center md:justify-start' >
                            <Image width={500} height={500} src={assets.icons.email} alt='mail' className="invert-[.75] w-6 sm:w-7 dark:invert-[.25]" /><span>{contactInfo.email}</span>
                        </a>
                    </div>
                    <div>
                        <div className='font-medium text-2xl sm:text-3xl md:text-4xl pb-2 text-center md:text-start'>Follow Us</div>
                        <div className='flex items-center justify-start gap-2'>
                            <a href={contactInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
                                <Image width={500} height={500} src={assets.icons.instagram} alt='Instagram' className={imgClass} />
                            </a>
                            <a href={contactInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="Follow us on Twitter">
                                <Image width={500} height={500} src={assets.icons.x} alt="Twitter (X)" className={imgClass} />
                            </a>
                            <a href={contactInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="Follow us on YouTube">
                                <Image width={500} height={500} src={assets.icons.youtube} alt="YouTube" className={imgClass} />
                            </a>
                            <a href={contactInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Follow us on Facebook">
                                <Image width={500} height={500} src={assets.icons.facebook} alt="Facebook" className={imgClass} />
                            </a>
                            <a href={contactInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn">
                                <Image width={500} height={500} src={assets.icons.linkedin} alt="LinkedIn" className={imgClass} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-green-800 dark:bg-gray-100 w-3/4 md:w-1/2 h-[1.5px] rounded-full'></div>
                <div className='text-center text-sm sm:text-base md:text-lg'>Copyright &copy; {year} [<span className='text-green-700 dark:text-green-500 font-bold'>KHURAK</span>]. All rights reserved.</div>
            </div>
        </div>
    )
}
