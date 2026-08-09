import { createRoot } from "react-dom/client"
import "./index.css"
import { store } from "./store/store.js"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import { Home } from "./pages/home.jsx"
import { DetailPage } from "./pages/detailPage.jsx"
import { Categories } from "./pages/categories.jsx"
import { Category } from "./pages/category.jsx"
import { Reviews } from "./pages/reviews.jsx"
import { Search } from "./pages/search.jsx"
import { Watchlist } from "./pages/watchlist.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/movie/:id", element: <DetailPage /> },
            { path: "/categories", element: <Categories /> },
            { path: "/category/:code", element: <Category /> },
            { path: "/movie/:id/reviews", element: <Reviews /> },
            { path: "/search", element: <Search />} ,
            {path: '/watchlist', element: <Watchlist />}
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)
