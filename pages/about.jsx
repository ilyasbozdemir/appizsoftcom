import React from "react";
import { Flex } from "@chakra-ui/react";

import Head from "next/head";
import { site } from "../constants/site";
import AboutUs from "../sections/AboutUs";
import PartnersSection from "../sections/Partners";
import Portfolio from "../sections/Portfolio";
import PagesCTA from "../components/PagesCTA";

const AboutUsContent = () => {
  return (
    <Flex direction={"column"} gap={3}>
      <AboutUs />
      {/*
      
buraya nextjs net core gibi yazılımlar hakkında bilgi alanı

      */}
      <PartnersSection />
      <Portfolio />
    </Flex>
  );
};

function AboutUsPage() {
  const publisher = `AppizSoft`;
  const title = `AppizSoft Hakkında • AppizSoft`;
  const desc = `AppizSoft olarak, teknoloji ve yaratıcılığı bir araya getiriyoruz. Müşterilerimize en iyi çözümleri sunarak işlerini büyütmelerine yardımcı oluyoruz.`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="alternate" hreflang="x-default" href={`${site.baseUrl}`} />

        <link
          rel="alternate"
          hreflang="tr"
          href={`${site.baseUrl}/about-appizsoft`}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/about-appizsoft`}
        />
        <link rel="canonical" href={`${site.baseUrl}/about-appizsoft`} />
        <meta name="robots" content={"index, follow"} />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/about-appizsoft`} />
        <meta property="og:description" content={desc} />
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

      <main>
        <PagesCTA imgSrc={"/about-appizsoft.png"} currentPage={"Hakkımızda"} />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
