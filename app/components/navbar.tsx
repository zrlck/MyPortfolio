"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHash, setCurrentHash] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Set the current hash
    setCurrentHash(window.location.hash)

    window.addEventListener("scroll", handleScroll)

    // Update hash when it changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const navLinks = [
    { href: "/home", label: "Home", isPage: true },
    { href: "/home#about", label: "About", isPage: false },
    { href: "/home#skills", label: "Skills", isPage: false },
    { href: "/home#projects", label: "Projects", isPage: false },
    { href: "/home#research", label: "Research", isPage: false },
    { href: "/home#awards", label: "Awards", isPage: false },
    { href: "/home#certifications", label: "Certifications", isPage: false },
    { href: "/home#contact", label: "Contact", isPage: false },
  ]

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    // If it's a page navigation (not a section), let the default link behavior work
    if (isPage) {
      // Just close the mobile menu if it's open
      setIsOpen(false)
      return
    }

    // Otherwise, handle section scrolling
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
      // If it's a section on another page
      router.push(href)
      setIsOpen(false)
    }
  }

  const handleResumeClick = (e: React.MouseEvent) => {
    setIsOpen(false)
    // No need to prevent default - let the Link component handle navigation
  }

  const isActive = (href: string) => {
    if (pathname !== "/home" && !href.includes("#")) {
      return pathname === href
    }

    if (pathname === "/home" && href.includes("#")) {
      const hrefHash = `#${href.split("#")[1]}`
      return currentHash === hrefHash
    }

    return pathname === href
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
              onClick={(e) => handleNavigation(e, link.href, link.isPage)}
              className={`text-sm transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-4">
            <Link href="/resume" onClick={handleResumeClick} className="flex items-center gap-2">
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
                    onClick={(e) => handleNavigation(e, link.href, link.isPage)}
                    className={`py-2 text-sm transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="sm" className="mt-2 w-full">
                  <Link href="/resume" className="flex items-center justify-center gap-2" onClick={handleResumeClick}>
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
