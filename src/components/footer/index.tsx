import { useTranslations } from "next-intl"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { logo_white } from "../../../public/assets/images"
import { Link } from "@/navigation"

export const Footer = () => {
  const t = useTranslations()

  return (
    <div className='bg-[#a81b81]'>
      <section className='flex flex-col sm:flex-row gap-10 flex-wrap py-5 text-white'>
        <div className='flex flex-col items-start justify-start flex-1 text-left'>
          <div>
            <Image src={logo_white} alt="frutti" className="max-h-12 w-fit object-contain" />
          </div>
          <p className='text-gray-300 mb-3'>{t("footer desc")}</p>
          <div className='icons flex gap-2'>
            <Link href='https://www.facebook.com/frutti.uz/' className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 drop-shadow-lg hover:shadow-white '>
              <FaFacebookF />
            </Link>
            <Link href='https://www.instagram.com/frutti.uz/' className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaInstagram />
            </Link>
            <Link href="https://telegram.me/frutti_uzb" className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <h1 className='font-semibold text-lg mb-3'>{t("links")}</h1>
          <Link href="/">
            <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Home")}</p>
          </Link>
          <Link href="/about">
            <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("About Us")}</p>
          </Link>
          <Link href="/products">
            <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Products")}</p>
          </Link>
          <Link href="/contact">
            <p className='italic text-gray-300 cursor-pointer ease-in duration-100 hover:pl-1 hover:text-white'>{t("Contact Us")}</p>
          </Link>
        </div>
        <div className='flex flex-col flex-1'>
          <h1 className='font-semibold text-lg mb-3'>{t("Contact Us")}</h1>
          <div>
            <p className='font-semibold text-gray-300'>{t("manager")}: <a href="tel:+998955555688" className='font-light hover:text-white'>+998 95 555-56-88</a></p>
            <p className='font-semibold text-gray-300'>{t("phone")}: <a href="tel:+998998777577" className='font-light hover:text-white'>+998 99 877-75-77</a></p>
            <p className='font-semibold text-gray-300'>{t("Email")}: <a href="mailto:jelenavruz@gmail.com" className='font-light hover:text-white'>jelenavruz@gmail</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
