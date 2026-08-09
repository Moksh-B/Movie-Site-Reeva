export function MovieCardSkeleton() {
    return (
        <div className="w-40 shrink-0 overflow-hidden rounded-xl bg-zinc-900 sm:w-43.75 md:w-50 lg:w-55">
            {/* Poster */}
            <div className="relative h-45 w-full overflow-hidden sm:h-52.5 md:h-60 lg:h-67.5">
                <div className="skeleton h-full w-full"></div>

                {/* Heart */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur">
                    <div className="skeleton h-4 w-4 rounded-full"></div>
                </div>
            </div>

            {/* Details */}
            <div className="p-2.5 pt-1.5 sm:p-3 sm:pt-2">
                {/* Title */}

                <div className="skeleton h-4 w-4/5 rounded"></div>

                {/* Rating & Year */}
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="skeleton h-4 w-4 rounded-full"></div>
                        <div className="skeleton h-3 w-10 rounded"></div>
                    </div>

                    <div className="skeleton h-3 w-8 rounded"></div>
                </div>
            </div>
        </div>
    )
}
