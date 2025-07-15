"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Building, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Certifications() {
  const certifications = [
    {
      title: "International Tutor Training Program Certification",
      level: "Level I & II",
      issuer: "College Reading & Learning Association",
      year: "2024",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "American Caregiver Association Certification",
      level: "Professional Caregiver",
      issuer: "American Caregiver Association",
      year: "2023",
      icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
      title: "Altium Designer Certification",
      level: "Circuit Design, PCB Layout",
      issuer: "Altium Company",
      year: "2025",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Certifications</h2>
          <p className="mt-4 text-muted-foreground">Professional qualifications and recognitions</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full bg-primary/10 p-2">{cert.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.level}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      <CheckCircle className="h-4 w-4" />
                      {cert.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
