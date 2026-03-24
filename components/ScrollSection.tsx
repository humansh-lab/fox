"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <motion.div style={{ y, opacity }} className="text-center max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Smooth Scroll Experience
        </h2>
        <p className="text-gray-400">
          This section animates beautifully when you scroll.
        </p>
      </motion.div>
    </section>
  )
}