import createMiddleware from "next-intl/middleware"
import {localePrefix, locales} from "./navigation"

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "uz"
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|uz|en)/:path*"]
}
