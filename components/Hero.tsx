"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"

export default function Hero() {
  const { scrollY } = useScroll()

  // Scroll scatter
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, 150])
  const y3 = useTransform(scrollY, [0, 500], [0, -200])
  const y4 = useTransform(scrollY, [0, 500], [0, 200])

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]">

      {/* TEXT */}
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-widest z-10">
        FOX
      </h1>

      {/* IMAGE COMMON STYLE */}
      {/* Top Left */}
      <motion.div
        style={{ y: y1 }}
        whileHover={{ scale: 1.1, y: -20 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute top-[10%] left-[5%] sm:left-[10%]"
      >
        <Image
          src="/img1-new.jpg"
          alt=""
          width={160}
          height={160}
          className="sm:w-[200px] sm:h-[200px] rounded-xl object-cover"
        />
      </motion.div>

      {/* Top Right */}
      <motion.div
        style={{ y: y2 }}
        whileHover={{ scale: 1.1, y: -20 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute top-[8%] right-[5%] sm:right-[10%]"
      >
        <Image
          src="/img2-new.jpg"
          alt=""
          width={160}
          height={160}
          className="sm:w-[220px] sm:h-[220px] rounded-xl object-cover"
        />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        style={{ y: y3 }}
        whileHover={{ scale: 1.1, y: -20 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute bottom-[10%] left-[5%] sm:left-[15%]"
      >
        <Image
          src="/img3-new.jpg"
          alt=""
          width={140}
          height={140}
          className="sm:w-[180px] sm:h-[180px] rounded-xl object-cover"
        />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        style={{ y: y4 }}
        whileHover={{ scale: 1.1, y: -20 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute bottom-[12%] right-[5%] sm:right-[15%]"
      >
        <Image
          src="/img4-new.jpg"
          alt=""
          width={150}
          height={150}
          className="sm:w-[200px] sm:h-[200px] rounded-xl object-cover"
        />
      </motion.div>

    </section>
  )
}