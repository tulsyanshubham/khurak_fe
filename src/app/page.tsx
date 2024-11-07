import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Review from './components/Review'
import Footer from './components/Footer'
import BMICalculator from './components/BMICalculator'

export default function page() {
  return (
    <div>
      <Header />
      <Home />
      <Review />
      <BMICalculator />
      <Footer />
    </div>
  )
}
