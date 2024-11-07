import { div } from 'framer-motion/client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import call from '@/assets/icons/call.png';
import mail from '@/assets/icons/mail.png';
import facebook from '@/assets/icons/facebook.png';
import instagram from '@/assets/icons/instagram.png';
import x from '@/assets/icons/x.png';
import youtube from '@/assets/icons/youtube.png';
import linkedin from '@/assets/icons/linkedin.png';


export default function Footer() {
    const imgClass = 'invert-[.75] hover:invert w-12';
    const data = {
        phone: "+919999999999",
        email: "abcd1234@gmail.com",
        social: {
            instagram: "https://www.instagram.com/",
            twitter: "https://twitter.com/?lang=en",
            youtube: "https://www.youtube.com/",
            facebook: "https://www.facebook.com/",
            linkedin: "https://in.linkedin.com/"
        }
    }
    return (
        <div className='flex flex-col items-center justify-center w-full gap-3 py-2 border-t-2 mt-2 bg-green-50'>
            <div className='flex items-center justify-evenly w-full flex-wrap py-7 gap-10'>
                <div className='text-5xl text-green-800'>KHURAK </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex font-base text-4xl md:text-start justify-center md:justify-start'>Contact Us</div>
                    <a href={`tel:${data.phone}`} className='flex gap-1 text-lg justify-center md:justify-start' >
                        <Image src={call} alt='call' className={"invert-[.75] w-7"} /><span>{data.phone}</span>
                    </a>
                    <a href={`mailto:${data.email}`} className='flex gap-1 text-lg justify-center md:justify-start' >
                        <Image src={mail} alt='call' className={"invert-[.75] w-7"} /><span>{data.email}</span>
                    </a>
                </div>
                <div>
                    <div className='font-base text-4xl pb-2 text-center md:text-start'>Follow Us</div> 
                    <div className='flex items-center justify-start gap-1'>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Image src={instagram} alt='facebook' className={imgClass} /></a>
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><Image src={x} alt="x" className={imgClass} /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Image src={youtube} alt="youtube" className={imgClass} /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Image src={facebook} alt="facebook" className={imgClass} /></a>
                        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><Image src={linkedin} alt="linkedin" className={imgClass} /></a>
                    </div>
                </div>
            </div>
            <div className='bg-green-800 w-3/4 md:w-1/2 h-[1.5px] rounded-full'></div>
            <div>Copyright &copy; [2024] [<span className='text-green-700 font-bold'>KHURAK</span>]. All rights reserved.</div>
        </div>

    )
}