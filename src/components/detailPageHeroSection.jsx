import React, { useMemo, useState } from "react"
import { backdrop, poster } from "../components/imageLink"
import { HiPlay, HiPlus } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import { addMovie } from "../features/watchlistSlice"
import { VideoModal } from "./videoModal"

export function DetailPageHeroSection({ movieData, movieVideos }) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const trailer =
        movieVideos?.results?.find(
            (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer" &&
                video.official === true,
        ) ||
        movieVideos?.results?.find(
            (video) => video.site === "YouTube" && video.type === "Trailer",
        )

    console.log(movieData)

    return (
        <section className="relative min-h-screen overflow-hidden text-white ">
            <img
                src={`${backdrop}${movieData?.backdrop_path}`}
                alt={movieData?.title}
                className="absolute inset-0 h-[50vh] sm:h-[60vh] lg:h-screen w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/85 via-40% to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent"></div>

            <div className="relative z-10 mx-auto flex min-h-screen items-center px-3 pt-35 pb-10 md:px-7 md:pt-30 lg:px-10 lg:pt-15">
                <div className="flex flex-col items-center gap-6 sm:gap-12 lg:flex-row">
                    <img
                        src={`${poster}${movieData?.poster_path}`}
                        alt={movieData?.title}
                        className="w-50 sm:w-55 md:w-70 lg:w-80 rounded-2xl shadow-2xl ring-1 ring-white/10 "
                    />

                    <div className="w-full space-y-3">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight ">
                                {movieData?.title}
                            </h1>

                            <div className="mt-.5 sm:mt-1 h-1 w-40 rounded-full bg-linear-to-r from-red-600 via-red-500 to-transparent"></div>
                        </div>

                        <div className="text-[15px] sm:text-[18px] flex flex-wrap items-center gap-x-3 text-gray-300">
                            <p className="font-semibold text-yellow-400">
                                ⭐ {movieData?.vote_average.toFixed(1)}
                            </p>

                            <p>
                                📅{" "}
                                {new Date(
                                    movieData?.release_date,
                                ).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>

                            <p>
                                ⏱ {Math.floor(movieData?.runtime / 60)}h{" "}
                                {movieData?.runtime % 60}m
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {movieData?.genres?.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="rounded-full border border-white/15 bg-white/10 px-3 sm:px-5 py-1 sm:py-1.5 text-[14px] font-medium backdrop-blur-md"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        <div className="sm:space-y-1">
                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Overview
                            </h2>

                            <p className="leading-8 text-gray-300 line-clamp-2 md:line-clamp-3 lg:max-w-4xl">
                                {movieData?.overview}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2  text-[14px] sm:text-base">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-5 py-1.5 sm:py-2 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600/20"
                            >
                                <HiPlay className="text-[14px] sm:text-base" />
                                Watch Trailer
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(
                                        addMovie({
                                            id: movieData.id,
                                            title: movieData.title,
                                            poster_path: movieData.poster_path,
                                            vote_average:
                                                movieData.vote_average,
                                            release_date:
                                                movieData.release_date,
                                        }),
                                    )
                                }}
                                className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/10 px-3 sm:px-5 py-1.5 sm:py-2 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/20"
                            >
                                <HiPlus className="text-[14px] sm:text-base transition group-hover:rotate-90" />
                                <span>Watchlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <VideoModal
                    data={trailer}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            )}
        </section>
    )
}
