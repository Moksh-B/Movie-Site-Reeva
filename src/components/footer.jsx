import { HiFilm, HiHeart } from "react-icons/hi2"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"

export const Footer = React.memo(function Footer() {
    const darkTheme = useSelector((state) => state.theme)

    return (
        <footer
            className={`"mt-7 border-t border-zinc-800 ${darkTheme ? "bg-zinc-950 " : "bg-white text-black"}`}
        >
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-red-600/10 blur-3xl" />
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <h2 className="text-3xl font-black ">
                                <span className="text-red-600">R</span>eeva
                            </h2>
                        </Link>

                        <p className="mt-5 leading-7 text-zinc-400">
                            Discover trending movies, official trailers, ratings
                            and reviews from around the world.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold ">Explore</h3>

                        <ul className="space-y-3">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-medium transition ${
                                            isActive
                                                ? "text-red-500"
                                                : "text-zinc-400 transition hover:text-red-500"
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
                                                : "text-zinc-400 transition hover:text-red-500"
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
                                                : "text-zinc-400 transition hover:text-red-500"
                                        }`
                                    }
                                >
                                    Watchlist
                                </NavLink>
                            </li>

                            <li>
                                <Link
                                    to="/upcoming"
                                    className="text-zinc-400 transition hover:text-red-500"
                                >
                                    Upcoming
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold ">
                            Resources
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.themoviedb.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 transition hover:text-red-500"
                                >
                                    TMDB API
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/Moksh-B"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 transition hover:text-red-500"
                                >
                                    GitHub
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 transition hover:text-red-500"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold ">Follow</h3>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Moksh-B"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-700 p-3 transition hover:border-red-500 hover:bg-red-500"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/moksh-bajaj-895965310"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-700 p-3 transition hover:border-red-500 hover:bg-red-500"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://x.com/MokshB12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-zinc-700 p-3 transition hover:border-red-500 hover:bg-red-500"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Reeva. All rights reserved.
                    </p>

                    <p className="flex items-center gap-2">
                        Built with
                        <HiHeart className="text-red-500" />
                    </p>
                </div>
            </div>
        </footer>
    )
})
