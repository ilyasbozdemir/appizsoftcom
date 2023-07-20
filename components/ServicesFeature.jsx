import React from "react";

import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";

function ServicesFeature({ features }) {
  const router = useRouter();
  return (
    <>
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Size Özel Hizmetler
        </chakra.h3>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing={10}
          mb={4}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              bg={useColorModeValue("gray.100", "gray.700")}
              p={6}
              rounded="lg"
              textAlign="center"
              pos="relative"
              onClick={() => {
                router.push("/tr/service/[id]", `/tr/service/${feature.href}`, {
                  shallow: true,
                });
              }}
              cursor="pointer"
            >
              <Flex
                p={2}
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #fff, #eee)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-3.5rem"
                boxShadow="lg"
              >
                <Image
                  id={feature.id}
                  alt={feature.title}
                  height={70}
                  width={70}
                  src={feature.img}
                  draggable={false}
                />
              </Flex>
              <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" mt={4}>
                {feature.content}
              </Text>

              <Link
                href="/tr/service/[id]"
                as={`/tr/service/${feature.href}`}
                shallow={true}
                passHref
              >
                <Text
                  color="primary.100"
                  w={"full"}
                  h={"50px"}
                  mt={4}
                  _groupHover={{
                    boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
                  }}
                >
                  İncele →
                </Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default ServicesFeature;
