import "@/styles/globals.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import type { Metadata } from "next"
import { Mali } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import QueryProvider from "./QueryProvider";

const mali = Mali({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Frutti Jelelari",
  description: "Frutti jele - Har bir qadoqda dunyo lazzatlarini kashf eting",
  openGraph: {
    title: 'Har bir tomchida - Jele',
    description: 'Har bir qadoqda dunyo lazzatlarini kashf eting',
    url: 'test-2.frutti.uz',
    siteName: 'Frutti',
    images: [
      {
        url: 'https://telegra.ph/file/c8e6fe08545b590909439.png',
        height: 480,
        width: 360,
      }
    ],
    type: 'website',
  },
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  });

  return (
    <html lang={locale} >
      <head>
        <meta name="keywords" content="jele, frutti, navruz, fruttiuz, navrozuz, ташкент, узбекистан, Фрутти желе мармелад сладости конфеты Навруз Ташкент Узбекистан Jelly sweets Tashkent Uzbekistan jele marmelad shirinlik konfet jelly navruz" />
        <meta name="googlebot" content="index,follow" />
      </head>
      <body className={mali.className}>
        <QueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </QueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  )
}
