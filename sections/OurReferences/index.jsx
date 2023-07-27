import {
  Box,
  Flex,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";

const defaultWidth = 675; //1000
const defaultHeight = 386; //667
const baseImagePath = "https://appizsoft-static-api.vercel.app";

export default function OurReferences() {
  return (
    <>
      <Box>
        <Center>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Portfolyo
            </Heading>
          </Flex>
        </Center>

        <Center my={5}>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={4}
            justify="center"
          >
            {projects.map((p, index) => (
              <Flex
                key={p.id}
                direction={"column"}
                cursor={"pointer"}
              >
                <Image
                  src={p.portfolio}
                  alt={p.name}
                  height={p.portfolioSize.h}
                  width={p.portfolioSize.w}
                  loader={({ src, width, quality }) => {
                    return `${baseImagePath}${src}?w=${width}&q=${
                      quality || 75
                    }`;
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
        </Center>

        <Center>
          <Flex display={{ base: "initial", md: "none" }}>
            <Link href={"/tr/portfolio"} passHref>
              <Button variant={"outline"}>Tüm Referanslar</Button>
            </Link>
          </Flex>
        </Center>
      </Box>

      <></>
    </>
  );
}
