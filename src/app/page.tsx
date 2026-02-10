import Image from 'next/image'
import Hero from '@/components/Hero'

const BOOKING_URL = 'https://tidycal.com/m8dn423/30-minute-meeting'

const REGULATORY_FRAMEWORKS = ['EU AI Act', 'NIST RMF', 'GDPR', 'ISO 42001', 'HIPAA', 'SOC 2']

const QUESTIONS_WE_ANSWER = [
  {
    question: '"Are we doing enough with AI?"',
    answer: "We'll help you identify exactly what you should be doing with AI - and show you how to get to production while your competitors are stuck in POC.",
    icon: 'compass',
  },
  {
    question: '"Are we doing it safely?"',
    answer: 'Shadow AI, data leakage, bias, hallucinations - we help you find risks before they become incidents.',
    icon: 'shield',
  },
  {
    question: '"What regulations apply?"',
    answer: "EU AI Act, NIST RMF, GDPR, HIPAA - we'll map what applies to you and build a unified framework that keeps you compliant from day one.",
    icon: 'document',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* ============================================
          HERO SECTION - Premium Dark Design
          ============================================ */}
      <Hero />

      {/* ============================================
          QUESTIONS WE ANSWER + REGULATORY BADGES

          Designed for 3-second scanning by compliance executives.
          Cards address core anxieties; badges provide credibility signal.
          ============================================ */}
      <section id="questions" className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-center text-sm font-semibold text-midnight/60 uppercase tracking-[0.2em] mb-10 md:mb-14">
            The Questions We Answer
          </h2>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {QUESTIONS_WE_ANSWER.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:border-brand/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Icon */}
                <div className="mb-4 text-midnight/30">
                  {item.icon === 'compass' && (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                  {item.icon === 'document' && (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  )}
                </div>

                {/* Question */}
                <h3 className="text-xl md:text-[22px] font-bold text-midnight mb-4 leading-tight">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-base text-midnight/60 leading-relaxed">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Regulatory Framework Badges */}
        <div className="bg-gray-100/80 mt-16 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-midnight/50 mb-5">
              Expertise in the frameworks you need:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-sm font-medium text-midnight/50">
              {REGULATORY_FRAMEWORKS.map((framework, index) => (
                <span key={framework} className="flex items-center">
                  <span className="tracking-wide">{framework}</span>
                  {index < REGULATORY_FRAMEWORKS.length - 1 && (
                    <span className="mx-3 text-midnight/20">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE DO SECTION - Dark background
          ============================================ */}
      <section
        className="py-24 md:py-32 px-6"
        id="services"
        style={{ backgroundColor: '#0f172a' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-black uppercase tracking-widest text-xs" style={{ color: '#60a5fa' }}>Our Services</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white">What We Do</h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Results delivered in weeks, not months. We combine strategic advisory with hands-on implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            {/* Strategy */}
            <div className="flex flex-col md:pr-8 md:border-r" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <svg className="w-10 h-10 text-blue-400 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Strategy</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Identify where AI creates real business value. Build roadmaps that prioritize impact over experimentation. Align technical possibilities with organizational readiness.
              </p>
              <div
                className="p-5 rounded-lg mt-auto"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderLeft: '4px solid #3b82f6',
                }}
              >
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, lineHeight: 1.5 }}>
                  Financial services firm: Governance framework enabling 3x faster model deployment while maintaining audit readiness
                </p>
              </div>
            </div>

            {/* Engineering */}
            <div className="flex flex-col md:px-8 md:border-r" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <svg className="w-10 h-10 text-blue-400 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Engineering</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Build and deploy AI systems that work. From prompt engineering to production infrastructure. Hands-on implementation, not just recommendations.
              </p>
              <div
                className="p-5 rounded-lg mt-auto"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderLeft: '4px solid #3b82f6',
                }}
              >
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, lineHeight: 1.5 }}>
                  Healthcare organization: HIPAA-compliant AI assistant for clinical documentation deployed in 6 weeks, saving 2 hours per clinician daily
                </p>
              </div>
            </div>

            {/* Governance */}
            <div className="flex flex-col md:pl-8">
              <svg className="w-10 h-10 text-blue-400 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Governance</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Create frameworks that enable deployment, not block it. Risk assessment, policy development, and compliance structures that scale with your AI ambitions.
              </p>
              <div
                className="p-5 rounded-lg mt-auto"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderLeft: '4px solid #3b82f6',
                }}
              >
                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, lineHeight: 1.5 }}>
                  Insurance company: EU AI Act readiness assessment and documentation package delivered in 3 weeks, avoiding potential $10M in penalties
                </p>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="mt-16 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold transition-all hover:opacity-80"
              style={{ color: '#3b82f6' }}
            >
              See how we can help your organization
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT FOUNDER SECTION - Enhanced credentials
          ============================================ */}
      <section className="py-24 md:py-32 px-6 bg-first-shade/30" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-midnight h-96 rounded-xl flex items-end p-8 relative overflow-hidden group">
              <Image
                src="/images/founder-evan-glaser.jpg"
                alt="Evan Glaser, Founder of Alongside AI"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-white text-lg font-bold">Evan Glaser</p>
                <p className="text-white/60 text-sm">Founder &amp; CEO</p>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-brand font-bold uppercase tracking-widest text-xs">Our Founder</span>
              <h2 className="text-4xl font-extrabold text-midnight mt-4 mb-8">Navigating Complexity</h2>

              {/* Bio paragraphs with clear spacing */}
              <div className="space-y-6">
                <p className="text-midnight/80 text-lg leading-relaxed">
                  I help regulated companies move AI projects from proof-of-concept to production—fast.
                </p>

                <p className="text-midnight/70 text-base leading-relaxed">
                  Most teams think governance will slow them down. The opposite is true. After training advisors at top consulting firms on AI governance and working with Fortune 100 clients, I&apos;ve learned that projects stall because of governance gaps, not governance itself.
                </p>

                <p className="text-midnight/70 text-base leading-relaxed">
                  Alongside AI was founded on that insight: build governance into the foundation, and teams move faster with confidence.
                </p>
              </div>

              {/* AIGP Certification */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center gap-4 mt-8">
                <Image
                  src="/images/aigp-badge.png"
                  alt="AIGP Certification Badge"
                  width={56}
                  height={56}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-midnight text-sm">AIGP Certified</p>
                  <p className="text-midnight/60 text-sm">Artificial Intelligence Governance Professional — IAPP</p>
                </div>
              </div>

              {/* Expertise indicators */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-brand/5 border border-brand/10 rounded-full text-xs font-semibold text-midnight/70">
                  10+ Years in AI &amp; Security
                </span>
                <span className="px-3 py-1 bg-brand/5 border border-brand/10 rounded-full text-xs font-semibold text-midnight/70">
                  EU AI Act Expert
                </span>
                <span className="px-3 py-1 bg-brand/5 border border-brand/10 rounded-full text-xs font-semibold text-midnight/70">
                  NIST RMF
                </span>
                <span className="px-3 py-1 bg-brand/5 border border-brand/10 rounded-full text-xs font-semibold text-midnight/70">
                  GDPR
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/glaserevan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand font-semibold hover:brightness-110 transition-all inline-flex items-center gap-2 mt-8"
              >
                Connect on LinkedIn
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - Single focused CTA
          ============================================ */}
      <section className="bg-white py-32 px-6 border-t border-midnight/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-midnight">
            Let&apos;s talk about what&apos;s stuck.
          </h2>
          <p className="text-midnight/60 text-lg max-w-lg mx-auto mt-6 mb-10">
            Book a readiness assessment to identify where AI creates value fastest for your organization.
          </p>

          {/* Primary CTA */}
          <a
            href={BOOKING_URL}
            className="group inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand/20"
          >
            Get Your AI Roadmap in Days
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <p className="text-midnight/40 text-sm mt-10">
            Or email{' '}
            <a
              href="mailto:evan@alongside-ai.com"
              className="text-midnight/60 hover:text-brand transition-colors"
            >
              evan@alongside-ai.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
