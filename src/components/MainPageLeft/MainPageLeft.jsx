import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'
import CitySearch from '../CitySearch/CitySearch'
import Graphic from '../Graphic/Graphic'

const MainPageLeft = () => {

  const weather = useSelector(selectWeather)

  return (
    <div className='mainLeft'>
      <div className='topWeather'>
        <h2>Weather in {weather.city}, {weather.region}, {weather.country}</h2>
      </div>
      <CitySearch />
      <Graphic />
    </div>
  )
}

export default MainPageLeft
