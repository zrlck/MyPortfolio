"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function OpeningScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()
  const [isEntering, setIsEntering] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const backgroundParticlesRef = useRef<BackgroundParticle[]>([])

  // Particle class for text animation
  class Particle {
    x: number
    y: number
    size: number
    baseX: number
    baseY: number
    density: number
    color: string
    scatteredColor: string
    life: number
    isTitle: boolean

    constructor(x: number, y: number, isTitle: boolean) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.size = Math.random() * 1.5 + 0.5
      this.density = Math.random() * 30 + 1
      this.color = "white"
      this.scatteredColor = isTitle ? "#6366f1" : "#8b5cf6" // Indigo for title, purple for subtitle
      this.isTitle = isTitle
      this.life = Math.random() * 100 + 50
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    }

    update(mouseX: number, mouseY: number) {
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 100

      if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
        const force = (maxDistance - distance) / maxDistance
        const angle = Math.atan2(dy, dx)
        const moveX = Math.cos(angle) * force * 60
        const moveY = Math.sin(angle) * force * 60
        this.x = this.baseX - moveX
        this.y = this.baseY - moveY
        this.color = this.scatteredColor
      } else {
        this.x += (this.baseX - this.x) * 0.1
        this.y += (this.baseY - this.y) * 0.1
        this.color = "white"
      }
    }
  }

  // Background particle class (similar to hero section)
  class BackgroundParticle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 0.1
      this.speedX = Math.random() * 0.5 - 0.25
      this.speedY = Math.random() * 0.5 - 0.25
      this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.25})`
    }

    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > canvas.width) this.x = 0
      else if (this.x < 0) this.x = canvas.width
      if (this.y > canvas.height) this.y = 0
      else if (this.y < 0) this.y = canvas.height
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Function to connect background particles with lines
  function connectParticles(particles: BackgroundParticle[], ctx: CanvasRenderingContext2D) {
    const maxDistance = 150
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x
        const dy = particles[a].y - particles[b].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particles[a].x, particles[a].y)
          ctx.lineTo(particles[b].x, particles[b].y)
          ctx.stroke()
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    // Initialize background particles (like in hero section)
    backgroundParticlesRef.current = []
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150)
    for (let i = 0; i < particleCount; i++) {
      backgroundParticlesRef.current.push(new BackgroundParticle(canvas))
    }

    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "white"
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()

      // Center text
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw title with larger font
      const titleFontSize = isMobile ? 36 : 64 // Increased font size
      ctx.font = `bold ${titleFontSize}px sans-serif`
      ctx.textAlign = "center"
      ctx.fillText("Ricardo Gonzales", centerX, centerY - 30) // Adjusted position

      // Draw subtitle with larger font
      const subtitleFontSize = isMobile ? 18 : 28 // Increased font size
      ctx.font = `${subtitleFontSize}px sans-serif`
      ctx.fillText("Computer Engineer | Quantum Photonics Researcher", centerX, centerY + 30) // Adjusted position

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function createParticle() {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data
      const centerY = canvas.height / 2

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)
        const index = (y * canvas.width + x) * 4

        if (data[index + 3] > 128) {
          const isTitle = y < centerY
          return new Particle(x, y, isTitle)
        }
      }

      return null
    }

    function createInitialParticles() {
      particlesRef.current = []
      const baseParticleCount = 5000
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))

      createTextImage()

      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle()
        if (particle) particlesRef.current.push(particle)
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(10, 10, 20, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update background particles (like in hero section)
      for (const particle of backgroundParticlesRef.current) {
        particle.update(canvas)
        particle.draw(ctx)
      }

      // Connect background particles with lines
      connectParticles(backgroundParticlesRef.current, ctx)

      // Handle text particles
      const { x: mouseX, y: mouseY } = mousePositionRef.current

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        p.update(mouseX, mouseY)
        p.draw(ctx)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle()
          if (newParticle) {
            particlesRef.current[i] = newParticle
          } else {
            particlesRef.current.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 5000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )

      while (particlesRef.current.length < targetParticleCount) {
        const newParticle = createParticle()
        if (newParticle) particlesRef.current.push(newParticle)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    createInitialParticles()
    animate()

    const handleResize = () => {
      updateCanvasSize()

      // Reinitialize background particles
      backgroundParticlesRef.current = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150)
      for (let i = 0; i < particleCount; i++) {
        backgroundParticlesRef.current.push(new BackgroundParticle(canvas))
      }

      createInitialParticles()
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isMobile])

  const handleEnter = () => {
    setIsEntering(true)
    setTimeout(() => {
      setIsComplete(true)
      router.push("/home")
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-16">
        {/* Empty div for top spacing */}
        <div className="flex-1"></div>

        {/* No text content here - it's drawn on the canvas */}
        <div className="text-center">{/* Intentionally empty - text is rendered on canvas */}</div>

        {/* Interactive Enter button at the bottom */}
        <div className="mb-16 mt-auto">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 ${
              isEntering ? "pointer-events-none opacity-0" : ""
            }`}
          >
            <span className="relative z-10">Enter</span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

            {/* Pulsing ring effect */}
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-indigo-400 opacity-20"></span>

            {/* Particle orbit effect */}
            <span className="absolute left-0 top-0 -z-10 h-3 w-3 animate-orbit-1 rounded-full bg-indigo-300 opacity-70"></span>
            <span className="absolute left-0 top-0 -z-10 h-2 w-2 animate-orbit-2 rounded-full bg-violet-300 opacity-70"></span>
            <span className="absolute left-0 top-0 -z-10 h-2 w-2 animate-orbit-3 rounded-full bg-blue-300 opacity-70"></span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
