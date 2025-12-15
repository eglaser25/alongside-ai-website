import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      <h2 className="text-h1 md:text-display-sm text-text-primary text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
