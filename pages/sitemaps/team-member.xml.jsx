import { site } from "../../constants/site";

const router=[
    "/u/ilyas-bozdemir",
    "/u/murat-yigitbasi",
    "/u/kemal-gerceker",
    "/u/kubra-uzumcu",
    "/u/ozhan-demirel",
]


const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = `0${d.getUTCMonth() + 1}`.slice(-2);
  const day = `0${d.getUTCDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = site.baseUrl;
  const currentDate = new Date();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${router
        .map(
          (router) => `
          <url>
            <loc>${baseUrl}${router}</loc>
            <lastmod>${formatDate(currentDate)}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${0.8}</priority>
          </url>
        `
        )
        .join("")}
    </urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default function Sitemap() {}