const fs = require("fs");

const urls = [
  { loc: "https://www.appizsoft.com/", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/", lang: "en" },

  { loc: "https://www.appizsoft.com/about-appizsoft", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/about-appizsoft", lang: "en" },

  { loc: "https://www.appizsoft.com/careers", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/careers", lang: "en" },

  { loc: "https://www.appizsoft.com/products", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/products", lang: "en" },

  { loc: "https://www.appizsoft.com/services", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/services", lang: "en" },

  { loc: "https://www.appizsoft.com/portfolio", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/portfolio", lang: "en" },

  { loc: "https://www.appizsoft.com/our-references", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/our-references", lang: "en" },

  { loc: "https://www.appizsoft.com/blog", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/blog", lang: "en" },

  { loc: "https://www.appizsoft.com/contact", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/contact", lang: "en" },

  { loc: "https://www.appizsoft.com/kvkk", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/kvkk", lang: "en" },

  { loc: "https://www.appizsoft.com/privacy-policy", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/privacy-policy", lang: "en" },

  { loc: "https://www.appizsoft.com/cookie-policy", lang: "tr" },
  { loc: "https://www.appizsoft.com/en/cookie-policy", lang: "en" },
];

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = String(currentTime.getMonth() + 1).padStart(2, "0");
const day = String(currentTime.getDate()).padStart(2, "0");
const hours = String(currentTime.getHours()).padStart(2, "0");
const minutes = String(currentTime.getMinutes()).padStart(2, "0");
const seconds = String(currentTime.getSeconds()).padStart(2, "0");
const timezoneOffset = "03:00"; // UTC saat dilimi

const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+${timezoneOffset}`;

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    ({ loc, lang }) => `
  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}"/>
    <lastmod>${formattedTime}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync("public/page-sitemap.xml", sitemap);
};

generateSitemap();
