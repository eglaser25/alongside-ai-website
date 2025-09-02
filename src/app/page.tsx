import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Stop Talking About AI.<br className="hidden md:block" />
              <span className="text-blue-600">Start Winning With It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
              Alongside AI helps your business cut through the noise and turn AI into a real competitive advantage — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="https://calendly.com/evan-alongside-ai/30min">Book a Free Discovery Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="#step1">Learn how it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section id="why" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why This Matters
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Every leader knows their company needs to use AI to stay competitive. The challenge is how: most teams lack the know-how, the confidence, and the trusted partner to put AI to work in a way that actually delivers results.
            </p>
            <p>
              Meanwhile, competitors aren't waiting. The organizations that win will be the ones who move quickly — building the skills, workflows, and momentum to put AI into practice now, not years from now. Alongside AI bridges the gap between "we should be using AI" and "AI is already driving measurable impact inside our business."
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {/* Step 1 */}
            <div id="step1" className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Step 1 — AI Opportunity Report — $1,000
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Deep dive into your workflows and priorities.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Prioritized roadmap of AI opportunities with ROI estimates.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Each recommendation includes a flat-fee option for implementation.
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                <strong>Note:</strong> If you move forward with the full Accelerator, your $1,000 report fee is credited toward the program cost.
              </p>
              <Button asChild>
                <Link href="https://calendly.com/evan-alongside-ai/30min">Start with the Report</Link>
              </Button>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Step 2 — AI Accelerator Program — $5K–$25K
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Once you've seen the roadmap, the Accelerator delivers training, enablement, and executive alignment so AI becomes part of your operations.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What's Included</h4>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Executive AI Impact Assessment</strong> — Leadership session addressing "How is AI impacting my business?" Covers industry-specific disruptions, competitive risks, strategic opportunities, and practical next steps for your leadership team.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>ChatGPT Fundamentals Workshop</strong> — Hands-on team training in core skills.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Team-Specific AI Training</strong> — Playbooks and tools tailored for sales, recruiting, marketing, or ops.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Custom Sessions & Solution Work</strong> — Tailored projects based on findings in your AI Opportunity Report (e.g., AI SEO audits, compliance reviews, or custom tool development).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <strong>Custom Content & Resources</strong> — Materials such as prompt packs, slides, decks, and other enablement tools designed to drive adoption and speed up results.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild>
                <Link href="https://calendly.com/evan-alongside-ai/30min">Talk to Alongside AI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What You'll Achieve in 30 Days
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pinpoint where AI creates the most value.
              </h3>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Equip your people to use AI effectively.
              </h3>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Align leadership on risks, trends, and opportunities.
              </h3>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Embed AI into daily operations.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Alongside AI
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Founded by an experienced AI solutions lead with enterprise enablement background (Credo AI, Darktrace). Alongside AI helps teams adopt AI responsibly and quickly. We bridge the gap between AI potential and practical implementation, ensuring your organization can harness artificial intelligence to drive measurable business impact while maintaining ethical standards and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Start Your AI Advantage
            </h2>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="https://calendly.com/evan-alongside-ai/30min">Book a Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
