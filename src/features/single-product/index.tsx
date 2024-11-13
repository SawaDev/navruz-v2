"use client"

import React, {useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Thumbs, Keyboard} from "swiper"
import {motion} from "framer-motion"
import {useTranslations} from "next-intl"
import {Swiper as SwiperType} from "swiper/types"
import Image from "next/image"

import style from "./style.module.sass"
import {fadeIn} from "@/utils/motion"
import {cn} from "@/lib/utils"
import {SinglePostResponse} from "@/types/PostsResponse"
import {useLang} from "@/utils/useLang"

export const SingleProduct = ({data}: {data: SinglePostResponse["data"]}) => {
  const t = useTranslations()
  const {locale} = useLang()

  const [activeThumb, setActiveThumb] = useState<SwiperType>()
  const [activeIndex, setActiveIndex] = useState(0)

  const currentDetail = data.details[activeIndex]

  return (
    <section className="flex flex-col sm:flex-row gap-10 justify-center mt-8 overflow-hidden">
      {currentDetail ? (
        <>
          <motion.div
            variants={fadeIn("right", "", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="basis-3/5 overflow-hidden"
          >
            <Swiper
              spaceBetween={10}
              navigation={true}
              keyboard={true}
              onSlideNextTransitionStart={swiper => setActiveIndex(swiper.activeIndex)}
              onSlidePrevTransitionStart={swiper => setActiveIndex(swiper.activeIndex)}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
              grabCursor={true}
              modules={[Navigation, Thumbs, Keyboard]}
              thumbs={{swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null}}
              className={style["product-images-slider"]}
            >
              {data.details
                .filter(d => d.published)
                .map(item => (
                  <SwiperSlide key={item.id}>
                    <div className={style["product-images-slider-wrapper"]}>
                      <Image src={item.image} width={600} height={600} alt="product images" />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
              onSwiper={setActiveThumb}
              spaceBetween={10}
              slidesPerView={3}
              modules={[Navigation, Thumbs]}
              className={cn("p-2", style["product-images-slider-thumbs"])}
            >
              {data.details
                .filter(d => d.published)
                .map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={cn(
                        style["product-images-slider-thumbs-wrapper"],
                        index === activeIndex && style["product-images-slider-thumbs-active"]
                      )}
                    >
                      <Image src={item.image} width={600} height={600} alt="product images" />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="basis-2/5 h-full flex flex-col"
          >
            <h1 className="text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]">
              {data.name[locale]}
            </h1>
            <h1 className="text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize">
              {currentDetail.name?.[locale] || ""}
            </h1>
            {currentDetail.capacity && currentDetail.capacity[locale] && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Capacity")}:&nbsp;
                <span className="font-medium capitalize text-slate-800">
                  {currentDetail.capacity[locale]}
                </span>
              </p>
            )}
            {currentDetail.expiration_date !== 0 && currentDetail.expiration_date && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Expiration Date")}:&nbsp;
                <span className="font-medium capitalize text-slate-800">{currentDetail.expiration_date}</span>
              </p>
            )}
            {currentDetail.pure_mass !== 0 && currentDetail.pure_mass && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Net Weight")}:&nbsp;
                <span className="font-medium capitalize text-slate-800">
                  {currentDetail.pure_mass / 1000}kg
                </span>
              </p>
            )}
            {currentDetail.total_mass !== 0 && currentDetail.total_mass && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Gross Weight")}:&nbsp;
                <span className="font-medium text-slate-800">{currentDetail.total_mass / 1000}kg</span>
              </p>
            )}
            {currentDetail.volume && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Volume")}:&nbsp;
                <span className="font-medium text-slate-800">{currentDetail.volume}</span>
              </p>
            )}
            {currentDetail.mass !== 0 && currentDetail.mass && (
              <p className="text-xl text-black/80 font-semibold">
                {t("Weight")}:&nbsp;
                <span className="font-medium text-slate-800">{currentDetail.mass}gr</span>
              </p>
            )}
          </motion.div>
        </>
      ) : (
        <div className="h-40 w-full flex items-center justify-center text-3xl">Nothing to see</div>
      )}
    </section>
  )
}
