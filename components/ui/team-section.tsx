"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type TeamMember = {
  name: string
  role: string
  image: string
}

interface TeamProps {
  members: TeamMember[]
}

export default function Team({ members }: TeamProps) {
  return (
    <section id="team" className="py-24 px-6 text-center">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-wide">
        TEAM
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >

            {/* CLEAN IMAGE */}
            <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden">

              <Image
                src={m.image}
                alt={m.name}
                width={144}
                height={144}
                className="object-cover w-full h-full object-top group-hover:scale-105 transition duration-300"
              />

            </div>

            {/* TEXT */}
            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-gray-400 text-sm">{m.role}</p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}