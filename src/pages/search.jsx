import { useState } from "react"
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2"
import { useSearchMoviesQuery } from "../features/movieAPI"
import { MovieCard } from "../components/movieCard"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"

export function Search() {
     const darkTheme = useSelector((state) => state.theme)
   const [searchParams, setSearchParams] = useSearchParams()

   const search = searchParams.get("q") || ""
    const { data, isFetching } = useSearchMoviesQuery(search, {
        skip: search.trim() === "",
    })

    return (
        <section className="mx-auto max-w-7xl px-6 pt-30 pb-5">
            <div className="relative mb-10">
                <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-zinc-400" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearchParams({ q: e.target.value })}
                    placeholder="Search movies..."
                    className={`w-full rounded-2xl border border-zinc-700  py-2 sm:py-4 pr-6 pl-14 text-base sm:text-lg  outline-none transition focus:border-red-500  ${darkTheme ? "bg-zinc-900 text-white" : "bg-white text-black"}`}
                />

                {search && (
                    <button
                        onClick={() => setSearchParams({})}
                        className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-zinc-400 transition hover:text-red-500"
                    >
                        <HiXMark />
                    </button>
                )}
            </div>

            {search === "" ? (
                <div className="flex h-50 sm:h-72 px-5 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-400">
                        Search your favourite movies 🎬
                    </h2>
                </div>
            ) : isFetching ? (
                <p className="text-center text-zinc-400">Searching...</p>
            ) : data?.results?.length ? (
                <div className="grid grid-cols-2 gap-8 justify-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {data.results.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            data={movie}
                            size="w-40 sm:w-43.75 md:w-50 lg:w-55"
                        />
                    ))}
                </div>
            ) : (
                <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60">
                    <span className="text-6xl">🎬</span>
                    <h2 className="mt-4 text-2xl font-bold text-white">
                        No Movies Found
                    </h2>
                    <p className="mt-2 text-zinc-400">
                        Try searching with another title.
                    </p>
                </div>
            )}
        </section>
    )
}
