import React, { useState } from "react";
import {
  Box,
  Text,
  Image as ChakraImage,
  Heading,
  Flex,
  Divider,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { technologies } from "../../constants/technologies";
import { useRouter } from "next/router";
import Link from "next/link";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const lang = `tr`;

//

function OurTechnologies() {
  const router = useRouter();

  return (
    <>
      <Flex
        id="services-top"
        direction={"row"}
        justifyContent={"space-between"}
        px={{ base: 10, md: 20 }}
      >
        <Flex direction={"column"} justify={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={24}
            pos="relative"
            _before={{
              content: `""`,
              borderRadius: "50px",
              position: "absolute",
              backgroundColor: "#000",
              width: "4px",
              height: "100%",
              left: "-10px",
            }}
          >
            Teknolojiler
          </Heading>
        </Flex>
      </Flex>

      <Center>
        <Box my={5} w={"85%"} userSelect={"none"}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={10}
            slide
            effect="fade"
            autoplay={{ delay: 100 }}
          >
            {technologies.map((image, index) => (
              <SwiperSlide key={index}>
                <Link href={`${lang}/technologies#${image.id}`} passHref>
                  <Flex direction={"column"}>
                    <ChakraImage
                      id={image.id}
                      src={image.imageUrl}
                      alt={`${image.title}`}
                      width={50}
                      height={50}
                      filter={"saturate(.2)"}
                      _hover={{
                        filter: "none",
                      }}
                    />
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Center>
    </>
  );
}

export default OurTechnologies;
