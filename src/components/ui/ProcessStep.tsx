import { cn } from '@/lib/utils'

interface ProcessStepProps {
  step: number
  title: string
  children: React.ReactNode
  featured?: boolean
  className?: string
}

export default function ProcessStep({
  step,
  title,
  children,
  featured = false,
  className,
}: ProcessStepProps) {
  return (
    <div
      className={cn(
        'relative p-6 md:p-8 rounded-xl',
        'bg-surface-primary border',
        'transition-all duration-200',
        featured
          ? 'border-brand/30 shadow-elevated ring-1 ring-brand/10'
          : 'border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
        className
      )}
    >
      {/* Step number */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className={cn(
            'flex items-center justify-center',
            'w-9 h-9 rounded-full',
            'text-sm font-bold',
            featured
              ? 'bg-brand text-white'
              : 'bg-brand text-white'
          )}
        >
          {step}
        </span>
        <h3 className="text-h4 text-text-primary">{title}</h3>
      </div>

      {/* Content */}
      <div className="space-y-3 text-body text-text-secondary">
        {children}
      </div>
    </div>
  )
}

interface ProcessStepDetailProps {
  label: string
  value: string
  highlight?: boolean
}

export function ProcessStepDetail({ label, value, highlight = false }: ProcessStepDetailProps) {
  return (
    <p>
      <span className="font-semibold text-text-primary">{label}:</span>{' '}
      <span className={highlight ? 'font-semibold text-brand' : ''}>{value}</span>
    </p>
  )
}
