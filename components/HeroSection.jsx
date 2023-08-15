import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Icon,
  useBreakpointValue,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";
import StartProjectButton from "./StartProjectButton";
import JoinTeam from "./JoinTeam";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container maxW="7xl" px={{ base: 6, md: 3 }} py={20}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        align={"center"}
      >
        <Stack direction="column" spacing={6} justifyContent="center" p={2}>
          <Box
            display="flex"
            justifyContent="center" // Yatayda ortala
            as="article"
            fontFamily={"Montserrat"}
          >
            <chakra.h1
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              Markanızı öne çıkarmak için yaratıcılığı
              <chakra.span color="teal">{" Teknolojiyle"}</chakra.span>{" "}
              birleştiriyoruz.
            </chakra.h1>
          </Box>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Müşterilerimize özel yaklaşımla yaratıcılığı buluşturarak
            hedeflerine ulaşmalarına yardımcı oluyor, stratejik planlama ve
            kapsamlı araştırmalarımızla sektörde öne çıkarak rekabet avantajı
            elde etmelerini sağlıyoruz ve estetik çözümlerimizle işinize güç
            katıyoruz!
          </Text>

          <Center>
            <Stack

              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 3, sm: 5 }}
              mb={{ base: "3rem !important", sm: 0 }}
              flexWrap="wrap"
            >
              <Link href="/tr/start-project" passHref>
                <Button
                  w={{ base: "100%", sm: "auto" }}
                  h={12}
                  px={6}
                  color="white"
                  size="lg"
                  rounded="md"
                  mb={{ base: 2, sm: 0 }}
                  zIndex={5}
                  lineHeight={1}
                  bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                  _hover={{
                    bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
                    opacity: 0.9,
                  }}
                >
                  <chakra.span> Proje Başlat </chakra.span>
                </Button>
              </Link>

              <Link href="/tr/contact" passHref>
                <Box
                  d="flex"
                  justifyContent="center"
                  bg={useColorModeValue("white", "gray.800")}
                  w={{ base: "100%", sm: "auto" }}
                  border="1px solid"
                  borderColor="gray.300"
                  p={3}
                  lineHeight={1.18}
                  rounded="md"
                  boxShadow="md"
                >
                  Detaylı Bilgi Al
                </Box>
              </Link>
            </Stack>
          </Center>
        </Stack>

        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Flex>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
