"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"

export default function ResumePage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/resumebackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="fixed inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto px-4 py-32">
          {/* Rest of the content remains the same */}
          <div className="mb-8 flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/home">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button asChild className="flex items-center gap-2">
                <a href="/ricardo-gonzales-resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </motion.div>
          </div>

          {/* All the existing content remains exactly the same */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight">Ricardo Gonzales</h1>
            <p className="mt-2 text-xl text-muted-foreground">Computer Engineer | Photonics Enthusiast</p>
            <div className="mt-4 flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>Davis, California</span>
              <span>•</span>
              <span>(805) 218-0998</span>
              <span>•</span>
              <span>zricksaii@gmail.com</span>
            </div>
          </motion.div>

          {/* All existing sections remain the same - Education, Experience, Leadership, Skills, Certifications */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">University of California, Davis</h3>
                      <span className="text-sm text-muted-foreground">2022 - Present</span>
                    </div>
                    <p className="text-primary">B.S. Computer Engineering</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focusing on hardware design, quantum computing, and embedded systems. Active member of the Society
                      of Hispanic Professional Engineers (SHPE).
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Oxnard College</h3>
                      <span className="text-sm text-muted-foreground">2020 - 2022</span>
                    </div>
                    <p className="text-primary">A.S. Engineering</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Completed foundational engineering coursework with honors. Served as a STEM tutor and participated
                      in the TRIO Student Support Services program.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">UCSB Quantum Photonics Lab</h3>
                      <span className="text-sm text-muted-foreground">2023 - Present</span>
                    </div>
                    <p className="text-primary">Research Assistant</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Conducting research on single photon emitters for quantum computing applications. Developing and
                      characterizing quantum photonic devices using KLayout simulation and photoluminescence
                      spectroscopy.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Oxnard College STEM Center</h3>
                      <span className="text-sm text-muted-foreground">2021 - 2022</span>
                    </div>
                    <p className="text-primary">STEM Tutor</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Provided bilingual tutoring in physics, mathematics, and computer science. Developed educational
                      materials and workshops to support student success.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Camarillo Healthcare District</h3>
                      <span className="text-sm text-muted-foreground">2020 - 2021</span>
                    </div>
                    <p className="text-primary">Caregiver</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Provided compassionate care for patients with diverse needs. Developed technical solutions to
                      improve patient monitoring and care delivery.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leadership Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Leadership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Society of Hispanic Professional Engineers (SHPE)</h3>
                      <span className="text-sm text-muted-foreground">2022 - 2023</span>
                    </div>
                    <p className="text-primary">Chapter President</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Led chapter initiatives to promote STEM education and career development. Organized networking
                      events, workshops, and community outreach programs.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">TRIO Student Support Services</h3>
                      <span className="text-sm text-muted-foreground">2021 - 2022</span>
                    </div>
                    <p className="text-primary">Peer Mentor</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Mentored first-generation college students in navigating academic challenges. Developed and
                      facilitated workshops on study skills and time management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium">Programming & Software</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">x86 Assembly</span>
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">C++</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">MATLAB</span>
                      <span className="skill-badge">Arduino</span>
                      <span className="skill-badge">Blender</span>
                      <span className="skill-badge">Solidworks</span>
                      <span className="skill-badge">OrCAD</span>
                      <span className="skill-badge">PSpice</span>
                      <span className="skill-badge">KLayout</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Hardware & Equipment</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">Optical benches</span>
                      <span className="skill-badge">Breadboard design</span>
                      <span className="skill-badge">Laser/mirror alignments</span>
                      <span className="skill-badge">Computer building</span>
                      <span className="skill-badge">Circuit design</span>
                      <span className="skill-badge">Photoluminescence spectroscopy</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-badge">English (Native)</span>
                      <span className="skill-badge">Spanish (Native)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Certifications & Awards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="timeline-item">
                    <h3 className="font-medium">International Tutor Training Program Certification (Level I & II)</h3>
                    <p className="text-sm text-muted-foreground">College Reading & Learning Association, 2022</p>
                  </div>

                  <div className="timeline-item">
                    <h3 className="font-medium">American Caregiver Association Certification</h3>
                    <p className="text-sm text-muted-foreground">American Caregiver Association, 2021</p>
                  </div>

                  <div className="timeline-item">
                    <h3 className="font-medium">Northrop Grumman Scholarship</h3>
                    <p className="text-sm text-muted-foreground">Northrop Grumman Foundation, 2023</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
