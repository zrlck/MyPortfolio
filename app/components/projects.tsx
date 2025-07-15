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
      tags: ["Optics", "Hardware", "Quantum", "2D Materials", "Photonics", "Spectroscopy", "Lasers" ],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Machine Learning for Discovering Governing Equations of NEMS Resonators",
      description:
        "Developed a machine learning model to analyze nonlinear dynamics in NEMS resonators, providing insights into their behavior and potential applications of NEMS resonators in photonics and filters.",
      image: "/entangled-paths.png",
      tags: ["Simulation", "Machine Learning", "Visualization", "NEMS Resonators", "Photonics", "Python"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Image Processing for Soil Grain Movement Tracking",
      description:
        "Created a computer vision algorithm to track soil grain movement during earthquakes, enhancing understanding of soil mechanics and earthquake engineering.",
      image: "/interactive-circuit-learning.png",
      tags: ["Image Processing", "Python", "Machine Learning", "Soil Mechanics", "Algorithms", "Computer Vision "],
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
          <p className="mt-4 text-muted-foreground">Showcasing my work in quantum photonics, computer engineering, and machine learning</p>
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
