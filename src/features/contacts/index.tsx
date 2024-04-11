"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import { TfiEmail } from "react-icons/tfi"
import { BsPhone } from "react-icons/bs"

import { fadeIn } from "@/utils/motion"

export const Contact = () => {
  const t = useTranslations()
  return (
    <section className='flex flex-row gap-10 flex-wrap w-full justify-between my-10'>
      <motion.div
        variants={fadeIn("up", "", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='flex items-center flex-1 flex-grow justify-start rounded-md p-5 gap-5 shadow-xl'>
        <div className='text-[#a81b81] text-5xl rounded-md'>
          <TfiEmail />
        </div>
        <div className='flex flex-col'>
          <span className='text-xl font-semibold'>{t("Email")}: </span>
          <a className='text-lg sm:text-lg' href='mailto:abdusnishanov@gmail.com'>abdusnishanov@gmail.com</a>
          <a className='text-lg sm:text-lg' href='mailto:jelenavruz@gmail.com'>jelenavruz@gmail.com</a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "", 0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='flex items-center flex-1 flex-grow justify-start rounded-md p-5 gap-5 shadow-xl'>
        <div className='text-[#a81b81] text-5xl rounded-md'>
          <BsPhone />
        </div>
        <div className='flex flex-col'>
          <span className='text-xl font-semibold'>{t("phone")}: </span>
          <a className='text-lg' href="tel:+998955555688">+998 95 555-56-88</a>
          <a className='text-lg' href="tel:+998998777577">+998 99 877-75-77</a>
        </div>
      </motion.div>
    </section>
  )
}
