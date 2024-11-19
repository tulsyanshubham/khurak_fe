"use client";
import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Review from '@/components/Review'
import Footer from '@/components/Footer'
import BMICalculator from '@/components/BMICalculator'
import CalorieTimeline from '@/components/CalorieTimeline'
import { useTheme } from '@/components/theme-provider'
import News from '@/components/News';

export default function Page() {

  const { theme } = useTheme();
  useEffect(() => {
    if (theme === 'dark')
      document.body.classList.add("dark");
    else
      document.body.classList.remove('dark');
    return () => {
      document.body.classList.remove(theme);
    }
  }, [theme]);

  return (
    // <div className={`${theme} bg-background text-foreground`}>
    <div >
      <Header />
      <Home />
      <Review />
      <CalorieTimeline />
      <News />
      <BMICalculator />
      <Footer />
    </div>
  )
}
