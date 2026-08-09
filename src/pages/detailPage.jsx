import React, { useMemo } from "react"
import { useParams } from "react-router-dom"
import {
    useGetMovieCreditsQuery,
    useGetMovieDetailsQuery,
    useGetMovieImagesQuery,
    useGetMovieReviewsQuery,
    useGetMovieVideosQuery,
    useGetSimilarMoviesQuery,
} from "../features/movieAPI"
import { CardSwiper } from "../components/cardSwiper"
import { HiPlay, HiPlus } from "react-icons/hi2"
import { CastCard } from "../components/castCard"
import { MovieCard } from "../components/movieCard"
import { ReviewCard } from "../components/reviewCard"
import { ReviewBox } from "../components/reviewBox"
import { ImageCard } from "../components/imageCard"
import { VideoCard } from "../components/videoCard"
import { MovieCardSkeleton } from "../skeletons/movieCardSkeleton"
import { CastCardSkeleton } from "../skeletons/castCardskeleton"
import { ImageCardSkeleton } from "../skeletons/imageCardSkeleton"
import { VideoCardSkeleton } from "../skeletons/videoCardSkeleton"
import { DetailPageHeroSkeleton } from "../skeletons/detailPageHeroSkeleton"
import { DetailPageHeroSection } from "../components/detailPageHeroSection"

export function DetailPage() {
    const { id } = useParams()

    const { data: movieData, isLoading: movieDataLoading } =
        useGetMovieDetailsQuery(id)
    const { data: movieCredits, isLoading: movieCreditsLoading } =
        useGetMovieCreditsQuery(id)
    const { data: movieVideos, isLoading: movieVideosLoading } =
        useGetMovieVideosQuery(id)
    const { data: movieImages, isLoading: movieImagesLoading } =
        useGetMovieImagesQuery(id)
    const { data: movieReviews, isLoading: movieReviewsLoading } =
        useGetMovieReviewsQuery(id)
    const { data: similarMovies, isLoading: similarMoviesLoading } =
        useGetSimilarMoviesQuery(id)

    const casts =
        movieCredits?.cast
            .filter((cast) => {
                return cast.profile_path
            })
            .slice(0, 12) || []

    return (
        <>
            {movieDataLoading ? (
                <DetailPageHeroSkeleton />
            ) : (
                <DetailPageHeroSection
                    movieData={movieData}
                    movieVideos={movieVideos}
                />
            )}

            <div className="my-4 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            <CardSwiper
                items={casts}
                category="Casts"
                CardComponent={CastCard}
                Skeleton={CastCardSkeleton}
                isLoading={movieCreditsLoading}
            />

            <div className="my-4 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            <CardSwiper
                items={movieImages?.backdrops}
                category="Photos"
                CardComponent={ImageCard}
                Skeleton={ImageCardSkeleton}
                isLoading={movieImagesLoading}
                slideWidth="w-50! sm:w-62.5! md:w-75! lg:w-[320px]! "
            />

            <div className="my-4 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            <CardSwiper
                items={movieVideos?.results?.filter(
                    (video) => video.site === "YouTube",
                )}
                category="Official Videos"
                CardComponent={VideoCard}
                Skeleton={VideoCardSkeleton}
                isLoading={movieVideosLoading}
                slideWidth="w-50! sm:w-62.5! md:w-75! lg:w-[320px]! "
            />

            <div className="my-4 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            <ReviewBox
                reviews={movieReviews}
                reviewCard={ReviewCard}
                isLoading={movieReviewsLoading}
            />

            <div className="my-4 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            <CardSwiper
                items={similarMovies?.results}
                category="Similar Movies"
                CardComponent={MovieCard}
                Skeleton={MovieCardSkeleton}
                isLoading={similarMoviesLoading}
            />
        </>
    )
}
