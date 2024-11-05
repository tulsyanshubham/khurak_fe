import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="py-3 flex flex-wrap justify-between items-center px-4 md:px-20 bg-white fixed top-0 z-50 w-screen">
        <div id="logo" className="font-bold text-base md:text-lg">
          KHURAK
        </div>
        <div className="">
          <button className="bg-white text-green-500 font-bold text-sm md:text-lg py-2 px-6 md:px-12 rounded-lg border-2 border-green-500">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
