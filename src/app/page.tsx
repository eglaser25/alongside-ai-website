'use client'

import Image from 'next/image'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import CountUp from '@/components/animations/CountUp'
import { Check, ArrowRight } from 'lucide-react'

// Client names for trust row
const CLIENTS = [
  'PeoplePack Talent',
  'Vanguard Retail Development',
  'Moseley Insurance Group',
  'SEEN Haircare',
]

export default function Home() {
  return (
    <div className="bg-surface-primary">
      {/* ============================================
          ACT 1: ARRIVAL (Heavy)
          Commanding presence, asymmetric, decisive
          ============================================ */}

      {/* Hero Section */}
      <section className="py-28 md:py-40">
        <div className="container-default">
          <FadeInOnScroll>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary tracking-tight leading-[1.08] max-w-4xl">
              AI That Delivers.<br />
              Governance That Protects.
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-8 max-w-xl leading-relaxed">
              Measurable results in weeks. Compliance from day one.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.15}>
            <div className="mt-12">
              <a
                href="https://tidycal.com/m8dn423/30-minute-meeting"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold bg-brand text-white rounded-lg hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors shadow-button hover:shadow-button-hover"
              >
                Start with a Free Assessment
              </a>
            </div>
          </FadeInOnScroll>

          {/* Trust row - minimal */}
          <FadeInOnScroll delay={0.25}>
            <div className="mt-20 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                  Recent clients
                </p>
                {CLIENTS.map((client) => (
                  <span key={client} className="text-sm text-text-muted">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          ACT 2: CONTEXT (Light)
          De-emphasized. Just context, not drama.
          ============================================ */}

      {/* The Pattern We See */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-narrow">
          <FadeInOnScroll>
            <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-8">What we see repeatedly</p>

            <p className="text-xl md:text-2xl font-medium text-text-primary leading-snug mb-6">
              Organizations stuck in the same place: excited about AI, paralyzed by risk, watching competitors move while they debate.
            </p>

            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Pilots that never scale. Consultants who deliver decks instead of results. Compliance teams that say no to everything. The gap between AI promise and AI reality keeps widening.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          THESIS MOMENT
          The defining belief. Full stop.
          ============================================ */}

      <section className="py-20 md:py-28 border-y border-border">
        <div className="container-narrow">
          <FadeInOnScroll>
            <div className="flex items-center justify-center gap-6 md:gap-10">
              <div className="hidden sm:block w-12 h-px bg-border" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  AI moves fast.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-text-muted tracking-tight">
                  Governance keeps it moving.
                </p>
              </div>
              <div className="hidden sm:block w-12 h-px bg-border" />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          ACT 3: EVIDENCE (Heavy)
          Board-ready credibility moment
          ============================================ */}

      {/* The Evidence */}
      <section id="results" className="section-lg bg-surface-inverse text-text-inverse texture-noise">
        <div className="container-wide relative">
          <FadeInOnScroll>
            <div className="mb-16">
              <p className="eyebrow text-brand-subtle mb-4">The Evidence</p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-3">
                Results that survive scrutiny.
              </h2>
              <p className="text-xs text-slate-500">
                Client-verified metrics from completed engagements.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Primary Case Study - Exhibit A */}
          <FadeInOnScroll delay={0.1}>
            <div className="mb-16">
              <p className="exhibit-label mb-6">Exhibit A</p>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Stats - Hero treatment with count-up */}
                <div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    <div>
                      <div className="stat-display text-white">
                        +$<CountUp value={350} className="tabular-nums" />K
                      </div>
                      <p className="stat-label text-slate-400">Annual Revenue</p>
                    </div>
                    <div>
                      <div className="stat-display text-white">
                        -$<CountUp value={90} className="tabular-nums" />K
                      </div>
                      <p className="stat-label text-slate-400">Agency Costs</p>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                        +<CountUp value={18} />%
                      </div>
                      <p className="stat-label text-slate-400">Organic Traffic</p>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white tabular-nums">
                        <CountUp value={90} /> days
                      </div>
                      <p className="stat-label text-slate-400">To Results</p>
                    </div>
                  </div>
                </div>

                {/* Context - Minimal */}
                <div className="flex flex-col justify-center">
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">Personal Care Brand</p>
                  <h3 className="text-xl font-semibold text-white mb-4">AI-Enabled Marketing Engine</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                    Automated content pipeline with AI crawlability optimization. From concept to measurable ROI in one quarter.
                  </p>
                  <a
                    href="https://curly-egret-045.notion.site/Case-Study-Building-an-AI-Enabled-Marketing-Engine-2969006ccc6480cab03ee076ff766b37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-subtle font-medium hover:text-white transition-colors group"
                  >
                    Read full case study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Secondary Case Study - Exhibit B */}
          <FadeInOnScroll delay={0.2}>
            <div className="pt-8 border-t border-slate-700/50">
              <p className="exhibit-label mb-4">Exhibit B</p>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Recruiting Firm</p>
                  <p className="text-slate-300 text-sm">4-6 hrs/week saved per recruiter · $40-60K annual savings · Under 30 days</p>
                </div>
                <a
                  href="https://curly-egret-045.notion.site/Case-Study-Empowering-a-Recruiting-Firm-with-AI-Training-Enablement-2649006ccc64801ab2c1c1ca46c7a0bd?pvs=143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-subtle text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
                >
                  View case study →
                </a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          ACT 4: RESOLUTION (Medium)
          Condensed beliefs and path forward
          ============================================ */}

      {/* The Path Forward - Process, functional */}
      <section className="section">
        <div className="container-default">
          <FadeInOnScroll>
            <p className="eyebrow mb-4">The Path Forward</p>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-12">
              Three phases. No ambiguity.
            </h2>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: '01',
                title: 'Assessment',
                timeline: '2-5 days',
                description: 'Identify where AI creates value and where governance gaps exist.',
              },
              {
                phase: '02',
                title: 'Implementation',
                timeline: '6-10 weeks',
                investment: '$35-85K',
                description: 'Build the capability. Training, tools, or frameworks.',
              },
              {
                phase: '03',
                title: 'Partnership',
                timeline: 'Ongoing',
                investment: '$10-20K/mo',
                description: 'Continuous optimization and governance support.',
              },
            ].map((item) => (
              <FadeInOnScroll key={item.phase} delay={0.1}>
                <div>
                  <p className="text-sm font-bold text-brand mb-2">{item.phase}</p>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-tertiary mb-3">
                    {item.timeline}
                    {item.investment && ` · ${item.investment}`}
                  </p>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Conviction - Condensed beliefs */}
      <section className="section-quiet border-t border-border">
        <div className="container-narrow">
          <FadeInOnScroll>
            <p className="eyebrow text-text-tertiary mb-8">Our Conviction</p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Speed requires structure',
                  description: 'Governance from day one means you move faster, not slower. No scrambling later.',
                },
                {
                  title: 'Results require adoption',
                  description: 'We build what your team will actually use. Shelf-ware is failure.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Right Fit - Light touch */}
      <section className="section-sm">
        <div className="container-narrow">
          <FadeInOnScroll>
            <p className="eyebrow text-text-tertiary mb-6">Right Fit</p>
            <p className="text-text-secondary mb-6">
              This works best for organizations in regulated or reputation-sensitive industries who need to prove AI value without creating new risks.
            </p>
            <p className="text-sm text-text-tertiary">
              Healthcare · Finance · Pharma · Professional Services · Manufacturing · Technology
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ============================================
          ACT 5: DECISION (Heavy)
          The recommended option feels inevitable
          ============================================ */}

      {/* Start Here - Pricing */}
      <section className="section-lg bg-surface-subtle">
        <div className="container-default">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Start Here</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                One decision. Three options.
              </h2>
              <p className="text-sm text-text-muted max-w-md mx-auto">
                Most clients begin with the full implementation. It includes everything needed to see results.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Assessment - Subdued, left */}
            <FadeInOnScroll delay={0.1} className="lg:col-span-3">
              <div className="p-6 rounded-xl bg-surface-primary border border-border pricing-card">
                <p className="text-sm text-text-tertiary mb-4">Start with clarity</p>
                <h3 className="font-semibold text-text-primary mb-1">Assessment</h3>
                <div className="text-2xl font-bold text-text-primary mb-1 tabular-nums">$10K</div>
                <p className="text-sm text-text-tertiary mb-6">1 week</p>

                <p className="text-sm text-text-muted leading-relaxed">
                  Roadmap and risk assessment. Full credit if you proceed within 30 days.
                </p>

                <div className="pt-6 mt-6 border-t border-border">
                  <a
                    href="https://tidycal.com/m8dn423/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 rounded-lg text-sm font-medium text-text-secondary border border-border hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors"
                  >
                    Book Assessment
                  </a>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Full Implementation - Dominant, center */}
            <FadeInOnScroll delay={0.15} className="lg:col-span-6 lg:-mt-4">
              {/* Halo effect behind featured card */}
              <div className="relative pricing-card-featured">
                <div className="absolute -inset-4 bg-brand/5 rounded-2xl blur-xl" />

                {/* Threshold frame - signature element */}
                <div className="absolute -left-3 top-4 bottom-4 w-1 bg-brand rounded-full" />

                <div className="relative p-8 rounded-xl bg-surface-primary border-2 border-brand shadow-lg">
                  <p className="text-sm font-medium text-brand mb-4 text-center">Where most clients start</p>
                  <h3 className="text-xl font-bold text-text-primary mb-2 text-center">Full Implementation</h3>
                  <div className="text-4xl font-bold text-brand mb-1 text-center tabular-nums">$35-85K</div>
                  <p className="text-sm text-text-tertiary mb-8 text-center">6-10 weeks · Assessment included</p>

                  <ul className="space-y-3 mb-6">
                    {[
                      'Assessment included (normally $10K)',
                      'Implementation tailored to your needs',
                      '30 days post-implementation support',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border">
                    <a
                      href="https://tidycal.com/m8dn423/30-minute-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-lg font-semibold bg-brand text-white hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors shadow-button hover:shadow-button-hover"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Ongoing - Subdued, right */}
            <FadeInOnScroll delay={0.2} className="lg:col-span-3">
              <div className="p-6 rounded-xl bg-surface-primary border border-border pricing-card">
                <p className="text-sm text-text-tertiary mb-4">For sustained capability</p>
                <h3 className="font-semibold text-text-primary mb-1">Ongoing Partnership</h3>
                <div className="text-2xl font-bold text-text-primary mb-1 tabular-nums">$10-20K</div>
                <p className="text-sm text-text-tertiary mb-6">per month</p>

                <p className="text-sm text-text-muted leading-relaxed">
                  Continuous optimization. Available after implementation or standalone.
                </p>

                <div className="pt-6 mt-6 border-t border-border">
                  <a
                    href="https://tidycal.com/m8dn423/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 rounded-lg text-sm font-medium text-text-secondary border border-border hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Founder + What Clients Get */}
      <section className="section">
        <div className="container-default">
          <FadeInOnScroll>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* What clients get */}
              <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-widest mb-6">What clients get</p>
                <ul className="space-y-4">
                  {[
                    'AI opportunity assessment and roadmap',
                    'Hands-on implementation, not just strategy',
                    'Team training and capability building',
                    'Governance frameworks from day one',
                    'Measurable outcomes with clear timelines',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Founder - condensed */}
              <div className="flex items-start gap-5">
                <div className="w-20 flex-shrink-0">
                  <Image
                    className="w-full h-auto rounded-lg object-cover"
                    src="/images/founder-evan-glaser.jpg"
                    alt="Evan Glaser"
                    width={896}
                    height={1088}
                    loading="lazy"
                    sizes="5rem"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary">Evan Glaser</p>
                  <p className="text-xs text-text-tertiary mb-3">Founder</p>

                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    Former Head of AI Adoption & Governance at Credo AI. 10+ years in AI, cybersecurity, and data privacy.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/glaserevan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand font-medium hover:text-brand-hover transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container-narrow">
          <FadeInOnScroll>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4 tracking-tight">
                Start with clarity.
              </h2>
              <p className="text-text-muted mb-10 max-w-sm mx-auto">
                30 minutes to discuss your situation. No pitch.
              </p>

              {/* What happens next - tightened */}
              <div className="mb-10 inline-flex flex-col gap-2 text-xs text-text-tertiary">
                <span>1. We talk about your AI challenges</span>
                <span>2. I share relevant approaches</span>
                <span>3. You decide next steps</span>
              </div>

              <div>
                <a
                  href="https://tidycal.com/m8dn423/30-minute-meeting"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold bg-brand text-white rounded-lg hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-colors shadow-button hover:shadow-button-hover"
                >
                  Schedule a Conversation
                </a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
