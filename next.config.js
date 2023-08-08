module.exports = {
  /* 
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
    localeDetection: false,
  },*/

  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },

  async headers() {
    return [
      {
        source: "/(.*\\.(jpg|jpeg|gif|png|bmp))", // Sadece görüntü uzantılarına sahip dosyaları seç
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000",
          },
        ],
      },
    ];
  },

  images: {
    domains: ["https://appizsoft-static-api.vercel.app/"],
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
