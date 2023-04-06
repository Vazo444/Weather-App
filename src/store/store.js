import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlices/searchSlices";
import { weatherReducer } from "./weatherSlices/WeatherSlices";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        search: searchReducer,
    }
})

export default store