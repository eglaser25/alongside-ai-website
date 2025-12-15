'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse'
  size?: 'sm' | 'default' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-semibold',
      'rounded-lg',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
    ]

    const variantStyles = {
      primary: [
        'bg-brand text-white',
        'shadow-button',
        'hover:bg-brand-hover hover:shadow-button-hover',
        'active:scale-[0.98]',
      ],
      secondary: [
        'bg-transparent text-brand',
        'border-2 border-brand',
        'hover:bg-brand hover:text-white',
        'active:scale-[0.98]',
      ],
      ghost: [
        'bg-transparent text-text-secondary',
        'hover:bg-surface-subtle hover:text-text-primary',
      ],
      inverse: [
        'bg-white text-brand',
        'shadow-button',
        'hover:bg-slate-50',
        'active:scale-[0.98]',
      ],
    }

    const sizeStyles = {
      sm: 'h-9 px-4 text-sm',
      default: 'h-11 px-5 text-sm',
      lg: 'h-12 px-8 text-base',
    }

    return (
      <Comp
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
