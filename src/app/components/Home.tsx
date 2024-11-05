import React from 'react'
import image1 from "@/assets/images/home/1.jpeg";
import image2 from "@/assets/images/home/2.jpeg";
import image3 from "@/assets/images/home/3.jpeg";
import image4 from "@/assets/images/home/4.jpeg";
import image5 from "@/assets/images/home/5.jpeg";
import image6 from "@/assets/images/home/6.jpeg";
import Image from 'next/image';

export default function Home() {
    const images = [image1, image2, image3, image4, image5];
    const position = [
        'top-20 left-64',
        'bottom-36 left-1/3',
        'bottom-10 left-20',
        'top-24 left-2/3',
        'bottom-24 left-3/4'
    ];
    ;
    return (
        <div className='h-screen flex items-center justify-center flex-wrap bg-white relative'>
            <div className="flex flex-col justify-center items-center text-center z-10">
                <h1 className="text-6xl font-bold text-green-700">Welcome to Khurak</h1>
                <h2 className="text-4xl font-semibold mt-2">Your Hub for Healthy Eating</h2>
                <h2 className="text-4xl font-semibold">With Fresh Meals.</h2>

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
            {images.map((image, index) => (
                <div className={`absolute opacity-60 z-0 ${position[index]}`} key={index}>
                {/* <div className={`absolute opacity-70 z-0 bottom-40 right-1/4`} key={index}> */}
                    <div className="relative">
                        <div className="absolute bg-green-600 h-full w-full rounded-full flex items-center justify-center top-3 left-3 z-0"></div>
                        <Image
                            src={image}
                            alt="image1"
                            className={`rounded-full aspect-square h-48 w-48 relative z-10`}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
