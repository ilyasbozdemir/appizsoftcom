import theme from "../src/theme";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.appizsoft.com"
    : "http://localhost:3000";

const pinterestAnalyticsCode = `7f9464b7cba4c1e15e8dfb587b8ef00d`;
const googleAnalyticsCode = ``;
const facebookPixelCode = ``;
const gtmCode = ``;
const ttCode = `CIEJ1LJC77U441D19LNG`;

export const site = {
  title: `Appizsoft • Özel Yazılım Geliştirme`,
  baseUrl: baseUrl,
  publisher: `Appizsoft`,
  image: baseUrl + "/logo.svg",
  imageAlt: "site-logo-png",
  description: `Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet avantajı elde etmelerini sağlıyoruz.`,
  name: ``,
  keywords: "",
  isRobotIndex: true,
  themeColor: theme.colors.primary,
  lang: "tr",
  sosyalMediaLinks: [
    "https://www.instagram.com/appizsoftcom/",
    "https://www.facebook.com/appizsoftcom/",
    "https://www.tiktok.com/@appizsoftcom",
    "https://tr.linkedin.com/company/appizsoft",
    "https://www.youtube.com/channel/UC0T2GB4idz_7_3KAZJZy22A",
    "https://twitter.com/appizsoftcom",
  ],
  analyticsCodes: {
    pinterestAnalyticsCode,
    googleAnalyticsCode,
    facebookPixelCode,
    gtmCode,
    ttCode,
  },
};
