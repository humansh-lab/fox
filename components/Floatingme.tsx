"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function FloatingMe() {
  const { scrollYProgress } = useScroll()

  // Smooth motion
  const rawX = useTransform(scrollYProgress, [0, 0.5, 1], ["-60vw", "0vw", "60vw"])
  const rawY = useTransform(scrollYProgress, [0, 1], ["10vh", "-10vh"])
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.4, 1.2])

  const x = useSpring(rawX, { stiffness: 30, damping: 25 })
  const y = useSpring(rawY, { stiffness: 30, damping: 25 })
  const scale = useSpring(rawScale, { stiffness: 30, damping: 25 })

  // 👉 STRICT SWITCH (NO OVERLAP)
  const stage = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2])

  return (
    <motion.div
      style={{ x, y, scale }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
    >
      <div className="relative w-[85vw] h-[85vh] opacity-60">

        {/* LEFT */}
        <motion.div
          style={{
            opacity: useTransform(stage, [0, 0.9, 1], [1, 1, 0]),
          }}
          className="absolute inset-0"
        >
          <Image src="/me-left.png" alt="" fill className="object-contain" priority />
        </motion.div>

        {/* CENTER */}
        <motion.div
          style={{
            opacity: useTransform(stage, [0.9, 1, 1.9, 2], [0, 1, 1, 0]),
          }}
          className="absolute inset-0"
        >
          <Image src="/me-center.png" alt="" fill className="object-contain" />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={{
            opacity: useTransform(stage, [1.9, 2], [0, 1]),
          }}
          className="absolute inset-0"
        >
          <Image src="/me-right.png" alt="" fill className="object-contain" />
        </motion.div>

      </div>
    </motion.div>
  )
}