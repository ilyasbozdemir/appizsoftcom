import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../lib/detectBrowserLanguage";
import Head from "next/head";
import { site } from "../constants/site";

import WindowTitleChanger from "../components/shared/WindowTitleChanger";
import { Box, Container, Flex } from "@chakra-ui/react";
import Cta from "../sections/Cta";

import dynamic from "next/dynamic";
import Link from "next/link";

const LazyOurServices = dynamic(() => import("../sections/OurServices"));

const LazyPortfolio = dynamic(() => import("../sections/Portfolio"));
const LazyOurReferences = dynamic(() => import("../sections/OurReferences"));

const LazyOurTechnologies = dynamic(() =>
  import("../sections/OurTechnologies")
);

const LazyWhyChooseUs = dynamic(() => import("../sections/WhyChooseUs"));
const LazyOurWorkProcess = dynamic(() => import("../sections/OurWorkProcess"));
const LazyBlog = dynamic(() => import("../sections/Blog"));

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  let currentLang = "";

  useEffect(() => {
    setIsMounted(true);
    currentLang = document.documentElement.lang;
  }, []);
  return (
    <>
      <Head>
        <title>{site.title}</title>

        <link rel="alternate" hreflang="x-default" href={`${site.baseUrl}`} />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en`} />

        <link rel="canonical" href={`${site.baseUrl}`} />

        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="publisher" content={site.publisher} />
        <meta name="robots" content={"index, follow"} />
        <meta name="robots" content={"index, follow"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={site.title} />
        <meta property="og:url" content={`${site.baseUrl}`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/appizsoftcom/"
        />
        <meta
          property="article:modified_time"
          content="2023-08-10T19:18:34+00:00"
        />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
        <meta name="twitter:data1" content="1 dakika" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": site.baseUrl,
                  url: site.baseUrl,
                  name: site.title,
                  isPartOf: { "@id": site.baseUrl + "/#website" },
                  about: { "@id": site.baseUrl + "/#organization" },
                  datePublished: "2023-08-21T10:48:38+03:00",
                  dateModified: "2023-08-21T10:48:38+03:00",
                  description: site.description,
                  breadcrumb: { "@id": site.baseUrl + "/#breadcrumb" },
                  inLanguage: currentLang,
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: [site.baseUrl],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": site.baseUrl + "/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: site.title },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": site.baseUrl + "/#website",
                  url: site.baseUrl,
                  name: site.title,
                  description: site.description,
                  publisher: { "@id": site.baseUrl + "/#organization" },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          site.baseUrl + "/search?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: currentLang,
                },
                {
                  "@type": "Organization",
                  "@id": site.baseUrl + "/#organization",
                  name: site.title,
                  url: site.baseUrl,
                  logo: {
                    "@type": "ImageObject",
                    inLanguage: currentLang,
                    "@id": site.baseUrl + "/#/schema/logo/image/",
                    url: site.logoUrl,
                    contentUrl: site.logoUrl,
                    width: 458,
                    height: 145,
                    caption: site.title,
                  },

                  image: {
                    "@id": site.baseUrl + "/#/schema/logo/image/",
                  },
                  contactPoint: {
                    type: "ContactPoint",
                    telephone: site.telephone,
                    contactType: "customer service",
                    areaServed: "TR",
                    availableLanguage: "Turkish",
                  },

                  sameAs: site.sosyalMediaLinks.map((link) => link.link),
                },
              ],
            }),
          }}
        />
      </Head>

      <WindowTitleChanger />
      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <Flex direction={"column"} gap={10}>
          <Box id={"Cta"} as="section">
            <Cta targetId={"OurServices"} />
          </Box>
          <Box id={"OurServices"} as="section">
            {isMounted && <LazyOurServices targetId={"Technologies"} />}
          </Box>

          <Box id={"Portfolio"} as="section">
            {isMounted && <LazyPortfolio targetId={"Portfolio"} />}
          </Box>
          <Box id={"OurReference"} as="section">
            {isMounted && <LazyOurReferences targetId={"WhyChooseUs"} />}
          </Box>

          <Box id={"WhyChooseUs"} as="section">
            {isMounted && <LazyWhyChooseUs targetId={"OurWorkProcess"} />}
          </Box>

          <Box id={"OurWorkProcess"} as="section">
            {isMounted && <LazyOurWorkProcess targetId={"OurReferences"} />}
          </Box>

          <Box id={"Technologies"} as="section">
            {false && <LazyOurTechnologies targetId={"TrustedByDev"} />}
          </Box>

          <Box id={"Blog"} as="section">
            {isMounted && <LazyBlog targetId={"SSS"} />}
          </Box>
        </Flex>
      </Container>
    </>
  );
}
