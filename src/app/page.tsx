'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, GraduationCap, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Section from '@/components/Section'
import FeatureCard from '@/components/FeatureCard'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink mb-6">
              Turn AI Into Business{' '}
              <span className="text-gradient">Results</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-7 text-muted">
              We help SMBs turn AI from experiments into measurable outcomes—strategy, hands‑on training, and safe deployment.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="/contact">Book a Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">See How We Work</Link>
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-sm text-muted"
            >
              Trusted by teams in healthcare, CPG, and professional services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted mb-4">Why Choose Alongside AI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            We bridge the gap between AI potential and practical business implementation
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Tailored AI Roadmaps"
            description="We align AI initiatives to revenue and cost goals, not tech demos."
            delay={0}
          />
          <FeatureCard
            icon={<GraduationCap size={24} />}
            title="AI Skills That Stick"
            description="Workshops that deliver daily time savings and repeatable workflows."
            delay={0.1}
          />
          <FeatureCard
            icon={<ShieldCheck size={24} />}
            title="Safe, Compliant AI"
            description="Deploy with guardrails that satisfy security and regulatory needs."
            delay={0.2}
          />
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted mb-4">What Our Clients Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Real Results from Real Businesses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Testimonial
            quote="Saved 6-10 hours per week after enablement"
            name="Sarah Chen"
            role="Operations Director"
            company="MedTech Solutions"
            delay={0}
          />
          <Testimonial
            quote="Finally have AI that actually improves our workflow"
            name="Marcus Johnson"
            role="VP Marketing"
            company="Regional Bank"
            delay={0.1}
          />
          <Testimonial
            quote="Implemented safely with full compliance confidence"
            name="Lisa Rodriguez"
            role="Chief Risk Officer"
            company="Financial Services"
            delay={0.2}
          />
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold">
            <span className="mr-2">📊</span>
            Average time savings: 6-10 hours per team member per week
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ship AI That Works?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's map the fastest path from pilot to production.
            </p>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="bg-white text-brand-600 hover:bg-blue-50 hover:text-brand-700 border-white"
            >
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
