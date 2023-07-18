module.exports = {
  /*
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
  */
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};
