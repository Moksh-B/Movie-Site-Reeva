import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetMoviesByGenreQuery } from "../features/movieAPI"
import { MovieCard } from "../components/movieCard"
import { PageChangingButtons } from "../components/pageChangingButtons"
import { MovieCardSkeleton } from "../skeletons/movieCardSkeleton"
import { useSelector } from "react-redux"

export default function Category() {
    const darkTheme = useSelector((state)=> state.theme)

    const { code } = useParams()
    const [pageNo, setPageNo] = useState(1)
    const { data, isLoading, isFetching } = useGetMoviesByGenreQuery({
        genreId: code,
        pageNo,
    })

    return (
        <section className="mx-auto max-w-7xl px-6 pt-30 pb-5">
            <h1 className={`mb-10 text-4xl font-bold ${darkTheme? 'text-white':'text-black'}`}>Movies</h1>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
                {isLoading || isFetching
                    ? Array.from({ length: 15 }).map((_, index) => (
                          <MovieCardSkeleton key={index} />
                      ))
                    : data?.results?.map((movie) => (
                          <MovieCard
                              key={movie.id}
                              data={movie}
                              size="w-40 sm:w-43.75 md:w-50 lg:w-55"
                          />
                      ))}
            </div>

            {!isLoading && (
                <PageChangingButtons pageNo={pageNo} setPageNo={setPageNo} />
            )}
        </section>
    )
}
