"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl";
import { fadeIn } from "@/utils/motion";
import { cn } from "@/lib/utils";
import style from "./style.module.sass"

export const Contact = () => {
  const t = useTranslations()

  function sendEmail() {
    // e.preventDefault();

    // emailjs.sendForm('service_1acmkx5', 'template_1lpyt6f', e.target, 'VWuLU3mf46Ek5FS8L')
    //   .then((result) => {
    //     console.log(result.text);
    //     alert(t("alert +"))
    //     // setSuccess(true)
    //   }, (error) => {
    //     console.log(error.text);
    //     alert(t("alert -"))
    //     // setSuccess(false)
    //   });
    // e.target.reset();
  }

  return (
    <div className={cn('px-4', style.contact)}>
      <motion.div
        variants={fadeIn("", "", 0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={cn('capitalize flex flex-col lg:flex-row justify-between max-w-6xl mx-auto rounded-lg drop-shadow-lg', style.ccontainer)}>
        <div className='basis-2/5 w-full grid place-items-center text-black/60 text-center lg:text-left text-3xl sm:text-4xl px-10 pt-5 lg:pt-0'>
          <h1>{t("contact heading")}</h1>
        </div>
        <form
          onSubmit={sendEmail}
          className='basis-3/5 w-full flex flex-row flex-wrap gap-10 py-10 px-4 lg:px-0 lg:pr-10'>
          <div className='flex flex-col sm:flex-row w-full gap-10'>
            <div className={cn('relative w-full flex flex-col', style.inputBox)}>
              <input name="FIO" required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>{t("full name")}</span>
            </div>
            <div className={cn('relative w-full flex flex-col', style.inputBox)}>
              <input name="phone" required type="number" inputMode="numeric" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>{t("phone")}</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row w-full gap-10'>
            <div className={cn('relative w-full flex flex-col', style.inputBox)}>
              <input name="email" required type="email" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>{t("mail")}</span>
            </div>
            <div className={cn('relative w-full flex flex-col', style.inputBox)}>
              <input name="subject" required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>{t("subject")}</span>
            </div>
          </div>
          <div className={cn('relative w-full flex flex-col', style.inputBox)}>
            <input name="message" required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
            <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>{t("message")}</span>
          </div>
          <div>
            <input type="submit" value={t("send message")} className='hover:text-[#a81b81] border-[3px] rounded-md hover:border-[#a81b81] duration-100 hover:scale-x-105 border-black/60 text-lg cursor-pointer px-5 py-3' />
          </div>
        </form>
      </motion.div>
    </div>
  )
}