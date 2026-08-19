import { createRoot } from "react-dom/client"
import "./index.css"
import { store } from "./store/store.js"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy } from "react"

import App from "./App.jsx"
const Home = lazy(() => import("./pages/home.jsx"))
const DetailPage =lazy(() => import("./pages/detailPage.jsx"))
const Categories =lazy(() => import("./pages/categories.jsx"))
const Reviews=lazy(() => import( "./pages/reviews.jsx"))
const Search =lazy(() => import("./pages/search.jsx"))
const Watchlist =lazy(() => import("./pages/watchlist.jsx"))
const Category = lazy(() => import("./pages/category.jsx"))

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
            { path: "/search", element: <Search /> },
            { path: "/watchlist", element: <Watchlist /> },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)
