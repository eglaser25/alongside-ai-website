import Hero from '@/components/Hero'
import PricingCard from '@/components/ui/PricingCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import { BOOKING_URL } from '@/lib/config'

const PROBLEM_STATS = [
  { value: '$180K', label: 'Average AI hire salary', detail: 'before benefits and equity' },
  { value: '6 mo', label: 'Ramp-up time', detail: 'before they ship anything useful' },
  { value: '73%', label: 'AI projects fail', detail: 'due to lack of clear strategy' },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Find it',
    description:
      'We learn your business and identify the bottleneck — the manual process, the decision that takes too long, the workflow bleeding money.',
  },
  {
    number: '02',
    title: 'Build it',
    description:
      'We design and build the AI solution. Not a slide deck — working software, tested with your data, often within days.',
  },
  {
    number: '03',
    title: 'Make it stick',
    description:
      'We implement alongside your team, handle governance and compliance, and make sure the ROI is real and lasting.',
  },
]

const PRICING_TIERS = [
  {
    title: 'Starter',
    price: '$4,000',
    description: 'One focused AI initiative per month. Perfect for testing the waters.',
    features: [
      '1 AI project per month',
      'Weekly strategy call',
      'Slack support (business hours)',
      'Basic governance review',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    title: 'Growth',
    price: '$8,000',
    description: 'Your embedded AI team. Multiple workstreams, faster iteration.',
    features: [
      '2–3 concurrent projects',
      'Twice-weekly syncs',
      'Priority Slack support',
      'Full governance & compliance',
      'Quarterly roadmap planning',
    ],
    cta: 'Book a Call',
    featured: true,
  },
  {
    title: 'Scale',
    price: '$15,000',
    description: 'Full AI department capabilities without the department.',
    features: [
      'Unlimited active projects',
      'Dedicated team availability',
      'Same-day response SLA',
      'Enterprise governance suite',
      'Board-ready reporting',
      'Custom integrations',
    ],
    cta: 'Book a Call',
    featured: false,
  },
]

const COMMITMENT_TIERS = [
  { term: 'Month-to-month', discount: '—', note: 'Full flexibility, cancel anytime' },
  { term: '3-month commitment', discount: '5% off', note: 'Most popular for first engagements' },
  { term: '6-month commitment', discount: '10% off', note: 'Best for ongoing transformation' },
  { term: '12-month commitment', discount: '15% off', note: 'Maximum savings, full roadmap' },
]

const IDEAL_FIT = [
  {
    title: 'Revenue $2M–$50M',
    description: 'Big enough to benefit from AI, lean enough that hiring a full team doesn\'t make sense yet.',
  },
  {
    title: 'Regulated or process-heavy',
    description: 'Insurance, legal, construction, finance — industries where compliance isn\'t optional.',
  },
  {
    title: 'Ready to act, not explore',
    description: 'You\'re past the "should we do AI?" phase. You want results, not another strategy deck.',
  },
  {
    title: 'Has a decision-maker involved',
    description: 'Someone with budget authority is part of the conversation from day one.',
  },
]

const TRANSPARENCY_ITEMS = [
  {
    title: 'A 50-person engineering team',
    description: 'We\'re a focused team, not an army. That\'s how we stay fast and embedded.',
  },
  {
    title: 'Vaporware demos',
    description: 'Everything we show you works. If it doesn\'t exist yet, we\'ll tell you that upfront.',
  },
  {
    title: 'Lock-in contracts',
    description: 'Month-to-month is always an option. We earn your business every month.',
  },
  {
    title: 'Buzzword bingo',
    description: 'We won\'t pitch you "AI-powered synergy." We\'ll tell you exactly what we\'re building and why.',
  },
]

const DIFFERENTIATORS = [
  {
    title: 'Speed',
    description:
      'Conversation to working prototype in under an hour. Most AI consultants deliver slide decks. We deliver working software.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Embedded, not outsourced',
    description:
      'We work alongside your team, not above them. No handoff docs — we\'re in it with you until it works.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Business-first',
    description:
      'We start with what\'s costing you money, not with which AI model is newest. Every project ties back to revenue or efficiency.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Governance built in',
    description:
      'AIGP-certified. We handle compliance, risk assessment, and documentation from day one — not as an afterthought.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="bg-surface-primary">
      {/* ============================================
          1. HERO
          ============================================ */}
      <Hero />

      {/* ============================================
          2. THE PROBLEM — Why hiring doesn't work
          ============================================ */}
      <section className="section bg-surface-primary">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="The AI hiring problem"
              subtitle="Building an internal AI team is expensive, slow, and risky. Most companies don't need a department — they need results."
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEM_STATS.map((stat, index) => (
              <FadeInOnScroll key={stat.label} delay={index * 0.1}>
                <div className="text-center p-8">
                  <p className="stat-display text-brand">{stat.value}</p>
                  <p className="text-body font-semibold text-text-primary mt-3">{stat.label}</p>
                  <p className="text-body-sm text-text-tertiary mt-1">{stat.detail}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          3. HOW IT WORKS + PRICING
          ============================================ */}
      <section id="how-it-works" className="section bg-surface-subtle">
        <div className="container-wide">
          {/* How It Works */}
          <FadeInOnScroll>
            <SectionHeader
              title="How it works"
              subtitle="Three steps. No fluff. From bottleneck to working solution."
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-20 md:mb-28">
            {PROCESS_STEPS.map((step, index) => (
              <FadeInOnScroll key={step.number} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="card-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center mb-5">
                      <span className="text-lg font-black text-brand">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                      <div className="w-full border-t-2 border-dashed border-border" />
                    </div>
                  )}
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          {/* Pricing */}
          <div id="pricing">
            <FadeInOnScroll>
              <SectionHeader
                title="Simple, transparent pricing"
                subtitle="No proposals. No surprise invoices. Pick a tier, start this week."
              />
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRICING_TIERS.map((tier, index) => (
                <FadeInOnScroll key={tier.title} delay={index * 0.1}>
                  <PricingCard {...tier} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          4. COMMITMENT TERMS — Discount table
          ============================================ */}
      <section className="section bg-surface-primary">
        <div className="container-default">
          <FadeInOnScroll>
            <SectionHeader
              title="Commit longer, save more"
              subtitle="All tiers are available month-to-month. Lock in a term for a discount."
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-4 pr-4 text-body-sm font-semibold text-text-primary">Term</th>
                    <th className="py-4 px-4 text-body-sm font-semibold text-text-primary">Discount</th>
                    <th className="py-4 pl-4 text-body-sm font-semibold text-text-primary">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMITMENT_TIERS.map((tier) => (
                    <tr key={tier.term} className="border-b border-border-subtle">
                      <td className="py-4 pr-4 text-body font-medium text-text-primary">{tier.term}</td>
                      <td className="py-4 px-4 text-body font-semibold text-brand">{tier.discount}</td>
                      <td className="py-4 pl-4 text-body-sm text-text-secondary">{tier.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          5. WHO THIS IS FOR — Ideal fit criteria
          ============================================ */}
      <section id="who-its-for" className="section bg-midnight px-6">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="Who this is for"
              subtitle="We do our best work with companies that fit this profile."
              className="[&_h2]:text-white [&_p]:text-white/75"
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IDEAL_FIT.map((item, index) => (
              <FadeInOnScroll key={item.title} delay={index * 0.08}>
                <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:-translate-y-1 hover:border-white/20 transition-all duration-200">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          6. WHAT YOU DON'T GET — Transparency
          ============================================ */}
      <section className="section bg-surface-primary">
        <div className="container-default">
          <FadeInOnScroll>
            <SectionHeader
              title="What you don't get"
              subtitle="Transparency matters. Here's what we're not, so you know exactly what you're signing up for."
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TRANSPARENCY_ITEMS.map((item, index) => (
              <FadeInOnScroll key={item.title} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-border">
                  <svg
                    className="w-5 h-5 text-text-tertiary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h3 className="text-body font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-body-sm text-text-secondary mt-1">{item.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          7. WHY ALONGSIDE AI — Differentiators
          ============================================ */}
      <section id="why-alongside" className="section bg-surface-subtle">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="Why Alongside AI"
              subtitle="We're not the only AI consultancy. Here's why companies choose us."
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
              <FadeInOnScroll key={item.title} delay={index * 0.1}>
                <div className="card-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 p-8">
                  <div className="w-10 h-10 rounded-lg bg-brand-muted text-brand flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          8. GET STARTED — Dual CTA
          ============================================ */}
      <section id="get-started" className="section-lg bg-midnight px-6">
        <div className="container-narrow text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Ready to stop hiring and start shipping?
            </h2>
            <p className="text-white/75 text-lg max-w-lg mx-auto mt-6 mb-10">
              Book a 30-minute call. We&apos;ll learn your business, identify the biggest
              opportunity, and show you what we&apos;d build first.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Button>
              <Button variant="inverse" size="lg" asChild>
                <a href="mailto:evan@alongside-ai.com">
                  Email us
                </a>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
