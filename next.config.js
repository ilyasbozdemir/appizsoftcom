const { i18n } = require("./next-i18next.config");

module.exports = {
 // i18n,
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /*  rewrites: async () => [
 {
      source: "/tr/hakkimizda",
      destination: "/about-appizsoft",
      locale: false,
    },
    {
      source: "/about",
      destination: "/about-appizsoft",
      locale: false,
    },
  ],
*/
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
