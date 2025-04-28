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
  const buttonParticlesRef = useRef<ButtonParticle[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const enterStartTimeRef = useRef<number>(0)

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
    secondaryColor: string
    colorTransition: number
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
      // Updated colors: Light blue for title, purple for subtitle
      this.scatteredColor = isTitle ? "#60a5fa" : "#a78bfa" // Light blue for title, purple for subtitle
      this.secondaryColor = isTitle ? "#93c5fd" : "#c4b5fd" // Lighter blue for title, lighter purple for subtitle
      this.colorTransition = 0 // 0 = primary color, 1 = secondary color
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
      if (isEntering) {
        // During transition, particles should gracefully disperse
        const disperseSpeed = 0.5 + Math.random() * 1.5
        const angle = Math.random() * Math.PI * 2
        this.x += Math.cos(angle) * disperseSpeed
        this.y += Math.sin(angle) * disperseSpeed
        this.size *= 0.97 // Gradually shrink
        return
      }

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

        // Calculate color transition based on distance from mouse
        // Closer to mouse = more secondary color
        this.colorTransition = Math.min(1, (maxDistance - distance) / (maxDistance * 0.7))

        // Blend between primary and secondary colors based on transition value
        if (this.colorTransition > 0) {
          this.color = this.blendColors(this.scatteredColor, this.secondaryColor, this.colorTransition)
        } else {
          this.color = this.scatteredColor
        }
      } else {
        this.x += (this.baseX - this.x) * 0.1
        this.y += (this.baseY - this.y) * 0.1
        this.colorTransition = Math.max(0, this.colorTransition - 0.05)

        if (this.colorTransition > 0) {
          this.color = this.blendColors(this.scatteredColor, this.secondaryColor, this.colorTransition)
        } else {
          this.color = "white"
        }
      }
    }

    // Helper function to blend between two hex colors
    blendColors(color1: string, color2: string, ratio: number): string {
      // Convert hex to RGB
      const r1 = Number.parseInt(color1.substring(1, 3), 16)
      const g1 = Number.parseInt(color1.substring(3, 5), 16)
      const b1 = Number.parseInt(color1.substring(5, 7), 16)

      const r2 = Number.parseInt(color2.substring(1, 3), 16)
      const g2 = Number.parseInt(color2.substring(3, 5), 16)
      const b2 = Number.parseInt(color2.substring(5, 7), 16)

      // Blend colors
      const r = Math.round(r1 * (1 - ratio) + r2 * ratio)
      const g = Math.round(g1 * (1 - ratio) + g2 * ratio)
      const b = Math.round(b1 * (1 - ratio) + b2 * ratio)

      // Convert back to hex
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
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

      // Updated to alternate between light blue and purple particles
      const colorChoice = Math.random()
      if (colorChoice < 0.6) {
        // 60% light blue particles with varying opacity
        this.color = `rgba(96, 165, 250, ${Math.random() * 0.5 + 0.25})`
      } else {
        // 40% purple particles with varying opacity
        this.color = `rgba(167, 139, 250, ${Math.random() * 0.5 + 0.25})`
      }
    }

    update(canvas: HTMLCanvasElement) {
      if (isEntering) {
        // During transition, increase speed and add some randomness
        this.speedX *= 1.03
        this.speedY *= 1.03
        this.size *= 0.98 // Gradually fade out by reducing size
      }

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

  // Button particle class for the Enter button
  class ButtonParticle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    alpha: number
    centerX: number
    centerY: number
    radius: number
    angle: number
    angleSpeed: number
    distanceFromCenter: number

    constructor(centerX: number, centerY: number, radius: number) {
      this.centerX = centerX
      this.centerY = centerY
      this.radius = radius
      this.angle = Math.random() * Math.PI * 2
      this.angleSpeed = (Math.random() * 0.02 - 0.01) * (Math.random() < 0.5 ? -1 : 1)
      this.distanceFromCenter = Math.random() * radius * 0.8 + radius * 0.2

      this.x = centerX + Math.cos(this.angle) * this.distanceFromCenter
      this.y = centerY + Math.sin(this.angle) * this.distanceFromCenter

      this.size = Math.random() * 1.5 + 0.5
      this.speedX = Math.random() * 0.2 - 0.1
      this.speedY = Math.random() * 0.2 - 0.1

      // Updated color palette to match light blue and purple theme
      const colorChoice = Math.random()
      let hue, saturation, lightness

      if (colorChoice < 0.5) {
        // 50% light blue particles
        hue = 210 + Math.random() * 10 // Blue hues
        saturation = 80 + Math.random() * 20
        lightness = 70 + Math.random() * 15
      } else {
        // 50% purple particles
        hue = 260 + Math.random() * 10 // Purple hues
        saturation = 75 + Math.random() * 20
        lightness = 70 + Math.random() * 15
      }

      this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`
      this.alpha = Math.random() * 0.5 + 0.3
    }

    update(isHovering: boolean) {
      if (isEntering) {
        // During transition, particles should expand outward
        const angle = Math.atan2(this.y - this.centerY, this.x - this.centerX)
        const speed = 2 + Math.random() * 2
        this.x += Math.cos(angle) * speed
        this.y += Math.sin(angle) * speed
        this.alpha *= 0.95 // Fade out
        return
      }

      // Rest of the update method remains the same
      // Orbital movement
      this.angle += this.angleSpeed * (isHovering ? 2.5 : 1) // Faster movement on hover

      // Increase orbit variation when hovering
      const orbitVariation = isHovering
        ? Math.sin(Date.now() * 0.001 + this.angle) * this.radius * 0.15
        : Math.sin(Date.now() * 0.0005 + this.angle) * this.radius * 0.05

      const targetX = this.centerX + Math.cos(this.angle) * (this.distanceFromCenter + orbitVariation)
      const targetY = this.centerY + Math.sin(this.angle) * (this.distanceFromCenter + orbitVariation)

      // Add some randomness to the movement
      this.x += (targetX - this.x) * 0.1 + this.speedX
      this.y += (targetY - this.y) * 0.1 + this.speedY

      // Reset speed occasionally to prevent particles from drifting too far
      this.speedX *= 0.99
      this.speedY *= 0.99

      // Pulsate size when hovering
      if (isHovering) {
        this.size = Math.max(0.5, this.size + Math.sin(Date.now() * 0.01) * 0.15)
        this.alpha = Math.min(0.95, this.alpha + 0.01)
      } else {
        this.size = Math.max(0.5, Math.min(2, this.size * 0.98 + 0.5 * 0.02))
        this.alpha = Math.max(0.3, Math.min(0.7, this.alpha * 0.95 + 0.5 * 0.05))
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.alpha
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
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

          // Determine line color based on connected particles
          // This creates a nice blend between blue and purple connections
          const isBlueA = particles[a].color.includes("165")
          const isBlueB = particles[b].color.includes("165")

          let lineColor
          if (isBlueA && isBlueB) {
            // Blue to blue connection
            lineColor = `rgba(96, 165, 250, ${opacity * 0.2})`
          } else if (!isBlueA && !isBlueB) {
            // Purple to purple connection
            lineColor = `rgba(167, 139, 250, ${opacity * 0.2})`
          } else {
            // Blue to purple connection - blend the colors
            lineColor = `rgba(131, 152, 250, ${opacity * 0.2})`
          }

          ctx.strokeStyle = lineColor
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particles[a].x, particles[a].y)
          ctx.lineTo(particles[b].x, particles[b].y)
          ctx.stroke()
        }
      }
    }
  }

  // Function to draw button glow effect
  function drawButtonGlow(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    isHovering: boolean,
  ) {
    const radius = Math.max(width, height) / 2
    // Increase the glow radius when hovering for broader dispersion
    const glowRadius = isHovering ? radius * 2.5 : radius * 1.8

    const gradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, glowRadius)

    if (isHovering) {
      // Updated to a blend of light blue and purple for hover state
      gradient.addColorStop(0, "rgba(147, 197, 253, 0.4)") // Light blue core
      gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.25)") // Purple mid
      gradient.addColorStop(0.7, "rgba(96, 165, 250, 0.1)") // Light blue outer
      gradient.addColorStop(1, "rgba(167, 139, 250, 0)") // Fade to transparent
    } else {
      // Subtle glow when not hovering
      gradient.addColorStop(0, "rgba(147, 197, 253, 0.2)") // Light blue core
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)") // Purple mid
      gradient.addColorStop(0.8, "rgba(96, 165, 250, 0.05)") // Light blue outer
      gradient.addColorStop(1, "rgba(167, 139, 250, 0)") // Fade to transparent
    }

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2)
    ctx.fill()
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
      ctx.fillText("Computer Engineer | Quantum Photonics Enthusiastic", centerX, centerY + 30) // Adjusted position

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

    // Initialize button particles
    function initButtonParticles() {
      if (!buttonRef.current) return

      const buttonRect = buttonRef.current.getBoundingClientRect()
      const centerX = buttonRect.left + buttonRect.width / 2
      const centerY = buttonRect.top + buttonRect.height / 2
      const radius = Math.max(buttonRect.width, buttonRect.height) / 2

      buttonParticlesRef.current = []
      const particleCount = 20

      for (let i = 0; i < particleCount; i++) {
        buttonParticlesRef.current.push(new ButtonParticle(centerX, centerY, radius * 1.5))
      }
    }

    // Track if button is being hovered
    let isButtonHovered = false

    function updateButtonHoverState() {
      if (!buttonRef.current) return false

      const buttonRect = buttonRef.current.getBoundingClientRect()
      const { x, y } = mousePositionRef.current

      return x >= buttonRect.left && x <= buttonRect.right && y >= buttonRect.top && y <= buttonRect.bottom
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Updated background color to match the main application's background color
      // Using hsl(240, 10%, 3.9%) which is the --background variable from globals.css
      ctx.fillStyle = "hsl(240, 10%, 3.9%)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Apply global opacity for smooth fade-out during transition
      if (isEntering) {
        const elapsedTime = Date.now() - enterStartTimeRef.current
        const fadeOutProgress = Math.min(elapsedTime / 800, 1)
        ctx.globalAlpha = 1 - fadeOutProgress
      }

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

      // Only add new particles if we're not in the entering state
      if (!isEntering) {
        while (particlesRef.current.length < targetParticleCount) {
          const newParticle = createParticle()
          if (newParticle) particlesRef.current.push(newParticle)
        }
      }

      // Update button hover state
      isButtonHovered = updateButtonHoverState()

      // Draw button glow effect
      if (buttonRef.current && !isEntering) {
        const buttonRect = buttonRef.current.getBoundingClientRect()
        const centerX = buttonRect.left + buttonRect.width / 2
        const centerY = buttonRect.top + buttonRect.height / 2

        drawButtonGlow(ctx, centerX, centerY, buttonRect.width, buttonRect.height, isButtonHovered)

        // Update button particles
        for (const particle of buttonParticlesRef.current) {
          particle.update(isButtonHovered)
          particle.draw(ctx)
        }
      }

      // Reset global alpha
      ctx.globalAlpha = 1

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    createInitialParticles()
    setTimeout(initButtonParticles, 100) // Initialize button particles after button is rendered
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
      initButtonParticles()
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
    enterStartTimeRef.current = Date.now()
    setIsEntering(true)

    // Rest of the function remains the same
    setTimeout(() => {
      setIsComplete(true)

      setTimeout(() => {
        router.push("/home")
      }, 300)
    }, 800)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-16">
        {/* Empty div for top spacing */}
        <div className="flex-1"></div>

        {/* No text content here - it's drawn on the canvas */}
        <div className="text-center">{/* Intentionally empty - text is rendered on canvas */}</div>

        {/* Integrated Enter button */}
        <div className="mb-16 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isEntering ? 0 : 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={isEntering ? "pointer-events-none" : ""}
          >
            <button
              ref={buttonRef}
              onClick={handleEnter}
              disabled={isEntering}
              className="group relative overflow-hidden rounded-full border border-blue-400/30 bg-transparent px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-100">Enter</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
