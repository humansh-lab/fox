"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      <div className="flex flex-col items-center gap-4">

        {/* FOX TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold tracking-widest"
        >
          FOX
        </motion.h1>

        {/* LOADING LINE */}
        <div className="w-40 h-[2px] bg-white/20 overflow-hidden rounded">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            className="w-full h-full bg-white"
          />

        </div>

        <p className="text-sm text-gray-400 tracking-widest">
          LOADING
        </p>

      </div>

    </div>
  )
}