import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'neutral' | 'primary'
  containerWidth?: 'default' | 'wide' | 'narrow'
}

export default function Section({
  children,
  className,
  background = 'white',
  containerWidth = 'default'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    neutral: 'bg-neutral-bg',
    primary: 'bg-primary text-white'
  }

  const containerWidths = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl'
  }

  return (
    <section className={cn(
      'py-24 md:py-32',
      backgrounds[background],
      className
    )}>
      <div className={cn(
        'mx-auto px-4 md:px-6',
        containerWidths[containerWidth]
      )}>
        {children}
      </div>
    </section>
  )
}