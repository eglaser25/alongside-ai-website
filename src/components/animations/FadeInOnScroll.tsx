'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeInOnScroll({ children, delay = 0, className = '' }: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
