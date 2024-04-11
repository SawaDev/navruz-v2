"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"
import { Autoplay, Navigation, Thumbs } from "swiper";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Heading from '@/components/heading';
import Features from '@/components/features';
import style from "./style.module.sass"
import { fadeIn } from '@/utils/motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import {
  GiCupcake, GiPartyPopper, TbShieldCheck, BsStarFill, BiPalette, features_1,
  features_2, features_3, features_4, features_5, s_1, s_2, s_3, s_4, s_5, s_6, s_7,
  about_1, about_2, about_3, about_4
} from '../../../public/assets/images'

const images = [s_1, s_3, s_4, s_5, s_6, s_7, s_2,]

const About: React.FC<{}> = ({ }) => {
  const t = useTranslations()

  return (
    <div className='overflow-hidden'>
      <Heading title="Company" text="About Our" />
      <section className='flex justify-around flex-col lg:flex-row mb-10'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400 capitalize'>{t("a st1")}</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>{t("a t1")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("a tt1")}</p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image alt='image' className='w-full h-full' src={about_1} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row-reverse'>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400 capitalize'>{t("a st2")}</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>{t("a t2")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("a tt2")}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"effected"}>
                {t("Read More")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] md:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>
                  <h1 className='text-4xl text-center font-semibold text-[#a81b81]'>{t("About our Company")}</h1>
                </DialogTitle>
                <ScrollArea className='h-80'>
                  <DialogDescription>
                    <p className=''>{t("text more 1")} <br /><br />{t("text more 2")}<br /><br />{t("a tt2")}<br /><br />{t("text more 3")}</p>
                  </DialogDescription>
                  <ScrollBar />
                </ScrollArea>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image alt='image' className='w-full h-full' src={about_3} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row my-12'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400 capitalize'>{t("a st3")}</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>{t("a t3")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("a tt3")}</p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image alt='image' className='w-full h-full' src={about_4} />
          </div>
        </motion.div>
      </section>
      <section className='flex flex-col justify-around lg:flex-row-reverse gap-4'>
        <motion.div
          variants={fadeIn("left", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2'>
          <p className='text-gray-400 capitalize'>{t("a st4")}</p>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#a81b81]'>{t("a t4")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("a tt4")}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"effected"}>
                {t("Read More")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] md:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>
                  <h1 className='text-4xl text-center font-semibold text-[#a81b81]'>{t("About our Company")}</h1>
                </DialogTitle>
                <ScrollArea className='h-80'>
                  <DialogDescription>
                    <p className=''>{t("text more 1")} <br /><br />{t("text more 2")}<br /><br />{t("a tt2")}<br /><br />{t("text more 3")}</p>
                  </DialogDescription>
                  <ScrollBar />
                </ScrollArea>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image alt='image' className='w-full h-full' src={about_2} />
          </div>
        </motion.div>
      </section>
      <Heading text="Why" title="Frutti" />
      <section className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_1} icon={<GiPartyPopper />} title="Fun" text="f 1" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_2} icon={<GiCupcake />} title="Tasty" text="f 2" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_3} icon={<TbShieldCheck />} title="Safe" text="f 3" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_4} icon={<BiPalette />} title="Creative" text="f 4" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <Features imgUrl={features_5} icon={<BsStarFill />} title="Quality" text="f 5" />
        </motion.div>
      </section>
      <Heading text="Our" title="Sertificates" />
      <motion.section
        variants={fadeIn("", "", 0, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='my-10'>
        <Swiper
          navigation={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Thumbs, Autoplay]}
          className={style.aboutSwiper}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={style.aboutSwiperWrapper}>
                <Image src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </div>
  )
}

export default About