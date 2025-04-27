"use client"

import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Research from "../components/research"
import Certifications from "../components/certifications"
import Awards from "../components/awards"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
