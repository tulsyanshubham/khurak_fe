"use client";
import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Review from '@/components/Review'
import Footer from '@/components/Footer'
import BMICalculator from '@/components/BMICalculator'
import CalorieTimeline from '@/components/CalorieTimeline'
import Blog from '@/components/Blog';
import WhyChooseUs from '@/components/WhyChooseUs';
import Social from '@/components/Social';
import { useAtom } from 'jotai';
import { theme } from '@/hooks/Atoms';
import News from '@/components/News';
import { FloatigVideo } from '@/components/FloatingVideo';
import Influencer from '@/components/Influencer';
// import Location from '@/components/Location';
// import LMap from '@/components/map';

export default function Page() {

  const [siteTheme] = useAtom(theme)
  useEffect(() => {
    if (siteTheme === 'dark')
      document.body.classList.add("dark");
    else
      document.body.classList.remove('dark');
    return () => {
      document.body.classList.remove(siteTheme);
    }
  }, [siteTheme]);

  return (
    // <div className={`${theme} bg-background text-foreground`}>
    <div >
      <Header />
      <Home />
      {/* <News />
      <FloatigVideo />
      <Blog />
      <Influencer />
      <Review />
      <BMICalculator />
      <CalorieTimeline />
      <Social />
      <WhyChooseUs />
      <Footer /> */}
      {/* <Location /> */}
      {/* <LMap /> */}
    </div>
  )
}
