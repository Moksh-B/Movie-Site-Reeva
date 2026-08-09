import { Outlet } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { useSelector } from "react-redux"

export default function App() {
    const darkTheme = useSelector((state)=> state.theme)
    return (
        <div className={`min-h-screen ${darkTheme ? 'bg-[#0F0F0F] text-white' : 'bg-white'}`}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
