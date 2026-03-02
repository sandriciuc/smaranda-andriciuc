'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { brassLineVariant } from '@/lib/animations'

interface BrassLineProps {
  className?: string
  width?: string
}

export default function BrassLine({ className = '', width = 'w-16' }: BrassLineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.span
      ref={ref}
      className={`block h-0.5 bg-brass origin-left ${width} ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={brassLineVariant}
    />
  )
}
