import {
  Box,
  Flex,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Button,
  Text,
  useBreakpointValue,
  HStack,
  Icon,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMiniArrowLongRight } from "react-icons/hi2";
const defaultWidth = 675; //1000
const defaultHeight = 386; //667
const baseImagePath = "https://appizsoft-static-api.vercel.app";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MotionSimpleGrid = motion(SimpleGrid);

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Box borderRadius="md" boxShadow="md" p={5}>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Portfolyo
          </Heading>
        </Flex>
      </Center>

      <Center my={5}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={useBreakpointValue({
            base: 1,
            sm:2,
            md: 2,
            lg: 3,
            xl: 4,
          })}
          autoplay={{ delay: 2500 }}
        >
          {isMounted && (
            <>
              {projects.map((p, index) => (
                <SwiperSlide key={p.id}>
                  <Flex
                    key={p.id}
                    direction={"column"}
                    cursor={"pointer"}
                    className="item"
                    variants={item}
                  >
                    <Image
                      src={`${baseImagePath}/${p.portfolio}`}
                      alt={p.name}
                      height={p.portfolioSize.h}
                      width={p.portfolioSize.w}
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
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </Center>

      <HStack fontFamily={"fantasy"} mt={15}>
        <Icon as={HiMiniArrowLongRight} boxSize={35} />
        <Link href={"/tr/portfolio"}>
          <Text fontSize={25} cursor={"pointer"}>
            Daha Fazla
          </Text>
        </Link>
      </HStack>
    </Box>
  );
}
