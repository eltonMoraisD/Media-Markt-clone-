/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false,
  swcMinify: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "./base.scss";`,
  },
};

module.exports = nextConfig;
