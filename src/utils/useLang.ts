import {useLocale} from "next-intl"

export const useLang = () => {
  const locale = useLocale()
  return {locale: (locale.includes("uz") ? "uz" : "ru" ? "ru" : "en") as "uz" | "ru" | "en"}
}