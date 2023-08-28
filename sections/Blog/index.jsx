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
import React, { useRef } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Router, useRouter } from "next/router";
import { blogData } from "../../constants/blogData";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const baseImagePath = "https://appizsoft-static-api.vercel.app";

function Blog() {
  return (
    <Box bg={"blue.50"} borderRadius={"lg"} userSelect={"none"}>
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

      <Box>
        <BlogCards />
      </Box>
    </Box>
  );
}

const BlogCards = () => {
  const router = useRouter();
  const swiperRef = useRef();
  return (
    <Box mt={25} cursor={"grab"}>
      <Center>
        <HStack
          fontFamily={"fantasy"}
          mt={15}
          p={3}
          display={{ base: "initial", sm: "none" }}
        >
          <Icon
            as={HiOutlineArrowNarrowLeft}
            boxSize={38}
            cursor={"pointer"}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Icon
            as={HiOutlineArrowNarrowRight}
            boxSize={38}
            cursor={"pointer"}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </HStack>
      </Center>
      <Swiper
        spaceBetween={30}
        slidesPerView={useBreakpointValue({
          base: 1,
          md: 1,
          lg: 2,
          xl: 3,
        })}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
      >
        {blogData.map((blog) => {
          return (
            <SwiperSlide key={`slide-${blog.id}`}>
              <Flex
                p={5}
                w="full"
                alignItems="center"
                justifyContent="center"
                direction={"column"}
              >
                <Flex>
                  <Image
                    src={`${blog.imageUrl}`}
                    alt="Blog Image"
                    height={350}
                    width={450}
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
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

      <Center>
        <HStack
          fontFamily={"fantasy"}
          mt={15}
          p={3}
          display={{ base: "none", sm: "initial" }}
        >
          <Icon
            as={HiOutlineArrowNarrowLeft}
            boxSize={38}
            cursor={"pointer"}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Icon
            as={HiOutlineArrowNarrowRight}
            boxSize={38}
            cursor={"pointer"}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </HStack>
      </Center>

      <HStack fontFamily={"fantasy"} mt={15} p={3}>
        <Icon as={HiMiniArrowLongRight} boxSize={35} />
        <Link href={"/blog"}>
          <Text fontSize={25} cursor={"pointer"}>
            Daha Fazla
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default Blog;
