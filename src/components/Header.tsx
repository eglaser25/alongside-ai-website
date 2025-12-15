'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const openBooking = useCallback(() => {
    if (typeof window === 'undefined') return
    window.open('https://tidycal.com/m8dn423/30-minute-meeting', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'bg-surface-primary/95 backdrop-blur-md',
        'border-b border-border transition-shadow duration-200',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="container-default">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/01 Final Logo Source Files/HQ View Files/SVG/03 Final Logo Reverse Color.svg"
              alt="Alongside AI"
              width={200}
              height={40}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface-subtle"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="default" onClick={openBooking}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-subtle transition-colors"
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
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="pt-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-body font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Button
                variant="primary"
                size="default"
                className="w-full"
                onClick={() => {
                  openBooking()
                  setIsMenuOpen(false)
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
