import React from "react"
import { useSelector } from "react-redux"

export function PageChangingButtons({ pageNo, setPageNo }) {
    const darkTheme = useSelector((state) => state.theme)

    return (
        <div className="mt-10 flex items-center justify-center gap-4">
            <button
                onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
                disabled={pageNo === 1}
                className={`group rounded-xl px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 disabled:cursor-not-allowed ${
                    darkTheme
                        ? "border border-zinc-800 bg-zinc-900 text-white hover:border-red-500 hover:bg-red-600 disabled:border-zinc-800 disabled:bg-zinc-900 disabled:text-zinc-500"
                        : "border border-zinc-300 bg-white text-zinc-900 hover:border-red-500 hover:bg-red-600 hover:text-white disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400"
                }`}
            >
                ← Previous
            </button>

            <div
                className={`rounded-xl px-4 sm:px-6 py-2 text-base sm:text-lg font-semibold shadow-lg ${
                    darkTheme
                        ? "border border-zinc-800 bg-zinc-900 text-white shadow-red-500/10"
                        : "border border-zinc-300 bg-white text-zinc-900 shadow-zinc-200"
                }`}
            >
                <span className={darkTheme ? "text-zinc-400" : "text-zinc-500"}>
                    Page
                </span>{" "}
                <span className="text-red-500">{pageNo}</span>
            </div>

            <button
                onClick={() => setPageNo((prev) => prev + 1)}
                className={`group rounded-xl px-4 sm:px-6 py-2 font-medium transition-all duration-300 disabled:cursor-not-allowed ${
                    darkTheme
                        ? "border border-zinc-800 bg-zinc-900 text-white hover:border-red-500 hover:bg-red-600 disabled:border-zinc-800 disabled:bg-zinc-900 disabled:text-zinc-500"
                        : "border border-zinc-300 bg-white text-zinc-900 hover:border-red-500 hover:bg-red-600 hover:text-white disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400"
                }`}
            >
                Next →
            </button>
        </div>
    )
}
