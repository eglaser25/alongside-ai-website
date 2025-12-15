import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Alongside AI - AI Strategy & Implementation Consulting',
  description: 'Learn about our mission to help businesses implement AI tools thoughtfully and effectively. Meet our founder and discover our values.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Alongside AI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We believe AI should enhance human potential, not replace it. Our mission is to help 
              businesses implement AI tools thoughtfully and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To bridge the gap between AI potential and practical business implementation. 
                We help small and medium businesses navigate the AI landscape with confidence, 
                ensuring they deploy tools that deliver measurable value while maintaining 
                proper governance and ethical standards.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our approach combines strategic thinking with hands-on implementation, 
                giving you both the roadmap and the execution support needed to succeed with AI.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Approach</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Business-First Thinking</h3>
                    <p className="mt-1 text-gray-600">We start with your business goals, not the technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Practical Implementation</h3>
                    <p className="mt-1 text-gray-600">Focus on solutions that work in the real world.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Ongoing Partnership</h3>
                    <p className="mt-1 text-gray-600">We&apos;re here for the long term, not just the initial implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership
            </h2>
          </div>
          
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-600">
                Our team brings together deep expertise in technology consulting and business strategy. 
                We&apos;ve helped numerous organizations navigate digital transformation challenges, and now 
                we&apos;re focused on helping businesses harness AI&apos;s potential while avoiding common pitfalls.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We believe that successful AI implementation requires more than just technical 
                expertise—it demands a deep understanding of business processes, team dynamics, 
                and organizational change management.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our approach is collaborative and practical, ensuring that AI solutions are not 
                just technically sound but also sustainable and valuable for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Evan */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left column - Photo and credentials */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-8">
                  <Image
                    src="/images/founder-evan-glaser.jpg"
                    alt="Evan Glaser, Founder & CEO of Alongside AI"
                    width={896}
                    height={1088}
                    className="h-auto w-full rounded-2xl object-cover shadow-lg"
                    loading="lazy"
                    sizes="(min-width: 1024px) 20rem, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="mt-6">
                    <p className="text-lg font-semibold text-gray-900">Evan Glaser</p>
                    <p className="text-sm text-gray-500 mb-4">Founder & CEO</p>
                    <a
                      href="https://www.linkedin.com/in/glaserevan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Connect on LinkedIn
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Bio and what you get */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                  About Evan
                </h2>

                <div className="space-y-5 text-base leading-relaxed text-gray-600 max-w-2xl">
                  <p>
                    I started Alongside AI because I kept seeing the same pattern: organizations excited about AI, but stuck between hype and actual results.
                  </p>
                  <p>
                    For the past decade, I have worked at the intersection of AI, cybersecurity, and data privacy. Most recently leading enterprise AI adoption and governance at Credo AI, I helped Fortune 500 companies in highly regulated industries move from &quot;Should we use AI?&quot; to &quot;Here is how AI just saved us 200 hours this month.&quot;
                  </p>
                  <p>
                    The truth is, most companies do not need a massive AI transformation. They need someone who understands both the technology and the business to help them start small, move fast, and scale what works.
                  </p>
                  <p>
                    Before all this, I spent years in cybersecurity and privacy, which taught me that the best technology solutions are the ones people actually use and trust.
                  </p>
                </div>

                {/* What you get - derived from services */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">What you get working with us</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      'AI opportunity assessment and roadmap',
                      'Hands-on implementation support',
                      'Team training and enablement',
                      'Governance frameworks from day one',
                      'Measurable outcomes, not just strategy decks',
                      'A partner invested in your success',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-base font-semibold text-gray-900">
                  Let&apos;s build something useful together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Transparency</h3>
              <p className="mt-2 text-gray-600">
                Clear communication about capabilities, limitations, and expected outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Responsibility</h3>
              <p className="mt-2 text-gray-600">
                Ethical AI implementation with proper safeguards and governance frameworks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Results</h3>
              <p className="mt-2 text-gray-600">
                Focus on measurable business outcomes that justify your AI investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Work Together?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Let&apos;s discuss how we can help your business succeed with AI.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="inverse" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
