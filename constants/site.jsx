import theme from "../src/theme";

import { ttCode } from "../lib/ttCode";
import { gtmCode } from "../lib/gtmCode";
import { pinterestAnalyticsCode } from "../lib/pinterestAnalyticsCode";
import { googleAnalyticsCode } from "../lib/googleAnalyticsCode";
import { facebookPixelCode } from "../lib/facebookPixelCode";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://www.appizsoft.com/"
    : "http://localhost:3000";

//https://appizsoft.com
//appizsoftcom.vercel.app

export const site = {
  title: `Appizsoft | Yazılım & Dijital Pazarlama`,
  baseUrl: baseUrl,
  publisher: `Appizsoft`,
  ogImage: "https://appizsoft-static-api.vercel.app/images/og-image.png",
  twImage: "https://appizsoft-static-api.vercel.app/images/images/tw-image.png",
  imageAlt: "site-logo-png",
  description: `Dijital ve yazılım çözümleri ortağınız olarak, işletmenize özel stratejiler ve yazılım hizmetleri sunarak dijital ve yazılım alanlarında rekabet avantajı elde etmenizi sağlıyoruz.`,
  name: ``,
  keywords: "",
  isRobotIndex: true,
  themeColor: theme.colors.primary,
  lang: "tr",
  mailAddress: "info@appizsoft.com",
  address: {
    streetAddress: `123 Example Street`,
    addressLocality: `City`,
    addressRegion: `State`,
    postalCode: `12345`,
    addressCountry: `TR`,
  },
  telephone: "+90 555 555 55 55",
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
  ],
  analyticsCodes: {
    pinterestAnalyticsCode,
    googleAnalyticsCode,
    facebookPixelCode,
    gtmCode,
    ttCode,
  },
};
