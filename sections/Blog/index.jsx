import {
  chakra,
  Box,
  Divider,
  Heading,
  Flex,
  Text,
  Button,
  Center,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Router, useRouter } from "next/router";
import { blogData } from "../../constants/blogData";

const baseImagePath = "https://appizsoft-static-api.vercel.app";

function Blog() {
  return (
    <>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            pos="relative"
          >
            Teknoloji ve İş Dünyasıyla İlgili Güncel Haberler
          </Heading>
        </Flex>
      </Center>

      <>
        <BlogCards />
      </>
    </>
  );
}

const BlogCards = () => {
  const router = useRouter();
  return (
    <Box mt={25} cursor={"grab"}>
      <Swiper
        spaceBetween={30}
        slidesPerView={useBreakpointValue({
          base: 1,
          md: 1,
          lg: 2,
          xl: 3,
        })}
      >
        {blogData.map((blog) => {
          return (
            <SwiperSlide key={blog.id}>
              <Flex
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
                  <Text mt={15}>{blog.content}</Text>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <HStack fontFamily={"fantasy"} mt={15}>
        <Icon as={HiMiniArrowLongRight} boxSize={35} />
        <Link href={"/tr/blog"}>
          <Text fontSize={25} cursor={"pointer"}>
            Daha Fazla
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default Blog;
