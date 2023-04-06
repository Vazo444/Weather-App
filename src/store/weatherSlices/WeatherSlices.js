import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI.js";

export const weatherSlices = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        ferumCelsius(state, {payload}) {
            return {
                ...state,
                complaited: payload
            }
        }
    },
    extraReducers: {
        [fetchWeather.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

export const selectWeather = state => state.weather

export const { ferumCelsius } = weatherSlices.actions

export const weatherReducer = weatherSlices.reducer