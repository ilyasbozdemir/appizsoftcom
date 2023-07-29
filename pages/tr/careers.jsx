import { Box, Center, Flex, Text, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";

function CareersPage() {
  return (
    <>
      <Head></Head>

      <main>
        <CareersCTA />
        <CareersContent />
      </main>
    </>
  );
}

const CareersCTA = () => {
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
                  <Text fontSize={65}>Kariyer</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Kariyer"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Kariyer"} />
          </Box>
        )}
      </Flex>
    </>
  );
};

const CareersContent = () => {
  return (
    <>
      <Box></Box>
    </>
  );
};

export default CareersPage;
