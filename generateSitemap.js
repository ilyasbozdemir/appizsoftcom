const fs = require("fs");

import { urls } from "./lib/pages";

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
