import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient'
}

export default function Section({ 
  children, 
  className,
  background = 'white'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-700'
  }
  
  return (
    <section className={cn(
      'py-20 md:py-28',
      backgrounds[background],
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}