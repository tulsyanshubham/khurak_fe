"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import Link from 'next/link';

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
    <div>
      <div
        className={`py-3 flex flex-wrap justify-between items-center px-4 md:px-20 transition-all duration-300 z-50 w-full ${isScrolled ? 'bg-white dark:bg-navbg fixed top-0 z-50 shadow-lg' : 'absolute'}`}>
        <Link href="/">
          <div id="logo" className="font-bold text-base md:text-lg">
            KHURAK
          </div>
        </Link>
        <div className='flex items-center justify-center gap-3'>
          <button className="bg-white text-green-500 dark:text-white dark:bg-green-500 font-bold text-sm md:text-lg py-2 px-6 md:px-12 rounded-lg border-2 border-green-500 dark:border-gray-800">
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
