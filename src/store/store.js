import { configureStore } from "@reduxjs/toolkit"
import { movieAPI } from "../features/movieAPI"
import themeReducer from "../features/themeSlice"
import watchlistReducer from "../features/watchlistSlice"

export const store = configureStore({
    reducer: {
        [movieAPI.reducerPath]: movieAPI.reducer,
        theme: themeReducer,
        watchlist: watchlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieAPI.middleware),
})

store.subscribe(() => {
    localStorage.setItem(
        "watchlist",
        JSON.stringify(store.getState().watchlist),
    )

    localStorage.setItem("theme", JSON.stringify(store.getState().theme))
})
