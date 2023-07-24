import React, { useEffect, useState } from "react";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Flex, Heading } from "@chakra-ui/react";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import dynamic from "next/dynamic";

import Cta from "../../sections/Cta";
import MetaHead from "../../configuration/MetaHead";
import Head from "next/head";

const LazyCta = dynamic(() => import("../../sections/Cta"), {
  //loading: () => <p>Loading...</p>,
});

const LazyOurServices = dynamic(() => import("../../sections/OurServices"));
const LazyOurReferences = dynamic(() => import("../../sections/OurReferences"));

const LazyAboutUs = dynamic(() => import("../../sections/AboutUs"));

const LazyOurTechnologies = dynamic(() =>
  import("../../sections/OurTechnologies")
);
const LazyTestimonials = dynamic(() => import("../../sections/Testimonials"));
const LazyWhyChooseUs = dynamic(() => import("../../sections/WhyChooseUs"));
const LazyOurWorkProcess = dynamic(() =>
  import("../../sections/OurWorkProcess")
);
const LazyBlog = dynamic(() => import("../../sections/Blog"));
const LazyPartners = dynamic(() => import("../../sections/Partners"));
const LazyTrustedByDev = dynamic(() => import("../../sections/TrustedByDev"));

const LazySSS = dynamic(() => import("../../sections/SSS"));
//

import { site } from "../../constants/site";

function IndexPage() {
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    setLang(browserLanguage);
  }, []);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const publisher = `Appizsoft`;
  return (
    <>
      <>
        <Head>
          <title>{site.title}</title>
          <meta itemprop="description" content={site.description} />
          <meta name="description" content={site.description} />
          <meta name="publisher" content={publisher} />
          <meta name="robots" content={"index, follow"} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={site.title} />
          <meta name="twitter:description" content={site.description} />
          <meta name="twitter:site" content="@appizsoftcom" />
          <meta name="twitter:creator" content="@appizsoftcom" />
          <meta name="twitter:image" content={site.twImage} />
          <meta name="twitter:image:alt" content={site.title} />

          <meta property="og:title" content={site.title} />
          <meta property="og:url" content={`${site.baseUrl}/tr`} />
          <meta property="og:description" content={site.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={site.title} />
          <meta property="og:image" content={site.ogImage} />
          <meta property="og:image:alt" content={site.title} />
          <meta property="og:image:width" content="1012" />
          <meta property="og:image:height" content="506" />
          <meta property="og:locale" content="tr_TR" />

          
        </Head>
      </>

      <WindowTitleChanger />
      <Flex direction={"column"} gap={5}>
        <Box id={"Cta"} as="section">
          <Cta lang={lang} targetId={"OurServices"} />
        </Box>
        <Box id={"OurServices"} as="section">
          {isMounted && <LazyOurServices targetId={"Technologies"} />}
        </Box>

        <Box id={"OurReferences"} as="section">
          {isMounted && (
            <LazyOurReferences lang={lang} targetId={"Testimonials"} />
          )}
        </Box>

        <Box id={"WhyChooseUs"} as="section">
          {isMounted && (
            <LazyWhyChooseUs lang={lang} targetId={"OurWorkProcess"} />
          )}
        </Box>
        <Box id={"Technologies"} as="section">
          {isMounted && (
            <LazyTrustedByDev lang={lang} targetId={"WhyChooseUs"} />
          )}
        </Box>
        <Box id={"OurWorkProcess"} as="section">
          {isMounted && (
            <LazyOurWorkProcess lang={lang} targetId={"OurReferences"} />
          )}
        </Box>
        <Box id={"WhyChooseUs"} as="section">
          {isMounted && (
            <LazyOurTechnologies lang={lang} targetId={"TrustedByDev"} />
          )}
        </Box>

        <Box id={"Testimonials"} as="section">
          {isMounted && <LazyTestimonials lang={lang} targetId={"Partners"} />}
        </Box>
        <Box id={"Partners"} as="section">
          {isMounted && <LazyPartners lang={lang} targetId={"Blog"} />}
        </Box>

        <Box id={"Blog"} as="section">
          {isMounted && <LazyBlog lang={lang} targetId={"SSS"} />}
        </Box>

        <Box id={"SSS"} as="section">
          {isMounted && <LazySSS lang={lang} />}
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
