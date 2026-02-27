'use client'

import { useEffect, useState } from 'react'
import { BOOKING_URL } from '@/lib/config'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Consolidated background: base gradient + radial glows */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 45%, color-mix(in srgb, var(--color-hero-glow) 12%, transparent) 0%, transparent 70%),
            radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in srgb, var(--color-hero-glow) 15%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, color-mix(in srgb, var(--color-hero-glow) 8%, transparent) 0%, transparent 40%),
            linear-gradient(to bottom, var(--color-hero-bg-start) 0%, var(--color-hero-bg-mid) 50%, var(--color-hero-bg-end) 100%)
          `,
        }}
      />

      {/* Grid overlay (separate element — uses backgroundImage for repeating pattern) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in srgb, var(--color-hero-glow) 3%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--color-hero-glow) 3%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="mb-8">
          <span
            className={`block font-extrabold tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            <span className="text-white">Your AI Team —</span>
            <br />
            <span
              className="relative inline-block pb-2"
              style={{
                background: `linear-gradient(135deg, var(--color-brand-subtle) 0%, var(--color-accent) 40%, var(--color-brand) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Without the Hire.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          A fractional AI team that finds your bottleneck, builds the solution,
          and handles governance — so you get results without the overhead of a
          full-time hire.
        </p>

        {/* Single CTA */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-brand rounded-xl overflow-hidden transition-all duration-300 hover:bg-brand-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Let&apos;s talk
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
