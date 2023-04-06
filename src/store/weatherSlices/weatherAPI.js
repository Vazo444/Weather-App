import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function(search) {
        // I get search at MainPage.jsx
        try {
            const {data} = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=cf9208278a934946bd6175115232803&q=${search}&days=5&aqi=yes&alerts=yes`);
    
            const weatherData = {
                            complated: true,
                            icon: data.current.condition.icon,
                            text: data.current.condition.text,
                            tempNow_c: data.current.temp_c,
                            tempNow_f: data.current.temp_f,
                            humidity: data.current.humidity,
                            wind_kph: data.current.wind_kph,
                            wind_mph: data.current.wind_mph,
                            cloud: data.current.cloud,
                            country: data.location.country,
                            region: data.location.region,
                            city: data.location.name,
                            cityTime: data.location.localtime,
                            maxTemp_c: data.forecast.forecastday[0].day.maxtemp_c,
                            maxTemp_f: data.forecast.forecastday[0].day.maxtemp_f,
                            minTemp_c: data.forecast.forecastday[0].day.mintemp_c,
                            minTemp_f: data.forecast.forecastday[0].day.mintemp_f,
                            hour: {
                                time: [...data.forecast.forecastday[0].hour.map(time => time.time.slice(10))],
                                temp_c: [...data.forecast.forecastday[0].hour.map(temp => temp.temp_c)],
                                temp_f: [...data.forecast.forecastday[0].hour.map(temp => temp.temp_f)]
                            },
                            days: data.forecast.forecastday.map(eachDay => ({
                                    maxTemp_c: eachDay.day.maxtemp_c,
                                    minTemp_c: eachDay.day.mintemp_c,
                                    maxTemp_f: eachDay.day.maxtemp_f,
                                    minTemp_f: eachDay.day.mintemp_f,
                                    icon: eachDay.day.condition.icon,
                                    text: eachDay.day.condition.text,
                                    date: eachDay.date,
                                    id: new Date().getTime().toString()
                            })),
                        }
            
            return weatherData;
        } catch (error) {
            if (error.response.status === 400) {
                // handle 400 error here
                const errorMessage = {
                    error: error.response.data.error.message
                }
                return errorMessage
            } 
        }
    }
)