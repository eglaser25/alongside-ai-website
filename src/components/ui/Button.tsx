import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-2xl'
  
  const variants = {
    primary: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700'
  }
  
  const sizes = {
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  )
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}