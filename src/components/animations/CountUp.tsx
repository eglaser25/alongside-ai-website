'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1.5,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    const startTime = performance.now()
    const durationMs = duration * 1000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)

      // Ease out cubic for natural deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(easeOut * value)

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
