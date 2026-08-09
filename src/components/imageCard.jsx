import React from "react"
import { poster } from "./imageLink"

export const ImageCard = React.memo(function ImageCard({ data }) {
    return (
        <div className="group overflow-hidden rounded-2xl border">
            <img
                src={`${poster}${data.file_path}`}
                alt="Movie Scene"
                className="w-full rounded-xl object-cover transition duration-500 group-hover:scale-110"
            />
        </div>
    )
})
