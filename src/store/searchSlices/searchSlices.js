import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        getWithLocation(state, {payload}) {
            return payload
        },
        addSearch(state, {payload}) {
            return payload
        }
    }
})

export const selectSearch = state => state.search

export const { getWithLocation, addSearch } = searchSlices.actions

export const searchReducer = searchSlices.reducer