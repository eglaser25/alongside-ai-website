import Image from 'next/image'
import Hero from '@/components/Hero'
import PricingCard from '@/components/ui/PricingCard'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import CountUp from '@/components/animations/CountUp'
import { Fragment } from 'react'
import { BOOKING_URL } from '@/lib/config'

const PROBLEM_STATS = [
  { value: 180, prefix: '$', suffix: 'K', label: 'Average AI hire salary', detail: 'before benefits and equity' },
  { value: 6, prefix: '', suffix: ' mo', label: 'Ramp-up time', detail: 'before they ship anything useful' },
  { value: 73, prefix: '', suffix: '%', label: 'AI projects fail', detail: 'due to lack of clear strategy' },
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
    description: 'We find your highest-impact AI opportunities and build working prototypes to prove the ROI.',
    features: [
      'AI Opportunity Assessment',
      'Working prototypes to validate ROI',
      'Weekly strategy call',
      'Slack support (business hours)',
      'Governance review & risk summary',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    title: 'Growth',
    price: '$8,000',
    description: 'Production-grade AI your team uses daily. Strategy, build, and governance included.',
    features: [
      '2–3 concurrent production builds',
      'Twice-weekly syncs',
      'Priority Slack support',
      'Full compliance & documentation',
      'Quarterly AI roadmap',
    ],
    cta: 'Book a Call',
    featured: true,
  },
  {
    title: 'Scale',
    price: '$15,000',
    description: 'Full AI department capabilities without building the department.',
    features: [
      'Unlimited production projects',
      'Dedicated team availability',
      'Same-day response SLA',
      'Enterprise governance suite',
      'Board-ready reporting',
      'Custom integrations & workflows',
    ],
    cta: 'Book a Call',
    featured: false,
  },
]

