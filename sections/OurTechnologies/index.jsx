import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { technologies } from "../../constants/technologies";
import { useRouter } from "next/router";
import Link from "next/link";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import dynamic from "next/dynamic";
import Image from "next/image";

const lang = `tr`;


function OurTechnologies() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Teknolojiler
          </Heading>
        </Flex>
      </Center>

      <Center>
        <Box my={5} w={"85%"} userSelect={"none"}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={useBreakpointValue({
              base: 4,
              md: 6,
              lg: 7,
              xl: 8,
              "2xl": 9,
              "3xl": 10,
              "4xl": 11,
              "5xl": 12,
            })}
            autoplay={{ delay: 500 }}
          >
            {isMounted && (
              <>
                {technologies.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Link href={`${lang}/technologies#${image.id}`} passHref>
                      <Flex direction={"column"}>
                        <Image
                          id={image.id}
                          src={image.imageUrl}
                          alt={`${image.title}`}
                          width={50}
                          height={50}
                          style={{
                            filter: "saturate(.2)",
                          }}
                        />
                      </Flex>
                    </Link>
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </Box>
      </Center>
    </>
  );
}

export default OurTechnologies;
