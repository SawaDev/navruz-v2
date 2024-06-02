"use client"

import React from "react"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion"

import style from "./style.module.sass"
import { fadeIn } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardType {
  index: number;
  image: StaticImageData | string;
  type: string;
}

export const ProductCard: React.FC<ProductCardType> = ({ index, image, type }) => {
  const t = useTranslations()

  return (
    <motion.div
      variants={fadeIn("up", "", index * 0.05, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      key={index}
      className={cn('flex flex-col items-center mt-7 py-10 px-10 rounded-xl', style.outline)}>
      <Link href={`/products/${index}`} className='max-w-[250px] max-h-[250px] overflow-hidden'>
        <Image
          alt="image"
          src={image}
          width={600} height={600}
          className='w-full h-full object-contain'
        />
      </Link>
      <div>
        <h1 className='text-3xl text-white font-semibold mt-4 px-5 py-3 bg-[#e7316d] w-fit rounded-tl-[28px] rounded-br-[28px]'>
          {t("Fruit Jelly")}
        </h1>
        <h1 className='text-2xl sm:text-3xl text-white font-semibold -mt-2 ml-2 mb-5 px-5 py-2 bg-[#804896] w-fit rounded-tl-[34px] rounded-br-[34px] capitalize'>
          {type}
        </h1>
      </div>
      <Link href={`products/${index}`}>
        <Button variant={"effected"}>
          {t("See more")}
        </Button>
      </Link>
    </motion.div>
  )
}
