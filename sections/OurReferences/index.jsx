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
import { motion } from "framer-motion";

const defaultWidth = 675; //1000
const defaultHeight = 386; //667
const baseImagePath = "https://appizsoft-static-api.vercel.app";

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

export default function OurReferences() {
  return (
    <Box>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Portfolyo
          </Heading>
        </Flex>
      </Center>

      <Center my={5} p={3}>
        <SimpleGrid
          as={motion.div}
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={4}
          justify="center"
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects.map((p, index) => (
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
          ))}
        </SimpleGrid>
      </Center>

      <Center>
        <Flex display={{ base: "initial", md: "initial" }}>
          <Link href={"/tr/portfolio"} passHref>
            <Button variant={"outline"}>Tüm Referanslar</Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
