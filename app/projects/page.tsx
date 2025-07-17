"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Play } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: "Photoluminescence Spectroscopy Setup",
      description:
        "Designed and built a custom photoluminescence spectroscopy setup for analyzing quantum photonic materials, enabling precise measurement of single photon emitters.",
      image: "/threelasers.png",
      tags: ["Optics", "Hardware", "Quantum", "Photonics", "Research"],
      category: "hardware",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Machine Learning NEMS Resonator Analysis",
      description:
        "Developed a machine learning model to analyze nonlinear dynamics in NEMS resonators, improving understanding of quantum photonic systems.",
      image: "/entangled-paths.png",
      tags: ["Simulation", "Quantum", "Visualization", "Machine Learning"],
      category: "software",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Machine Learning Soil Grain Tracking",
      description:
        "Created a computer vision project to track soil grain movement during earthquakes, enhancing understanding of soil dynamics.",
      image: "/interactive-circuit-learning.png",
      tags: ["Software", "Soil-tracking", "Python", "Computer Vision", "Image Processing"],
      category: "software",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Self-detected parking guidance system",
      description:
        "Built a project car for self-detected parking guidance system using computer vision and machine learning, providing real-time parking space availability.",
      image: "/joker.jpeg",
      tags: ["Arduino", "Cardboard", "Simulation", "Computer Vision"],
      category: "hardware",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AggieShare from HackDavis 2025",
      description:
        "Developed a donation platform for students to exchange essential items, featuring animated cloud visuals and a smooth, responsive user interface.",
      image: "/Aggieshare.png",
      tags: ["Vercel", "Node.js", "React", "Next.js", "Tailwind CSS", "MongoDB"],
      category: "software",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "dExtra Tools from AgentHacks 2025",
      description:
        "Enhanced a Chrome extension with LLM-based memory and planning tools, enabling AI agents to better support users through contextual task assistance.",
      image: "/joker.jpeg",
      tags: ["MCP", "Software", "Backend", "LLM", "AI Agents"],
      category: "software",
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "hardware", label: "Hardware" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <div className="mb-8 flex items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/home">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore my work in engineering and optics
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.demoUrl} className="flex items-center gap-1">
                      <Play className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.codeUrl} className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
