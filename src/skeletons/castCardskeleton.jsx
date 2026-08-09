export function CastCardSkeleton() {
    return (
        <div className="flex w-full flex-col items-center pt-1.5 text-center">
            {/* Profile */}
            <div className="h-47.5 md:h-53.75 w-32 md:w-36 overflow-hidden rounded-full  ">
                <div className="skeleton h-full w-full rounded-full"></div>
            </div>

            {/* Name */}
            <div className="mt-1 md:mt-1.5">
                <div className="skeleton h-4 w-28 rounded md:h-5 md:w-32"></div>
            </div>

            {/* Character */}
            <div className="mt-0.5">
                <div className="skeleton h-3 w-20 rounded md:h-4 md:w-24"></div>
            </div>
        </div>
    )
}
