import React, { useEffect, useState } from "react";

import { Alert, AlertIcon, Center, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Box, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";
import StartProjectStepper from "../components/StartProjectStepper";
import { site } from "../constants/site";

const GetAQuoteCTA = () => {
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
    <Flex direction={"column"}>
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
                <Text fontSize={65}>Proje Başlat</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Proje Başlat"} />
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
            <Text fontSize={45}>Proje Başlat</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Proje Başlat"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
      )}
    </Flex>
  );
};

const GetAQuoteContent = () => {
  return (
    <Container maxW={"7xl"}>
      <StartProjectStepper />
    </Container>
  );
};

function GetAQuote() {
  const publisher = `AppizSoft`;
  const title = `Yenilikçi Projeleri Hayata Geçirin  • AppizSoft`;
  const desc = `Teknoloji dünyasında sınırları zorlayan, inovasyonu destekleyen ve yaratıcı projelere öncülük eden bir ortak arıyorsanız, projeyi başlat sayfamızla tanışın. İhtiyaçlarınıza özel çözümler sunarak işinizin dijital dönüşümünü gerçekleştiriyoruz. Hemen iletişime geçin ve projelerinizi hayata geçirin.`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/start-project`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/start-project`} />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/start-project`}
        />
        <link rel="canonical" href="https://appizsoft.com/start-project" />
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
        <meta property="og:url" content={`${site.baseUrl}/start-project`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="article:publisher" content="https://www.facebook.com/appizsoftcom/" />
        <meta property="article:modified_time" content="2023-08-10T19:18:34+00:00" />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
	<meta name="twitter:data1" content="1 dakika" />
      </Head>

      <Flex direction={"column"} gap={3}>
        <Box>
          <GetAQuoteCTA />
        </Box>
        <Box>
          <GetAQuoteContent />
        </Box>
      </Flex>
    </>
  );
}

export default GetAQuote;
