import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-10 px-6 border-t border-midnight/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo/alongside-main.svg"
              alt="Alongside AI"
              width={18}
              height={18}
              style={{ height: 18, width: 'auto' }}
              className="block object-contain"
            />
            <span className="font-bold tracking-tighter text-sm uppercase text-midnight">
              Alongside AI
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-midnight/40 text-center">
            © {currentYear} Alongside AI LLC. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/glaserevan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-midnight hover:text-brand transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:evan@alongside-ai.com"
              className="text-xs font-bold text-midnight hover:text-brand transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
