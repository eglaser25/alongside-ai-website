import Link from 'next/link'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Alongside AI Success Stories',
  description: 'See how Alongside AI has helped businesses implement AI solutions that deliver measurable results across manufacturing, professional services, and retail.',
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Manufacturing Company Streamlines Quality Control",
      industry: "Manufacturing",
      challenge: "Manual quality inspection processes causing bottlenecks and inconsistent results",
      solution: "Implemented AI-powered visual inspection system with automated defect detection",
      results: [
        "50% reduction in inspection time",
        "30% improvement in defect detection accuracy",
        "ROI achieved within 6 months"
      ],
      services: ["AI Opportunity Workshop", "Rapid Pilot Project"]
    },
    {
      title: "Professional Services Firm Automates Document Processing",
      industry: "Professional Services",
      challenge: "Hours spent manually reviewing and categorizing client documents",
      solution: "Custom AI document processing workflow with automated classification and data extraction",
      results: [
        "75% reduction in document processing time",
        "Improved client response times",
        "Team can focus on higher-value tasks"
      ],
      services: ["Rapid Pilot Project", "Enablement Retainer"]
    },
    {
      title: "Retail Chain Enhances Customer Support",
      industry: "Retail",
      challenge: "Overwhelmed customer support team with repetitive inquiries",
      solution: "AI-powered chatbot with intelligent escalation and knowledge base integration",
      results: [
        "60% of inquiries resolved automatically",
        "Customer satisfaction scores increased by 25%",
        "Support team efficiency doubled"
      ],
      services: ["AI Opportunity Workshop", "Rapid Pilot Project", "Enablement Retainer"]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              See how we've helped businesses like yours implement AI solutions that deliver 
              measurable results and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                      <p className="text-sm text-blue-600 mt-1">{study.industry}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-gray-600">
                            <svg className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Success Framework
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every successful implementation follows these key principles
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Data-Driven Decisions</h3>
              <p className="mt-2 text-gray-600">
                Every recommendation is backed by analysis of your specific business metrics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Rapid Implementation</h3>
              <p className="mt-2 text-gray-600">
                Focus on quick wins and iterative improvement rather than lengthy projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Team Enablement</h3>
              <p className="mt-2 text-gray-600">
                Your team learns to maintain and improve the solution independently.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Governance First</h3>
              <p className="mt-2 text-gray-600">
                Proper safeguards and compliance measures are built in from day one.
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
              Ready to Create Your Own Success Story?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Start Your AI Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}