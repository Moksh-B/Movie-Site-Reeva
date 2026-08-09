import React from "react"
import { Link } from "react-router-dom"
import { HiHeart, HiOutlineHeart } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux"
import { poster } from "./imageLink"
import { addMovie, removeMovie } from "../features/watchlistSlice"

export const MovieCard = React.memo(function MovieCard({ data, size }) {
    const dispatch = useDispatch()

    const watchlist = useSelector((state) => state.watchlist)
    const darkTheme = useSelector((state) => state.theme)

    const isInWatchlist = watchlist?.some((movie) => movie.id === data.id)

    const handleWatchlist = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (isInWatchlist) {
            dispatch(removeMovie(data.id))
        } else {
            dispatch(
                addMovie({
                    id: data.id,
                    title: data.title,
                    poster_path: data.poster_path,
                    vote_average: data.vote_average,
                    release_date: data.release_date,
                }),
            )
        }
    }

    return (
        <Link to={`/movie/${data.id}`}>
            <div
                className={`${
                    size || "w-full"
                } group shrink-0 overflow-hidden rounded-xl  ${
                    darkTheme
                        ? "bg-zinc-900"
                        : "bg-white border border-zinc-200"
                }`}
            >
                {/* Poster */}
                <div className="relative h-45 w-full overflow-hidden sm:h-52.5 md:h-60 lg:h-67.5">
                    <img
                        src={`${poster}${data.poster_path}`}
                        alt={data.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                    />

                    {/* Watchlist Button */}
                    <button
                        onClick={handleWatchlist}
                        className={`absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
                            darkTheme
                                ? "bg-black/60"
                                : "bg-white/90 border border-zinc-200"
                        }`}
                    >
                        {isInWatchlist ? (
                            <HiHeart className="text-xl text-red-500" />
                        ) : (
                            <HiOutlineHeart
                                className={`text-xl ${
                                    darkTheme ? "text-white" : "text-zinc-700"
                                }`}
                            />
                        )}
                    </button>
                </div>

                {/* Details */}
                <div className="p-2.5 pt-1.5 text-[12px] sm:p-3 sm:pt-2 sm:text-[14px] md:text-base">
                    <p
                        className={`truncate font-semibold ${
                            darkTheme ? "text-white" : "text-zinc-900"
                        }`}
                    >
                        {data.title}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium text-yellow-400">
                            ⭐ {data.vote_average.toFixed(1)}
                        </span>

                        <span
                            className={`text-sm ${
                                darkTheme ? "text-gray-400" : "text-zinc-500"
                            }`}
                        >
                            {data.release_date?.slice(0, 4)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
})
