import AnimatedNav from "../components/AnimatedNav"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Team from "../components/ui/team-section"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import { projects, team } from "../lib/data"

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      <AnimatedNav />
      <Hero />
      <Projects projects={projects} />
      <Team members={team} />
      <Contact />
      <Footer />

    </main>
  )
}