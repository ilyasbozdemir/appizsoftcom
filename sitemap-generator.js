const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "https://www.appizsoft.com",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ['admin'],
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "public/",
  pagesConfig: {
    "/index": {
      priority: "1",
      changefreq: "always",
    },
  },
});
