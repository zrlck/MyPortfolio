"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Research() {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Research Lab Experiences</h2>
          <p className="mt-4 text-muted-foreground">
            Learn about my past research internship experiences and motivations for pursuing a career in photonics
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* First Research Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover overflow-hidden">
              <div className="grid gap-0 md:grid-cols-5">
                {/* Text Content */}
                <div className="md:col-span-3">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl">Quantum Photonic Devices Research at UCSB</CardTitle>
                    <CardDescription className="text-base">
                      Investigating single photon emitters for quantum computing applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      My research at UCSB focuses on the development and characterization of quantum photonic devices,
                      specifically working with single photon emitters that are crucial for quantum computing and secure
                      communications.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Research Areas:</h4>
                      <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-1">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>Single photon emitter exfoliation techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>KLayout simulation of photonic circuits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>Photoluminescence analysis and characterization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>Quantum entanglement in photonic systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>Integration of quantum emitters with photonic waveguides</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Research Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        This work contributes to the development of scalable quantum computing architectures that
                        leverage the unique properties of light for information processing. The integration of single
                        photon sources with photonic circuits represents a promising path toward practical quantum
                        technologies.
                      </p>
                    </div>
                  </CardContent>
                </div>

                {/* Integrated Image */}
                <div className="relative md:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20"></div>
                  <div className="relative h-64 w-full overflow-hidden md:h-full">
                    <Image
                      src="/quantum-optics-bench.png"
                      alt="Quantum Photonics Research Setup"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    {/* Floating research badge */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                      UCSB Lab
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Second Research Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover overflow-hidden">
              <div className="grid gap-0 md:grid-cols-5">
                {/* Integrated Image - Left side for variety */}
                <div className="relative md:col-span-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-blue-500/20"></div>
                  <div className="relative h-64 w-full overflow-hidden md:h-full">
                    <Image
                      src="/photoluminescence-setup.png"
                      alt="Advanced Materials Characterization Setup"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    {/* Floating research badge */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-purple-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Materials Lab
                    </div>
                  </div>
                </div>

                {/* Text Content - Right side */}
                <div className="md:col-span-3 md:order-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl">Advanced Materials Characterization Research</CardTitle>
                    <CardDescription className="text-base">
                      Developing novel techniques for quantum material analysis and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      This research focuses on developing advanced characterization techniques for quantum materials,
                      with emphasis on understanding their optical and electronic properties for next-generation quantum
                      devices and applications.
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Research Areas:</h4>
                      <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-1">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"></span>
                          <span>Spectroscopic analysis of 2D materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"></span>
                          <span>Optical bench design and optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"></span>
                          <span>Temperature-dependent photoluminescence studies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"></span>
                          <span>Defect characterization in quantum materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500"></span>
                          <span>Development of automated measurement systems</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Research Impact:</h4>
                      <p className="text-sm text-muted-foreground">
                        The techniques developed in this research enable better understanding and control of quantum
                        materials, leading to improved performance in quantum sensing, computing, and communication
                        applications. This work bridges fundamental materials science with practical device engineering.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
