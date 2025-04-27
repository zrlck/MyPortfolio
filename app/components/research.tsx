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
          <h2 className="section-heading mx-auto">Research</h2>
          <p className="mt-4 text-muted-foreground">Exploring the frontiers of quantum photonics</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/quantum-optics-bench.png"
                alt="Quantum Photonics Research"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle>Quantum Photonic Devices Research at UCSB</CardTitle>
                <CardDescription>
                  Investigating single photon emitters for quantum computing applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  My research at UCSB focuses on the development and characterization of quantum photonic devices,
                  specifically working with single photon emitters that are crucial for quantum computing and secure
                  communications.
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium">Key Research Areas:</h4>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    <li>Single photon emitter exfoliation techniques</li>
                    <li>KLayout simulation of photonic circuits</li>
                    <li>Photoluminescence analysis and characterization</li>
                    <li>Quantum entanglement in photonic systems</li>
                    <li>Integration of quantum emitters with photonic waveguides</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Research Impact:</h4>
                  <p className="text-muted-foreground">
                    This work contributes to the development of scalable quantum computing architectures that leverage
                    the unique properties of light for information processing. The integration of single photon sources
                    with photonic circuits represents a promising path toward practical quantum technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
