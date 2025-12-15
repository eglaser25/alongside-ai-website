import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'outline'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-surface-subtle text-text-secondary border-border',
    brand: 'bg-brand-muted text-brand border-brand-subtle',
    outline: 'bg-transparent text-text-secondary border-border-strong',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center',
        'px-3 py-1.5 rounded-full',
        'text-caption font-medium',
        'border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
