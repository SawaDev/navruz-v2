"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Keyboard } from "swiper";
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';

import style from "./style.module.sass";
import { fadeIn } from '@/utils/motion';
import { products } from '@/dummyData';
import { cn } from '@/lib/utils';

export const SingleProduct = ({ id }: { id: number }) => {
  const t = useTranslations();

  const [activeThumb, setActiveThumb] = useState<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='flex flex-col sm:flex-row gap-10 justify-center mt-8 overflow-hidden'>
      <motion.div
        variants={fadeIn("right", "", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='basis-3/5 overflow-hidden'>
        <Swiper
          spaceBetween={10}
          navigation={true}
          keyboard={true}
          onSlideNextTransitionStart={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSlidePrevTransitionStart={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          grabCursor={true}
          modules={[Navigation, Thumbs, Keyboard]}
          thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
          className={style["product-images-slider"]}
        >
          {products[id].content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={style["product-images-slider-wrapper"]}>
                <Image src={item.img} alt="product images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation, Thumbs]}
          className={cn('p-2', style["product-images-slider-thumbs"])}
        >
          {
            products[id].content.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={cn(
                    style["product-images-slider-thumbs-wrapper"],
                    index === activeIndex && style["product-images-slider-thumbs-active"]
                  )}
                >
                  <Image src={item.img} alt="product images" />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='basis-2/5 h-full flex flex-col'>
        <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>
          {t("Fruit Jelly")}
        </h1>
        <h1 className='text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize'>
          {t(products[id].content[activeIndex].type)}
        </h1>
        {products[id].content[activeIndex]?.pieces &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Capacity")}:
            <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].pieces)}
            </span>
          </p>
        }
        {products[id].content[activeIndex]?.exDate &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Expiration Date")}:
            <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].exDate)}
            </span>
          </p>
        }
        {products[id].content[activeIndex]?.net_weight &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Net Weight")}:
            <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].net_weight)}
            </span>
          </p>
        }
        {products[id].content[activeIndex]?.gross_weight &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Gross Weight")}:
            <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].gross_weight)}
            </span>
          </p>
        }
        {products[id].content[activeIndex]?.volume &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Volume")}: <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].volume)}
            </span>
          </p>
        }
        {products[id].content[activeIndex]?.mass &&
          <p className='text-xl text-black/80 font-semibold'>
            {t("Weight")}: <span className='font-medium capitalize text-slate-800'>
              {t(products[id].content[activeIndex].mass)}
            </span>
          </p>
        }
      </motion.div>
    </section >
  )
}
