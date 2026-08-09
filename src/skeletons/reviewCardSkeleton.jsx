export function ReviewCardSkeleton() {
    return (
        <div className="group rounded-3xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 py-4 sm:px-6 px-2.5 sm:py-4 shadow-lg">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-10 sm:h-14 w-10 sm:w-14 items-center justify-center rounded-full">
                        <div className="skeleton h-full w-full rounded-full"></div>
                    </div>

                    <div>
                        {/* Author */}
                        <div className="skeleton h-5 w-32 rounded sm:h-6 sm:w-40"></div>

                        {/* Date */}
                        <div className="mt-1 flex items-center gap-2 text-[12px] sm:text-[14px]">
                            <div className="skeleton h-4 w-4 rounded-full"></div>
                            <div className="skeleton h-4 w-15 rounded sm:w-22"></div>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 rounded-full px-2 sm:px-2.5 py-2 sm:py-2.5 ring-1 ring-yellow-500/20">
                    <div className="skeleton h-4 w-4 rounded-full"></div>
                    <div className="skeleton h-4 w-10 rounded"></div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-3 sm:my-4 md:my-5 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

            {/* Review Content */}
            <div className="space-y-3">
                <div className="skeleton h-4 w-full rounded sm:h-5"></div>
                <div className="skeleton h-4 w-11/12 rounded sm:h-5"></div>
                <div className="skeleton h-4 w-9/12 rounded sm:h-5"></div>
            </div>

            {/* Button */}
            <div className="mt-3 sm:mt-6 flex items-center justify-end">
                <div className="skeleton h-[38px] w-[102px] rounded-lg"></div>
            </div>
        </div>
    )
}
