"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">About Me</h2>
        </motion.div>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20 md:h-96 md:w-96">
              <Image src="/confident-latino-engineer.png" alt="Ricardo Gonzales" fill className="object-cover" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-bold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My path in engineering began at Oxnard College and led me to UC Davis, where I've developed a passion
                for the intersection of hardware design, quantum technology, and creative problem-solving.
              </p>
              <p>
                As a researcher in quantum photonics at UCSB, I've worked on cutting-edge projects involving single
                photon emitter exfoliation and photoluminescence analysis, pushing the boundaries of what's possible in
                quantum computing.
              </p>
              <p>
                My multicultural background has shaped my approach to engineering and education. Through my roles in
                EOP, TRIO SSS, and as SHPE President, I've been committed to making STEM accessible to all, providing
                bilingual tutoring in English and Spanish.
              </p>
              <p>
                I believe in building technology that bridges theoretical concepts with practical applications, creating
                solutions that are both innovative and accessible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
