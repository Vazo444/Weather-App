import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ferumCelsius, selectWeather } from '../../store/weatherSlices/WeatherSlices'

const CelsiusFerum = () => {

  const {complaited} = useSelector(selectWeather)
  const dispatch = useDispatch()

    const cfStyle = {
        fontWeight: 'bolder',
        fontSize: '20px',
        backgroundColor: '#0000005f',
        borderRadius: '30px',
        color: '#fff',
        padding: '3px'
    }

  return (
    <div className='celsiusFerum'>
        <h2>Today</h2>
        <div style={{cursor: 'pointer'}} onClick={() => dispatch(ferumCelsius(!complaited))} role='button'>
            <span style={complaited ? {} : cfStyle}>°F</span>
            <span> / </span>
            <span style={complaited ? cfStyle : {}}>°C</span>
        </div>
    </div>
  )
}

export default CelsiusFerum