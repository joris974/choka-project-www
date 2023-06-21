/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  distDir: "dist",
  images: { unoptimized: true },

  i18n,
};

module.exports = nextConfig;