const CASE_STUDIES = [
  {
    industry: 'Personal Care Brand',
    badge: 'AI-Enabled Marketing',
    challenge:
      'A national dermatology and personal care brand relied on traditional SEO and slow content cycles. They had zero visibility in AI-generated search results and were losing ground to competitors appearing in AI overviews.',
    solution:
      'We built an automated, expert-reviewed content engine with structured data and llms.txt optimization, plus an AI mention tracking dashboard to measure visibility across ChatGPT, Perplexity, and Google AI Overviews.',
    results: [
      { value: '+18%', label: 'Organic traffic from AI queries' },
      { value: '+$350K', label: 'Annual revenue attributed' },
      { value: '-45%', label: 'Content production time' },
      { value: '-$90K', label: 'Agency spend eliminated' },
    ],
  },
  {
    industry: 'National Recruiting Firm',
    badge: 'AI Training & Enablement',
    challenge:
      'Recruiters spent 5\u20137 hours per week on manual tracking across 15+ ATS platforms. Data was inconsistent, reporting was fragile, and the team had limited awareness of how AI could help.',
    solution:
      'We built a centralized job tracker, created AI workflows for JD optimization, candidate outreach, and spreadsheet automation, then rolled out an AI Starter Guide and live enablement sessions for the full team.',
    results: [
      { value: '4\u20136 hrs', label: 'Saved per recruiter per week' },
      { value: '~30%', label: 'Outreach volume growth' },
      { value: '$40\u201360K', label: 'Annualized savings' },
    ],
    quote: {
      text: 'The enablement sessions were a turning point \u2014 our team immediately found ways to save hours each week. We can see the ROI, and we know where to focus next.',
      attribution: 'Director of Operations',
    },
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
    frameworks: ['EU AI Act', 'NIST AI RMF', 'ISO 42001', 'Custom Policies'],
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
          1b. TRUSTED BY
          ============================================ */}
      <section className="py-10 md:py-14 bg-surface-primary">
        <div className="container-wide">
          <FadeInOnScroll>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-4">
                Trusted by
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-text-secondary">
                <span>SEEN Haircare</span>
                <span className="text-text-tertiary/40" aria-hidden="true">&middot;</span>
                <span>Moseley Insurance Group</span>
                <span className="text-text-tertiary/40" aria-hidden="true">&middot;</span>
                <span>Vanguard Retail Development</span>
                <span className="text-text-tertiary/40" aria-hidden="true">&middot;</span>
                <span>PeoplePack Talent</span>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

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
                <div className="rounded-2xl bg-surface-subtle border border-border text-center p-8">
                  <p className="stat-display text-brand">
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="text-body font-semibold text-text-primary mt-3">{stat.label}</p>
                  <p className="text-body-sm text-text-tertiary mt-1">{stat.detail}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          2b. HOW IT WORKS
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {PROCESS_STEPS.map((step, index) => (
              <FadeInOnScroll key={step.number} delay={index * 0.1} className="h-full">
                <div className="flex flex-col md:flex-row items-stretch h-full">
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
        </div>
      </section>

      <div className="container-default">
        <div className="threshold-fade" />
      </div>

      {/* ============================================
          3. RESULTS — Case studies
          ============================================ */}
      <section id="results" className="section bg-surface-primary">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="Results, not promises"
              subtitle="Real outcomes from recent engagements."
            />
          </FadeInOnScroll>

          <div className="flex flex-col gap-8">
            {CASE_STUDIES.map((study, index) => (
              <Fragment key={study.industry}>
              <FadeInOnScroll delay={index * 0.15}>
                <div className="card-base shadow-card hover:shadow-card-hover hover:-translate-y-0.5 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="brand">{study.badge}</Badge>
                    <span className="text-body-sm text-text-tertiary">{study.industry}</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Narrative */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-body font-semibold text-text-primary mb-1">Challenge</h3>
                        <p className="text-body-sm text-text-secondary leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-body font-semibold text-text-primary mb-1">Solution</h3>
                        <p className="text-body-sm text-text-secondary leading-relaxed">{study.solution}</p>
                      </div>
                      {'quote' in study && study.quote && (
                        <blockquote className="threshold-left mt-6">
                          <p className="text-body-sm italic text-text-secondary leading-relaxed">
                            &ldquo;{study.quote.text}&rdquo;
                          </p>
                          <cite className="text-caption text-text-tertiary not-italic mt-2 block">
                            &mdash; {study.quote.attribution}
                          </cite>
                        </blockquote>
                      )}
                    </div>

                    {/* Stats */}
                    <div className={`grid ${study.results.length === 4 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'} gap-6`}>
                      {study.results.map((result) => (
                        <div key={result.label} className="text-left p-4 rounded-lg bg-surface-subtle border-l-2 border-brand">
                          <p className="text-2xl md:text-3xl font-black text-brand">{result.value}</p>
                          <p className="text-caption text-text-secondary mt-1">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
              {index < CASE_STUDIES.length - 1 && <div className="threshold-fade" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. PRICING — Simple, transparent pricing
          ============================================ */}
      <section id="pricing" className="section bg-surface-subtle">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="Simple, transparent pricing"
              subtitle="No proposals. No surprise invoices. Pick a tier, start this week."
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <p className="text-center text-body-sm text-text-secondary max-w-2xl mx-auto -mt-8 mb-12">
              Every engagement kicks off with our{' '}
              <span className="font-semibold text-text-primary">AI Opportunity Assessment</span>
              {' '}&mdash; a proven process to identify where AI will have the most impact on your business.
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <FadeInOnScroll key={tier.title} delay={index * 0.1} className="h-full">
                <PricingCard {...tier} />
              </FadeInOnScroll>
            ))}
          </div>

          <div className="text-center mt-10 space-y-2">
            <p className="text-body-sm text-text-secondary">
              Not sure which tier is right?{' '}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-hover font-semibold transition-colors">
                Book a free call
              </a>
              {' '}&mdash; we&apos;ll help you figure it out.
            </p>
            <p className="text-body-sm text-text-tertiary">
              Have a one-off project in mind?{' '}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-hover font-medium transition-colors">
                Let&apos;s talk custom work.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          5. WHY ALONGSIDE AI — Differentiators
          ============================================ */}
      <section id="why-alongside" className="section bg-midnight">
        <div className="container-wide">
          <FadeInOnScroll>
            <SectionHeader
              title="Why Alongside AI"
              subtitle="We're not the only AI consultancy. Here's why companies choose us."
              className="[&_h2]:text-white [&_p]:text-white/75"
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
              <FadeInOnScroll key={item.title} delay={index * 0.1} className="h-full">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:-translate-y-1 hover:border-white/20 transition-all duration-200 p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/75 leading-relaxed">
                    {item.description}
                  </p>
                  {'frameworks' in item && item.frameworks && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(item.frameworks as string[]).map((fw) => (
                        <span key={fw} className="text-xs font-medium text-white/60 border border-white/15 rounded-full px-3 py-1">
                          {fw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          6. ABOUT — Founder
          ============================================ */}
      <section id="about" className="section bg-surface-primary px-6 texture-noise">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInOnScroll>
              <div className="bg-midnight h-96 rounded-xl flex items-end p-8 relative overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/founder-evan-glaser.jpg"
                  alt="Evan Glaser, Co-founder of Alongside AI"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                <div className="relative z-10">
                  <p className="text-white text-lg font-bold">Evan Glaser</p>
                  <p className="text-white/75 text-sm">Co-founder</p>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <div className="flex flex-col">
                <h2 className="text-3xl font-extrabold text-text-primary mb-6">
                  We built this because we kept seeing the same problem.
                </h2>

                <div className="space-y-4">
                  <p className="text-text-secondary text-base leading-relaxed">
                    Companies know AI matters. But hiring a full AI team is expensive, consultants deliver slide decks instead of software, and internal experiments stall without the right expertise.
                  </p>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Alongside AI is the team that fills that gap. We bring strategy, engineering, and governance under one roof &mdash; so you get working solutions, not just recommendations.
                  </p>
                </div>

                <div className="bg-surface-subtle rounded-xl border border-border p-4 flex items-center gap-4 mt-8">
                  <Image
                    src="/images/aigp-badge.png"
                    alt="AIGP Certification Badge"
                    width={48}
                    height={48}
                    className="flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-text-primary text-sm">AIGP Certified</p>
                    <p className="text-text-tertiary text-xs">AI Governance Professional &mdash; IAPP</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/glaserevan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand font-semibold hover:text-brand-hover transition-colors inline-flex items-center gap-2 mt-6"
                >
                  Connect on LinkedIn
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <div className="container-default">
        <div className="threshold-fade" />
      </div>

      {/* ============================================
          7. GET STARTED — Dual CTA
          ============================================ */}
      <section id="get-started" className="section-lg bg-midnight texture-noise relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--color-brand) 10%, transparent) 0%, transparent 70%)'
          }}
        />
        <div className="container-narrow text-center relative">
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
