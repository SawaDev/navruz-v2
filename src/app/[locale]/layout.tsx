import "@/styles/globals.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import type { Metadata } from "next"
import { Mali } from 'next/font/google'

import { NextIntlClientProvider, useMessages } from "next-intl"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const mali = Mali({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Frutti Jelelari",
  description: "Frutti jele Navruz"
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={mali.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
