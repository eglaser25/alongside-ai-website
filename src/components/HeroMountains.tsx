'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroMountains() {
  const [opacity, setOpacity] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (approximately 85vh)
      const heroHeight = window.innerHeight * 0.85
      const scrollY = window.scrollY

      // Start fading at 50% through hero, complete at 100%
      const fadeStart = heroHeight * 0.5
      const fadeEnd = heroHeight

      if (scrollY <= fadeStart) {
        setOpacity(1)
      } else if (scrollY >= fadeEnd) {
        setOpacity(0)
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart)
        setOpacity(1 - fadeProgress)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Don't render if fully faded out (performance optimization)
  if (opacity === 0) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity,
        transition: 'opacity 0.15s ease-out',
        willChange: 'opacity',
      }}
      aria-hidden="true"
    >
      {/* Mountain 1: Primary - OUTLINED, top right behind Production */}
      <svg
        className="absolute hidden lg:block"
        style={{
          width: '420px',
          height: '320px',
          top: '12%',
          right: '5%',
          transform: 'rotate(4deg)',
        }}
        viewBox="0 0 420 320"
        fill="none"
      >
        <path
          d="M210 25 L395 295 L25 295 Z"
          stroke="rgba(51, 18, 243, 0.22)"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>

      {/* Mountain 2: Secondary - Gray filled, mid-right */}
      <svg
        className="absolute hidden lg:block"
        style={{
          width: '280px',
          height: '220px',
          top: '38%',
          right: '28%',
          transform: 'rotate(-5deg)',
          filter: 'blur(1px)',
        }}
        viewBox="0 0 280 220"
        fill="none"
      >
        <path
          d="M140 15 L268 205 L12 205 Z"
          fill="rgba(100, 116, 139, 0.14)"
        />
      </svg>

      {/* Mountain 3: Accent - Small blue filled, lower right */}
      <svg
        className="absolute hidden lg:block"
        style={{
          width: '180px',
          height: '145px',
          bottom: '22%',
          right: '18%',
          transform: 'rotate(6deg)',
          filter: 'blur(1px)',
        }}
        viewBox="0 0 180 145"
        fill="none"
      >
        <path
          d="M90 12 L170 133 L10 133 Z"
          fill="rgba(51, 18, 243, 0.12)"
        />
      </svg>

      {/* Mobile: Single crisp mountain */}
      <svg
        className="absolute lg:hidden"
        style={{
          width: '160px',
          height: '125px',
          top: '55%',
          right: '2%',
          transform: 'rotate(5deg)',
          filter: 'blur(1px)',
        }}
        viewBox="0 0 160 125"
        fill="none"
      >
        <path
          d="M80 10 L150 115 L10 115 Z"
          fill="rgba(51, 18, 243, 0.12)"
        />
      </svg>
    </div>
  )
}
