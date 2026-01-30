import Image from 'next/image'
import IndustryList from '@/components/IndustryList'

const BOOKING_URL = 'https://tidycal.com/m8dn423/30-minute-meeting'

const INDUSTRIES = [
  {
    name: 'Financial Services',
    chips: ['Risk Automation', 'Vendor Diligence'],
  },
  {
    name: 'Insurance',
    chips: ['Underwriting', 'Claims Workflows'],
  },
  {
    name: 'Healthcare',
    chips: ['PHI-Safe AI', 'Clinical Governance'],
  },
  {
    name: 'Legal',
    chips: ['Confidential Drafting', 'AI Use Policies'],
  },
  {
    name: 'Professional Services',
    chips: ['Consultant Enablement', 'AI Playbooks'],
  },
  {
    name: 'Technology',
    chips: ['Prototypes → Production', 'Lifecycle Controls'],
  },
]

const CLIENTS = [
  'PeoplePack Talent',
  'Vanguard Retail Development',
  'Moseley Insurance Group',
  'SEEN Haircare',
]

export default function Home() {
  return (
    <div className="bg-white pt-20">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-5 gap-16 items-center py-20">
          <div className="md:col-span-2 flex flex-col gap-8">
          <h1 className="text-midnight text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter">
  From POC to{" "}
  <span className="text-midnight/95">Production</span>


</h1>

            <p className="text-midnight/70 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
              We&apos;re the AI team for companies that can&apos;t afford to get it wrong.
            </p>
            <div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-10 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand/20"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Convergence Diagram */}
          <div className="md:col-span-3 hidden md:block">
            <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                {/* SVG Lines */}
                <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 400 400">
                  {/* Curved line from Strategy to center */}
                  <path
                    d="M100 80 C 150 80, 200 150, 200 200"
                    stroke="#3312f3"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />
                  {/* Straight line from Engineering to center */}
                  <path
                    d="M100 200 L 200 200"
                    stroke="#3312f3"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />
                  {/* Curved line from Governance to center */}
                  <path
                    d="M100 320 C 150 320, 200 250, 200 200"
                    stroke="#3312f3"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />
                  {/* Solid line from center to Production */}
                  <path
                    d="M200 200 L 300 200"
                    stroke="#3312f3"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                </svg>

                {/* Pillar 01 - Strategy */}
                <div className="absolute top-[10%] left-[5%] -translate-y-1/2 flex items-center gap-4 bg-white border border-midnight/5 p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-midnight/40 leading-none mb-1">Pillar 01</p>
                    <p className="text-sm font-bold text-midnight">Strategy</p>
                  </div>
                </div>

                {/* Pillar 02 - Engineering */}
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2 flex items-center gap-4 bg-white border border-midnight/5 p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-midnight/40 leading-none mb-1">Pillar 02</p>
                    <p className="text-sm font-bold text-midnight">Engineering</p>
                  </div>
                </div>

                {/* Pillar 03 - Governance */}
                <div className="absolute bottom-[10%] left-[5%] translate-y-1/2 flex items-center gap-4 bg-white border border-midnight/5 p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-midnight/40 leading-none mb-1">Pillar 03</p>
                    <p className="text-sm font-bold text-midnight">Governance</p>
                  </div>
                </div>

                {/* Convergence Point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-white border-2 border-brand rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-brand rounded-full"></div>
                  </div>
                </div>

                {/* Production Outcome */}
                <div className="absolute top-1/2 right-[5%] -translate-y-1/2 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center shadow-2xl shadow-brand/30 rotate-3">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-brand mb-1">Outcome</p>
                    <p className="text-lg font-black text-midnight">Production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE CHALLENGE SECTION
          ============================================ */}
      <section className="bg-first-shade py-24 md:py-32 px-6" id="problem">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="max-w-2xl">
              <span className="text-brand font-black uppercase tracking-widest text-xs">The Challenge</span>
              <h2 className="text-midnight text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
                The Compliance Chasm
              </h2>
              <p className="text-midnight/80 text-xl leading-relaxed">
                Regulated industries face unique hurdles. Most AI projects die in the lab because they hit the same three unanswerable questions.
              </p>
            </div>

            {/* The Big Questions */}
            <div className="flex flex-col gap-12 border-l-2 border-brand/20 pl-8 md:pl-16">
              <div className="group">
                <span className="text-brand/40 font-black text-sm uppercase tracking-tight block mb-2">Internal Ambiguity</span>
                <blockquote className="text-2xl md:text-4xl font-extrabold text-midnight leading-[1.1] tracking-tight group-hover:text-brand transition-colors">
                  &ldquo;What does <span className="italic text-brand">high risk</span> actually mean for our organization?&rdquo;
                </blockquote>
              </div>
              <div className="group">
                <span className="text-brand/40 font-black text-sm uppercase tracking-tight block mb-2">Systemic Exposure</span>
                <blockquote className="text-2xl md:text-4xl font-extrabold text-midnight leading-[1.1] tracking-tight group-hover:text-brand transition-colors">
                  &ldquo;What happens to the business if this AI system <span className="italic text-brand">goes wrong</span> in production?&rdquo;
                </blockquote>
              </div>
              <div className="group">
                <span className="text-brand/40 font-black text-sm uppercase tracking-tight block mb-2">The Accountability Gap</span>
                <blockquote className="text-2xl md:text-4xl font-extrabold text-midnight leading-[1.1] tracking-tight group-hover:text-brand transition-colors">
                  &ldquo;Who is accountable for that decision? Who is willing to <span className="italic text-brand">put their name</span> on this?&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-midnight/60 text-lg leading-relaxed font-medium">
                These aren&apos;t technical problems. They are governance bottlenecks that require a path to safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE DO SECTION
          ============================================ */}
      <section className="py-24 md:py-32 px-6" id="services">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand font-black uppercase tracking-widest text-xs">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-midnight">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Strategy */}
            <div className="group flex flex-col gap-6">
              <div className="w-full aspect-[4/3] bg-white border border-midnight/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors"></div>
                <div className="p-8 flex flex-col h-full justify-center items-center">
                  <svg className="w-12 h-12 text-brand/40 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-midnight">Strategy</h3>
                <p className="text-midnight/60 leading-relaxed">
                  Identify where AI creates real business value. Build roadmaps that prioritize impact over experimentation. Align technical possibilities with organizational readiness.
                </p>
              </div>
            </div>

            {/* Engineering */}
            <div className="group flex flex-col gap-6">
              <div className="w-full aspect-[4/3] bg-white border border-midnight/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors"></div>
                <div className="p-8 flex flex-col h-full justify-center items-center">
                  <svg className="w-12 h-12 text-brand/40 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-midnight">Engineering</h3>
                <p className="text-midnight/60 leading-relaxed">
                  Build and deploy AI systems that work. From prompt engineering to production infrastructure. Hands-on implementation, not just recommendations.
                </p>
              </div>
            </div>

            {/* Governance */}
            <div className="group flex flex-col gap-6">
              <div className="w-full aspect-[4/3] bg-white border border-midnight/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors"></div>
                <div className="p-8 flex flex-col h-full justify-center items-center">
                  <svg className="w-12 h-12 text-brand/40 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-midnight">Governance</h3>
                <p className="text-midnight/60 leading-relaxed">
                  Create frameworks that enable deployment, not block it. Risk assessment, policy development, and compliance structures that scale with your AI ambitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MANIFESTO SECTION
          ============================================ */}
      <section className="bg-midnight py-32 px-6 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none">
            Governance <span className="text-brand italic font-light">isn&apos;t</span> the brake. It&apos;s the accelerator.
          </h2>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
          <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
          </svg>
        </div>
      </section>

      {/* ============================================
          WHO WE WORK WITH SECTION
          ============================================ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            {/* Left column */}
            <div className="md:col-span-2">
              <span className="text-brand font-black uppercase tracking-widest text-xs">Partnerships</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 text-midnight">Who We Work With</h2>
              <p className="text-midnight/60 text-base leading-relaxed">
                We work with teams where AI adoption must balance speed, safety, and real operational impact.
              </p>
              <div className="mt-5">
                <p className="text-xs font-semibold text-midnight/40 uppercase tracking-wider mb-2">Select Clients</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {CLIENTS.map((client) => (
                    <span key={client} className="text-sm text-midnight/50">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Industry patterns */}
            <div className="md:col-span-3">
              <IndustryList industries={INDUSTRIES} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT FOUNDER SECTION
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
            <div className="flex flex-col gap-6">
              <span className="text-brand font-bold uppercase tracking-widest text-xs">Our Founder</span>
              <h2 className="text-4xl font-extrabold text-midnight">Navigating Complexity</h2>
              <p className="text-midnight/70 text-lg leading-relaxed">
                Alongside AI was founded by Evan Glaser to help organizations bridge the gap between AI experimentation and responsible deployment.
              </p>
              <p className="text-midnight/70 text-base leading-relaxed">
                Before starting Alongside AI, Evan led AI Adoption and Governance at Credo AI, where he helped enterprise clients implement AI governance programs. His background spans over a decade in AI, cybersecurity, and data privacy.
              </p>
              <p className="text-midnight/70 text-base leading-relaxed">
                He works directly with clients, combining strategic thinking with hands-on implementation to deliver measurable results.
              </p>
              <a
                href="https://www.linkedin.com/in/glaserevan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand font-semibold hover:brightness-110 transition-all inline-flex items-center gap-2"
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
          CTA SECTION
          ============================================ */}
      <section className="bg-white py-32 px-6 border-t border-midnight/5">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-midnight">
            Let&apos;s talk about what&apos;s stuck.
          </h2>
          <p className="text-midnight/60 text-lg max-w-md mx-auto">
            30 minutes to discuss your AI challenges. No pitch, just conversation.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-10 py-5 rounded-lg font-bold text-xl hover:brightness-110 transition-all w-full md:w-auto"
            >
              Book a Call
            </a>
          </div>
          <p className="text-midnight/40 text-sm">
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
