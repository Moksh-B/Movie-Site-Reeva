import React from 'react'
import { profile } from "./imageLink"
import { useSelector } from 'react-redux'

export const CastCard = React.memo(  function CastCard({data}) {
     const darkTheme = useSelector((state) => state.theme)
  return (
      <div className="flex w-full flex-col items-center text-center pt-1.5">
          <img
              src={`${profile}${data?.profile_path}`}
              alt={data?.name}
              className="w-32 md:w-36 rounded-full object-cover border-2 border-zinc-700 shadow-lg transition duration-300 hover:scale-105 hover:border-red-500"
          />

          <h3
              className={`mt-1 md:mt-1.5 text-sm md:text-base font-semibold ${darkTheme ? "text-white" : "text-black"} line-clamp-1`}
          >
              {data?.name}
          </h3>

          <p className="mt-.5 text-xs md:text-[14px] text-gray-400 line-clamp-2">
              {data?.character}
          </p>
      </div>
  )
})