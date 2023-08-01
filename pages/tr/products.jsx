import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

const ProductsCTA = () => {
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
                  <Text fontSize={65}>Ürünler</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Ürünler"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Ürünler"} />
          </Box>
        )}
      </Flex>
    </>
  );
};

const ProductsContent = () => {
  return <Container maxW="8xl" p={{ base: 5, md: 10 }}></Container>;
};

function ProductsPage() {
  return (
    <>
      <Head>
        <title>Ürünler • Appizsoft</title>
      </Head>

      <Box>
        <ProductsCTA />
        <ProductsContent />
      </Box>
    </>
  );
}

export default ProductsPage;
