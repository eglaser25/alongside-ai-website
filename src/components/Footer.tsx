import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-midnight text-white py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image
              src="/logo/alongside-main.svg"
              alt="Alongside AI"
              width={18}
              height={18}
              style={{ height: 18, width: 'auto' }}
              className="block object-contain brightness-0 invert"
            />
            <span className="font-bold tracking-tighter text-sm uppercase text-white">
              Alongside AI
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center justify-center gap-4">
            <a
              href="#how-it-works"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors px-2 py-2"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors px-2 py-2"
            >
              Pricing
            </a>
            <a
              href="#why-alongside"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors px-2 py-2"
            >
              About
            </a>
            <a
              href="#get-started"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors px-2 py-2"
            >
              Contact
            </a>
          </nav>

          {/* Social + copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/alongside-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white/70 hover:text-white transition-colors px-2 py-2"
              >
                LinkedIn
              </a>
              <a
                href="mailto:evan@alongside-ai.com"
                className="text-xs font-bold text-white/70 hover:text-white transition-colors px-2 py-2"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-white/50">
              &copy; {currentYear} Alongside AI LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
