import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";
import { site } from "../../constants/site";

const AboutUsCTA = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // İlk renderda ekran boyutuna göre kontrol yapılır
    handleWindowSize();

    // Ekran boyutu değiştiğinde kontrol yapılır
    window.addEventListener("resize", handleWindowSize);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <>
      <Flex mt={4} direction={"column"}>
        {!isMobile && (
          <>
            <Flex
              as="section"
              h={"350px"}
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Hakkımızda</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Hakkımızda"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Flex
            as="section"
            h={180}
            bgGradient="linear(to-l, #667eea, #54BEC3)"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Text fontSize={45}>Hakkımızda</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Hakkımızda"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const AboutUsContent = () => {
  return (
    <>
      <Box></Box>
    </>
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

        <link rel="canonical" href="https://appizsoft.com/tr" />
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/tr`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/tr`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}`} />

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
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
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
        <AboutUsCTA />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
