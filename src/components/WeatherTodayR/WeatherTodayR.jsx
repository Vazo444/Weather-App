import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'

const WeatherTodayR = () => {

  const weather = useSelector(selectWeather)

  return (
    <div className='todayR'>
        <span>Humidity: {weather.humidity}%</span>
        <span>Cloud Cover: {weather.cloud}</span>
        <span>Wind: {weather.complaited ? weather.wind_kph : weather.wind_mph} {weather.complaited ? 'Km/H' : 'MPH'}</span>
        <span>Max Temp: {weather.complaited ? weather.maxTemp_c : weather.maxTemp_f}{weather.complaited ? '°C' : '°F'}</span>
        <span>Min Temp: {weather.complaited ? weather.minTemp_c : weather.minTemp_f}{weather.complaited ? '°C' : '°F'}</span>
    </div>
  )
}

export default WeatherTodayR
