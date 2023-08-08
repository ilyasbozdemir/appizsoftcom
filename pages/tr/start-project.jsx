import React, { useEffect, useState } from "react";

import { Alert, AlertIcon, Center, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Box, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import StartProjectStepper from "../../components/StartProjectStepper";

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
        <Box my={5} mx={3}>
          <PagesBreadcrumb currentPage={"Proje Başlat"} />
        </Box>
      )}
    </Flex>
  );
};

const GetAQuoteContent = () => {
  return (
    <Container maxW={"7xl"} >
      <StartProjectStepper />
    </Container>
  );
};

function GetAQuote() {
  return (
    <>
      <Head>
        <title>Proje Başlat • Appizsoft</title>
        <meta property="og:title" content={"Proje Başlat • Appizsoft"} />

        <meta name="twitter:title" content={"Proje Başlat• Appizsoft"} />
        <meta itemprop="description" content={""} />
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
