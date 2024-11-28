import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { FaStar } from "react-icons/fa";
import { AnimatedTestimonials } from './ui/animated-testimonials';

const reviewsData = [
    {
        title: "Delicious and Healthy",
        content: "Khuraak has completely transformed my meal choices. The healthy options are not only delicious but also quick to order. I love how easy it is to find nutritious meals!",
        reviewer: "Tina",
        avatarColor: "#de716d",
        src: "/images/carousel/1.jpeg",
        stars: 5, // 5-star rating
    },
    {
        title: "Amazing Variety",
        content: "I am impressed by the range of healthy dishes available. Khuraak makes it easy to maintain a balanced diet without sacrificing taste.",
        reviewer: "Rakesh",
        avatarColor: "#f2eb5e",
        src: "/images/carousel/2.jpeg",
        stars: 4, // 4-star rating
    },
    {
        title: "Easy and Convenient",
        content: "Ordering from Khuraak is super convenient! The platform is user-friendly, and my meals arrive fresh and on time.",
        reviewer: "Rahul",
        avatarColor: "#7a1a5f",
        src: "/images/carousel/3.jpeg",
        stars: 4.5, // 5-star rating
    },
    {
        title: "A Healthy Choice",
        content: "I was looking for healthy meal options, and Khuraak delivers! I appreciate the focus on nutrition and quality ingredients.",
        reviewer: "Saini",
        avatarColor: "#bad79d",
        src: "/images/carousel/4.jpeg",
        stars: 3.5, // 4-star rating
    },
    {
        title: "My Go-To for Healthy Eating",
        content: "Khuraak has become my go-to for ordering meals. The flavors are incredible, and I feel good knowing I'm eating healthily!",
        reviewer: "Shila",
        avatarColor: "#d8925c",
        src: "/images/carousel/5.jpeg",
        stars: 5, // 5-star rating
    },
    {
        title: "Life-Saver!",
        content: "With Khuraak, I can whip up a healthy meal in minutes! The variety and freshness of the ingredients are top-notch. Highly recommend it!",
        reviewer: "Anuraag",
        avatarColor: "#7362f2",
        src: "/images/carousel/6.jpeg",
        stars: 4.5, // 5-star rating
    },
];

export default function Review() {
    return (
        <div className='w-full overflow-x-hidden flex justify-center py-5 over'>
            <div className='w-[94%]'>
                <div className='bg-gradient-to-r from-[#ffc8010d] to-[#ffc8004d] dark:from-gary-100 dark:to-gray-900 w-full mx-auto rounded-2xl flex justify-center py-3 md:pt-14 overflow-hidden flex-col'>
                    <div className='flex flex-col items-center justify-center text-3xl font-semibold w-full'>
                        <div className='flex flex-col items-start text-xl md:text-4xl font-bold md:font-semibold py-3 md:py-0 md:pl-0 text-neutral-800 dark:text-gray-100 z-10'>
                            <div className="text-center px-6">
                                <span className='text-green-700 dark:text-green-400'>खुRaak </span>
                                Received <span className='text-green-700 dark:text-green-400'>4.8/5 </span>
                                Starts in over
                                <span className='text-green-700 dark:text-green-400'> 10,000+</span> Reviews
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full filter drop-shadow-[0_0_10rem_#f5da94] dark:drop-shadow-[0_0_10rem_#be9a3e]'>
                        <div className='hidden md:flex w-full items-center justify-center'>
                            <AnimatedTestimonials testimonials={reviewsData} />
                        </div>
                        <div className='block md:hidden'>
                            <InfiniteMovingCards
                                items={reviewsData}
                                direction="left"
                                speed="slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
