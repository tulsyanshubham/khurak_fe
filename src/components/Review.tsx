import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { FaStar, FaRegStar } from "react-icons/fa";

interface review {
    title: string;
    content: string;
    reviewer: string;
    avatarColor: string;
    stars: number;
}

const reviewsData: review[] = [
    {
        title: "Delicious and Healthy",
        content: "Khurak has completely transformed my meal choices. The healthy options are not only delicious but also quick to order. I love how easy it is to find nutritious meals!",
        reviewer: "Tina",
        avatarColor: "#de716d",
        stars: 5, // 5-star rating
    },
    {
        title: "Amazing Variety",
        content: "I am impressed by the range of healthy dishes available. Khurak makes it easy to maintain a balanced diet without sacrificing taste.",
        reviewer: "Rakesh",
        avatarColor: "#f2eb5e",
        stars: 4, // 4-star rating
    },
    {
        title: "Easy and Convenient",
        content: "Ordering from Khurak is super convenient! The platform is user-friendly, and my meals arrive fresh and on time.",
        reviewer: "Rahul",
        avatarColor: "#7a1a5f",
        stars: 5, // 5-star rating
    },
    {
        title: "A Healthy Choice",
        content: "I was looking for healthy meal options, and Khurak delivers! I appreciate the focus on nutrition and quality ingredients.",
        reviewer: "Saini",
        avatarColor: "#bad79d",
        stars: 4, // 4-star rating
    },
    {
        title: "My Go-To for Healthy Eating",
        content: "Khurak has become my go-to for ordering meals. The flavors are incredible, and I feel good knowing I'm eating healthily!",
        reviewer: "Shila",
        avatarColor: "#d8925c",
        stars: 5, // 5-star rating
    },
    {
        title: "Life-Saver!",
        content: "With Khurak, I can whip up a healthy meal in minutes! The variety and freshness of the ingredients are top-notch. Highly recommend it!",
        reviewer: "Anuraag",
        avatarColor: "#7362f2",
        stars: 5, // 5-star rating
    },
];

export default function Review() {
    return (
        <div className='w-full overflow-x-hidden flex justify-center py-5 over'>
            <div className='w-[94%]'>
                <div className='bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-green-800 w-full mx-auto rounded-2xl flex justify-center py-3 md:py-8 overflow-hidden md:flex-row flex-col'>
                    <div className='flex flex-col items-center justify-center text-3xl font-semibold w-full md:w-2/5'>
                        <div className='flex flex-col items-start text-xl md:text-5xl font-bold md:font-semibold py-3 md:py-0 md:pl-0 text-neutral-800 dark:text-gray-100 z-10'>
                            <div className="hidden md:block">
                                <div><span className='text-indigo-900 dark:text-green-400'>Khurak</span></div>
                                <div>Received <span className='text-indigo-900 dark:text-green-400'>4.8/5</span></div>
                                <div>Starts in over</div>
                                <div><span className='text-indigo-900 dark:text-green-400'>10,000+</span> Reviews</div>
                            </div>
                            <div className="block md:hidden text-center">
                                <span className='text-indigo-900 dark:text-green-400'>Khurak </span>
                                Received <span className='text-indigo-900 dark:text-green-400'>4.8/5 </span>
                                Starts in over
                                <span className='text-indigo-900 dark:text-green-400'> 10,000+</span> Reviews
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full md:w-[56%] filter drop-shadow-[0_0_10rem_#38807c] dark:drop-shadow-[0_0_10rem_#479d43] '>
                        <div className='hidden md:flex flex-col gap-4 p-4 w-full lg:w-1/2 md:mb-28'>
                            {reviewsData.slice(0, 3).map((review, index) => (
                                <div key={index} className='relative'>
                                    <div className="bg-white dark:bg-gray-700 dark:text-white p-4 md:p-8 rounded-2xl flex flex-col gap-3 md:gap-6 relative">
                                        <div className='font-bold text-base md:text-lg'>{review.title}</div>
                                        <div className='text-sm md:text-base' >{review.content}</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='h-8 w-8 md:h-12 md:w-12 rounded-full' style={{ backgroundColor: review.avatarColor }}></div>
                                            <div className='font-semibold text-base'>{review.reviewer}</div>
                                        </div>
                                    </div>
                                    <div className="absolute right-10 bottom-10 flex flex-row text-xl gap-1 font-bold"><span>{review.stars}</span><FaStar size={24} color='orange' /></div>
                                </div>
                            ))}
                        </div>

                        <div className='hidden lg:flex flex-col gap-4 p-4 w-1/2 mt-28'>
                            {reviewsData.slice(3).map((review, index) => (
                                <div key={index} className='relative'>
                                    <div className="bg-white dark:bg-gray-700 dark:text-white p-4 md:p-8 rounded-2xl flex flex-col gap-3 md:gap-6 relative">
                                        <div className='font-bold text-base md:text-lg'>{review.title}</div>
                                        <div className='text-sm md:text-base' >{review.content}</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='h-8 w-8 md:h-12 md:w-12 rounded-full' style={{ backgroundColor: review.avatarColor }}></div>
                                            <div className='font-semibold text-base'>{review.reviewer}</div>
                                        </div>
                                    </div>
                                    <div className="absolute right-10 bottom-10 flex flex-row text-xl gap-1 font-bold"><span>{review.stars}</span><FaStar size={24} color='orange' /></div>
                                </div>
                            ))}
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

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];