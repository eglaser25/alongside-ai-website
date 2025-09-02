import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center">
            <Image
              src="/logo-white.svg"
              alt="Alongside AI"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-gray-300">Turn AI into your competitive advantage</p>
            <Link 
              href="mailto:hello@alongside-ai.com" 
              className="text-white hover:text-blue-400 transition-colors underline"
            >
              hello@alongside-ai.com
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Alongside AI LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}