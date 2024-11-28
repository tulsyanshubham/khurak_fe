import React from 'react'
import { FocusCards } from '../ui/focus-cards';
import { assets } from '@/constants/assets';

const cards = [
    {
      title: "Our Vision",
      description: "Our vision is to make healthy eating accessible to everyone. We believe that everyone deserves to eat well and live a healthy life. We are committed to providing you with the best quality food that is not only delicious but also nutritious.",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Our Mission",
      description: "Our mission is to provide you with the best quality food that is not only delicious but also nutritious. We are committed to helping you live a healthy life by providing you with the best quality food that is not only delicious but also nutritious.",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Our Values",
      description: "We believe in the power of healthy eating and are committed to providing you with the best quality food that is not only delicious but also nutritious. Our values are based on the belief that everyone deserves to eat well and live a healthy life.",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

export default function WhoWeAre() {
    return (
        <div className='w-full py-4'>
            <div className='flex flex-col gap-2 items-center justify-center py-5 px-2'>
                <span className='text-2xl md:text-4xl text-center font-semibold'>
                    Who We Are 🤔
                </span>
                <span className='text-base md:text-lg text-ktheme-600 text-center'>
                    Know more about us
                </span>
            </div>
            <FocusCards cards={assets.about_us.whoWeAre} />
        </div>
    )
}
