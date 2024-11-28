import Image from 'next/image';
import React, { useState } from 'react';
import { assets } from '@/constants/assets';
import Lottie from "lottie-react";
import bmi_animation from "@/../public/animation/bmi_right.json";

const BMICalculator = () => {
  const [weight, setWeight] = useState(70); // Default weight
  const [height, setHeight] = useState(1.75); // Default height (in meters)
  const [unit, setUnit] = useState('metric');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    let bmiValue;

    if (unit === 'metric') {
      // Metric BMI calculation (kg/m²)
      bmiValue = weight / Math.pow(height, 2);
    } else if (unit === 'imperial') {
      // Imperial BMI calculation (lbs/in²) * 703
      bmiValue = (weight / Math.pow(height, 2)) * 703;
    } else if (unit === 'hybrid') {
      // hybrid BMI calculation
      bmiValue = weight / Math.pow(height, 2) * 1550;
    }

    setBmi(bmiValue);
  };

  const resetBMI = () => {
    setBmi(null); // Resets BMI and shows the button again
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='relative mb-20 mt-10 w-full max-w-7xl'>
        <div className='px-3 flex flex-col items-center justify-center text-neutral-800 dark:text-gray-100 gap-2 mb-8'>
          <span className='text-2xl md:text-4xl text-center font-semibold'>
            Assess Your Health Now! 🩺
          </span>
          <span className='text-base md:text-lg text-ktheme-600 text-center'>
            Discover your BMI and take the first step towards a healthier you.
          </span>
        </div>
        <div className="flex w-full items-center justify-evenly relative z-10">
          <div className="w-[80vw] md:w-2/5 lg:w-1/4">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-ktheme-700 dark:text-ktheme-400">
                Select Unit
              </label>
              <select
                className="w-full p-2 border border-ktheme-500 dark:border-ktheme-600 rounded-md focus:ring-ktheme-600 focus:border-ktheme-700 dark:bg-background"
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                  if (e.target.value === 'metric') {
                    setWeight(70);
                    setHeight(1.75);
                  } else if (e.target.value === 'imperial') {
                    setWeight(154);
                    setHeight(70);
                  } else if (e.target.value === 'hybrid') {
                    setWeight(70);
                    setHeight(70);
                  }
                  resetBMI(); // Reset BMI on unit change
                }}
              >
                <option value="metric">Metric (kg/m)</option>
                <option value="imperial">Imperial (lbs/in)</option>
                <option value="hybrid">Hybrid (kg/in)</option>
              </select>
            </div>

            <div className="mb-4 z-10">
              <label className="block mb-2 text-sm font-medium text-ktheme-700 dark:text-ktheme-400">
                Weight ({unit === 'metric' ? 'kg' : unit === 'imperial' ? 'lbs' : 'kg'}):
                <input
                  type="number"
                  min={unit === 'metric' || unit === 'hybrid' ? 30 : 66}
                  max={unit === 'metric' || unit === 'hybrid' ? 200 : 440}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  onBlur={(e) => {
                    let value = Number(e.target.value);
                    const minWeight = unit === 'metric' || unit === 'hybrid' ? 30 : 66;
                    const maxWeight = unit === 'metric' || unit === 'hybrid' ? 200 : 440;

                    if (value < minWeight) setWeight(minWeight);
                    if (value > maxWeight) setWeight(maxWeight);
                    resetBMI();
                  }}
                  className="w-1/5 md:w-1/5 ml-2 px-2 border border-ktheme-300 dark:border-ktheme-600 rounded-md focus:ring-ktheme-600 focus:border-ktheme-700 bg-transparent"/>
              </label>
              <input
                type="range"
                min={unit === 'metric' || unit === 'hybrid' ? 30 : 66}
                max={unit === 'metric' || unit === 'hybrid' ? 200 : 440}
                value={weight}
                onChange={(e) => {
                  setWeight(Number(e.target.value));
                  resetBMI();
                }}
                className="w-full h-2 bg-ktheme-200 rounded-lg appearance-none cursor-pointer accent-ktheme-700"
              />
            </div>

            <div className="mb-4 z-10">
              <label className="block mb-2 text-sm font-medium text-ktheme-700 dark:text-ktheme-400">
                Height ({unit === 'metric' ? 'meters' : unit === 'imperial' ? 'inches' : 'inches'}):
                <input
                  type="number"
                  min={unit === 'metric' ? 1.2 : 48}
                  max={unit === 'metric' ? 2.5 : 100}
                  step="0.01"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  onBlur={(e) => {
                    let value = Number(e.target.value);
                    const minHeight = unit === 'metric' ? 1.2 : 48;
                    const maxHeight = unit === 'metric' ? 2.5 : 100;

                    if (value < minHeight) setHeight(minHeight);
                    if (value > maxHeight) setHeight(maxHeight);
                    resetBMI();
                  }}
                  className="w-1/5 md:w-1/5 ml-2 px-2 border border-ktheme-300 dark:border-ktheme-600 rounded-md focus:ring-ktheme-600 focus:border-ktheme-700 bg-transparent"
                />
              </label>
              <input
                type="range"
                min={unit === 'metric' ? 1.2 : 48}
                max={unit === 'metric' ? 2.5 : 100}
                step="0.01"
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                  resetBMI();
                }}
                className="w-full h-2 bg-ktheme-200 rounded-lg appearance-none cursor-pointer accent-ktheme-700"
              />
            </div>

            {bmi === null ? (
              <button
                className="w-full bg-ktheme-500 text-white py-2 rounded-md hover:brightness-95 transition"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>
            ) : (
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-ktheme-600 dark:text-ktheme-400 pb-1">
                  BMI: {bmi.toFixed(2)}
                  <span className="ml-2">
                    {bmi < 18.5 ? (
                      <span className="text-blue-500 dark:text-blue-300">Underweight</span>
                    ) : bmi >= 18.5 && bmi <= 24.9 ? (
                      <span className="text-green-500 dark:text-green-200">Normal weight</span>
                    ) : bmi >= 25 && bmi <= 29.9 ? (
                      <span className="text-yellow-600 dark:text-yellow-300">Overweight</span>
                    ) : (
                      <span className="text-red-600 dark:text-red-300">Obesity</span>
                    )}
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className='w-fit md:block hidden'>
            {/* <Image src={assets.bmi} alt="BMI" width={500} height={500} className='w-[40vw] max-w-[383px] dark:brightness-110' /> */}
            <Lottie animationData={bmi_animation} loop={true} className='w-[40vw] max-w-[383px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
