import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { BOOKING_URL } from '@/lib/config'

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'card-base p-8 flex flex-col h-full',
        featured
          ? 'shadow-lg'
          : 'shadow-card'
      )}
    >
      {featured && (
        <div className="mb-4">
          <Badge variant="brand">Most Popular</Badge>
        </div>
      )}

      <h3 className="text-h4 text-text-primary">{title}</h3>

      <p className="mt-2 text-text-secondary text-body-sm">{description}</p>

      <p className="mt-4 mb-6">
        <span className="text-display-sm text-text-primary">{price}</span>
        <span className="text-body-sm text-text-tertiary"> /month</span>
      </p>

      <ul className="space-y-3 mb-8 flex-1" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-body-sm text-text-secondary">
            <svg
              className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? 'primary' : 'secondary'}
        size="lg"
        className="w-full"
        asChild
      >
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          {cta}
        </a>
      </Button>
    </div>
  )
}
