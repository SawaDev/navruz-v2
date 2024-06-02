"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, Pagination, Keyboard } from "swiper";
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import style from "./style.module.sass"
import Heading from '@/components/heading'
import Features from '@/components/features'
import { fadeIn } from "@/utils/motion";
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { Banner } from './Banner';
import { Contact } from '@/components/contact';

import aboutImg from "../../../public/assets/images/about.png"
import aboutImg2 from "../../../public/assets/images/about_2.jpg"
import {
  GiCupcake, GiPartyPopper, TbShieldCheck, BsStarFill,
  BiPalette, features_1, features_2, features_3, features_4, features_5, halal
} from '../../../public/assets/images'
import { products } from "@/dummyData"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React from "react";
import { PostsResponse } from "@/types/PostsResponse";
import { useLang } from "@/utils/useLang";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const Home = () => {
  const t = useTranslations();
  const { locale } = useLang()

  const fetchData = async () => {
    const { data } = await api.get(process.env.NEXT_PUBLIC_API_URL + '/posts')

    return data;
  }

  const { data, isLoading, error } = useQuery<PostsResponse, Error>({
    queryKey: ['posts'],
    queryFn: async () => await fetchData()
  });

  if (error) return <div>Error loading data</div>;

  return (
    <div className='overflow-hidden'>
      <Banner locale={locale} />
      <Heading title="Products" text="Our" />
      <motion.div
        variants={fadeIn("", "", 0, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='my-10 max-w-7xl mx-auto'>
        <Swiper
          navigation={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Thumbs, Autoplay, Pagination, Keyboard]}
          className='p-10 pb-14'
        >
          {(!isLoading && data) && data.data.filter(d => d.published).map((product) => (
            <SwiperSlide
              key={product.id}
              className={cn('w-fit flex flex-col items-center p-10 rounded-xl', style.outline)}>
              <Link href={`/${locale}/products/${product.id}`} className='max-w-[250px] h-[250px] overflow-hidden'>
                <Image
                  alt='image'
                  src={product?.details?.length
                    ? product.details[0].image
                    : products[0].content[0].img
                  }
                  width={200} height={200}
                  className="h-full w-full object-contain"
                />
              </Link>
              <div className=''>
                <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>{t("Fruit Jelly")}</h1>
                <h1 className={`sm:text-[22px] lg:text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize`}>
                  {product.name[locale]}
                </h1>
              </div>
              <Link href={`/${locale}/products/${product.id}`}>
                <Button variant={"effected"}>
                  {t("See more")}
                </Button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <Heading title="Company" text="About Our" />
      <section className='flex justify-around flex-col gap-10 lg:flex-row mb-10'>
        <motion.div
          variants={fadeIn("right", "", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col px-4 sm:px-0 items-start justify-center basis-1/2'>
          <h1 className='text-2xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>{t("crafting")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("crafting text")}</p>
          <Link href={`/${locale}/products`}>
            <Button variant={"effected"}>
              {t("See All")}
            </Button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "", 0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center px-4 sm:px-0 lg:justify-end'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image className='w-full h-full' src={aboutImg} alt='about img 1' />
          </div>
        </motion.div>
      </section>
      <section className='flex justify-around flex-col gap-10 lg:flex-row-reverse'>
        <motion.div
          variants={fadeIn("left", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-start justify-center basis-1/2 px-4 sm:px-0'>
          <h1 className='text-3xl text-center lg:text-left sm:text-4xl font-semibold text-[#a81b81]'>{t("our team")}</h1>
          <p className='text-lg pt-4 pb-7'>{t("our team text")}</p>
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
          variants={fadeIn("right", "", 0.4, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center lg:justify-start px-4 sm:px-0'>
          <div className='max-h-[470px] max-w-[409px]'>
            <Image className='w-full h-full' src={aboutImg2} alt='about img 2' />
          </div>
        </motion.div>
      </section>
      <Heading text="Why" title="Frutti" />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
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
      </div>
      <Contact />
    </div >
  )
}
