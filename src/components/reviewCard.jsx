import React from "react"
import { HiStar, HiCalendarDays } from "react-icons/hi2"
import { useSelector } from "react-redux"

export const ReviewCard = React.memo(function ReviewCard({
    review,
    expanded,
    onToggle,
}) {
    const rating = review.author_details?.rating
    const darkTheme = useSelector((state) => state.theme)

    return (
        <div
            className={`group rounded-3xl border py-4 sm:px-6 px-2.5 sm:py-4 shadow-lg transition-all duration-300 hover:border-red-500/40 hover:shadow-red-500/10 ${
                darkTheme
                    ? "border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900/95 to-zinc-950"
                    : "border-zinc-200 bg-white"
            }`}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 sm:h-14 w-10 sm:w-14 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-700 text-base sm:text-3xl font-bold text-white shadow-md">
                        {review.author.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h3
                            className={`text-base sm:text-xl font-semibold ${
                                darkTheme ? "text-white" : "text-zinc-900"
                            }`}
                        >
                            {review.author}
                        </h3>

                        <div
                            className={`mt-1 flex items-center gap-2 text-[12px] sm:text-[14px] ${
                                darkTheme ? "text-zinc-400" : "text-zinc-500"
                            }`}
                        >
                            <HiCalendarDays />
                            {new Date(review.created_at).toLocaleDateString()}
                        </div>
                    </div>
                </div>

                {rating && (
                    <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 sm:px-3 py-1 sm:py-1.5 text-[12px] sm:text-[14px] font-medium text-yellow-400 ring-1 ring-yellow-500/20">
                        <HiStar className="text-yellow-400" />
                        {rating}/10
                    </div>
                )}
            </div>

            <div
                className={`my-3 sm:my-4 md:my-5 h-px bg-linear-to-r from-transparent ${
                    darkTheme ? "via-zinc-700" : "via-zinc-300"
                } to-transparent`}
            />

            <p
                className={`leading-7 text-sm sm:text-base ${
                    darkTheme ? "text-zinc-300" : "text-zinc-700"
                } ${expanded ? "" : "line-clamp-3"}`}
            >
                {review.content}
            </p>

            <div className="mt-3 sm:mt-6 flex items-center justify-end">
                {review.content.length > 250 && (
                    <button
                        onClick={onToggle}
                        className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                        {expanded ? "Show Less" : "Read More"}
                    </button>
                )}
            </div>
        </div>
    )
})
