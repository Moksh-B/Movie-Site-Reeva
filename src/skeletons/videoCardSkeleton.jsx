export function VideoCardSkeleton() {
    return (
        <div className="block">
            {/* Thumbnail */}
            <div className="relative h-[112.5px] w-[200px] overflow-hidden rounded-2xl sm:h-[140.6px] sm:w-[250px] md:h-[168.7px] md:w-[300px] lg:h-[180px] lg:w-[320px]">
                <div className="skeleton h-full w-full rounded-2xl"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/45 backdrop-blur">
                        <div className="skeleton h-4 w-4 rounded-full"></div>
                    </div>
                </div>
            </div>
 
            {/* Title */}
            <div className="mx-2 mt-2 pb-1">
                <div className="skeleton h-6 w-35 rounded"></div>
            </div>

            {/* Type */}
            <div className="mx-2 mt-1">
                <div className="skeleton h-6 w-20 rounded-full"></div>
            </div>
        </div>
    )
}
