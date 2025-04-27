"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CuboidIcon as Cube, Lightbulb, Wand2 } from "lucide-react"

export default function FunPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    // Check if the page has been unlocked before
    const unlocked = localStorage.getItem("funPageUnlocked")
    if (unlocked === "true") {
      setIsUnlocked(true)
    }
  }, [])

  const handleUnlock = () => {
    setIsUnlocked(true)
    localStorage.setItem("funPageUnlocked", "true")
  }

  if (!isUnlocked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold">Secret Page</h1>
            <p className="mb-8 text-muted-foreground">
              This page is locked. Find the hidden photon on the main site to unlock it.
            </p>
            <div className="mx-auto max-w-md">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <button
                      onClick={handleUnlock}
                      className="group relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-300 hover:border-primary/50"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-primary/50 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:bg-primary"></div>
                      </div>
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
                      </div>
                    </button>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Hint: Click the photon above to unlock the page
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Link href="/home">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <div className="mb-8 flex items-center justify-between">
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
          <h1 className="text-4xl font-bold tracking-tight">The Fun Side</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Beyond engineering: my creative pursuits and personal interests
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  <CardTitle>3D Animation</CardTitle>
                </div>
                <CardDescription>Creating visual stories through Blender</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=3D animation of quantum particles in Blender"
                    alt="3D Animation"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  In my free time, I create 3D animations that visualize quantum phenomena. I find that animation helps
                  me understand complex physics concepts and communicate them to others in an accessible way.
                </p>
                <p className="text-sm text-muted-foreground">
                  My latest project is an animation of quantum entanglement, showing how particles can be connected
                  across space.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Cube className="h-5 w-5 text-primary" />
                  <CardTitle>Hardware Tinkering</CardTitle>
                </div>
                <CardDescription>Building custom electronics and computers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=custom built computer with RGB lighting"
                    alt="Custom PC Build"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  I love building custom computers and electronic projects. My latest build is a water-cooled gaming PC
                  with custom RGB lighting that reacts to system temperature.
                </p>
                <p className="text-sm text-muted-foreground">
                  I also enjoy restoring vintage electronics and giving them modern upgrades while preserving their
                  classic aesthetic.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <CardTitle>Fun Facts</CardTitle>
                </div>
                <CardDescription>Things you might not know about me</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      I once built a mini quantum computing simulator using Arduino that demonstrates basic quantum
                      gates with LEDs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      I'm an amateur astronomer and have photographed several deep sky objects with a homemade tracking
                      mount.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      I collect vintage calculators and have restored several HP scientific calculators from the 1970s.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      I've created a series of bilingual STEM education videos that have helped over 500 students
                      understand complex engineering concepts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span>
                      I can solve a Rubik's cube in under 2 minutes and have built a robot that can solve it even
                      faster.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
