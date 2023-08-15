import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import { site } from "../../constants/site";

const PortfolioCTA = () => {
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

const PortfolioContent = () => {
  return (
    <>
      <>
        
      </>
    </>
  );
};

function OurPortfolioPage() {
  const publisher = `AppizSoft`;
  const title = `Yaratıcı Çözümlerle İşinizi Destekliyoruz • AppizSoft`;
  const desc = `AppizSoft olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Yazılım çözümleri, web geliştirme, mobil uygulama geliştirme ve daha fazlasını keşfedin.`;

  return (
    <>
      <Head>
        <title>Portpolyo • Appizsoft</title>
      </Head>
      <Head>
        <title>{title}</title>
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
        <meta property="og:url" content={`${site.baseUrl}/tr/portfolio`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <Box>
        <PortfolioCTA />
        <PortfolioContent />
      </Box>
    </>
  );
}

export default OurPortfolioPage;
