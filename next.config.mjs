import createNextIntlPlugin from "next-intl/plugin"
import withPWA from "next-pwa";

const withNextIntl = createNextIntlPlugin()

import withImages from "next-images"

import runtimeCaching from "next-pwa/cache.js"

const configurePWA = ({
  disable = false,
  register = true,
  dest = "public",
  runtimeCaching = [],
} = {}) => {
  return withPWA({
    disable,
    register,
    dest,
    runtimeCaching: [...runtimeCaching],
  });
}

const withPWAConfigured = configurePWA({
  disable: false,
  register: true,
  dest: "public",
  runtimeCaching: [...runtimeCaching],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateEtags: false,
  images: {
    disableStaticImages: true,
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  env: {}
}

module.exports = () => {
  const plugins = [withImages, withPWAConfigured]
  return plugins.reduce((acc, next) => next(acc), withNextIntl(nextConfig))
}