import {
  Box,
  Center,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

const ContactCTA = () => {
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
                  <Text fontSize={65}>İletişim</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"İletişim"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"İletişim"} />
          </Box>
        )}
      </Flex>
    </>
  );
};

const ContactContent = () => {
  return (
    <>
      <></>
    </>
  );
};

function ContactPage() {
  return (
    <Box bg={"#b3b3b3"}>
      <Head>
        <title>İletişim • Appizsoft</title>
      </Head>

      <Box>
        <ContactCTA />
        <ContactContent />
      </Box>
    </Box>
  );
}

export default ContactPage;
