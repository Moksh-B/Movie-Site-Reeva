import { Swiper, SwiperSlide } from "swiper/react"
import { FaInfoCircle, FaDice } from "react-icons/fa"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { HiChevronLeft } from "react-icons/hi"
import { HiChevronRight } from "react-icons/hi2"
import { useMemo, useRef } from "react"
import { backdrop } from "./imageLink"
import { HeroSwiperSkeleton } from "../skeletons/heroSwiperSkeleton"
import { Link } from "react-router-dom"

export function HeroSwiper({ movies, genres = [] }) {

    const movieWithImage = movies?.filter((movie) => {
        return movie.backdrop_path
    })

    const genreMap = useMemo(() => {
        return Object.fromEntries(genres.map((genre) => [genre.id, genre.name]))
    }, [genres])

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <>
            {!movies?.length ? (
               <HeroSwiperSkeleton />
            ) : (
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[85vh]">
                    <button
                        ref={prevRef}
                        className="cursor-pointer border-2 border-white custom-prev absolute left-3 top-1/2 z-20 h-12 md:h-15 w-5 md:w-6 -translate-y-1/2 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110"
                    >
                        <HiChevronLeft size={28} />
                    </button>

                    <button
                        ref={nextRef}
                        className="cursor-pointer border-2 border-white custom-next absolute right-3 top-1/2 z-20 h-12 md:h-15 w-5 md:w-6 -translate-y-1/2 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110"
                    >
                        <HiChevronRight size={28} />
                    </button>
                    <Swiper
                        className="w-full h-full  bg-black"
                        spaceBetween={30}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    >
                        {movieWithImage.map((movie) => {
                            const stars = Math.round(movie.vote_average / 2)

                            return (
                                <SwiperSlide key={movie.id}>
                                    <div
                                        className="w-full h-full bg-cover bg-center bg-no-repeat "
                                        style={{
                                            backgroundImage: `url(${backdrop}${movie?.backdrop_path})`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 via-40% to-transparent"></div>
                                        <div className="absolute bottom-0 left-2 z-10  text-white p-10 pl-15 max-lg:pb-5 max-lg:pl-10">
                                            <div className="mb-1 md:mb-2">
                                                <h1 className="font-bold leading-tight text-[16px] sm:text-2xl md:text-3xl lg:text-5xl ">
                                                    {movie.title}
                                                </h1>

                                                <div className="mt-1 h-1 w-30 sm:w-50 md:w-70 lg:w-100 rounded-full bg-linear-to-r  from-red-600 via-red-400 to-transparent md:mt-2 0  lg:mt-3 "></div>
                                            </div>

                                            <div className="mb-1 sm:mb-1.5 lg:mb-2.5 flex flex-col text-sm lg:text-lg">
                                                <div className="hidden sm:flex items-center gap-6 mb-1 mt-2  sm:mt-0 ">
                                                    <p className="text-yellow-400 font-medium ">
                                                        {"⭐".repeat(stars)}
                                                        {"☆".repeat(
                                                            5 - stars,
                                                        )}{" "}
                                                        {movie.vote_average.toFixed(
                                                            1,
                                                        )}
                                                    </p>
                                                    <p>
                                                        📅
                                                        {new Date(
                                                            movie.release_date,
                                                        ).toLocaleDateString(
                                                            "en-GB",
                                                            {
                                                                day: "numeric",
                                                                month: "long",
                                                                year: "numeric",
                                                            },
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 md:mt-2">
                                                    {movie.genre_ids?.map(
                                                        (id) => (
                                                            <span
                                                                key={id}
                                                                className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1  text-[10px] md:text-[12px] lg:text-sm font-medium backdrop-blur-md transition-colors duration-300 hover:bg-white/20 "
                                                            >
                                                                {genreMap[id]}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <p className="mb-1 sm:mb-2 max-w-[90%] sm:max-w-[70%] lg:max-w-[45vw] text-[10px] line-clamp-2 sm:text-[12px] md:text-[14px] lg:text-base lg:line-clamp-3">
                                                {movie.overview}
                                            </p>
                                            <div className="flex gap-4 text-[12px] sm:text-sm md:text-base lg:text-lg">
                                                <Link to={`/movie/${movie.id}`}>
                                                    <button className="group flex items-center gap-2 rounded-xl bg-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 lg:px-6 lg:py-3 font-semibold text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                                                        <FaInfoCircle />
                                                        Details
                                                    </button>
                                                </Link>

                                                <button className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-2 py-1 sm:px-3 sm:py-2 md:px-4  lg:px-6 lg:py-3 font-semibold text-white cursor-pointer backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20">
                                                    <FaDice />
                                                    Surprise
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            )}
        </>
    )
}
