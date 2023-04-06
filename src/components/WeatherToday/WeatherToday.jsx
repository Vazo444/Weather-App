import React from 'react'
import WeatherTodayL from '../WeatherTodayL/WeatherTodayL'
import WeatherTodayR from '../WeatherTodayR/WeatherTodayR'

const WeatherToday = () => {
  return (
    <div className='weatherToday'>
        <WeatherTodayL />
        <WeatherTodayR />
    </div>
  )
}

export default WeatherToday
