'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  delay?: number
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className={cn(
        'group relative rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:ring-1 hover:ring-blue-600/10',
        className
      )}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      
      <h3 className="mb-4 text-xl font-semibold text-gray-900">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}