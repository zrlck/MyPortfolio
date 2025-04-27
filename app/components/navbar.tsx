"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/home#about", label: "About" },
    { href: "/home#skills", label: "Skills" },
    { href: "/home#projects", label: "Projects" },
    { href: "/home#research", label: "Research" },
    { href: "/home#certifications", label: "Certifications" },
    { href: "/home#contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If it's a section on the current page
    if (href.includes("#") && pathname === "/home") {
      const sectionId = href.split("#")[1]
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    } else {
      // If it's a different page
      window.location.href = href
    }
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/home" className="flex items-center space-x-2 text-xl font-bold">
          <span className="gradient-text">RG</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === link.href ||
                (pathname === "/home" && link.href.includes("#") && window.location.hash === link.href.split("#")[1])
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-4">
            <Link href="/resume" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="container mx-auto bg-background/95 px-4 pb-6 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`py-2 text-sm transition-colors hover:text-primary ${
                      pathname === link.href ||
                      (
                        pathname === "/home" &&
                          link.href.includes("#") &&
                          window.location.hash === link.href.split("#")[1]
                      )
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="sm" className="mt-2 w-full">
                  <Link
                    href="/resume"
                    className="flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
