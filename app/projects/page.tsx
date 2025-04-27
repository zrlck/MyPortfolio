"use client"

import { useState } from "react"
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

  const projects = [
    {
      title: "Photoluminescence Spectroscopy Setup",
      description:
        "Designed and built a custom photoluminescence spectroscopy setup for analyzing quantum photonic materials, enabling precise measurement of single photon emitters.",
      image: "/photoluminescence-setup.png",
      tags: ["Optics", "Hardware", "Quantum"],
      category: "research",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Quantum Photonics Simulation",
      description:
        "Developed a simulation of photonic chip design with light entanglement visualization, helping researchers understand quantum behavior in photonic circuits.",
      image: "/entangled-paths.png",
      tags: ["Simulation", "Quantum", "Visualization"],
      category: "research",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "STEM Education Platform",
      description:
        "Created an interactive platform for bilingual STEM education, featuring hardware demonstrations and circuit simulations to make engineering concepts accessible.",
      image: "/interactive-circuit-learning.png",
      tags: ["Education", "Bilingual", "Interactive"],
      category: "education",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Quantum Circuit Simulator",
      description:
        "Built a web-based quantum circuit simulator that allows users to design and test quantum algorithms with a visual interface.",
      image: "/quantum-optics-bench.png",
      tags: ["Quantum", "Web", "Simulation"],
      category: "software",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Bilingual Engineering Tutorials",
      description:
        "Created a series of bilingual tutorials on engineering concepts, making technical knowledge accessible to Spanish-speaking students.",
      image: "/confident-latino-engineer.png",
      tags: ["Education", "Bilingual", "Engineering"],
      category: "education",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Single Photon Detector Interface",
      description:
        "Developed a software interface for controlling and collecting data from single photon detectors in quantum optics experiments.",
      image: "/photoluminescence-setup.png",
      tags: ["Hardware", "Software", "Quantum"],
      category: "research",
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "research", label: "Research" },
    { id: "education", label: "Education" },
    { id: "software", label: "Software" },
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
            Explore my work in quantum photonics, education, and software development
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
