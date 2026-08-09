import { HeroSwiper } from "../components/heroSwiper"
import { CardSwiper } from "../components/cardSwiper"
import { MovieCard } from "../components/movieCard"
import { MovieCardSkeleton } from "../skeletons/movieCardSkeleton"
import {
    useGetMovieGenresQuery,
    useGetMoviesByGenreQuery,
    useGetPopularMoviesQuery,
} from "../features/movieAPI"
import { useSelector } from "react-redux"

export function Home() {
const darkTheme = useSelector((state) => state.theme)

    const popularMovies = useGetPopularMoviesQuery()
    const horrorMovies = useGetMoviesByGenreQuery({
        genreId: 27,
        
        pageNo: 1,
    })

    const comedyMovies = useGetMoviesByGenreQuery({
        genreId: 35,
        pageNo: 1,
    })

    const romanceMovies = useGetMoviesByGenreQuery({
        genreId: 10749,
        pageNo: 1,
    })

    const actionMovies = useGetMoviesByGenreQuery({
        genreId: 28,
        pageNo: 1,
    })

    const { data: fetchGenres } = useGetMovieGenresQuery()
    const genres = fetchGenres?.genres

    return (
        <>
            <div className={`min-h-screen ${darkTheme?'bg-[#0F0F0F] text-white':'bg-white text-black'} scrollbar-none pt-5`}>
                <HeroSwiper
                    movies={popularMovies?.data?.results}
                    genres={genres}
                />
                <CardSwiper
                    items={popularMovies?.data?.results}
                    Skeleton={MovieCardSkeleton}
                    isLoading={popularMovies?.isLoading}
                    category="Trending"
                    CardComponent={MovieCard}
                />
                <CardSwiper
                    items={comedyMovies?.data?.results}
                    category="Comedy"
                    CardComponent={MovieCard}
                    Skeleton = {MovieCardSkeleton}
                    isLoading={comedyMovies?.isLoading}
                />
                <CardSwiper
                    items={horrorMovies?.data?.results}
                    category="Horror"
                    CardComponent={MovieCard}
                    Skeleton = {MovieCardSkeleton}
                    isLoading={horrorMovies?.isLoading}
                />
                <CardSwiper
                    items={romanceMovies?.data?.results}
                    category="Romance"
                    CardComponent={MovieCard}
                    Skeleton = {MovieCardSkeleton}
                    isLoading={romanceMovies?.isLoading}
                />
                <CardSwiper
                    items={actionMovies?.data?.results}
                    category="Action"
                    CardComponent={MovieCard}
                    Skeleton = {MovieCardSkeleton}
                    isLoading={actionMovies?.isLoading}
                />
            </div>
        </>
    )
}
