import {
  chakra,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  SimpleGrid,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";

const baseImagePath = "https://appizsoft-static-api.vercel.app";



const Reference = ({ title, description, logoSrc }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <Image src={logoSrc} alt={`${title} Logo`} mb={2} />
      <Heading size="md">{title}</Heading>
      <Box mt={2}>{description}</Box>
    </Box>
  );
};

function OurReferences() {
 

  return (
    <>
      <chakra.h3
        fontSize={{ base: 19, md: 27 }}
        fontWeight="bold"
        textAlign="center"
        fontFamily={'roboto'}
        color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
      >
        Müşterilerimiz
      </chakra.h3>
      <chakra.h2
        fontSize={{ base: 30, md: 45 }}
        fontWeight="bold"
        mb={20}
        textAlign="center"
        color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
        fontFamily={'Open Sans'}
      >
        Bizi Tercih Edenler
      </chakra.h2>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        alignSelf="start"
        placeItems={"center"}
        spacing={10}
        mb={4}
      >
        {projects
          .slice(
            0,
            useBreakpointValue({
              base: 4,
              md: 6,
              lg: 8,
            })
          )
          .map((p, index) => (
            <Flex
              key={p.id}
              direction={"column"}
              cursor={"pointer"}
              className="item"
              gap={3}
            >
              <Image
                src={`${baseImagePath}/${p.portfolio}`}
                alt={p.name}
                height={p.portfolioSize.h}
                width={p.portfolioSize.w}
                style={{
                  borderRadius: "15px",
                }}
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
          ))}
      </SimpleGrid>
      <chakra.div
        textAlign="center"
        color={useColorModeValue("gray.800", "gray.800")}
      >
        <Link href={"/our-references"}>
          <Text fontSize={{ base: 16, md: 22 }} cursor={"pointer"}>
            Tüm referansları görüntüle
          </Text>
        </Link>
      </chakra.div>

    </>
  );
}

export default OurReferences;
