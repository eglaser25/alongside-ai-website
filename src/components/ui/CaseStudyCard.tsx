import { cn } from '@/lib/utils'
import { Check, ArrowRight } from 'lucide-react'

interface Stat {
  value: string
  label: string
}

interface CaseStudyCardProps {
  industry: string
  title: string
  challenge: string
  solution: string
  results: string[]
  timeline: string
  stats?: Stat[]
  href: string
  featured?: boolean
  className?: string
}

export default function CaseStudyCard({
  industry,
  title,
  challenge,
  solution,
  results,
  timeline,
  stats,
  href,
  featured = false,
  className,
}: CaseStudyCardProps) {
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
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex px-3 py-1 rounded-full bg-brand text-white text-caption font-semibold">
            FEATURED
          </span>
        </div>
      )}

      {/* Header */}
      <div className={featured ? 'mt-2' : ''}>
        <span className="text-caption font-semibold text-brand uppercase tracking-wide">
          {industry}
        </span>
        <h3 className="text-h3 text-text-primary mt-1 mb-4">{title}</h3>
      </div>

      {/* Stats row (if provided) */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 p-4 mb-6 rounded-lg bg-surface-subtle border border-border-subtle">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-h3 font-bold text-brand">{stat.value}</div>
              <div className="text-caption text-text-tertiary">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Details */}
      <div className="space-y-4 text-body flex-1">
        <div>
          <p className="text-caption font-semibold text-text-primary uppercase tracking-wide mb-1">
            Challenge
          </p>
          <p className="text-text-secondary">{challenge}</p>
        </div>

        <div>
          <p className="text-caption font-semibold text-text-primary uppercase tracking-wide mb-1">
            Solution
          </p>
          <p className="text-text-secondary">{solution}</p>
        </div>

        <div>
          <p className="text-caption font-semibold text-text-primary uppercase tracking-wide mb-2">
            Results
          </p>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-2 text-text-secondary">
                <Check className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-body-sm text-text-secondary">
            <span className="font-semibold text-text-primary">Timeline:</span> {timeline}
          </p>
        </div>
      </div>

      {/* Link */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 text-brand font-semibold hover:text-brand-hover transition-colors group"
      >
        View full case study
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  )
}
