import React from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

export function VideoModal({data, setIsOpen, isOpen}) {
  return createPortal(
      <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      >
          <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
          >
              <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-12 right-0 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-red-600"
              >
                  <HiXMark />
              </button>

              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${data.key}?autoplay=1`}
                      title={data.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                  />
              </div>

              <h2 className="mt-3 text-lg font-semibold text-white">
                  {data.name}
              </h2>
          </div>
      </div>,
      document.body,
  )
}