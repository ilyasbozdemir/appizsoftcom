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
    description: "Skilled backend dev wanted for our growing team.",
    location: "Ankara, Turkey",
  },
  {
    title: "Frontend Developer",
    description: "Join us as a frontend dev and craft user experiences.",
    location: "Remote",
  },
  {
    title: "Full Stack Developer",
    description: "Versatile full stack developer needed to build it all.",
    location: "Ankara, Türkiye",
  },
  {
    title: "Mobile App Developer",
    description: "Create cutting-edge mobile apps that inspire.",
    location: "Ankara, Türkiye",
  },
  {
    title: "Game Developer",
    description: "Passionate game dev to bring virtual worlds to life.",
    location: "Remote",
  },
  // Diğer iş pozisyonları da eklenebilir
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
          <Button
            mt={4}
            colorScheme="blue"
            size="lg"
          >
            Katıl
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const CareersContent = () => {
  return (
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
  );
};

export default CareersPage;
