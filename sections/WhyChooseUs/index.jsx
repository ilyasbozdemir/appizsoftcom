import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { whyChooseUsFeatures } from "../../constants/whyChooseUsFeatures";

function WhyChooseUs() {
  const Feature = (props) => {
    return (
      <>
        <Flex
          direction={{ base: "column", lg: "column" }}
          w={{ base: "full", lg: "250px" }}
          h={{ base: "300px", lg: "350px" }}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          rounded={"lg"}
          overflow={"hidden"}
          data-aos="zoom-in-up"
          zIndex={19}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
            zIndex={20}
          >
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Flex
                alignItems="center"
                justifyContent="center"
                w={16}
                h={16}
                mb={4}
                rounded="full"
                zIndex={20}
                color={`${props.color}.600`}
                bg={`${props.color}.100`}
                _dark={{
                  color: `${props.color}.200`,
                  bg: `${props.color}.800`,
                }}
              >
                <Icon
                  as={props.icon}
                  boxSize={10}
                  aria-hidden="true"
                  zIndex={21}
                />
              </Flex>
            </Stack>

            <Center>
              <Heading
                fontFamily={"Montserrat"}
                as="h2"
                fontSize={"20px"}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                {props.title}
              </Heading>
            </Center>
          </Stack>

          <Box px={6} py={10} zIndex={22}>
            {props.content}
          </Box>
        </Flex>
      </>
    );
  };

 

  return (
    <Flex
      p={{ md: 5, lg: 5 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex
        align={"center"}
        justify={"center"}
        gap={3}
        direction={{ base: "column", lg: "row" }}
      >
        <Box maxW={"450px"}>
          <Heading
            as="h2"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            pos="relative"
          >
            Bizi Tercih Etmeniz İçin 6 Neden
          </Heading>

          <Text
            as="p"
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            textAlign={{
              base: "center",
              sm: "left",
            }}
            color="gray.600"
            _dark={{
              color: "gray.500",
            }}
            data-aos="zoom-in-right"
          >
            Minimum 6 aylık destek, haftalık güncellemeler ve size özel
            hizmetlerimizle buradayız. Başarıya giden yolda yanınızdayız.
          </Text>
          <Center>
            <Box display={{ base: "none", lg: "initial" }}>
              <Link href={"/about-appizsoft"}>
                <Button
                  variant="solid"
                  w={{
                    base: "full",
                    sm: "auto",
                  }}
                  size="lg"
                >
                  Daha Fazlasını Gör
                </Button>
              </Link>
            </Box>
          </Center>
        </Box>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2, "2xl": 3 }}
          spacing={3}
          rowGap={5}
          columnGap={5}
          justify="center"
        >
          {whyChooseUsFeatures.map((child) => (
            <React.Fragment key={child.icon}>
              <Feature {...child} />
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Flex>

      <Center>
        <Box display={{ base: "initial", lg: "none" }} mt={10}>
          <Link href={"/about-appizsoft"}>
            <Button
              variant="solid"
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
            >
              Daha Fazlasını Gör
            </Button>
          </Link>
        </Box>
      </Center>
    </Flex>
  );
}

export default WhyChooseUs;
