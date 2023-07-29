import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

const PortpolyoCTA = () => {
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
      <Flex direction={"column"}>
        {!isMobile && (
          <>
            <Flex
              as="section"
              h={"350px"}
              bg="primary.100"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Portpolyo</Text>
                  <center>
                    <PagesBreadcrumb currentPage={"Portpolyo"} />
                  </center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Portpolyo"} />
          </Box>
        )}
      </Flex>
    </>
  );
};
const PortpolyoContent = () => {
  return <>Tümü</>;
};

function OurReferencesPage() {
  return (
    <>
      <Head>
        <title>Portpolyo • Appizsoft</title>
      </Head>

      <Box>
        <PortpolyoCTA />
        <PortpolyoContent />
      </Box>
    </>
  );
}

export default OurReferencesPage;
