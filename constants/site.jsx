import theme from "../src/theme";

import { ttCode } from "../lib/ttCode";
import { gtmCode } from "../lib/gtmCode";
import { pinterestAnalyticsCode } from "../lib/pinterestAnalyticsCode";
import { googleAnalyticsCode } from "../lib/googleAnalyticsCode";
import { facebookPixelCode } from "../lib/facebookPixelCode";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.domain.com/"
    : "http://localhost:5226";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://appizsoft.com"
    : "http://localhost:3000";

export const site = {
  title: `SiteAdi | Yazılım & Tasarım & Dijital Pazarlama`,
  API_BASE_URL: API_BASE_URL,
  baseUrl: baseUrl,
  publisher: `ilyasbozdemir Yazılım`,
  ogImage: "https://appizsoft-static-api.vercel.app/images/og-image.png",
  twImage: "https://appizsoft-static-api.vercel.app/images/tw-image.png",
  logoUrl: baseUrl + "/logo.png",
  imageAlt: "site-logo-png",
  description: `Dijital ve yazılım çözümleri ortağınız olarak, işletmenize özel stratejiler ve yazılım hizmetleri sunarak dijital ve yazılım alanlarında rekabet avantajı elde etmenizi sağlıyoruz.`,
  name: ``,
  keywords: "",
  isRobotIndex: true,
  themeColor: theme.colors.primary,
  lang: "tr",
  mailAddress: "info@appizsoft.com",
  address: {
    streetAddress: ``,
    addressLocality: ``,
    addressRegion: ``,
    postalCode: ``,
    addressCountry: ``,
  },
  telephone: "+90 000 000 00 00",
  sosyalMediaLinks: [
    {
      id: 1,
      label: "instagram",
      link: "https://www.instagram.com//",
    },
    {
      id: 2,
      label: "facebook",
      link: "https://www.facebook.com//",
    },
    {
      id: 2,
      label: "threads",
      link: "https://www.threads.net/",
    },

    {
      id: 3,
      label: "tiktok",
      link: "https://www.tiktok.com/",
    },
    {
      id: 4,
      label: "linkedin",
      link: "https://tr.linkedin.com/",
    },

    {
      id: 5,
      label: "youtube",
      link: "https://www.youtube.com/",
    },
    {
      id: 6,
      label: "twitter",
      link: "https://twitter.com",
    },
    {
      id: 7,
      label: "github",
      link: "https://github.com",
    },
    {
      id: 8,
      label: "pinterest",
      link: "https://tr.pinterest.com/",
    },
    {
      id: 9,
      label: "dribbble",
      link: "https://dribbble.com/",
    },
    {
      id: 10,
      label: "behance",
      link: "https://www.behance.net/",
    },
    {
      id: 11,
      label: "vimeo",
      link: "https://vimeo.com/",
    },
    {
      id: 11,
      label: "devto",
      link: "https://dev.to/",
    },
  ],
  analyticsCodes: {
    pinterestAnalyticsCode,
    googleAnalyticsCode,
    facebookPixelCode,
    gtmCode,
    ttCode,
  },
};
