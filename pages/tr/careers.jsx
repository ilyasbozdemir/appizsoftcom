import {
  Button,
  Box,
  Center,
  Flex,
  Text,
  Container,
  Heading,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";
import { site } from "../../constants/site";

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

const careers = [
  {
    title: "Backend Developer",
    description: `Hızla büyüyen ekibimize katılmak için yetenekli bir backend geliştirici arıyoruz.
    `,
    location: "Ankara, Türkiye",
  },
 
];



const CareerCard = ({ title, description, location }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          textAlign="left"
        >
          <Box flex="1" textAlign="left">
            <Heading as="h3" fontSize="xl" mb={2}>
              {title}
            </Heading>

            <Text mt={2} color="gray.500">
              {location}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text>{description}</Text>
          <Button mt={4} colorScheme="blue" size="lg">
            Şimdi Katıl
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const CareersContent = () => {
  const publisher = `Appizsoft`;
  const title=`Kariyer Fırsatları - Hayalinizdeki Pozisyon İçin Başvurun • AppizSoft`
  const desc=`AppizSoft olarak, büyüyen ekibimize katılarak kariyerinizi şekillendirin. Backend geliştirici, frontend geliştirici, mobil uygulama geliştirici ve daha birçok pozisyon için fırsatları inceleyin.`
  return (
    <>
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
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <Center mb={5} mt={2}>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Açık Pozisyonlar
            </Heading>
          </Flex>
        </Center>
        <Divider />

        <Flex direction={"column"} gap={5} mt={5}>
          {careers.map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              description={career.description}
              location={career.location}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default CareersPage;
