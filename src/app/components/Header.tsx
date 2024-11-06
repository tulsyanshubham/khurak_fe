"use client";
import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <div
        className={`py-3 flex flex-wrap justify-between items-center px-4 md:px-20 transition-all duration-300  w-full ${isScrolled ? 'bg-white fixed top-0 z-50 shadow-lg' : 'absolute'}`}>
        <div id="logo" className="font-bold text-base md:text-lg">
          KHURAK
        </div>
        <div>
          <button className="bg-white text-green-500 font-bold text-sm md:text-lg py-2 px-6 md:px-12 rounded-lg border-2 border-green-500">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
