import Link from 'next/link'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting Services - Alongside AI',
  description: 'Comprehensive AI consulting services including strategy workshops, rapid pilot projects, and enablement retainers for small and medium businesses.',
}

export default function Services() {
  const services = [
    {
      title: "AI Opportunity Workshops",
      description: "Discover the highest-impact AI use cases for your business through collaborative sessions with your team.",
      features: [
        "Current state assessment",
        "AI opportunity mapping",
        "Prioritized implementation roadmap",
        "ROI projections for top use cases"
      ],
      pricing: "Starting at $2,500",
      duration: "2-3 days",
      ideal: "Companies looking to understand AI potential"
    },
    {
      title: "Rapid Pilot Projects",
      description: "Fast-track your AI implementation with focused pilot projects that deliver measurable results.",
      features: [
        "Custom AI solution development",
        "Integration with existing systems",
        "Performance monitoring setup",
        "Success metrics tracking"
      ],
      pricing: "Starting at $7,500",
      duration: "4-8 weeks",
      ideal: "Teams ready to implement specific AI solutions"
    },
    {
      title: "Enablement Retainers",
      description: "Ongoing support to ensure your team maximizes AI tool adoption and maintains governance standards.",
      features: [
        "Monthly training sessions",
        "Tool optimization guidance",
        "Compliance monitoring",
        "Performance reviews and adjustments"
      ],
      pricing: "Starting at $3,000/month",
      duration: "Ongoing",
      ideal: "Organizations scaling AI across teams"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              AI Consulting Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              From strategy to implementation, we provide comprehensive AI consulting services 
              tailored to your business needs and technical capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">What's included:</h4>
                      <ul className="mt-2 space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-900">Investment:</span>
                        <span className="text-sm text-gray-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-900">Timeline:</span>
                        <span className="text-sm text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-900">Ideal for:</span>
                        <span className="text-sm text-gray-600">{service.ideal}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button className="w-full">Get Started</Button>
                      </Link>
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
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A proven approach to AI implementation that delivers results
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Discovery</h3>
              <p className="mt-2 text-gray-600">
                Understand your business goals, current processes, and technical capabilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Strategy</h3>
              <p className="mt-2 text-gray-600">
                Develop a customized AI roadmap with clear priorities and success metrics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Implementation</h3>
              <p className="mt-2 text-gray-600">
                Execute pilot projects with proper governance and monitoring frameworks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <span className="text-xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Scale</h3>
              <p className="mt-2 text-gray-600">
                Expand successful implementations across your organization with ongoing support.
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Let's discuss which service is right for your organization.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}