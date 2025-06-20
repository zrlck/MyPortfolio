"use client"

import { motion } from "framer-motion"
import {
  Code,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Layers,
  Lightbulb,
  Monitor,
  Ruler,
  Terminal,
  Wand2,
} from "lucide-react"

export default function Skills() {
  const programmingSkills = [
    { name: "x86 Assembly", icon: <Terminal className="h-4 w-4" /> },
    { name: "Python", icon: <FileCode className="h-4 w-4" /> },
    { name: "C++", icon: <Code className="h-4 w-4" /> },
    { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
    { name: "MATLAB", icon: <Database className="h-4 w-4" /> },
    { name: "Arduino", icon: <Cpu className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
    { name: "HTML", icon: <Lightbulb className="h-4 w-4" /> },
  ]

  const softwareSkills = [
    { name: "Blender", icon: <Wand2 className="h-4 w-4" /> },
    { name: "Solidworks", icon: <Layers className="h-4 w-4" /> },
    { name: "OrCAD", icon: <Monitor className="h-4 w-4" /> },
    { name: "PSpice", icon: <Lightbulb className="h-4 w-4" /> },
    { name: "KLayout", icon: <Ruler className="h-4 w-4" /> },
    { name: "Quartus Prime", icon: <Cpu className="h-4 w-4" /> },
    { name: "Machine Learning", icon: <Ruler className="h-4 w-4" /> },
    { name: "Computer Vision", icon: <Monitor className="h-4 w-4" /> },
    { name: "Image Processing", icon: <Lightbulb className="h-4 w-4" /> },
  ]

  const hardwareSkills = [
    "Optical benches",
    "Breadboard design",
    "Laser/mirror alignments",
    "Computer building",
    "Circuit design",
    "Photoluminescence spectroscopy",
    "PCB layout",
    "FPGA programming",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Skills & Expertise</h2>
          <p className="mt-4 text-muted-foreground">My technical toolkit spans programming, software, and hardware</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Programming & Software Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">Programming & Languages</h3>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <motion.span key={skill.name} variants={item} className="skill-badge">
                  {skill.icon}
                  <span className="ml-1.5">{skill.name}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">Software & AI</h3>
            <div className="flex flex-wrap gap-2">
              {softwareSkills.map((skill) => (
                <motion.span key={skill.name} variants={item} className="skill-badge">
                  {skill.icon}
                  <span className="ml-1.5">{skill.name}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1"
          >
            <h3 className="mb-4 text-xl font-bold">Hardware & Equipment</h3>
            <div className="flex flex-wrap gap-2">
              {hardwareSkills.map((skill) => (
                <motion.span key={skill} variants={item} className="skill-badge">
                  <span>{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
