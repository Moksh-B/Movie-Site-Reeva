import { Outlet } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { useSelector } from "react-redux"
import { ScrollToTop } from "./components/scrollTop"
import { Suspense } from "react"

export default function App() {
    const darkTheme = useSelector((state)=> state.theme)
    return (
        <div
            className={`min-h-screen ${darkTheme ? "bg-[#0F0F0F] text-white" : "bg-white"}`}
        >
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
}
