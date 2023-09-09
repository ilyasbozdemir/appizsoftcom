import { Box, Center, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import PagesBreadcrumb from "./shared/PagesBreadcrumb";
import Image from "next/image";

function PagesCTA({ imgSrc, currentPage }) {
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
    setIsMobile(window.innerWidth <= 1024);
  };

  return (
    <>
      <Flex direction={"column"} zIndex={1}>
        {!isMobile && (
          <Flex as="section" w="100%" color="white" justify={"center"}>
            <Flex direction={"column"}>
              <Box pos={"relative"}>
                <Image src={imgSrc} width={1920} height={200} />
                <Box
                  pos={"absolute"}
                  left={"42%"}
                  top={"66%"}
                  boxShadow={"md"}
                  fontWeight={"extrabold"}
                >
                  <PagesBreadcrumb currentPage={currentPage} />
                </Box>
              </Box>
            </Flex>
          </Flex>
        )}

        {isMobile && (
          <Flex as="section" w="100%" color="black" justify={"center"}>
            <Center>
              <Flex direction={"column"}>
                <Image src={imgSrc} width={1920} height={200} />

                <Center>
                  <PagesBreadcrumb currentPage={currentPage} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default PagesCTA;
