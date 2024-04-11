"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motion'
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import style from "./style.module.sass"

interface HeadingProps {
  title?: string
  text?: string
}

const Heading: React.FC<HeadingProps> = ({ title, text }) => {
  const t = useTranslations();

  return (
    <motion.div
      variants={zoomIn(0, 0.7)}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true }}
      className='flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-center mt-12 mb-12'>
      <h1 className='text-center text-3xl sm:text-5xl'>{t(text)}</h1>
      <span className={cn('text-4xl sm:text-5xl font-medium', style.heading)}>{t(title)}</span>
    </motion.div>
  )
}

export default Heading