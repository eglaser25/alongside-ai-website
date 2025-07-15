import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Alongside AI',
  description: 'Get in touch with Alongside AI to discuss your AI strategy and implementation needs. Schedule a free consultation today.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}