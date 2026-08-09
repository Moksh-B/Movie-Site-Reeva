import React, { useState } from "react"
import { HiPlayCircle, HiXMark } from "react-icons/hi2"
import { useSelector } from "react-redux"
import { VideoModal } from "./videoModal"

export const VideoCard = React.memo(function VideoCard({ data }) {
    const darkTheme = useSelector((state) => state.theme)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="group block w-full cursor-pointer text-left"
            >
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <img
                        src={`https://img.youtube.com/vi/${data.key}/hqdefault.jpg`}
                        alt={data.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-red-600">
                            <HiPlayCircle size={20} className="text-white" />
                        </div>
                    </div>
                </div>

                <div
                    className={`mx-2 mt-2 line-clamp-1 pb-1 text-base font-semibold leading-6 transition duration-300 sm:text-[18px] group-hover:text-red-500 ${
                        darkTheme ? "text-white" : "text-black"
                    }`}
                >
                    {data.name}
                </div>

                <div className="mx-2 mt-1 flex w-fit items-center justify-between rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                    {data.type}
                </div>
            </button>

            {isOpen && <VideoModal data={data} isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </>
    )
})
