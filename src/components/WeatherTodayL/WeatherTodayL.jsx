import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'

const WeatherTodayL = () => {

  const weather = useSelector(selectWeather)

  return (
    <div className='todayL'>
        <h3>{weather.complaited ? weather.tempNow_c : weather.tempNow_f}<span>{weather.complaited ? '°C' : '°F'}</span></h3>
        <span style={{display: 'flex', alignItems: 'center'}}>{weather.text} <img src={weather.icon} style={{width: '40px', height: '40px'}}/></span>
        <span>{weather.cityTime}</span>
    </div>
  )
}

export default WeatherTodayL
