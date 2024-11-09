import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Review from './components/Review'
import Footer from './components/Footer'
import BMICalculator from './components/BMICalculator'
import CalorieTimeline from './components/CalorieTimeline'

export default function page() {
  return (
    // <div className='dark bg-background text-foreground'>
    <div>
      <Header />
      <Home />
      <Review />
      <CalorieTimeline />
      <BMICalculator />
      <Footer />
    </div>
  )
}
