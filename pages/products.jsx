import {
  chakra,
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  Tag,
  Image,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";
import { site } from "../constants/site";
import Link from "next/link";
import PagesCTA from "../components/PagesCTA";

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
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
              pos={"relative"}
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
                <Text fontSize={45}>Ürünler</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Ürünler"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const projectsList = [
  {
    id: 1,
    title: "Bilibum",
    logo: "https://appizsoft-static-api.vercel.app/images/products/bilibum.png",
    //link: "https://bilibum.app",
    link: "/tr/products/",
    desc: `Merhaba! Size, çocuklarınızın uykusu için en özel ve eğlenceli arkadağı sunmaktan heyecan duyuyoruz. Bilibum olarak, çocuklarınızın rüyalarını renklendiren ve uykularını daha huzurlu hale getiren bir uygulama yaratıyoruz.`,
    technologies: ["React Native", "Nextjs", "Net Core"],
    platform: "Mobile",
  },
];

const ProjectCard = ({ targetPlatform, targetTitle }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Container maxW="4xl" p={{ base: 5, md: 10 }}>
        <Heading fontSize={{ base: 18, md: 20 }} my={3}>
          {targetTitle}
        </Heading>
        <VStack spacing={4}>
          {projectsList.map(
            ({ id, title, desc, logo, link, technologies, platform }) =>
              platform === targetPlatform && (
                <>
                  <chakra.div onClick={toggleOpen} key={id}>
                    <HStack
                      p={4}
                      bg={useColorModeValue("white", "gray.800")}
                      rounded="xl"
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                      w="100%"
                      h="100%"
                      textAlign="left"
                      align="start"
                      spacing={4}
                      cursor="pointer"
                      _hover={{ shadow: "lg" }}
                    >
                      <Image
                        src={logo}
                        size="sm"
                        width={55}
                        height={30}
                        rounded="md"
                        alt="cover image"
                        fallbackSrc="https://via.placeholder.com/150"
                      />

                      <VStack align="start" justify="flex-start">
                        <VStack spacing={0} align="start">
                          <HStack>
                            <Text
                              as={Link}
                              href={link}
                              fontWeight="bold"
                              fontSize="md"
                              noOfLines={1}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {title}
                            </Text>

                            <HStack spacing="1">
                              {technologies.map((tech, index) => (
                                <Tag key={index} size="sm" colorScheme="gray">
                                  {tech}
                                </Tag>
                              ))}
                            </HStack>
                          </HStack>

                          {!isOpen && (
                            <Text
                              fontSize="sm"
                              color={textColor}
                              noOfLines={{ base: 2 }}
                              userSelect={"none"}
                            >
                              {desc}
                            </Text>
                          )}

                          {isOpen && (
                            <Text fontSize="sm" color={textColor}>
                              {desc}
                            </Text>
                          )}
                        </VStack>
                      </VStack>
                    </HStack>
                  </chakra.div>
                </>
              )
          )}
        </VStack>
      </Container>
    </>
  );
};

const ProductSupport = () => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      textAlign="center"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      <Text fontSize="xl" fontWeight="semibold" mb={4}>
        Ürün Desteği ve Güncellemeler
      </Text>
      <Text fontSize="md" color="gray.600" mb={4}>
        Ürünlerimiz Fake Company Name platformu tarafından desteklenmektedir
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href={"/tr/contact"} passHref>
          <Button colorScheme="blue" size="sm">
            Daha Fazla Bilgi
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

const ProductsContent = () => {
  return (
    <Container maxW="8xl" p={{ base: 5, md: 10 }}>
      <>
        <Center>
          <ProductSupport />
        </Center>

        <ProjectCard targetPlatform={"Mobile"} targetTitle={"Mobil Uygulama"} />
      </>
    </Container>
  );
};

function ProductsPage() {
  const publisher = `Fake Company Name`;

  const title = "Ürünler  | Fake Company Name";
  const desc =
    "En son teknolojilerle geliştirilmiş yazılım ürünlerimizi inceleyin ve ihtiyaçlarınıza özel çözümleri keşfedin.";

  return (
    <>
      <Head>
        <title>{title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/products`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/products`} />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/products`}
        />
        <link rel="canonical" href="https://domain.com/products" />
        <meta name="robots" content={"index, follow"} />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@Fake Company Name" />
        <meta name="twitter:creator" content="@Fake Company Name" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/products`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta
          property="article:modified_time"
          content="2023-08-10T19:18:34+00:00"
        />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
        <meta name="twitter:data1" content="1 dakika" />
      </Head>

      <Box>
        <PagesCTA imgSrc={"/products.png"} currentPage={"Ürünler"} />
        <ProductsContent />
      </Box>
    </>
  );
}

export default ProductsPage;
