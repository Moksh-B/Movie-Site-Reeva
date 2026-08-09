import { createSlice } from "@reduxjs/toolkit"

const theme = JSON.parse(localStorage.getItem("theme"))
const initialState = theme ?? true

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkMode: (state) => !state,
    },
})

export const { darkMode } = themeSlice.actions
export default themeSlice.reducer
