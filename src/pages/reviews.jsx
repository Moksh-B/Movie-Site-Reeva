import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetMovieReviewsQuery } from "../features/movieAPI"
import { ReviewCard } from "../components/reviewCard"

export function Reviews() {
    const { id } = useParams()
    const { data: movieReviews } = useGetMovieReviewsQuery(id)
    const [expandedId, setExpandedId] = useState(null)
    return (
        <>
            <div className="space-y-6 mx-auto max-w-7xl px-6 pt-30 pb-5">
                {movieReviews?.results?.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        expanded={expandedId === review.id}
                        onToggle={() =>
                            setExpandedId(
                                expandedId === review.id ? null : review.id,
                            )
                        }
                    />
                ))}
            </div>
        </>
    )
}
