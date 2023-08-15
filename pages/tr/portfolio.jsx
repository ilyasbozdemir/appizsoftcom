import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import { site } from "../../constants/site";
import { projects } from "../../constants/projects";
import Image from "next/image";
const baseImagePath = "https://appizsoft-static-api.vercel.app";
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

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" n userSelect={"none"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          opacity: 0.9,
        }}
        _checked={{
          bgGradient:'linear(to-l, #0ea5e9,#2563eb)',
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const PortfolioContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("products");

  let filteredData = projects.filter((item) => {
    return item.category === selectedCategory;
  });

  useEffect(() => {
    filteredData = projects.filter((item) => {
      return item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const options = [
    {
      val: "projects",
      title: "Projelerimiz",
    },
    {
      val: "web-site",
      title: "Web Sitesi",
    },
    {
      val: "e-commerce",
      title: "E-Ticaret",
    },
    {
      val: "digital-marketing",
      title: "Dijital Pazarlama",
    },
    {
      val: "test-automation",
      title: "Test Otomasyon",
    },
    {
      val: "mobile-app",
      title: "Mobil Uygulama",
    },
    {
      val: "design",
      title: "Tasarım",
    },
    {
      val: "production",
      title: "Prodüksiyon",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "portfolios",
    defaultValue: options[0].val,
    onChange: setSelectedCategory,
  });

  const group = getRootProps();
  return (
    <Container p={{ base: 9, md: 10 }} maxW="8xl">
      <Flex
        justifyContent={"center"}
        direction={"columns"}
        flexWrap={"wrap"}
        gap={4}
        {...group}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value: value.val });
          return (
            <RadioCard key={value} {...radio}>
              {value.title}
            </RadioCard>
          );
        })}
      </Flex>
      <Flex mt={"50px"}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
          alignSelf="start"
          placeItems={"center"}
          spacing={10}
          mb={4}
        >
          {filteredData.map((p, index) => (
            <Flex direction={"column"} key={p.id}>
              <Flex direction={"column"} cursor={"pointer"} gap={3}>
                <Image
                  src={`${baseImagePath}/${p.portfolio}`}
                  alt={p.name}
                  height={p.portfolioSize.h * 2}
                  width={p.portfolioSize.w * 2}
                  style={{
                    borderRadius: "15px",
                  }}
                />
                <Text
                  fontFamily={"monospace"}
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={{
                    base: 14,
                    md: 16,
                    lg: 18,
                  }}
                >
                  {p.name}
                </Text>
              </Flex>
              <Text>{p.description}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

function OurPortfolioPage() {
  const publisher = `AppizSoft`;
  const title = `Portfolyo • Appizsoft`;
  const desc = `Yazılım, dijital prodüksiyon ve dijital pazarlama alanlarında yapılan çalışmaları sizinle paylaşıyoruz. Projelerimize göz atın ve yaratıcılığımızı keşfedin!`;

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
