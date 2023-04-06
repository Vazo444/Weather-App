import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWithLocation, selectSearch } from '../../store/searchSlices/searchSlices'
import { fetchWeather } from '../../store/weatherSlices/weatherAPI.js'
import MainPageLeft from '../MainPageLeft/MainPageLeft'
import MainPageRight from '../MainPageRight/MainPageRight'
import './MainPage.css'

const MainPage = () => {

  const search = useSelector(selectSearch)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather(search))
  }, [search])

  useEffect(() => {
    if (typeof global.navigator !== "undefined" && typeof global.navigator.geolocation !== "undefined") {
      global.navigator.geolocation.getCurrentPosition(loc => {
        const location = loc.coords.latitude.toString().slice(0, 5) + ' ' + loc.coords.longitude.toString().slice(0, 5)
        dispatch(getWithLocation(location))
      });
    }
  }, []);
  

  return (
    <div className='container'>
        <div className='main'>
            <MainPageLeft />
            <MainPageRight />
        </div>
    </div>
  )
}

export default MainPage
