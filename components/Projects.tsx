"use client"

import { useRef } from "react"
import { Project } from "../lib/data"

export default function Projects({ projects }: { projects: Project[] }) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    // Pause all other videos (PRO UX 🔥)
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause()
      }
    })

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <section id="projects" className="py-24 px-6">

      <h2 className="text-4xl text-center mb-12 font-bold">
        Projects
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">

        {projects.map((p, i) => (
          <div key={i} className="w-[280px] relative group">

            {/* VIDEO */}
            <video
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              src={p.video}
              loop
              controls   // ✅ SHOW CONTROLS
              playsInline
              className={`rounded-xl w-full object-cover cursor-pointer ${
                p.type === "instagram"
                  ? "aspect-[9/16]"
                  : "aspect-video"
              }`}
              onClick={() => togglePlay(i)}
            />

            {/* OVERLAY */}
            <div
              onClick={() => togglePlay(i)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition cursor-pointer"
            >
              <span className="text-white text-xl font-semibold">
                ▶ / ❚❚
              </span>
            </div>

            <p className="mt-2 text-center text-gray-400">
              {p.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}