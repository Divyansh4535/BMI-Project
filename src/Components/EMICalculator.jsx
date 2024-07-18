"use client"
import React, { useState } from 'react'

const EMICalculator = () => {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState('')

  let calcBMI = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert("Please Enter valid height & weight")
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
    }

    if (bmi < 25) {
      setMessage("You are underweight")
    } else if (bmi >= 25 && bmi <= 30) {
      setMessage("You are healthy")
    } else {
      setMessage("You are overweight")
    }
  }

  const reload = () => {
    setHeight("")
    setWeight("")
    setBmi("")
    setMessage("")
  }

  return (
    <div className='flex w-full items-center justify-center  bg-transparent'>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>BMI Calculator</h1>
        <form onSubmit={calcBMI} className='space-y-6'>
          <div>
            <label htmlFor="height" className='block text-sm font-medium text-gray-700'>Height (lbs)</label>
            <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='Enter Height' />
          </div>
          <div>
            <label htmlFor="weight" className='block text-sm font-medium text-gray-700'>Weight (lbs)</label>
            <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className='mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='Enter Weight' />
          </div>
          <div className='flex items-center justify-between'>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 duration-300">
              Submit
            </button>
            <button type="button" onClick={reload} className="ml-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105 duration-300">
              Reload
            </button>
          </div>
        </form>
        <div className='mt-6 text-center text-gray-700'>
          <h2 className='transition-opacity duration-300'>{height ? `Your Height: ${height}` : ''}</h2>
          <h2 className='transition-opacity duration-300'>{weight ? `Your Weight: ${weight}` : ''}</h2>
          <h2 className='transition-opacity duration-300'>{bmi ? `Your BMI: ${bmi}` : ''}</h2>
          <p className='transition-opacity duration-300'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default EMICalculator
