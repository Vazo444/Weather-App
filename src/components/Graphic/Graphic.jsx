import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../store/weatherSlices/WeatherSlices'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)

const Graphic = () => {

    const weather = useSelector(selectWeather)

    const data = {
        labels: weather.hour?.time,
        datasets: [{
            labels: 'Sales of the week',
            data: weather.complaited ? weather.hour?.temp_c : weather.hour?.temp_f,
            backgroundColor: '#fff',
            borderColor: '#000',
            pointBorderColor: '#000',
            fill: true,
            tension: 0.4
        }]
    }

    const option = {
        plugins: {
            legend: true
        },
    }
      
  return (
    <div className='graphik'>
        <Line
            data = {data}
            options = {option}
        ></Line>
    </div>
  )
}

export default Graphic
