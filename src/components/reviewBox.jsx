import { Link } from "react-router-dom"
import { HiStar } from "react-icons/hi2"
import { ReviewCard } from "./reviewCard"
import { useState } from "react"
import { ReviewCardSkeleton } from "../skeletons/reviewCardSkeleton"
import { useSelector } from "react-redux"

export function ReviewBox({ reviews = [], reviewCard, isLoading }) {
    const darkTheme = useSelector((state) => state.theme)
    const [expandedId, setExpandedId] = useState(null)
    return (
        <section className="space-y-6 p-3 md:p-9">
            <div className="mb-8 flex flex-col sm:flex-row justify-between mx-7 md:mx-2">
                <div>
                    <h2 className={`text-xl font-bold tracking-wide sm:text-2xl md:text-3xl ${darkTheme? 'text-white':'text-black'}`}>
                        Reviews
                    </h2>

                    <div className="mt-1 mb-2 md:mt-2 h-1 w-12 sm:w-16 rounded-full bg-red-600 "></div>
                </div>

                {reviews?.results?.length > 3 && (
                    <Link
                        to={`/movie/${reviews.id}/reviews`}
                        className="w-fit h-fit rounded-lg border border-red-500 px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                        View All ({reviews?.results?.length})
                    </Link>
                )}
            </div>

            <div
                className={`space-y-6 mx-auto ${reviews?.results?.length ? "sm:max-w-7xl" : "w-full"}`}
            >
                {isLoading ? (
                    <div className="space-y-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <ReviewCardSkeleton key={index}/>
                        ))}
                    </div>
                ) : reviews?.results?.length ? (
                    reviews?.results
                        ?.slice(0, 3)
                        .map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                expanded={expandedId === review.id}
                                onToggle={() =>
                                    setExpandedId(
                                        expandedId === review.id
                                            ? null
                                            : review.id,
                                    )
                                }
                            />
                        ))
                ) : (
                    <div className="flex min-h-30 flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/60 px-8 text-center backdrop-blur">
                        <span className="mb-4 text-[40px]">🎬</span>
                        <h2 className="text-[18px] font-bold text-white">
                            No Data Available
                        </h2>{" "}
                    </div>
                )}
            </div>
        </section>
    )
}
