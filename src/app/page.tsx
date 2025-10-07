'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const staggerGroups = Array.from(document.querySelectorAll<HTMLElement>('.stagger'))

    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll<HTMLElement>(':scope > *')
      children.forEach((child, index) => {
        child.style.setProperty('--i', index.toString())
      })
    })

    if (reduceMotionQuery.matches || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative isolate py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-8 px-6 text-left md:flex-row md:items-center md:gap-12">
          <div className="stagger max-w-xl space-y-6">
            <h1 className="reveal text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Don't get left behind. Get ahead — Alongside AI.
            </h1>
            <p className="reveal text-lg leading-relaxed text-gray-800 dark:text-gray-200 md:text-xl">
              Most leaders know AI matters — but lack the expertise, roadmap, and adoption plan. We act as your fractional AI team, helping you move from hype to results before competitors pass you by.
            </p>
            <div className="reveal flex flex-wrap items-center gap-4">
              <a
                className="btn bg-[#1335F2] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
                href="https://tidycal.com/m8dn423/30-minute-meeting"
                target="_blank"
                rel="noopener"
              >
                Book a Discovery Call
              </a>
              <Link
                className="btn bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#1335F2] ring-1 ring-inset ring-[#1335F2]/30"
                href="#how-we-work"
              >
                See How It Works
              </Link>
            </div>
            <p className="reveal text-sm italic tracking-wide text-gray-500 dark:text-gray-400">
              Imagine how far you'll go.
            </p>
          </div>
          <div className="reveal card w-full max-w-md rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1335F2]">Latest win</p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-200">
              Reduced triage time by 200+ hours for a regulated enterprise with a lightweight AI co-pilot and practical guardrails.
            </p>
          </div>
        </div>
      </section>

      {/* Why Alongside AI */}
      <section id="why" className="reveal bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="stagger text-center">
            <h2 className="reveal mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Why Alongside AI?
            </h2>
          </div>
          <div className="stagger max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <p className="reveal text-lg font-semibold text-gray-900 dark:text-white">
              Most companies are stuck.
            </p>
            <ul className="reveal space-y-4 text-gray-700 dark:text-gray-300">
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
            <p className="reveal text-sm italic text-gray-600 dark:text-gray-400">
              80% of AI pilots never scale — usually because companies lack expertise and adoption planning.
            </p>
            <p className="reveal">
              Hiring a full AI department takes months and millions. With Alongside AI's fractional approach, you get battle-tested expertise on demand — the strategy, execution, and enablement of a full team, at a fraction of the cost. We act as your external AI team, plugging into your operations when you need us most.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="reveal bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="stagger mb-12 text-center">
            <h2 className="reveal mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              How We Work
            </h2>
            <p className="reveal mx-auto mt-3 max-w-2xl break-words leading-relaxed text-gray-700 dark:text-gray-300">
              We've run this playbook across industries, and it works. Instead of guessing, you plug into a proven system:
            </p>
          </div>
          <div className="stagger grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="reveal card rounded-lg bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
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
            <div className="reveal card rounded-lg bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
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
            <div className="reveal card rounded-lg bg-gray-50 p-8 shadow-sm dark:bg-gray-800">
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
      <section className="reveal py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="reveal text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            What You Get
          </h2>
          <div className="stagger grid gap-8 md:grid-cols-2">
            <div className="reveal card flex items-start rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Clear ROI → no more pilots that fizzle
              </h3>
            </div>
            <div className="reveal card flex items-start rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Confidence → your people actually using AI in daily work
              </h3>
            </div>
            <div className="reveal card flex items-start rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Safety → governance and compliance handled, so risk doesn't stall progress
              </h3>
            </div>
            <div className="reveal card flex items-start rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
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
      <section id="about" className="reveal bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="stagger text-center">
            <h2 className="reveal mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Who We Work With
            </h2>
            <p className="reveal mx-auto mt-3 mb-8 max-w-2xl break-words text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We partner with leaders at mid-sized companies who:
            </p>
            <ul className="reveal mx-auto mb-8 max-w-2xl space-y-4 text-left text-gray-700 dark:text-gray-300">
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
            <p className="reveal text-sm italic text-gray-600 dark:text-gray-400">
              (Common industries: healthcare, finance, recruiting, marketing — but our playbook adapts anywhere results matter.)
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <section
            id="founder"
            className="section-bg reveal rounded-2xl bg-neutral-50/70 p-8 shadow-md dark:bg-neutral-900/70"
          >
            <div className="mx-auto flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
              <Image
                className="reveal card h-auto w-full max-w-sm rounded-2xl object-cover shadow-xl md:w-72"
                src="/images/founder-evan-glaser.jpg"
                alt="Evan Glaser, Founder & CEO, Alongside AI"
                width={896}
                height={1088}
                loading="lazy"
                sizes="(min-width: 768px) 18rem, 80vw"
              />
              <div className="stagger w-full max-w-2xl space-y-6">
                <div className="reveal space-y-4 text-gray-700 dark:text-gray-300">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">About the Founder</h2>
                  <p>I started Alongside AI because I kept seeing the same pattern: organizations excited about AI, but stuck between hype and actual results.</p>
                  <p>For the past decade, I've worked at the intersection of AI, cybersecurity, and data privacy—most recently leading enterprise AI adoption and governance at Credo AI. There, I helped Fortune 500 companies in highly regulated industries move from "Should we use AI?" to "Here's how AI just saved us 200 hours this month."</p>
                  <p>The truth is, most companies don't need a massive AI transformation. They need someone who understands both the technology and the business to help them start small, move fast, and scale what works.</p>
                  <p>That's what Alongside AI does. We cut through the noise, find the highest-value opportunities, and deliver results in weeks—not quarters. Whether it's training teams, building custom tools, or putting practical governance in place, we're focused on one thing: getting you real value from AI, fast.</p>
                  <p>Before all this, I spent years in cybersecurity and privacy, which taught me that the best technology solutions are the ones people actually use—and trust.</p>
                  <p>When I'm not working with clients, I'm either golfing, hiking Colorado trails, or building small AI tools for fun—I believe the best consultants are the ones who still like to get their hands dirty.</p>
                  <p>Let's build something useful together.</p>
                </div>
                <div className="stagger space-y-2 text-gray-800 dark:text-gray-200">
                  <p className="reveal text-base font-semibold">Evan Glaser, Founder &amp; CEO</p>
                  <a
                    className="reveal btn inline-flex items-center px-4 py-2 rounded-lg bg-[#1335F2] text-white"
                    href="https://www.linkedin.com/in/glaserevan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section reveal bg-[#1335F2] py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="reveal text-3xl font-bold md:text-4xl">
            AI isn't slowing down. The companies that win are the ones that move now.
          </h2>
          <p className="reveal max-w-2xl text-base leading-relaxed text-white/90">
            Partner with Alongside AI to identify high-impact use cases, level up your teams, and operationalize trustworthy AI in weeks—not quarters.
          </p>
          <div className="reveal flex flex-wrap items-center justify-center gap-4">
            <a
              className="btn inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#1335F2]"
              href="https://tidycal.com/m8dn423/30-minute-meeting"
              target="_blank"
              rel="noopener"
            >
              Book a Discovery Call
            </a>
            <Link
              href="/services"
              className="btn inline-flex items-center px-4 py-2 rounded-lg bg-white text-[#1335F2] hover:bg-neutral-100 transition"
            >
              Explore Services
            </Link>
          </div>
          <p className="reveal text-sm italic tracking-wide text-white/80">
            Imagine how far you'll go.
          </p>
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
