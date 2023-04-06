import React from 'react'

const WeatherDaysItem = ({date, max, min, icon, text, complaited}) => {
  return (
    <div className='daysItem'>
        <div>
          <span>{max}</span>
          <span> / </span>
          <span className='cels'>{min}{complaited ? '°C' : '°F'}</span>
        </div>
        <img src={icon} alt='weatherIcon'/>
        <h3>{text}</h3>
        <p>{date}</p>
    </div>
  )
}

export default WeatherDaysItem
