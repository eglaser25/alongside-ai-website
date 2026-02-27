import Image from 'next/image'
import Hero from '@/components/Hero'
import ClientCard from '@/components/ClientCard'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import { BOOKING_URL } from '@/lib/config'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Find it',
    description:
      'We learn your business and identify what\u2019s actually costing you \u2014 the bottleneck, the manual process, the decision that takes too long.',
  },
  {
    number: '02',
    title: 'Build it',
    description:
      'We design and build the AI solution. Not a slide deck \u2014 working software, tested with your data, often within days.',
  },
  {
    number: '03',
    title: 'Make it stick',
    description:
      'We implement alongside your team, handle governance and compliance, and make sure the ROI is real and lasting.',
  },
]

const CLIENTS = [
  {
    name: 'Moseley Insurance Group',
    description: 'Streamlining insurance claims processing with AI that understands policy nuance.',
    industry: 'Insurance',
  },
  {
    name: 'Vanguard Retail Development',
    description: 'Automating project workflows to reduce manual coordination overhead across developments.',
    industry: 'Real Estate',
  },
  {
    name: 'SEEN Haircare',
    description: 'Building AI-powered tools to optimize e-commerce operations and customer experience.',
    industry: 'Consumer Goods',
  },
  {
    name: 'PeoplePack Talent',
    description: 'Accelerating recruiting workflows with AI that surfaces the right candidates faster.',
    industry: 'Recruiting',
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
      'We work alongside your team, not above them. No handoff docs \u2014 we\u2019re in it with you until it works.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Business-first',
    description:
      'We start with what\u2019s costing you money, not with which AI model is newest. Every project ties back to revenue or efficiency.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
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
          2. HOW WE WORK — Three-stage journey
          ============================================ */}
      <section id="how-we-work" className="section bg-surface-primary">
        <div className="container-wide">
          <FadeInOnScroll>
            <h2 className="eyebrow text-center mb-14">
              How We Work
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
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
                  {/* Connector line between cards (desktop only) */}
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

      {/* ============================================
          3. WHO WE WORK WITH — Client proof cards
          ============================================ */}
      <section className="section bg-midnight px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h2 className="eyebrow text-brand-subtle text-center mb-4">
              Who We Work With
            </h2>
            <p className="text-center text-white/75 max-w-xl mx-auto mb-14">
              Real work, in progress. We partner with businesses across regulated industries to build AI that delivers.
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS.map((client, index) => (
              <FadeInOnScroll key={client.name} delay={index * 0.08}>
                <ClientCard
                  name={client.name}
                  description={client.description}
                  industry={client.industry}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. WHY US — Differentiators
          ============================================ */}
      <section className="section bg-surface-primary">
        <div className="container-default">
          <FadeInOnScroll>
            <h2 className="eyebrow text-center mb-14">
              Why Alongside
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          5. ABOUT — Streamlined founder section
          ============================================ */}
      <section className="section px-6 bg-surface-primary" id="about">
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

                {/* AIGP trust badge */}
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

      {/* ============================================
          6. CTA — Final call to action
          ============================================ */}
      <section className="section-lg bg-midnight px-6" id="contact">
        <div className="container-narrow text-center">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Ready to find your bottleneck?
            </h2>
            <p className="text-white/75 text-lg max-w-lg mx-auto mt-6 mb-10">
              Book a 30-minute call. We&apos;ll learn about your business and show you where AI can make a real difference.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-brand-hover transition-all shadow-xl shadow-brand/20"
            >
              Let&apos;s talk
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <p className="text-white/50 text-sm mt-10">
              Or email{' '}
              <a
                href="mailto:evan@alongside-ai.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                evan@alongside-ai.com
              </a>
            </p>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
