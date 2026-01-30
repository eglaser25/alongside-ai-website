'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const BOOKING_URL = 'https://tidycal.com/m8dn423/30-minute-meeting'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const openBooking = useCallback(() => {
    if (typeof window === 'undefined') return
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50',
        'bg-white/80 backdrop-blur-md',
        'border-b border-midnight/5 transition-shadow duration-200',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/alongside-main.svg"
              alt="Alongside AI"
              width={24}
              height={24}
              style={{ height: 24, width: 'auto' }}
              className="block object-contain"
            />
            <span className="text-midnight text-xl font-black tracking-tighter uppercase">
              Alongside AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#problem"
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              The Problem
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              About
            </a>
            <button
              onClick={openBooking}
              className="bg-brand text-white px-6 py-2.5 rounded font-bold text-sm hover:brightness-110 transition-all"
            >
              Book a Call
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-midnight hover:text-brand rounded-lg hover:bg-midnight/5 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-200',
            isMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-4 pt-2">
            <a
              href="#problem"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              The Problem
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-midnight hover:text-brand transition-colors"
            >
              About
            </a>
            <button
              onClick={() => {
                openBooking()
                setIsMenuOpen(false)
              }}
              className="bg-brand text-white px-6 py-3 rounded font-bold text-sm hover:brightness-110 transition-all w-full"
            >
              Book a Call
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
