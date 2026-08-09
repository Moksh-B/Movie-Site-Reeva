import { createSlice } from "@reduxjs/toolkit"

const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"))

const initialState = Array.isArray(savedWatchlist) ? savedWatchlist : []

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const exists = state.some((movie) => movie.id === action.payload.id)

            if (!exists) {
                state.push(action.payload)
            }
        },
        removeMovie: (state, action) => {
            return state.filter((movie) => movie.id !== action.payload)
        },
    },
})

export const { addMovie, removeMovie } = watchlistSlice.actions
export default watchlistSlice.reducer
