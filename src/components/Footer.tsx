import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-white.svg"
                alt="Alongside AI"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Get tangible value from AI—fast and responsibly
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:hello@alongside-ai.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  hello@alongside-ai.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/glaserevan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://tidycal.com/m8dn423/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} Alongside AI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}