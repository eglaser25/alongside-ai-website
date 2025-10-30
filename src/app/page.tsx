'use client'

import Image from 'next/image'
import FadeInOnScroll from '@/components/animations/FadeInOnScroll'
import { CheckCircle2, Check, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInOnScroll>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900">
              Get Tangible Value From AI<br />
              Fast and Responsibly
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mt-8 max-w-4xl mx-auto">
              Get measurable results from AI in weeks, not months—with compliance built in from day one. Whether you're starting fresh or trying to actually get ROI from existing investments.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="mt-12">
              <a
                href="https://tidycal.com/m8dn423/30-minute-meeting"
                target="_blank"
                rel="noopener"
                className="inline-block px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Start with a Free Assessment
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <a href="#results" className="block text-center group">
            <p className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
              $350K revenue increase in 90 days • See how →
            </p>
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Why Companies Struggle with AI
              </h2>
              <p className="text-xl text-slate-700">
                Most organizations are stuck between AI hype and actual results.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Fear of Falling Behind</h3>
                <p className="text-slate-600 leading-relaxed">
                  Competitors are embedding AI while you debate next steps
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">No In-House Expertise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your team lacks the knowledge to start or manage risks
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Pilots Die on the Vine</h3>
                <p className="text-slate-600 leading-relaxed">
                  Experiments without adoption planning go nowhere fast
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Mounting Pressure</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI matters, but unclear paths lead to wasted spend
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* The Solution: 3-Step Process */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                How It Works
              </h2>
              <p className="text-xl text-slate-700">
                A proven process that delivers results in weeks, not months
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 text-white text-lg font-bold rounded-full mr-3">
                    1
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">AI Readiness Assessment</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p><strong className="text-slate-900">Timeline:</strong> 2-5 days</p>
                  <p><strong className="text-slate-900">Investment:</strong> Complimentary with full program</p>
                  <p>Rapid evaluation that identifies opportunities and risks</p>
                  <p className="text-sm font-semibold text-blue-700">Deliverable: Prioritized roadmap you can act on immediately</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 ring-2 ring-blue-700/20 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 text-white text-lg font-bold rounded-full mr-3">
                    2
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Focused Implementation</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p><strong className="text-slate-900">Timeline:</strong> 6-10 weeks (including assessment)</p>
                  <p><strong className="text-slate-900">Investment:</strong> $35-85K (assessment included)</p>
                  <p>Choose: Training, Custom Tools, or Governance Frameworks</p>
                  <p className="text-sm font-semibold text-blue-700">Deliverable: Measurable results and adoption</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 text-white text-lg font-bold rounded-full mr-3">
                    3
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Fractional AI Team</h3>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p><strong className="text-slate-900">Timeline:</strong> Ongoing</p>
                  <p><strong className="text-slate-900">Investment:</strong> $10-20K/month</p>
                  <p>Continuous optimization and governance support</p>
                  <p className="text-sm font-semibold text-blue-700">Deliverable: Sustainable AI capability</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
              What Makes This Different
            </h2>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Speed Without Chaos</h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Most AI consultants either move fast (creating compliance nightmares) or move carefully (slowing everything down). I deliver both—tangible results in weeks with proper governance from the start.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Built to Scale</h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  I don't just deliver projects—I build the foundation for sustainable AI advantage. Quick wins that prove value AND establish the capability to scale safely.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Practical, Not Theoretical</h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  No shelf-ware strategies or abstract concepts. Everything I deliver is designed to be used immediately by your team.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Flexible Engagement</h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Start small with the assessment, scale up as you see results. No obligation to continue unless you're thrilled with what we've built.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Real Results
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                See how companies are getting measurable value from AI fast
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-200">
                <div className="text-sm font-semibold text-blue-700 mb-2">
                  Recruiting Firm
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Training & Workflow Automation
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Challenge:</p>
                    <p className="text-slate-600">
                      Recruiters spending 5-7 hours/week manually tracking job openings across 15+ systems
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Solution:</p>
                    <p className="text-slate-600">Custom AI workflows and team enablement training</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Results:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>4-6 hours/week saved per recruiter</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>$40K-60K annual savings identified</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>30% increase in outreach volume</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">Timeline:</span> Under 30 days
                    </p>
                  </div>
                </div>

                <a
                  href="https://curly-egret-045.notion.site/Case-Study-Empowering-a-Recruiting-Firm-with-AI-Training-Enablement-2649006ccc64801ab2c1c1ca46c7a0bd?pvs=143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold"
                >
                  View full case study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-2 border-blue-700/20 relative">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">
                  FEATURED
                </div>

                <div className="text-sm font-semibold text-blue-700 mb-2">
                  Personal Care Brand
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI-Enabled Marketing Engine
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Challenge:</p>
                    <p className="text-slate-600">Slow content production and limited visibility in AI-powered search</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Solution:</p>
                    <p className="text-slate-600">Automated content pipeline with AI crawlability optimization</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Results:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">+$350K annual revenue</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>-$90K annual agency costs</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>+18% qualified organic traffic</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                        <span>45% reduction in content production time</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">Timeline:</span> 90 days
                    </p>
                  </div>
                </div>

                <a
                  href="https://curly-egret-045.notion.site/Case-Study-Building-an-AI-Enabled-Marketing-Engine-2969006ccc6480cab03ee076ff766b37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold"
                >
                  View full case study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
              Expected Outcomes
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Clear roadmap from day one</h3>
                  <p className="text-slate-600 leading-relaxed">Know exactly where AI will create value fastest</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Measurable results in weeks</h3>
                  <p className="text-slate-600 leading-relaxed">Tangible ROI, not promises and pilots</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Teams actively using AI</h3>
                  <p className="text-slate-600 leading-relaxed">Real adoption, not just training completed</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Compliance built in</h3>
                  <p className="text-slate-600 leading-relaxed">Proper governance from the start, no scrambling later</p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.5}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Sustainable capability</h3>
                  <p className="text-slate-600 leading-relaxed">Foundation for long-term competitive advantage</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Investment Options
              </h2>
              <p className="text-xl text-slate-700">
                Clear pricing, clear value
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 ring-2 ring-blue-700/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </span>
                </div>
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Implementation Program</h3>
                  <div className="text-3xl font-bold text-blue-700 mb-1">$35-85K</div>
                  <div className="text-slate-600 text-sm">6-10 weeks</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Complimentary Readiness Assessment (normally $10K)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Focused implementation tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">30 days of post-implementation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Best value—start fast and save the assessment fee</span>
                  </li>
                </ul>
                <a
                  href="https://tidycal.com/m8dn423/30-minute-meeting"
                  target="_blank"
                  rel="noopener"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Assessment-Only</h3>
                  <div className="text-3xl font-bold text-blue-700 mb-1">$10K</div>
                  <div className="text-slate-600 text-sm">1 week</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">For organizations who need the roadmap first</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Full credit applied if you proceed within 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Standalone deliverable you can act on independently</span>
                  </li>
                </ul>
                <a
                  href="https://tidycal.com/m8dn423/30-minute-meeting"
                  target="_blank"
                  rel="noopener"
                  className="block w-full text-center px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200"
                >
                  Book Assessment
                </a>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Fractional AI Team</h3>
                  <div className="text-3xl font-bold text-blue-700 mb-1">$10-20K</div>
                  <div className="text-slate-600 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Available after implementation or standalone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Flexible retainer for continued strategic support</span>
                  </li>
                </ul>
                <a
                  href="https://tidycal.com/m8dn423/30-minute-meeting"
                  target="_blank"
                  rel="noopener"
                  className="block w-full text-center px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
              Who This Is For
            </h2>
          </FadeInOnScroll>

          <div className="max-w-5xl mx-auto">
            <FadeInOnScroll delay={0.1}>
              <p className="text-xl text-slate-700 mb-12 text-center">
                This approach works best for SMBs who:
              </p>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <FadeInOnScroll delay={0.2}>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-slate-600">Want results fast but refuse to cut corners on governance</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.3}>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-slate-600">Are tired of AI hype and want practical implementation</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.4}>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-slate-600">Need to prove value before making larger investments</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.5}>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-slate-600">Operate in industries where compliance matters</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.6}>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base md:text-lg text-slate-600">Want expert guidance without hiring a full-time AI team</p>
                </div>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll delay={0.7}>
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-900 mb-6">Industries I work with:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Professional Services', 'Healthcare', 'Finance', 'Pharma', 'Manufacturing', 'Technology'].map((industry) => (
                    <span key={industry} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* About / Founder Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
                  <div className="w-full md:w-72 flex-shrink-0">
                    <Image
                      className="w-full h-auto rounded-2xl object-cover shadow-lg"
                      src="/images/founder-evan-glaser.jpg"
                      alt="Evan Glaser, Founder & CEO, Alongside AI"
                      width={896}
                      height={1088}
                      loading="lazy"
                      sizes="(min-width: 768px) 18rem, 80vw"
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Evan</h2>
                    <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
                      <p>I started Alongside AI because I kept seeing the same pattern: organizations excited about AI, but stuck between hype and actual results.</p>
                      <p>For the past decade, I've worked at the intersection of AI, cybersecurity, and data privacy—most recently leading enterprise AI adoption and governance at Credo AI. There, I helped Fortune 500 companies in highly regulated industries move from "Should we use AI?" to "Here's how AI just saved us 200 hours this month."</p>
                      <p>The truth is, most companies don't need a massive AI transformation. They need someone who understands both the technology and the business to help them start small, move fast, and scale what works.</p>
                      <p>That's what Alongside AI does. We cut through the noise, find the highest-value opportunities, and deliver results in weeks—not quarters. Whether it's training teams, building custom tools, or putting practical governance in place, we're focused on one thing: getting you real value from AI, fast.</p>
                      <p>Before all this, I spent years in cybersecurity and privacy, which taught me that the best technology solutions are the ones people actually use—and trust.</p>
                      <p>When I'm not working with clients, I'm either golfing, hiking Colorado trails, or building small AI tools for fun—I believe the best consultants are the ones who still like to get their hands dirty.</p>
                      <p className="font-semibold text-slate-900">Let's build something useful together.</p>
                    </div>
                    <div className="pt-4">
                      <p className="text-base font-semibold text-slate-900 mb-4">Evan Glaser, Founder & CEO</p>
                      <a
                        href="https://www.linkedin.com/in/glaserevan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed">
                Start with the Readiness Assessment. In less than a week, you'll know exactly where AI can create value in your business.
              </p>
              <a
                href="https://tidycal.com/m8dn423/30-minute-meeting"
                target="_blank"
                rel="noopener"
                className="inline-block px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Your Assessment
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
