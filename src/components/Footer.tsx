import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alongside AI</h3>
              <p className="text-gray-600 max-w-md">
                Helping companies deploy and govern AI tools more effectively. 
                Strategic guidance, training, and custom solutions for your AI journey.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900">AI Strategy</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Training & Enablement</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Custom Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="/case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Alongside AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}