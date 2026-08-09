import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MovieCard } from "../components/movieCard"

export function Watchlist() {
    const movies = useSelector((state) => state.watchlist)
    const darkTheme = useSelector((state) => state.theme)

    return (
        <section
            className={`min-h-screen  px-6 py-30  ${darkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black"}`}
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black">❤️ Watchlist</h1>

                        <p className="mt-2 text-zinc-400">
                            Your saved movies in one place.
                        </p>
                    </div>

                    {movies?.length > 0 && (
                        <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
                            {movies.length} Movies
                        </span>
                    )}
                </div>

                {movies?.length ? (
                    <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                data={movie}
                                size="w-40 sm:w-44 md:w-50 lg:w-55"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex h-[60vh] flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60">
                        <span className="text-7xl">❤️</span>

                        <h2 className="mt-6 text-3xl font-bold">
                            Your Watchlist is Empty
                        </h2>

                        <p className="mt-3 text-zinc-400">
                            Save movies to watch later.
                        </p>

                        <Link
                            to="/"
                            className="mt-8 rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
                        >
                            Browse Movies
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
