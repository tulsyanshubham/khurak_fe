"use client";
import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70); // Default weight
  const [height, setHeight] = useState<number>(1.75); // Default height (in meters)
  const [unit, setUnit] = useState('metric');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    let bmiValue: number;

    if (unit === 'metric') {
      // Metric BMI calculation (kg/m²)
      bmiValue = weight / Math.pow(height, 2);
    } else {
      // Imperial BMI calculation (lbs/in²) * 703
      bmiValue = (weight / Math.pow(height, 2)) * 703;
    }

    setBmi(bmiValue);
  };

  const resetBMI = () => {
    setBmi(null); // Resets BMI and shows the button again
  };

  return (
    <div className='overflow-hidden'>
    <div className='relative my-20'>
      <div className="absolute z-0 -top-16 left-9 right-0 mx-auto">
        <img src="/images/home/bmi_bg.svg" alt="" className="w-[95vw] rotate-6" />
      </div>
      <h1 className="text-4xl font-bold text-center relative text-green-700 mb-6 z-10">Check Your Health Status</h1>
      <div className="flex w-full items-center justify-evenly relative z-10">
        <div className="w-1/4">
          <div className="mb-4 ">
            <label className="block mb-2 text-sm font-medium text-green-700">
              Select Unit
            </label>
            <select
              className="w-full p-2 border border-green-300 rounded-md focus:ring-green-600 focus:border-green-700"
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value);
                resetBMI(); // Reset BMI on unit change
              }}
            >
              <option value="metric">Metric (kg/m)</option>
              <option value="imperial">Imperial (lbs/in)</option>
            </select>
          </div>

          <div className="mb-4 z-10">
            <label className="block mb-2 text-sm font-medium text-green-700">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'}): {weight}
            </label>
            <input
              type="range"
              min={unit === 'metric' ? 30 : 66} // Minimum weight: 30kg or 66lbs
              max={unit === 'metric' ? 200 : 440} // Maximum weight: 200kg or 440lbs
              value={weight}
              onChange={(e) => {
                setWeight(Number(e.target.value));
                resetBMI(); // Reset BMI when input changes
              }}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div className="mb-4 z-10">
            <label className="block mb-2 text-sm font-medium text-green-700">
              Height ({unit === 'metric' ? 'meters' : 'inches'}): {height.toFixed(2)}
            </label>
            <input
              type="range"
              min={unit === 'metric' ? 1.2 : 48} // Minimum height: 1.2m or 48inches
              max={unit === 'metric' ? 2.5 : 100} // Maximum height: 2.5m or 100inches
              step="0.01"
              value={height}
              onChange={(e) => {
                setHeight(Number(e.target.value));
                resetBMI(); // Reset BMI when input changes
              }}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          {bmi === null ? (
            <button
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          ) : (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-green-600 pb-1">BMI: {bmi.toFixed(2)}
                <span className="text-green-600 ml-2">
                  ({bmi < 18.5
                    ? 'Underweight'
                    : bmi >= 18.5 && bmi <= 24.9
                      ? 'Normal weight'
                      : bmi >= 25 && bmi <= 29.9
                        ? 'Overweight'
                        : 'Obesity'})
                </span></p>
            </div>
          )}
        </div>

        <div className='w-fit'>
          <img src="/images/home/bmi.svg" alt="BMI" className='h-[25vw]' />
        </div>
      </div>
    </div>
    </div>
  );
};

export default BMICalculator;

