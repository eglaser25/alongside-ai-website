import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    contact: [
      { name: 'hello@alongside-ai.com', href: 'mailto:hello@alongside-ai.com' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/glaserevan/', external: true },
      { name: 'Schedule a Call', href: 'https://tidycal.com/m8dn423/30-minute-meeting', external: true },
    ],
  }

  return (
    <footer className="bg-surface-inverse text-text-inverse">
      <div className="container-default py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo-white.svg"
              alt="Alongside AI"
              width={160}
              height={32}
              className="h-7 w-auto mb-4"
            />
            <p className="text-body text-slate-400 max-w-xs">
              Get tangible value from AI, fast and responsibly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-body font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-body font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-body-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-body-sm text-slate-500 text-center">
            © {currentYear} Alongside AI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
