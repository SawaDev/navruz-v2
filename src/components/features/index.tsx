import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

interface FeaturesProps {
  imgUrl: StaticImageData
  title: string
  text: string
  icon: ReactNode
}

const Features: React.FC<FeaturesProps> = ({ imgUrl, title, text, icon }) => {
  const t = useTranslations()

  return (
    <div className='flex flex-col h-full border-2 overflow-hidden rounded-tr-[40px] rounded-bl-[40px] border-gray-200 shadow-xl shadow-black-100 hover:shadow-[#a81b81]/20'>
      <div className='h-[240px] overflow-hidden'>
        <Image src={imgUrl} alt='image' className="h-full w-full object-cover transform ease-in-out duration-200 hover:scale-110 hover:grayscale-0" />
      </div>
      <div className='px-5 pt-5 lg:pb-8 pb-7'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-semibold text-[#a81b81] mb-2'>{t(title)}</h1>
          <div className='text-[#a81b81] text-3xl pr-2'>
            {icon}
          </div>
        </div>
        <p className='text-gray-500'>{t(text)}</p>
      </div>
    </div>
  )
}

export default Features