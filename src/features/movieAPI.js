import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const movieAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3/",
        prepareHeaders: (headers) => {
            headers.set("accept", "application/json")
            headers.set(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTk5M2FmZWU3NWEzMWEyMTYxOTVlM2U2YmI4OWIyZCIsIm5iZiI6MTY5MjA4MTAwMS44NjYsInN1YiI6IjY0ZGIxYjY5MDAxYmJkMDBhZGQ0NzY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SakyjxkhqgMuucq4Q1cg0r9YBIhYWMpE4t30KMgmCTo",
            )
            return headers
        },
    }),

    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () =>
                `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        }),
        getMoviesByGenre: builder.query({
            query: ({ genreId, pageNo }) =>
                `discover/movie?include_adult=false&language=en-US&page=${pageNo}&sort_by=popularity.desc&with_genres=${genreId}`,
        }),
        getMovieGenres: builder.query({
            query: () => `genre/movie/list?language=en`,
        }),
        getMovieDetails: builder.query({
            query: (id) => `movie/${id}`,
        }),
        getMovieCredits: builder.query({
            query: (id) => `movie/${id}/credits`,
        }),
        getMovieVideos: builder.query({
            query: (id) => `movie/${id}/videos`,
        }),
        getMovieImages: builder.query({
            query: (id) => `movie/${id}/images`,
        }),
        getMovieReviews: builder.query({
            query: (id) => `movie/${id}/reviews`,
        }),
        getSimilarMovies: builder.query({
            query: (id) => `movie/${id}/similar`,
        }),
        searchMovies: builder.query({
            query: (query) =>
                `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        }),
    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetMovieGenresQuery,
    useGetMoviesByGenreQuery,
    useGetMovieDetailsQuery,
    useGetMovieCreditsQuery,
    useGetMovieVideosQuery,
    useGetMovieImagesQuery,
    useGetMovieReviewsQuery,
    useGetSimilarMoviesQuery,
    useSearchMoviesQuery,
} = movieAPI
