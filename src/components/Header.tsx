'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-midnight/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
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
              className={cn(
                'block object-contain transition-all duration-300',
                !isScrolled && 'brightness-0 invert'
              )}
            />
            <span className={cn(
              'text-xl font-black tracking-tighter uppercase transition-colors duration-300',
              isScrolled ? 'text-midnight' : 'text-white'
            )}>
              Alongside AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#how-we-work"
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled
                  ? 'text-midnight hover:text-brand'
                  : 'text-white/80 hover:text-white'
              )}
            >
              How We Work
            </a>
            <a
              href="#about"
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled
                  ? 'text-midnight hover:text-brand'
                  : 'text-white/80 hover:text-white'
              )}
            >
              About
            </a>
            <a
              href="#contact"
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled
                  ? 'text-midnight hover:text-brand'
                  : 'text-white/80 hover:text-white'
              )}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'md:hidden p-2 -mr-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-midnight hover:text-brand hover:bg-midnight/5'
                : 'text-white hover:bg-white/10'
            )}
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
          <nav className={cn(
            'flex flex-col gap-4 pt-2 rounded-lg',
            !isScrolled && 'bg-black/40 backdrop-blur-md p-4 -mx-2'
          )}>
            <a
              href="#how-we-work"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled ? 'text-midnight hover:text-brand' : 'text-white/90 hover:text-white'
              )}
            >
              How We Work
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled ? 'text-midnight hover:text-brand' : 'text-white/90 hover:text-white'
              )}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-sm font-semibold transition-colors',
                isScrolled ? 'text-midnight hover:text-brand' : 'text-white/90 hover:text-white'
              )}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
