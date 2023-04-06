import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'
import WeatherDaysItem from '../WheaderDaysItem/WeatherDaysItem'

const WeatherDays = () => {

  const weather = useSelector(selectWeather)

  return (
    <div className='weatherDays'>
      {
        weather.days?.map(day => (
          <WeatherDaysItem key={day.date} date={day.date} max={weather.complaited ? day.maxTemp_c : day.maxTemp_f} min={weather.complaited ? day.minTemp_c : day.minTemp_f} icon={day.icon} text={day.text} complaited={weather.complaited}/>
        ))
      }
    </div>
  )
}

export default WeatherDays
