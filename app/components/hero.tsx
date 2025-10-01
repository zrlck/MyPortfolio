"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Background Video - Replace with your desired video */}
      <video className="absolute inset-0 h-full w-full object-cover z-0" autoPlay muted loop playsInline>
        {/* Place your background video here. Example: */}
        <source src="/Mainvideo.mp4" type="video/mp4" />
        {/* You can add multiple source tags for different video formats (e.g., .webm, .ogg) for broader browser compatibility */}
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="container relative z-20 mx-auto px-4 py-32 md:py-48">
        <div className="flex flex-col items-start justify-center text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block text-white">Ricardo Gonzales</span>
            <span className="mt-2 block text-2xl font-medium text-gray-200 sm:text-3xl md:text-4xl">
              Aspiring Electrical & Computer Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-gray-300"
          >
            (805) 218-0998 | rigonzales@ucdavis.edu | Davis, CA
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          onClick={() => scrollToSection("about")}
          className="cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  )
}
