import React from 'react'

export default function Home() {
    return (
        <div className='h-screen flex items-center justify-between flex-wrap px-32'>
            <div id='left'>
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-green-700">Welcome to Khurak :</h1>
                    <h2 className="text-4xl font-semibold mt-2">Your Hub for Healthy Eating</h2>
                    <h2 className="text-4xl font-semibold">With Fresh Meals.</h2>

                    <p className="text-gray-600 mt-4 max-w-lg">
                    Easily order wholesome meals tailored to your lifestyle and enjoy a healthier, happier you.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md">
                            Try Khurak
                        </button>
                        <button className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-md">
                            Explore Meal Plans
                        </button>
                    </div>
                </div>
            </div>
            <div id='right'>
                image
            </div>
        </div>
    )
}
