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

  class Particle {
    x: number
    y: number
    size: number
    baseX: number
    baseY: number
    density: number
    color: string

    constructor(x: number, y: number, color: string) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.size = Math.random() * 2 + 1
      this.density = Math.random() * 30 + 1
      this.color = color
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
      const forceDirectionX = dx / distance
      const forceDirectionY = dy / distance
      const maxDistance = 100
      const force = (maxDistance - distance) / maxDistance
      const directionX = forceDirectionX * force * this.density
      const directionY = forceDirectionY * force * this.density

      if (distance < maxDistance) {
        this.x -= directionX
        this.y -= directionY
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX
          this.x -= dx / 10
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY
          this.y -= dy / 10
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = []
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 500)

      // Create quantum-themed particles
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const colors = ["#6366f1", "#8b5cf6", "#3b82f6", "#06b6d4"]
        const color = colors[Math.floor(Math.random() * colors.length)]
        particlesRef.current.push(new Particle(x, y, color))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(10, 10, 20, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const particle of particlesRef.current) {
        particle.update(mousePositionRef.current.x, mousePositionRef.current.y)
        particle.draw(ctx)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.x, y: e.y }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    handleResize()
    animate()

    // Removed auto-transition timer

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

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
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ricardo Gonzales
          </h1>
          <p className="mt-4 text-xl text-indigo-300">Computer Engineer | Quantum Photonics Researcher</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={handleEnter}
          className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 ${
            isEntering ? "pointer-events-none opacity-0" : ""
          }`}
        >
          <span className="relative z-10">Enter</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </motion.button>
      </div>
    </div>
  )
}
