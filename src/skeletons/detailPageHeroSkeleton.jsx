export function DetailPageHeroSkeleton() {
    return (
        <section className="relative min-h-screen overflow-hidden text-white">
            {/* Background */}
            <div className="skeleton absolute inset-0 h-[50vh] w-full sm:h-[60vh] lg:h-screen" />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/85 via-40% to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent"></div>

            <div className="relative z-10 mx-auto flex min-h-screen items-center px-3 pt-35 pb-10 md:px-7 md:pt-30 lg:px-10 lg:pt-15">
                <div className="w-full flex flex-col items-center gap-6 sm:gap-12 lg:flex-row">
                    {/* Poster */}
                    <div className="flex-0">
                        <div className="skeleton h-[300px] sm:h-[330px] md:h-[420px] lg:h-[480px] w-50 sm:w-55 md:w-70 lg:w-80 rounded-2xl" />
                    </div>

                    <div className="w-full space-y-3">
                        {/* Title */}
                        <div>
                            <div className="skeleton h-8 w-56 rounded sm:h-10 sm:w-72 md:h-12 md:w-96 lg:h-14 lg:w-[520px]" />

                            <div className="skeleton mt-.5 mt-1 h-1 w-40 rounded sm:w-48"></div>
                        </div>

                        {/* Rating / Date / Runtime */}
                        <div className="flex flex-wrap items-center gap-x-3 text-[15px] text-gray-300 sm:text-[18px]">
                            <div className="skeleton h-5 w-16 rounded"></div>

                            <div className="skeleton h-5 w-40 rounded"></div>

                            <div className="skeleton h-5 w-20 rounded"></div>
                        </div>

                        {/* Genres */} 
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <div className="skeleton h-8 w-20 rounded-full sm:h-9 sm:w-24"></div>
                            <div className="skeleton h-8 w-24 rounded-full sm:h-9 sm:w-28"></div>
                            <div className="skeleton h-8 w-18 rounded-full sm:h-9 sm:w-22"></div>
                        </div>

                        {/* Overview */}
                        <div className="sm:space-y-1">
                            <div className="skeleton h-8 w-40 rounded sm:h-10 sm:w-52"></div>

                            <div className="mt-2 space-y-2.5 ">
                                <div className="skeleton h-4 w-full rounded sm:h-6"></div>
                                <div className="skeleton h-4 w-full rounded sm:h-6 hidden sm:block md:hidden"></div>
                                <div className="skeleton h-4 w-3/4 rounded sm:h-6"></div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2 text-[14px] sm:text-base">
                            <div className="skeleton h-8 w-32 rounded-full sm:h-10 sm:w-40"></div>

                            <div className="skeleton h-8 w-26 rounded-full sm:h-10 sm:w-33"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
