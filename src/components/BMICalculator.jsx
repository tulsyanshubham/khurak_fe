import Image from 'next/image';
import React, { useState } from 'react';
import images from '@/constants/Images.json';

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
    <div className='w-screen flex items-center justify-center'>
      <div className='relative mb-20 mt-10 w-full max-w-7xl'>
        <h1 className="text-3xl md:text-4xl font-bold text-center relative text-green-700 dark:text-green-500 mb-8 z-10">
          Assess Your Health Now
        </h1>
        <div className="flex w-full items-center justify-evenly relative z-10">
          <div className="w-[80vw] md:w-2/5 lg:w-1/4">
            <div className="mb-4 ">
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-400">
                Select Unit
              </label>
              <select
                className="w-full p-2 border border-green-300 dark:border-green-600 rounded-md focus:ring-green-600 focus:border-green-700 dark:bg-background"
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                  if (e.target.value === "metric"){
                    setWeight(70);
                    setHeight(1.75);
                  } else{
                    setWeight(154);
                    setHeight(70);
                  }
                  resetBMI(); // Reset BMI on unit change
                }}
              >
                <option value="metric">Metric (kg/m)</option>
                <option value="imperial">Imperial (lbs/in)</option>
              </select>
            </div>

            <div className="mb-4 z-10">
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-400">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
                <input
                  type="number"
                  min={unit === 'metric' ? 30 : 66} // Minimum weight: 30kg or 66lbs
                  max={unit === 'metric' ? 200 : 440} // Maximum weight: 200kg or 440lbs
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))} // Allow the user to type freely
                  onBlur={(e) => {
                    let value = Number(e.target.value);
                    const minWeight = unit === 'metric' ? 30 : 66;
                    const maxWeight = unit === 'metric' ? 200 : 440;

                    // Correct value if out of bounds after input is done (on blur)
                    if (value < minWeight) setWeight(minWeight);
                    if (value > maxWeight) setWeight(maxWeight);
                    resetBMI(); // Reset BMI after input is validated
                  }}
                  className="w-1/5 md:w-1/5 ml-2 px-2 border border-green-300 dark:border-green-600 rounded-md focus:ring-green-600 focus:border-green-700 bg-transparent"
                />

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
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-400">
                Height ({unit === 'metric' ? 'meters' : 'inches'}):
                <input
                  type="number"
                  min={unit === 'metric' ? 1.2 : 48} // Minimum height: 1.2m or 48inches
                  max={unit === 'metric' ? 2.5 : 100} // Maximum height: 2.5m or 100inches
                  step="0.01"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))} // Allow the user to type freely
                  onBlur={(e) => {
                    let value = Number(e.target.value);
                    const minHeight = unit === 'metric' ? 1.2 : 48;
                    const maxHeight = unit === 'metric' ? 2.5 : 100;

                    // Correct value if out of bounds after input is done (on blur)
                    if (value < minHeight) setHeight(minHeight);
                    if (value > maxHeight) setHeight(maxHeight);
                    resetBMI(); // Reset BMI after input is validated
                  }}
                  className="w-1/5 md:w-1/5 ml-2 px-2 border border-green-300 dark:border-green-600 rounded-md focus:ring-green-600 focus:border-green-700 bg-transparent"
                />

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
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
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
                <p className="text-lg font-semibold text-green-600 dark:text-green-400 pb-1">BMI: {bmi.toFixed(2)}
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
            <Image src={images.bmi} alt="BMI" width={500} height={500} className='w-[40vw] max-w-[383px] dark:brightness-110' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
