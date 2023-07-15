import React, { useEffect, useState } from "react";

import { Alert, AlertIcon, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Box, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

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
            bg="primary"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Text fontSize={65}>Teklif Al</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Teklif Al"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        </>
      )}

      {isMobile && (
        <Box my={5} mx={3}>
          <PagesBreadcrumb currentPage={"Teklif Al"} />
        </Box>
      )}
    </Flex>
  );
};

const GetAQuoteContent = () => {
  return (
    <>
      <></>
    </>
  );
};

function GetAQuote() {
  return (
    <>
      <Head>
        <title>Hemen Teklif Al • Appizsoft</title>
        <meta property="og:title" content={"Hemen Teklif Al • Appizsoft"} />

        <meta name="twitter:title" content={"Hemen Teklif Al • Appizsoft"} />
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
