'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  featured?: boolean
}

export default function Card({ children, className = '', animate = true, featured = false }: CardProps) {
  const baseClasses = cn(
    'bg-surface-primary border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow',
    featured && 'ring-2 ring-brand',
    className
  )

  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-semibold text-text-primary', className)}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={cn('text-text-secondary leading-relaxed', className)}>
      {children}
    </p>
  )
}
