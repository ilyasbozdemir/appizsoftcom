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
  const [lang, setLang] = React.useState("");
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    setLang(browserLanguage);
    setIsMounted(true);
  }, []);
  return (
    <>
      <Head>
        <title>{site.title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en`} />

        <link rel="canonical" href={`${site.baseUrl}`} />

        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="publisher" content={"AppizSoft"} />
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
      </Head>

      <WindowTitleChanger />
      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <Flex direction={"column"} gap={10}>
          <Box id={"Cta"} as="section">
            <Cta lang={lang} targetId={"OurServices"} />
          </Box>
          <Box id={"OurServices"} as="section">
            {isMounted && <LazyOurServices targetId={"Technologies"} />}
          </Box>

          <Box id={"Portfolio"} as="section">
            {isMounted && <LazyPortfolio lang={lang} targetId={"Portfolio"} />}
          </Box>
          <Box id={"Portfolio"} as="section">
            {isMounted && (
              <LazyOurReferences lang={lang} targetId={"WhyChooseUs"} />
            )}
          </Box>

          <Box id={"WhyChooseUs"} as="section">
            {isMounted && (
              <LazyWhyChooseUs lang={lang} targetId={"OurWorkProcess"} />
            )}
          </Box>

          <Box id={"OurWorkProcess"} as="section">
            {isMounted && (
              <LazyOurWorkProcess lang={lang} targetId={"OurReferences"} />
            )}
          </Box>

          <Box id={"Technologies"} as="section">
            {false && (
              <LazyOurTechnologies lang={lang} targetId={"TrustedByDev"} />
            )}
          </Box>

          <Box id={"Blog"} as="section">
            {isMounted && <LazyBlog lang={lang} targetId={"SSS"} />}
          </Box>
        </Flex>
      </Container>
    </>
  );
}
