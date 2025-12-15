import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  cta: {
    label: string
    href: string
  }
  featured?: boolean
  badge?: string
  className?: string
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  cta,
  featured = false,
  badge,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col p-6 md:p-8 rounded-xl',
        'bg-surface-primary border',
        'transition-all duration-200',
        featured
          ? 'border-brand/30 shadow-elevated ring-1 ring-brand/10'
          : 'border-border shadow-card hover:shadow-card-hover',
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex px-3 py-1 rounded-full bg-brand text-white text-caption font-semibold">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={cn('text-center', badge && 'mt-2')}>
        <h3 className="text-h3 text-text-primary mb-2">{title}</h3>
        <div className="text-display-sm text-brand font-bold">{price}</div>
        <p className="text-body-sm text-text-tertiary">{period}</p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-border" />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
            <span className="text-body text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'block w-full text-center py-3 rounded-lg font-semibold',
          'transition-all duration-200',
          featured
            ? 'bg-brand text-white shadow-button hover:bg-brand-hover hover:shadow-button-hover'
            : 'bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white'
        )}
      >
        {cta.label}
      </a>
    </div>
  )
}
