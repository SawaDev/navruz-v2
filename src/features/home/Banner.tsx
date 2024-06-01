"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import { fadeIn } from '@/utils/motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import style from "./style.module.sass"

import { banner_1, banner_2, banner_4 } from '../../../public/assets/images'
import backgroundFirst from "../../../public/assets/images/bg_4.png"
import backgroundSecond from "../../../public/assets/images/bg_3.png"
import backgroundThird from "../../../public/assets/images/bg_5.png"

export const Banner = ({ locale }: { locale: string }) => {
  const [current, setCurrent] = useState(0);

  const t = useTranslations()

  const items = [
    { image: banner_1, class: "img1", backgroundImage: backgroundFirst },
    { image: banner_2, class: "img2", backgroundImage: backgroundSecond },
    { image: banner_4, class: "img3", backgroundImage: backgroundThird },
  ]

  const handleClick = (index: number) => {
    if (index !== current) {
      setCurrent(index);
    }
  };

  return (
    <section className='w-full relative backdrop-blur-[2px] pt-10 sm:pt-0 pb-[140px] flex flex-col lg:flex-row justify-between items-center'>
      <div
        // variants={fadeIn("right", "", 0, 0.1)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col max-w-[612px] sm:pt-[100px] sm:pb-[60px] sm:px-[20px] sm:pl-10'>
        <h1 className='text-5xl sm:text-5xl font-semibold mb-5 text-black'>{t("Taste our")} <br /> <span className='text-6xl text-[#a81b81]'>
          <Typewriter
            words={[t("Fun"), t("Safe"), t("Creative")]}
            loop={true}
            deleteSpeed={50}
            delaySpeed={3000}
            typeSpeed={150}
          />
        </span>
          <br /> {t("products title")}</h1>
        <p className='mb-10 text-lg max-w-lg text-gray-400'>{t("banner title")}</p>
        <Link href={`/${locale}/about`}>
          <Button variant={"effected"}>
            {t("About Us")}
          </Button>
        </Link>
      </div>
      <motion.div
        key={current}
        variants={
          {
            hidden: {
              scale: 0.4,
              opacity: 0,
            },
            show: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.3,
                ease: "linear",
              },
            }
          }
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(`w-[400px] sm:w-[600px] flex justify-center bg-center relative`)}
      >
        <Image src={items[current].backgroundImage} alt='background' className='-z-10' priority />
        <div className='z-10 max-w-[220px] sm:max-w-[340px] h-[320px] sm:h-[540px] -rotate-6 absolute top-0 bottom-0'>
          <Image src={items[current].image} alt='cover' className={cn("object-cover h-auto w-auto")} priority />
        </div>
      </motion.div>
      <motion.ul
        variants={
          {
            hidden: {
              y: -60,
              opacity: 0,
              x: -140,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.7,
                ease: "linear",
              },
            }
          }
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn('absolute flex gap-6', style.thumb)}>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <Image src={item.image} alt={`image ${index}`} className="max-w-[80px]" />
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
