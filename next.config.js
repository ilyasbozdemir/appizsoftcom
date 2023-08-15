module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "tr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "tr",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: "appizsoft.com",
        defaultLocale: "en-US",
        // other locales that should be handled on this domain
        locales: ["tr"],
      },
    ],
  },

  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },

  async headers() {
    return [
      {
        source: "/:path*.(jpg|jpeg|gif|png|bmp)", // Uzantıya sahip resim dosyalarını yakala
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
        ],
      },
    ];
  },

  images: {
    domains: [
      "https://appizsoft-static-api.vercel.app/",
      "images.unsplash.com",
    ],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appizsoft-static-api.vercel.app",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  reactStrictMode: true,

  productionBrowserSourceMaps: true,
};
