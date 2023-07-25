import React, { useEffect, useState } from "react";
import Head from "next/head";

import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

import {
  Text,
  Flex,
  Image,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
  Stack,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";

const OurServicesCTA = () => {
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
                  <Text fontSize={65}>Hizmetler</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Hizmetler"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Teklif Al"} />
          </Box>
        )}
      </Flex>
    </>
  );
};

const OurServicesContent = () => {
  return (
    <>
      <Flex
        bg={"gray.200"}
        justifyContent={"center"}
        h={50}
        align={"center"}
        overflowX={"auto"}
      >
        <Stack direction="row" spacing={4} align="center">
          <Button variant="ghost">Yazılım Hizmetlerimiz</Button>
          <Button variant="ghost">Dijital Hizmetlerimiz</Button>
          <Button variant="ghost">E-ticaret Çözümleri</Button>
        </Stack>
      </Flex>

      <Center mt={5}>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Hizmetler
          </Heading>
        </Flex>
      </Center>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 4,
        }}
        spacingX={{
          base: 16,
          lg: 24,
        }}
        spacingY={20}
        mt={6}
      >
        {/*features.map((child) => (
            <div key={child.icon}>
              <Feature
                color={child.color}
                title={child.title}
                icon={child.icon}
              >
                {child.content}
              </Feature>
            </div>
          ))*/}
      </SimpleGrid>
    </>
  );
};

const ServicesCard = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <Flex gap={5} direction={"column"} p={{ base: 3, md: 5, lg: 8 }}>
      <Flex
        direction={"column"}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
        p={5}
        //bg={useColorModeValue("#F5F5F5", "#fff")}
        boxShadow={"rgba(17, 17, 26, 0.1) 0px 0px 16px;"}
        borderRadius={"10px"}
        cursor="pointer"
        role={"group"}
        _hover={{
          boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
        }}
        rounded="md"
        marginInline="auto"
        onClick={() => {
          router.push("/tr/service/[id]", `/tr/service/${href}`, {
            shallow: true,
          });
        }}
      >
        <Flex justifyContent={"center"} data-aos={"zoom-out"}>
          <Image
            id={id}
            alt={title}
            height={70}
            width={70}
            src={img}
            draggable={false}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Heading
            as={"h2"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
            fontSize={{ base: "15px", md: "16px" }}
            isTruncated
          >
            {title}
          </Heading>
        </Flex>

        <Text
          data-aos="zoom-in-up"
          fontSize={{ base: "15px", md: "16px" }}
          p={3}
          fontFamily={"'Open Sans', sans-serif, Arial, Helvetica"}
        >
          {content}
        </Text>

        <Flex justifyContent={"center"} mt={4}>
          <Link
            href="/tr/service/[id]"
            as={`/tr/service/${href}`}
            shallow={true}
            passHref
          >
            <Button
              variant={"outline"}
              color="primary.100"
              rightIcon={<BsArrowRight />}
              w={"full"}
              h={"50px"}
              _groupHover={{
                boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
              }}
            >
              İncele
            </Button>
          </Link>
        </Flex>
        <Text mt={2} textAlign="center" fontSize="sm">
          Size Özel Çözümlerimizle İşinizi Dijital Dünyada Öne Çıkarıyoruz!
        </Text>
      </Flex>
    </Flex>
  );
};

function ServicesPage() {
  return (
    <>
      <Head>
        <title>Hizmetler • Appizsoft</title>
      </Head>

      <main>
        {/*<OurServicesCTA />*/}
        <OurServicesContent />
      </main>
    </>
  );
}

export default ServicesPage;
