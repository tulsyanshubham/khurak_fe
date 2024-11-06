import React from 'react';

const reviewsData = [
    {
        title: "Delicious and Healthy",
        content: "Khurak has completely transformed my meal choices. The healthy options are not only delicious but also quick to order. I love how easy it is to find nutritious meals!",
        reviewer: "Tina",
        avatarColor: "#de716d"
    },
    {
        title: "Amazing Variety",
        content: "I am impressed by the range of healthy dishes available. Khurak makes it easy to maintain a balanced diet without sacrificing taste.",
        reviewer: "Rakesh",
        avatarColor: "#f2eb5e"
    },
    {
        title: "Easy and Convenient",
        content: "Ordering from Khurak is super convenient! The platform is user-friendly, and my meals arrive fresh and on time.",
        reviewer: "Rahul",
        avatarColor: "#7a1a5f"
    },
    {
        title: "A Healthy Choice",
        content: "I was looking for healthy meal options, and Khurak delivers! I appreciate the focus on nutrition and quality ingredients.",
        reviewer: "Saini",
        avatarColor: "#bad79d"
    },
    {
        title: "My Go-To for Healthy Eating",
        content: "Khurak has become my go-to for ordering meals. The flavors are incredible, and I feel good knowing I'm eating healthily!",
        reviewer: "Shila",
        avatarColor: "#d8925c"
    },
    {
        title: "Life-Saver!",
        content: "With Khurak, I can whip up a healthy meal in minutes! The variety and freshness of the ingredients are top-notch. Highly recommend it!",
        reviewer: "Anuraag",
        avatarColor: "#7362f2"
    },
];

export default function Message() {
    return (
        <div className='w-full overflow-x-hidden flex justify-center py-5'>
            <div className='w-[94%] overflow-hidden'>
                <div className='bg-gradient-to-br from-green-500 to-teal-600 w-full max-w-full mx-auto rounded-2xl flex justify-center py-8'>
                    <div className='flex flex-col items-center justify-center text-3xl font-semibold w-2/5'>
                        <div className='flex flex-col items-start text-5xl font-semibold'>
                            <div><span className='text-indigo-900'>Khurak</span></div>
                            <div>Received <span className='text-indigo-900'>4.8/5</span></div>
                            <div>Starts in over</div>
                            <div><span className='text-indigo-900'>10,000+</span> Reviews</div>
                        </div>
                    </div>

                    <div className='flex w-[56%] filter drop-shadow-[0_0_10rem_#38807c]'>
                        <div className='flex flex-col gap-4 p-4 w-1/2 mb-28'>
                            {reviewsData.slice(0, 3).map((review, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl flex flex-col gap-6">
                                    <div className='font-bold text-lg'>{review.title}</div>
                                    <div>{review.content}</div>
                                    <div className='flex items-center gap-4'>
                                        <div className='h-12 w-12 rounded-full' style={{ backgroundColor: review.avatarColor }}></div>
                                        <div className='font-semibold text-base'>{review.reviewer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col gap-4 p-4 w-1/2 mt-28'>
                            {reviewsData.slice(3).map((review, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl flex flex-col gap-6">
                                    <div className='font-bold text-lg'>{review.title}</div>
                                    <div>{review.content}</div>
                                    <div className='flex items-center gap-4'>
                                        <div className='h-12 w-12 rounded-full' style={{ backgroundColor: review.avatarColor }}></div>
                                        <div className='font-semibold text-base'>{review.reviewer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
