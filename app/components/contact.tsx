"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)
    setIsError(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(data.message || "Message sent successfully! I'll get back to you soon.")
        setFormState({ name: "", email: "", message: "" })
        setIsError(false)
      } else {
        setSubmitMessage(data.message || "Failed to send message. Please try again later.")
        setIsError(true)
      }
    } catch (error) {
      console.error("Client-side error sending form:", error)
      setSubmitMessage("An unexpected error occurred. Please try again.")
      setIsError(true)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000) // Clear message after 5 seconds
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">Let's build something amazing together</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out for collaborations, questions, or just to say hello</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "rigonzales@ucdavis.edu"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Social</p>
                      <p className="text-sm text-muted-foreground">Connect on LinkedIn</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-primary/5 p-4">
                    <p className="text-sm text-muted-foreground">
                      I'm always open to discussing new projects, research opportunities, or potential collaborations in
                      quantum photonics and computer engineering.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                    {submitMessage && (
                      <p className={`mt-2 text-center text-sm ${isError ? "text-red-500" : "text-green-500"}`}>
                        {submitMessage}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
