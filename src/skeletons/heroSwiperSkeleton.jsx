import React from "react"

export function HeroSwiperSkeleton() {
    return (
        <div className="relative h-[40vh] w-full overflow-hidden bg-zinc-900 sm:h-[50vh] md:h-[60vh] lg:h-[85vh]">
            {/* Background */}
            <div className="absolute inset-0 skeleton" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 via-40% to-transparent" />

            {/* Navigation Buttons */}
            <div className="absolute left-3 top-1/2 z-20 flex h-12 w-5 -translate-y-1/2 items-center justify-center rounded-full skeleton md:h-15 md:w-6" />

            <div className="absolute right-3 top-1/2 z-20 flex h-12 w-5 -translate-y-1/2 items-center justify-center rounded-full skeleton md:h-15 md:w-6" />

            {/* Content */}
            <div className="absolute bottom-0 left-2 z-10 p-10 pl-15 max-lg:pb-5 max-lg:pl-10">
                {/* Title */}
                <div className="mb-1 md:mb-2">
                    <div className="skeleton h-5 w-44 rounded sm:h-8 sm:w-72 md:h-10 md:w-96 lg:h-14 lg:w-130"></div>

                    <div className="skeleton mt-1 h-1 w-30 rounded sm:w-50 md:mt-2 md:w-70 lg:mt-3 lg:w-100"></div>
                </div>

                {/* Rating + Date */}
                <div className="mb-1 sm:mb-1.5 lg:mb-2.5 flex flex-col text-sm lg:text-lg">
                    <div className="hidden items-center gap-6 sm:flex">
                        <div className="skeleton h-5 w-32 rounded"></div>

                        <div className="skeleton h-5 w-40 rounded"></div>
                    </div>

                    {/* Genres */}
                    <div className="mt-1 flex flex-wrap gap-1.5 sm:gap-2 md:mt-2">
                        <div className="skeleton h-7 w-18 rounded-full"></div>
                        <div className="skeleton h-7 w-22 rounded-full"></div>
                        <div className="skeleton h-7 w-20 rounded-full"></div>
                    </div>
                </div>

                {/* Overview */}
                <div className="mb-2 max-w-[90%] space-y-2 sm:max-w-[70%] lg:max-w-[45vw]">
                    <div className="skeleton h-3 w-full rounded sm:h-4"></div>
                    <div className="skeleton h-3 w-11/12 rounded sm:h-4"></div>
                    <div className="skeleton h-3 w-11/12 rounded sm:h-4 hidden lg:block"></div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <div className="skeleton h-8 w-24 rounded-xl sm:h-10 sm:w-30 md:h-11 md:w-34 lg:h-13 lg:w-40"></div>

                    <div className="skeleton h-8 w-24 rounded-xl sm:h-10 sm:w-30 md:h-11 md:w-34 lg:h-13 lg:w-40"></div>
                </div>
            </div>
        </div>
    )
}
