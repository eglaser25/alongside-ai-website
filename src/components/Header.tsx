'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen, closeMenu])

  // Move focus into menu when opened
  useEffect(() => {
    if (isMenuOpen) {
      // Small delay to let the menu animate open
      const timer = setTimeout(() => firstMenuLinkRef.current?.focus(), 150)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

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
            ref={menuButtonRef}
            onClick={toggleMenu}
            className={cn(
              'md:hidden p-2 -mr-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-midnight hover:text-brand hover:bg-midnight/5'
                : 'text-white hover:bg-white/10'
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          id="mobile-nav"
          role="region"
          aria-label="Mobile navigation"
          className={cn(
            'md:hidden grid transition-[grid-template-rows] duration-200',
            isMenuOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
          )}
        >
          <nav className={cn(
            'overflow-hidden flex flex-col gap-4 pt-2 rounded-lg',
            !isScrolled && isMenuOpen && 'bg-black/40 backdrop-blur-md p-4 -mx-2'
          )}>
            <a
              ref={firstMenuLinkRef}
              href="#how-we-work"
              onClick={closeMenu}
              className={cn(
                'text-sm font-semibold transition-colors py-1',
                isScrolled ? 'text-midnight hover:text-brand' : 'text-white/90 hover:text-white'
              )}
            >
              How We Work
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className={cn(
                'text-sm font-semibold transition-colors py-1',
                isScrolled ? 'text-midnight hover:text-brand' : 'text-white/90 hover:text-white'
              )}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className={cn(
                'text-sm font-semibold transition-colors py-1',
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
