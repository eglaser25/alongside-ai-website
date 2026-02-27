'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface FadeInOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeInOnScroll({ children, delay = 0, className = '' }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`
          el.classList.add('fade-in-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-in-on-scroll ${className}`}>
      {children}
    </div>
  )
}
