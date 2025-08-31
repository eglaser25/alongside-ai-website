import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo-main.svg"
                alt="Alongside AI"
                width={300}
                height={60}
                className="h-12 w-auto mb-6"
              />
              <p className="text-muted max-w-md mb-6 leading-relaxed">
                Practical AI strategy, enablement, and deployment for SMBs.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-ink mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-muted hover:text-ink transition-colors hover:underline">
                    AI Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted hover:text-ink transition-colors hover:underline">
                    Training & Enablement
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted hover:text-ink transition-colors hover:underline">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-ink mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted hover:text-ink transition-colors hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-muted hover:text-ink transition-colors hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted hover:text-ink transition-colors hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-muted">
              © {new Date().getFullYear()} Alongside AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}