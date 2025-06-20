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
      title: "Photoluminescence Spectroscopy Setup",
      description:
        "Designed and built a custom photoluminescence spectroscopy setup for analyzing quantum photonic materials, enabling precise measurement of single photon emitters.",
      image: "/photoluminescence-setup.png",
      tags: ["Optics", "Hardware", "Quantum"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Quantum Photonics Simulation",
      description:
        "Developed a simulation of photonic chip design with light entanglement visualization, helping researchers understand quantum behavior in photonic circuits.",
      image: "/entangled-paths.png",
      tags: ["Simulation", "Quantum", "Visualization"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "STEM Education Platform",
      description:
        "Created an interactive platform for bilingual STEM education, featuring hardware demonstrations and circuit simulations to make engineering concepts accessible.",
      image: "/interactive-circuit-learning.png",
      tags: ["Education", "Bilingual", "Interactive"],
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
          <h2 className="section-heading mx-auto">Featured Projects</h2>
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
