'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TestimonialProps {
  quote: string
  name: string
  role: string
  company: string
  delay?: number
}

export default function Testimonial({ 
  quote, 
  name, 
  role, 
  company,
  delay = 0
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
    >
      <div className="mb-6">
        <svg className="h-8 w-8 text-brand-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      
      <blockquote className="text-lg leading-8 text-gray-900 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
          <span className="text-brand-600 font-semibold text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-muted">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  )
}