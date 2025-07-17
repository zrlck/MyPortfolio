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
                    <span className="text-sm text-muted-foreground">2024 - Present</span>
                  </div>
                  <p className="text-primary">B.S. Computer Engineering</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Focusing on hardware design, photonics, and embedded systems. Active member of the Society
                    of Hispanic Professional Engineers (SHPE), TRIO SSS Member, and AvenueE Scholar.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">Oxnard College</h3>
                    <span className="text-sm text-muted-foreground">2020 - 2022</span>
                  </div>
                  <p className="text-primary">A.S. Math & Physics</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Completed foundational engineering coursework with honors. Served as a STEM tutor and participated
                    in the TRIO Student Support Services program. Alumni of EOPS, OMEGA, and SHPE.
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
                    <h3 className="text-lg font-bold">Boston University Photonics Center, Ekinci Lab</h3>
                    <span className="text-sm text-muted-foreground">Summer 2025</span>
                  </div>
                  <p className="text-primary">Photonics Research Intern</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Working on machine learning applications for analyzing NEMS resonators. Focused on nonlinear dynamic systems and data-driven modeling techniques. Used Python and PyTorch for data analysis and model development.
                    <br />
                    • Collaborating with a team of researchers to explore novel applications in photonics and AI integrations. Analyzing data from NEMS devices to improve performance and reliability as well as developing predictive models for system behavior.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">UC Davis Center for Geotechnical Modeling, E-SEARCH </h3>
                    <span className="text-sm text-muted-foreground">Spring & Summer 2025</span>
                  </div>
                  <p className="text-primary">Machine Learning Researcher</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Designing a PyTorch-based neural network to classify medical data from wearable sensors. Performed preprocessing,
                    model training, and performance evaluation using precision-recall and ROC curves. Focused on algorithm
                    interpretability for real-time patient monitoring applications.
                    <br />
                    • Working on soil grain movement analysis using computer vision techniques. Implementing OpenCV for image processing and feature extraction. Using Python for data analysis and visualization.

                  </p>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">UC Santa Barbara Quantum Photonics Lab, Moody Lab</h3>
                    <span className="text-sm text-muted-foreground">Summer 2024</span>
                  </div>
                  <p className="text-primary">Photonics Research Intern</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Collaborated on the design and testing of single photon emitters for quantum information systems. Utilized KLayout,
                    Blender, and photoluminescence spectroscopy to model and analyze photonic chip behavior and entangled photon emission.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">Oxnard College STEM Center</h3>
                    <span className="text-sm text-muted-foreground">2022 - 2024</span>
                  </div>
                  <p className="text-primary">General STEM Tutor</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Provided bilingual tutoring in physics, mathematics, and computer science. Led group study sessions and developed
                     accessible learning resources for underrepresented students in STEM.
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
                    <span className="text-sm text-muted-foreground">2023 - 2024</span>
                  </div>
                  <p className="text-primary">Chapter President</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Led chapter initiatives to promote STEM education and career development. Organized networking
                    events, workshops, and community outreach programs.
                  </p>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">Oxnard College STEM Center</h3>
                    <span className="text-sm text-muted-foreground">2022 - 2024</span>
                  </div>
                  <p className="text-primary">Mentor</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    • Mentored first-generation college students in navigating academic challenges. Developed and
                    facilitated workshops on study skills and time management.
                    <br />
                    • Assisted in organizing events to promote STEM fields among underrepresented students.
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
                    <span className="skill-badge">OpenCV</span>
                    <span className="skill-badge">PyTorch</span> 
                    <span className="skill-badge">TensorFlow</span>
                    <span className="skill-badge">Quartus Prime</span>
                    <span className="skill-badge">OrCAD</span>
                    <span className="skill-badge">Multisim</span>
                    <span className="skill-badge">PSpice</span>
                    
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
                    <span className="skill-badge">NEMS Resonators</span>
                    <span className="skill-badge">Photolithography</span>
                    <span className="skill-badge">Quantum optics experiments</span>
                    <span className="skill-badge">PCB design</span>
                    <span className="skill-badge">FPGA</span>
                    <span className="skill-badge">Microcontrollers</span>

                    
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
  )
}
