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
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Portfolyo</Text>
                  <center>
                    <PagesBreadcrumb currentPage={"Portfolyo"} />
                  </center>
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
                <Text fontSize={45}>Portfolyo</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Portfolyo"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const PortpolyoContent = () => {
  return (
    <>
      <>
        <Center py={10}>
          Birlikte çalıştığımız harika markalar ve geliştirmiş olduğumuz bazı
          projeler
        </Center>
      </>
    </>
  );
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
