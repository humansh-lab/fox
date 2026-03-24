"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Work", href: "#projects" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export default function AnimatedNav() {
  const [open, setOpen] = useState(true)
  const { scrollY } = useScroll()
  const last = useRef(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > last.current && y > 100) setOpen(false)
    else setOpen(true)
    last.current = y
  })

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        animate={{ width: open ? "auto" : 50 }}
        className="flex items-center gap-4 px-4 h-12 rounded-full bg-white/5 backdrop-blur border border-white/10"
      >
        {open ? (
          navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-gray-300 hover:text-white">
              {item.name}
            </a>
          ))
        ) : (
          <Menu className="text-white" />
        )}
      </motion.nav>
    </div>
  )
}