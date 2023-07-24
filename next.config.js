module.exports = {
  /*
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
  */
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Tüm sayfalar için geçerli olacak
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000", // 1 saatlik önbellek süresi
          },
        ],
      },
    ];
  },

  reactStrictMode: true,

  productionBrowserSourceMaps: true,
};
