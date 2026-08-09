import { useState } from "react"
import {
    HiMagnifyingGlass,
    HiUserCircle,
    HiBars3,
    HiXMark,
    HiSun,
    HiMoon,
} from "react-icons/hi2"
import { Link, NavLink } from "react-router-dom"
import { darkMode } from "../features/themeSlice"
import { useDispatch, useSelector } from "react-redux"

export function Navbar() {
    const dispatch = useDispatch()
    const darkTheme = useSelector((state)=>state.theme)

    const handleChange = ()=>{
        
    }


    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black/90 to-transparent backdrop-blur-md shadow-[0_6px_25px_rgba(220,38,38,0.25)]">
            <div className="mx-auto flex h-18 items-center justify-between px-6 lg:px-10">
                <Link to="/">
                    <h1 className="cursor-pointer text-4xl font-extrabold tracking-widest text-white">
                        <span className="text-red-600">R</span>eeva
                    </h1>
                </Link>

                <ul className="hidden items-center gap-10 md:flex">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Categories
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/watchlist"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Watchlist
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive
                                ? "hidden"
                                : "flex items-center justify-center text-2xl text-white transition hover:text-red-500"
                        }
                    >
                        <HiMagnifyingGlass />
                    </NavLink>

                    <button
                        onClick={() => dispatch(darkMode())}
                        className="hidden items-center justify-center cursor-pointer text-2xl text-white transition hover:text-red-500 md:block"
                    >
                        {darkTheme ? <HiMoon /> : <HiSun />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl text-white md:hidden cursor-pointer"
                    >
                        {isOpen ? <HiXMark /> : <HiBars3 />}
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden bg-[#111111]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
                    isOpen ? "max-h-64 py-4" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Categories
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/watchlist"
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-red-500"
                                        : "text-white hover:text-red-500"
                                }`
                            }
                        >
                            Watchlist
                        </NavLink>
                    </li>

                    <li>
                        <button
                            onClick={() => dispatch(darkMode())}
                            className="flex items-center gap-2 rounded-lg px-2 py-1 font-medium text-white cursor-pointer"
                        >
                            {darkTheme ? (
                                <>
                                    <HiMoon className="text-xl shrink-0" />
                                    <span className="leading-none">
                                        Light Mode
                                    </span>
                                </>
                            ) : (
                                <>
                                    <HiSun className="text-xl shrink-0" />
                                    <span className="leading-none">
                                        Dark Mode
                                    </span>
                                </>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
