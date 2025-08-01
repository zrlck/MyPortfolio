"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useFocusTrap } from "../hooks/use-focus-trap"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHash, setCurrentHash] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const mobileMenuRef = useFocusTrap(isOpen)

  // Lock body scroll when menu is open (important on mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    setCurrentHash(window.location.hash)

    window.addEventListener("scroll", handleScroll)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  useEffect(() => {
    const handleCloseMobileMenu = () => setIsOpen(false)
    document.addEventListener("closeMobileMenu", handleCloseMobileMenu)
    return () => {
      document.removeEventListener("closeMobileMenu", handleCloseMobileMenu)
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

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isPage: boolean
  ) => {
    if (isPage) {
      setIsOpen(false)
      return
    }

    e.preventDefault()

    if (href.includes("#") && pathname === "/home") {
      const sectionId = href.split("#")[1]
      const section = document.getElementById(sectionId)
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" })
        }, 50) // Fix for mobile smooth scroll
        setIsOpen(false)
      }
    } else {
      router.push(href)
      setIsOpen(false)
    }
  }

  const handleResumeClick = (e: React.MouseEvent) => {
    setIsOpen(false)
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
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

        {/* Mobile Toggle Button */}
        <button
          className="flex md:hidden p-2" // mobile-friendly touch target
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-16 z-50 md:hidden"
            tabIndex={-1}
          >
            <div
              ref={mobileMenuRef}
              className="container mx-auto bg-background/95 px-4 pb-6 pt-2 shadow-lg backdrop-blur-md"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href, link.isPage)}
                    className={`mobile-nav-link text-sm transition-colors hover:text-primary ${
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
