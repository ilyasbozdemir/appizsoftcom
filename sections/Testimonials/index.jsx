import React, { Fragment } from "react";

import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  Container,
  VStack,
  SimpleGrid,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HStack, Icon } from "@chakra-ui/react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import { ImQuotesLeft } from "react-icons/im";
import { testimonialsData2 } from "../../constants/testimonialsData2";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("primary.100", "primary.200");
  return (
    <div itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
      <HStack spacing="0.5" {...rootProps}>
        {Array.from({
          length: max,
        })
          .map((_, index) => index + 1)
          .map((index) => (
            <Icon
              key={index}
              as={FaStar}
              fontSize={size}
              color={index <= defaultValue ? activeColor : color}
            />
          ))}
      </HStack>
      <meta itemProp="ratingValue" content={defaultValue} />
    </div>
  );
};

const TestimonialsSections = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxW="5xl" p={{ base: 10, md: 14 }}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={20}
          mt={6}
        >
          {testimonialsData2.map((obj, index) => (
            <VStack
              key={index}
              p={4}
              bg={useColorModeValue("white", "blackAlpha.600")}
              border="3px solid"
              borderColor="teal.400"
              maxW="xl"
              margin="0 auto"
              boxShadow="lg"
              pos="relative"
            >
              <Icon
                as={FaQuoteRight}
                w={10}
                h={10}
                color="teal.400"
                left="-1.3rem"
                position="absolute"
                top="-1.5rem"
              />
              <Stack direction="column" spacing={5}>
                <Text color="gray.500">{obj.content}</Text>

                <Flex direction={"column"} justify={"flex-end"}>
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    align="right"
                    mr="3rem !important"
                  >
                    {obj.name}
                  </Text>
                </Flex>
              </Stack>

              <Avatar
                src={obj.image}
                name={obj.name}
                showBorder={true}
                borderColor="green.400"
                size="xl"
                pos="absolute"
                right="-48px"
                bottom="-20px"
                shadow="lg"
              />
            </VStack>
          ))}
        </SimpleGrid>

        <Center mt={10}>
          <Flex display={{ base: "initial", md: "initial" }}>
            <Link href={"#testiminals-container"} passHref>
              <Button variant={"outline"}>Tüm Yorumlar</Button>
            </Link>
          </Flex>
        </Center>

        <Flex direction={"column"} gap={10}></Flex>
      </Container>
    </>
  );
};

const Testimonials = () => {
  return (
    <>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            İnsanlar bizim hakkımızda ne diyor?
          </Heading>
        </Flex>
      </Center>

      <Center p={4}>
        {/*
            <WithSpeechBubbles />
        */}

        <TestimonialsSections />
      </Center>
    </>
  );
};

export default Testimonials;
