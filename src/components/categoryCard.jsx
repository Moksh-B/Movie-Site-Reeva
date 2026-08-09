import React from "react"
import { HiArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

export const CategoryCard = React.memo(function CategoryCard({ category }) {
    return (
        <Link
            to={`/category/${category.code}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/10"
        >
            <img
                src={category.image}
                alt={category.category}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-0 bg-red-600/0 transition duration-500 group-hover:bg-red-600/10" />

            <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-md">
                    {category.icon}
                </div>

                <h2 className="text-3xl font-bold text-white">
                    {category.category}
                </h2>

                <div className="mt-1 flex items-center gap-2 font-medium text-red-400 transition duration-300 group-hover:translate-x-2">
                    Explore
                    <HiArrowRight />
                </div>
            </div>
        </Link>
    )
})
