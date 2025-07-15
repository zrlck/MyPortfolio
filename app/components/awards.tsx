"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Awards() {
  const awards = [
    {
      title: "SHPE Northrop Grumman Scholarship",
      organization: "Northrop Grumman Foundation",
      year: "2024",
      description:
        "Awarded for outstanding academic achievement in engineering and commitment to innovation in  computer engineering.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      title: "Outstanding STEM Tutor Award",
      organization: "Oxnard College",
      year: "2023",
      description: "Recognized for exceptional tutoring in STEM subjects, enhancing student learning and engagement.",
      icon: <Star className="h-8 w-8 text-primary" />,
    },
    {
      title: "AvenueE 2024 Scholar",
      organization: "UC Davis",
      year: "2024",
      description:
        "Awarded for completing the AvenueE program, which focuses on professional development and career readiness in engineering.",
      icon: <Medal className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="awards" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Awards</h2>
          <p className="mt-4 text-muted-foreground">Key achievements and recognitions</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full bg-primary/10 p-2">{award.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{award.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{award.organization}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">{award.year}</span>
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
