"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-secondary/30">
      {/* Overlay for the gradient: 100% black from top, solid for 20% of height, then fades to transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-20% to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4">
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
                Hello! I am Ricardo, a passionate UC Davis electrical and computer engineering student with a strong foundation in
                quantum photonics, machine learning, hardware design, and creative problem solving skills!
              </p>
              <p>
                Right now, I am doing research at Boston University using machine learning to analyze NEMS resonators
                and how they behave in nonlinear dynamic systems. I am also working on a project at UC Davis that uses
                computer vision to track how soil grains move during earthquakes. A mix of everything I love!
              </p>
              <p>
                Before this, I interned at UCSB as a quantum photonics researcher, working with single-photon emitters
                and doing photoluminiscence analysis. Along the way, I stayed involved in the community through
                leadership roles in EOP, TRIO SSS, and SHPE.
              </p>
              <p>
                I loved building tech that connects theory to the real world, and I am always looking for new
                opportunities to learn and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
