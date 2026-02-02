'use client'

import { useEffect, useRef, useState } from 'react'

const BOOKING_URL = 'https://tidycal.com/m8dn423/30-minute-meeting'
const BOOKING_URL_AUDIT = 'https://tidycal.com/m8dn423/15-minute-meeting'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Trigger entrance animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Subtle animated particle field for depth
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 25000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.3) * 0.3, // Slight rightward drift
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()
      })

      // Draw subtle connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Deep gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(37, 99, 235, 0.12) 0%, transparent 40%),
            radial-gradient(ellipse 70% 50% at 20% 80%, rgba(30, 64, 175, 0.15) 0%, transparent 50%),
            linear-gradient(to bottom, #020617 0%, #0f172a 50%, #1e293b 100%)
          `,
        }}
      />

      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Subtle grid overlay for structure feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vertical accent lines - frame the content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
        {/* Left edge accent */}
        <div
          className="absolute left-8 xl:left-16 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.15) 20%, rgba(96, 165, 250, 0.3) 50%, rgba(59, 130, 246, 0.15) 80%, transparent 100%)',
          }}
        />

        {/* Right edge accent */}
        <div
          className="absolute right-8 xl:right-16 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.15) 20%, rgba(96, 165, 250, 0.3) 50%, rgba(59, 130, 246, 0.15) 80%, transparent 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="mb-8">
          {/* First line - only "isn't" italicized */}
          <span
            className={`block font-light transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.2,
              color: 'rgba(255, 255, 255, 0.75)',
              letterSpacing: '-0.01em',
            }}
          >
            Governance <em className="italic">isn&apos;t</em> the brake
          </span>

          {/* Second line - bold, definitive statement */}
          <span
            className={`block mt-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            <span className="text-white">It&apos;s the </span>
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 25%, #3b82f6 50%, #2563eb 75%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              accelerator
              {/* Underline accent */}
              <span
                className={`absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-500 delay-700 ${
                  isVisible ? 'right-0 opacity-70' : 'right-full opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)',
                }}
              />
            </span>
          </span>
        </h1>

        {/* Supporting text */}
        <div
          className={`max-w-3xl mx-auto mb-12 space-y-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p
            className="text-lg md:text-xl"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.7,
            }}
          >
            AI projects stall because executives need clarity on risk, compliance, and security.
          </p>
          <p
            className="text-lg md:text-xl font-medium"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
            }}
          >
            We&apos;re the AI team for regulated companies.{' '}
            <span className="text-blue-300">Strategy.</span>{' '}
            <span className="text-blue-300">Engineering.</span>{' '}
            <span className="text-blue-300">Governance.</span>
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Primary CTA */}
          <a
            href={BOOKING_URL}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
            }}
          >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Get Your AI Roadmap in Days
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href={BOOKING_URL_AUDIT}
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border border-blue-500/30 text-blue-200 bg-blue-500/5 backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
          >
            Find Your Quick Wins
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Trust indicator */}
        <div
          className={`mt-16 pt-8 border-t border-white/5 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-white/40 mb-4">
            Trusted by leaders at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {['Financial Services', 'Healthcare', 'Insurance', 'Pharma'].map((industry) => (
              <span
                key={industry}
                className="text-sm font-medium text-white/30 tracking-wide"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
