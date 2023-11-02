import theme from "../src/theme";

import { ttCode } from "../lib/ttCode";
import { gtmCode } from "../lib/gtmCode";
import { pinterestAnalyticsCode } from "../lib/pinterestAnalyticsCode";
import { googleAnalyticsCode } from "../lib/googleAnalyticsCode";
import { facebookPixelCode } from "../lib/facebookPixelCode";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.appizsoft.com/"
    : "http://localhost:5226";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://appizsoft.com"
    : "http://localhost:3000";

export const site = {
  title: `Appizsoft | Yazılım & Tasarım & Dijital Pazarlama`,
  API_BASE_URL: API_BASE_URL,
  baseUrl: baseUrl,
  publisher: `Appizsoft Yazılım`,
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
    streetAddress: `Karapürçek, 290. Sk. No:56 D:3`,
    addressLocality: `Altındağ`,
    addressRegion: `Ankara`,
    postalCode: `06312`,
    addressCountry: `TR`,
  },
  telephone: "+90 505 367 63 35",
  sosyalMediaLinks: [
    {
      id: 1,
      label: "instagram",
      link: "https://www.instagram.com/appizsoftcom/",
    },
    {
      id: 2,
      label: "facebook",
      link: "https://www.facebook.com/appizsoftcom/",
    },
    {
      id: 2,
      label: "threads",
      link: "https://www.threads.net/appizsoftcom",
    },

    {
      id: 3,
      label: "tiktok",
      link: "https://www.tiktok.com/@appizsoftcom",
    },
    {
      id: 4,
      label: "linkedin",
      link: "https://tr.linkedin.com/company/appizsoft",
    },

    {
      id: 5,
      label: "youtube",
      link: "https://www.youtube.com/@Appizsoft",
    },
    {
      id: 6,
      label: "twitter",
      link: "https://twitter.com/appizsoftcom",
    },
    {
      id: 7,
      label: "github",
      link: "https://github.com/appizsoftcom",
    },
    {
      id: 8,
      label: "pinterest",
      link: "https://tr.pinterest.com/appizsoftcom/",
    },
    {
      id: 9,
      label: "dribbble",
      link: "https://dribbble.com/appizsoftcom",
    },
    {
      id: 10,
      label: "behance",
      link: "https://www.behance.net/appizsoftcom",
    },
    {
      id: 11,
      label: "vimeo",
      link: "https://vimeo.com/appizsoftcom",
    },
    {
      id: 11,
      label: "devto",
      link: "https://dev.to/appizsoftcom",
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
