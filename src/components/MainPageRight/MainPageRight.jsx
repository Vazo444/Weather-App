import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'
import CelsiusFerum from '../CelsiusFerum/CelsiusFerum'
import WeatherDays from '../WeatherDays/WeatherDays'
import WeatherToday from '../WeatherToday/WeatherToday'

const MainPageRight = () => {

  const weather = useSelector(selectWeather)

  return (
    <div className='mainRight'>
      <CelsiusFerum />
      <WeatherToday />
      {weather.error && <h3 style={{textAlign: 'center', color: 'red', fontSize: '40px', }}>{weather.error}</h3>}
      <h2 className='fiveDays'>5 Days Weather</h2>
      <WeatherDays />
    </div>
  )
}

export default MainPageRight
