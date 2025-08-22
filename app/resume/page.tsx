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
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 z-10 bg-black/40" />

      {/* Main content above overlay */}
      <div className="relative z-20 flex min-h-screen flex-col">
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
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button asChild className="flex items-center gap-2">
                <a href="/ricardo-gonzales-resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </motion.div>
          </div>

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

          <div className="space-y-8">
            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <Card>
                <CardHeader><CardTitle className="text-2xl">Education</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">University of California, Davis</h3>
                      <span className="text-sm text-muted-foreground">2024 - Present</span>
                    </div>
                    <p className="text-primary">B.S. Computer Engineering</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focusing on hardware design, photonics, and embedded systems. Active member of SHPE, TRIO SSS Member, and AvenueE Scholar.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Oxnard College</h3>
                      <span className="text-sm text-muted-foreground">2021 - 2024</span>
                    </div>
                    <p className="text-primary">A.S. Math & Physics</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Completed general education and foundational courses in engineering. Participated in STEM tutoring and support programs such as SHPE, TRIO, and EOPS.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Card>
                <CardHeader><CardTitle className="text-2xl">Experience</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  {/* BU */}
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Boston University Photonics Center, Ekinci Lab</h3>
                      <span className="text-sm text-muted-foreground">Summer 2025</span>
                    </div>
                    <p className="text-primary">Photonics Research Intern</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Worked primarily with the use of machine learning for discovering governing equations of NEMS resonators
                      <br />
                      • Wrote different Python frameworks and environments for the utilization of experimental data from NEMS data measured from an interferometer setup
                      <br />
                      • Designed optical components and chip devices for paper proposals
                    </p>
                  </div>

                  {/* UC Davis */}
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">UC Davis Center for Geotechnical Modeling, E-SEARCH</h3>
                      <span className="text-sm text-muted-foreground">Spring & Summer 2025</span>
                    </div>
                    <p className="text-primary">Machine Learning Researcher</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Developed a computer vision pipeline to detect and track soil surface markers in centrifuge experiments studying earthquake-induced soil liquefaction
                      <br />
                      • Implemented algorithms such as contrast enhancement, morphological filtering, clustering, and template matching for automation in image processing
                      <br />
                      • Tested scalable workflows to handling multi-image datasets based on research data
                    </p>
                  </div>

                  {/* UCSB */}
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">UC Santa Barbara Quantum Photonics Lab, Moody Lab</h3>
                      <span className="text-sm text-muted-foreground">Summer 2024</span>
                    </div>
                    <p className="text-primary">Photonics Research Intern</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Collaborated with two graduate students to investigate quantum photonic devices with light entanglement
                      <br />
                      • Designed and animated photonic chips and optical components from Thorlabs using Blender and SolidWorks
                      <br />
                      • Explored and collected data of photoluminescence processes and created simulations based on research
                    </p>
                  </div>

                  {/* STEM Tutor */}
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Oxnard College STEM Center</h3>
                      <span className="text-sm text-muted-foreground">2022 - 2024</span>
                    </div>
                    <p className="text-primary">General STEM Tutor</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Tutored +200 hours of engineering math, physics, and chemistry courses in English & Spanish 
                      <br />
                      • Organized group tutoring sessions to assist students for team effort learning
                      <br />
                      • Provided full instructional support for students who were unable to attend regular classes
                      <br />
                      • Embedded classroom tutor that discussed concepts taught in class and created classroom activities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leadership */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <Card>
                <CardHeader><CardTitle className="text-2xl">Leadership</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">SHPE</h3>
                      <span className="text-sm text-muted-foreground">2023 - 2024</span>
                    </div>
                    <p className="text-primary">Chapter President</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Worked with different programs to provide resources to students and members of the Society of Hispanic Professional Engineers
                      <br />
                      • Participated in conventions and programs for academic professional achievement
                      <br />
                      • Created interactive, professional, and self-learning activities for better community growth and active participation
                    </p>
                  </div>

                  <div className="timeline-item">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="text-lg font-bold">Oxnard College STEM Center</h3>
                      <span className="text-sm text-muted-foreground">2022 - 2024</span>
                    </div>
                    <p className="text-primary">Mentor</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      • Mentored first-gen students and led study skills workshops. Helped organize STEM outreach events.
                      <br />
                      • Assisted in the development of the STEM Center's tutoring program and resources.
                      <br />
                      • Collaborated with faculty to enhance student engagement and success in STEM fields.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Card>
                <CardHeader><CardTitle className="text-2xl">Skills</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {/* Programming */}
                  <div>
                    <h3 className="mb-2 font-medium">Programming & Software</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "x86 Assembly", "Python", "C++", "Git", "MATLAB", "Arduino", "Blender", "Solidworks",
                        "OrCAD", "PSpice", "KLayout", "OpenCV", "PyTorch", "TensorFlow", "Quartus Prime", "Multisim"
                      ].map(skill => <span className="skill-badge" key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  {/* Hardware */}
                  <div>
                    <h3 className="mb-2 font-medium">Hardware & Equipment</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Optical benches", "Breadboard design", "Laser/mirror alignments", "Computer building",
                        "Circuit design", "Photoluminescence spectroscopy", "NEMS Resonators", "Photolithography",
                        "Quantum optics experiments", "PCB design", "FPGA", "Microcontrollers"
                      ].map(skill => <span className="skill-badge" key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  {/* Languages */}
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

            {/* Certifications */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
              <Card>
                <CardHeader><CardTitle className="text-2xl">Certifications & Awards</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="timeline-item">
                    <h3 className="font-medium">International Tutor Training Certification (Level I & II)</h3>
                    <p className="text-sm text-muted-foreground">College Reading & Learning Association, 2024</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="font-medium">American Caregiver Association Certification</h3>
                    <p className="text-sm text-muted-foreground">American Caregiver Association, 2022</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="font-medium">Northrop Grumman Scholarship</h3>
                    <p className="text-sm text-muted-foreground">Northrop Grumman Foundation, 2024</p>
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
