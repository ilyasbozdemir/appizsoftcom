import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";



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
                  <Text fontSize={65}>Hakkımzda</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Hakkımzda"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Hakkımzda"} />
          </Box>
        )}
      </Flex>
    </>
  );
};


const AboutUsContent = () => {
  return (
    <>
      <Box >
       
      </Box>
    </>
  );
};

function AboutUsPage() {
  return (
    <>
      <Head></Head>

      <main>
        <AboutUsCTA />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
