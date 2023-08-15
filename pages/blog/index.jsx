import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import PaginationContainer from "../../components/PaginationContainer";

import { site } from "../../constants/site";
import { blogData } from "../../constants/blogData";
import Image from "next/image";
const baseImagePath = "https://appizsoft-static-api.vercel.app";

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
          bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
          color: "white",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const BlogCards = () => {
  const router = useRouter();
  return (
    <Box mt={25} cursor={"grab"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems={"center"}>
        {blogData.map((blog) => {
          return (
            <Flex
              key={blog.id}
              p={5}
              w="full"
              alignItems="center"
              justifyContent="center"
              direction={"column"}
            >
              <Flex>
                <Image
                  src={`${baseImagePath}${blog.imageUrl}`}
                  alt="Blog Image"
                  height={350}
                  width={450}
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                  loader={({ src, width, quality }) => {
                    return `${baseImagePath}${src}?w=${width}&q=${
                      quality || 75
                    }`;
                  }}
                 
                />
              </Flex>
              <Flex
                mt={15}
                fontFamily={"Montserrat"}
                direction={"column"}
                cursor={"pointer"}
              >
                <Text fontWeight={"extrabold"} fontSize={20}>
                  {blog.title}
                </Text>
                <Text mt={15} noOfLines={{ base: 2 }}>
                  {blog.content}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

function BlogPage() {
  const publisher = `AppizSoft`;
  const title = `Blog • Appizsoft`;
  const desc = `En güncel teknoloji haberleri ve gelişmeleri. Teknoloji dünyasındaki yenilikleri yakından takip edin.`;

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
        <meta property="og:url" content={`${site.baseUrl}/portfolio`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <BlogPageCTA />
      <BlogPageContent />
    </>
  );
}

const BlogPageCTA = () => {
  const router = useRouter();
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
                  <Text fontSize={65}>Blog</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Blog"} />
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
                <Text fontSize={45}>Blog</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Blog"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const BlogPageContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("technology");
  const options = [
    {
      val: "technology",
      title: "Teknoloji",
    },
    {
      val: "news",
      title: "Haberler",
    },
    {
      val: "ux-ui-design",
      title: "UX/UI Tasarım",
    },
    {
      val: "test-automation",
      title: "Test Otomasyon",
    },
    {
      val: "frontend",
      title: "Frontend",
    },
    {
      val: "project-story",
      title: "Proje Hikayesi",
    },
    {
      val: "backend",
      title: "Backend",
    },

    {
      val: "marketing",
      title: "Pazarlama",
    },
    {
      val: "game-development",
      title: "Oyun Geliştirme",
    },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "blog-posts",
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
      <Flex mt={10} gap={5} direction={'column'}>
        <BlogCards />
        <PaginationContainer />
      </Flex>
    </Container>
  );
};

export default BlogPage;
