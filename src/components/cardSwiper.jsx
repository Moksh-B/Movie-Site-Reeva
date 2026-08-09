import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"

import "swiper/css"
import "swiper/css/navigation"

import { MovieCard } from "./movieCard"
import { useRef } from "react"
import { useSelector } from "react-redux"

export function CardSwiper({
    items = [],
    category,
    isLoading,
    CardComponent,
    Skeleton,
    slideWidth = "",
}) {
    const darkTheme = useSelector((state) => state.theme)

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="relative px-10 py-4">
            <div className="mb-3 sm:mb-4 md:mb-5">
                <h2
                    className={`text-xl font-bold tracking-wide ${darkTheme ? "text-white" : "text-black"} sm:text-2xl md:text-3xl`}
                >
                    {category}
                </h2>
                <div className="mt-1 md:mt-2 h-1 w-12 sm:w-16 rounded-full bg-red-600 "></div>
            </div>
            {isLoading ? (
                <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            ) : items.length ? (
                <>
                    <button
                        ref={prevRef}
                        className={`cursor-pointer border  custom-prev absolute left-4 top-1/2 z-20 flex h-10 w-5 -translate-y-1/2 items-center justify-center rounded-full ${darkTheme ? "bg-zinc-900/90 border-white" : "bg-white border-black"} text-white shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                        <HiChevronLeft
                            size={22}
                            className={`${darkTheme ? `text-white` : "text-black"}`}
                        />
                    </button>

                    <button
                        ref={nextRef}
                        className={`cursor-pointer border custom-next absolute right-3 top-1/2 z-20 flex h-10 w-5 -translate-y-1/2 items-center justify-center rounded-full ${darkTheme ? "bg-zinc-900/90 border-white" : "bg-white border-black"} text-white shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                        <HiChevronRight size={22} className={`${darkTheme ? `text-white` : "text-black"}`}/>
                    </button>
                    <Swiper
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}
                        spaceBetween={16}
                        slidesPerView="auto"
                        slidesOffsetBefore={10}
                        slidesOffsetAfter={10}
                    >
                        {items.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className={
                                    slideWidth ||
                                    "w-40! sm:w-43.75! md:w-50! lg:w-55!"
                                }
                            >
                                <CardComponent data={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <div
                    className={`flex min-h-30 flex-col items-center justify-center rounded-3xl border border-zinc-800 ${darkTheme ? "bg-zinc-900/60 text-white" : "bg-white text-black"} px-8 text-center backdrop-blur`}
                >
                    <span className="mb-4 text-[40px]">🎬</span>
                    <h2 className="text-[18px] font-bold ">
                        No Data Available
                    </h2>
                </div>
            )}
        </div>
    )
}
