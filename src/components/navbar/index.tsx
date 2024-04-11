"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineFileDownload } from 'react-icons/md'
import { BsGlobe2 } from "react-icons/bs"
import { AiFillCaretDown } from "react-icons/ai"
import { GB, RU, UZ } from 'country-flag-icons/react/3x2'
import { X } from "lucide-react"

import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { halal, logo } from "../../../public/assets/images/index"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Link as LinkLocale } from "@/navigation"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import style from "./style.module.sass"

export const Navbar = () => {
  const t = useTranslations()

  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0.5, 1] }}
      transition={{ duration: 0.5 }}
      className={cn('sticky top-0 left-0 right-0 z-10 shadow-sm', style.navbar)}>
      <section className='max-w-[1280px] mx-auto flex justify-between items-center py-3 text-white'>
        <LinkLocale href={`/`}>
          <Image src={logo} alt="logo" className="h-20 w-auto object-contain" />
        </LinkLocale>

        <div className='flex items-center lg:gap-4'>
          <div className='lg:hidden text-3xl text-[#a81b81] mr-4 cursor-pointer'>
            <Sheet>
              <SheetTrigger asChild>
                <GiHamburgerMenu />
              </SheetTrigger>
              <SheetContent>
                <SheetClose className="absolute top-4 right-4 outline-none">
                  <X className="h-8 w-8 text-[#a81b81]"/>
                </SheetClose>
                <ul className='flex flex-col justify-center gap-5 h-full text-[#a81b81]'>
                  <li>
                    <LinkLocale href={`/`} className='item text-3xl font-semibold'>
                      <SheetClose>
                        {t("Home")}
                      </SheetClose>
                    </LinkLocale>
                  </li>
                  <li>
                    <LinkLocale href={`/about`} className='item text-3xl font-semibold'>
                      <SheetClose>
                        {t("About Us")}
                      </SheetClose>
                    </LinkLocale>
                  </li>
                  <li>
                    <LinkLocale href={`/products`} className='item text-3xl font-semibold'>
                      <SheetClose>
                        {t("Products")}
                      </SheetClose>
                    </LinkLocale>
                  </li>
                  <li>
                    <LinkLocale href={`/contact`} className='item text-3xl font-semibold'>
                      <SheetClose>
                        {t("Contact Us")}
                      </SheetClose>
                    </LinkLocale>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          <ul className='hidden lg:flex flex-row items-center text-black gap-6'>
            <li className='item text-xl'>
              <LinkLocale href={`/about`}>
                {t('About Us')}
              </LinkLocale>
            </li>
            <li className='item text-xl'>
              <LinkLocale href={`/products`}>
                {t("Products")}
              </LinkLocale>
            </li>

            <div className='realtive cursor-pointer text-black flex items-center justify-center text-xl'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <p>{t("Catalogue")}</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{t("Catalogue text")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      className='flex items-center gap-1'
                      href="https://drive.google.com/file/d/11GZjEENskrRGpY7Uu5OyiE8dIod0ww3e/view?usp=share_link"
                      target="_blank"
                    >
                      <RU title="Russia" className='block z-40 h-4' />
                      <span>RU</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      className='flex items-center gap-1'
                      href="https://drive.google.com/file/d/1sTUN4y0Igr19Zwv8Q6naKOhr__W-DSPu/view?usp=share_link"
                      target="_blank"
                    >
                      <GB title="Great Britain" className='block z-40 h-4' />
                      <span>EN</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='hidden sm:block'>
              <LinkLocale href={`/contacts`}>
                <Button variant={"effected"}>
                  {t("Contact Us")}
                </Button>
              </LinkLocale>
            </div>
          </ul>

          <div className='relative inline-block'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='flex items-center cursor-pointer gap-[2px]'>
                  <BsGlobe2 className='text-2xl text-[#a81b81]' />
                  <AiFillCaretDown className="text-xl text-[#a81b81]" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/ru"}
                    className='flex items-center gap-1 cursor-pointer'>
                    <RU title="United States" className='block z-40 h-4' />
                    <span>RU</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/en"}
                    className='flex items-center gap-1 cursor-pointer'>
                    <GB title="United States" className='block z-40 h-4' />
                    <span>EN</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/uz"}
                    className='flex items-center gap-2 cursor-pointer'>
                    <UZ title="United States" className='block z-40 h-4' />
                    <span>UZ</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='realtive cursor-pointer text-black flex lg:hidden items-center justify-center text-xl'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MdOutlineFileDownload className='text-3xl font-medium text-[#a81b81]' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{t("Catalogue text")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    className='flex items-center gap-1'
                    href="https://drive.google.com/file/d/11GZjEENskrRGpY7Uu5OyiE8dIod0ww3e/view?usp=share_link"
                    target="_blank"
                  >
                    <RU title="Russia" className='block z-40 h-4' />
                    <span>RU</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className='flex items-center gap-1'
                    href="https://drive.google.com/file/d/1sTUN4y0Igr19Zwv8Q6naKOhr__W-DSPu/view?usp=share_link"
                    target="_blank"
                  >
                    <GB title="Great Britain" className='block z-40 h-4' />
                    <span>EN</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Image src={halal} alt="halal" className={`object-contain h-16 w-auto`} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
