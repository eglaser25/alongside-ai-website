'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import TrustBar from '@/components/home/TrustBar'

// TidyCal Embed Component
function TidyCalEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="tidycal-embed" data-path="m8dn423/30-minute-meeting"></div>
  )
}

export default function Home() {
  const [showBooking, setShowBooking] = useState(false)
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
        {/* Blue gradient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(59,130,246,0.08),transparent),radial-gradient(50%_50%_at_90%_20%,_rgba(59,130,246,0.04),transparent)]" />
        </div>
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              Don't get left behind. Get ahead — Alongside AI.
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 max-w-4xl mx-auto">
              Most leaders know AI matters — but lack the expertise, roadmap, and adoption plan. We act as your fractional AI team, helping you move from hype to results before competitors pass you by.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white transform transition will-change-transform hover:scale-[1.015] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="Book a Discovery Call">
                <a href="https://tidycal.com/m8dn423/30-minute-meeting" target="_blank" rel="noopener">Book a Discovery Call</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 transition hover:shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="See How It Works">
                <Link href="#how-we-work">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm italic tracking-wide text-gray-500 dark:text-gray-400">
              Imagine how far you'll go.
            </p>
          </div>
        </div>
      </section>

      {/* Why Alongside AI */}
      <section id="why" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why Alongside AI?
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Most companies are stuck.
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Fear of falling behind:</strong> Competitors are already embedding AI into workflows while you debate next steps.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>No in-house expertise:</strong> Your team doesn't know where to start, what tools to use, or how to manage the risks.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Pilots that die on the vine:</strong> You've tried experiments, but without adoption they go nowhere.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Mounting pressure:</strong> Leadership knows AI matters — but without a clear path, the risk of wasted spend grows.
                </div>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              80% of AI pilots never scale — usually because companies lack expertise and adoption planning.
            </p>
            <p>
              Hiring a full AI department takes months and millions. With Alongside AI's fractional approach, you get battle-tested expertise on demand — the strategy, execution, and enablement of a full team, at a fraction of the cost. We act as your external AI team, plugging into your operations when you need us most.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
              We've run this playbook across industries, and it works. Instead of guessing, you plug into a proven system:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full mr-3">
                  01
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Opportunity Workshop
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Clarify where AI creates real ROI in your business.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                One session → a clear roadmap.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full mr-3">
                  02
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  AI Accelerator Program
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Solve a pressing problem fast — whether that means building, configuring, or training your team on the right tools.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                4–6 weeks → proof of value your stakeholders can see and use.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full mr-3">
                  03
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Enablement Retainer
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Embed AI into workflows, train your people, and put governance guardrails in place.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Ongoing → adoption that sticks and scales safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start p-6">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Clear ROI → no more pilots that fizzle
              </h3>
            </div>
            <div className="flex items-start p-6">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Confidence → your people actually using AI in daily work
              </h3>
            </div>
            <div className="flex items-start p-6">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Safety → governance and compliance handled, so risk doesn't stall progress
              </h3>
            </div>
            <div className="flex items-start p-6">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Speed → expertise that plugs in now, without hiring delays
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We partner with leaders at mid-sized companies who:
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-left mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Have lean teams and ambitious goals</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Can't afford to waste time on failed pilots</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>Need results that scale, not just experiments</div>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              (Common industries: healthcare, finance, recruiting, marketing — but our playbook adapts anywhere results matter.)
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              AI isn't slowing down. The companies that win are the ones that move now.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 transform transition will-change-transform hover:scale-[1.015] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="Book a Discovery Call">
                <a href="https://tidycal.com/m8dn423/30-minute-meeting" target="_blank" rel="noopener">Book a Discovery Call</a>
              </Button>
            </div>
            <p className="mt-4 text-sm italic tracking-wide text-blue-100">
              Imagine how far you'll go.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Book a Call</h2>
                <button
                  onClick={() => setShowBooking(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <TidyCalEmbed />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
