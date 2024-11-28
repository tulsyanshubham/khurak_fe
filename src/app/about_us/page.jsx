"use client";
import OurStory from '@/components/about-us/OurStory';
import { SlideShow } from '@/components/about-us/SlideShow';
import WhoWeAre from '@/components/about-us/WhoWeAre';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { useTheme } from '@/components/theme-provider';
import Image from 'next/image'
import React, { useEffect } from 'react'

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
            <Header darkFlag={true} />
                <SlideShow />
                <WhoWeAre />
                <OurStory />
            <Footer />
        </div>
    )
}
