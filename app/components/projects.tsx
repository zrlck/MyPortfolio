"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Play } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Photoluminescence Spectroscopy Setup for Quantum 2D Materials",
      description:
        "Designed and built a custom photoluminescence spectroscopy setup for analyzing quantum photonic materials, enabling precise measurement of single photon emitters.",
      image: "/photoluminescence-setup.png",
      tags: ["Optics", "Hardware", "Quantum", "2D Materials", "Photonics", "Spectroscopy", "Lasers"],
      lab: "UC Santa Barbara",
      labColor: "blue",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Machine Learning for Discovering Governing Equations of NEMS Resonators",
      description:
        "Developed a machine learning model to analyze nonlinear dynamics in NEMS resonators, providing insights into their behavior and potential applications of NEMS resonators in photonics and filters.",
      image: "/entangled-paths.png",
      tags: ["Simulation", "Machine Learning", "Visualization", "NEMS Resonators", "Photonics", "Python"],
      lab: "Boston University",
      labColor: "red",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Image Processing for Soil Grain Movement Tracking",
      description:
        "Created a computer vision algorithm to track soil grain movement during earthquakes, enhancing understanding of soil mechanics and earthquake engineering.",
      image: "/interactive-circuit-learning.png",
      tags: ["Image Processing", "Python", "Machine Learning", "Soil Mechanics", "Algorithms", "Computer Vision"],
      lab: "UC Davis",
      labColor: "yellow",
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Featured Research Projects</h2>
          <p className="mt-4 text-muted-foreground">
            Showcasing my work in quantum photonics, computer engineering, and machine learning
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Integrated Lab Label */}
                  <div className="absolute bottom-3 right-3">
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                        project.labColor === "blue"
                          ? "bg-primary/90 shadow-lg shadow-primary/20 hover:bg-primary hover:shadow-primary/30"
                          : project.labColor === "red"
                          ? "bg-red-500/90 shadow-lg shadow-red-500/20 hover:bg-red-500 hover:shadow-red-500/30"
                          : project.labColor === "yellow"
                          ? "bg-yellow-400/90 shadow-lg shadow-yellow-400/20 hover:bg-yellow-400 hover:shadow-yellow-400/30"
                          : "bg-purple-500/90 shadow-lg shadow-purple-500/20 hover:bg-purple-500 hover:shadow-purple-500/30"
                      }`}
                    >
                      {project.lab}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                      project.labColor === "blue"
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : project.labColor === "red"
                        ? "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                        : project.labColor === "yellow"
                        ? "bg-yellow-400/10 text-yellow-600 hover:bg-yellow-400/20"
                        : "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                    }`}
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

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

