import React from "react";
import { FaLaptopCode, FaGlobe, FaPalette, FaGamepad } from "react-icons/fa";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Hikayemiz
          </Text>
          <Heading>Biz Kimiz?</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Yazılım hizmetleri, dijital çözümler ve grafik tasarım alanlarında
            uzmanlaşmış bir firmayız. Müşterilerimize en iyi hizmeti sunabilmek
            için özverili bir ekibiz.
          </Text>
          <Heading size="md" mb={2}>
            Ne Yapıyoruz?
          </Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={FaLaptopCode} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Yazılım Hizmetleri"}
            />
            <Feature
              icon={<Icon as={FaGlobe} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Dijital Çözümler"}
            />
            <Feature
              icon={<Icon as={FaPalette} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Grafik Tasarım"}
            />
            <Feature
              icon={<Icon as={FaGamepad} color={"teal.500"} w={5} h={5} />}
              iconBg={useColorModeValue("teal.100", "teal.900")}
              text={"Oyun Geliştirme"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
            borderRadius={'lg'}
            draggable={false}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

function AboutUs({ lang, targetId }) {
  return (
    <>
      <SplitWithImage />
    </>
  );
}

export default AboutUs;
