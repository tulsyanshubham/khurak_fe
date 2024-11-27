"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/constants/assets';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <div className={`w-full flex justify-center ${isScrolled ? 'bg-white dark:bg-background/90 fixed top-0 z-50 shadow-lg border-b' : 'absolute'}`}>
      <div
        className={`py-3 flex flex-wrap justify-between items-center px-4 md:px-20 transition-all duration-300 z-50 w-full max-w-7xl`}>
        <Link href="/">
          <Image
            src={theme === "light" ? assets.logo : assets.logo_dark}
            alt="logo"
            width={150}
            height={50}
            className='w-20'
          />
        </Link>
        <div className='flex items-center justify-center gap-3'>
          <button className="text-ktheme-400 dark:text-gray-700 dark:bg-ktheme-400 font-bold text-sm md:text-lg py-2 px-6 md:px-12 rounded-lg border-2 border-ktheme-400 dark:border-gray-800">
            Join Us
          </button>
          <button onClick={toggleTheme}>
            {theme === "dark" ? <IoSunnyOutline size={30} /> : <GoMoon size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
}
