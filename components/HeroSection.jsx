import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Box,
  Flex,
  Center,
  Icon,
  Heading,
} from "@chakra-ui/react";

import Link from "next/link";

import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNginx, SiTailwindcss } from "react-icons/si";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const HeroSection = () => {
  return (
    <Container maxW="5xl" px={{ base: 6, md: 3 }} py={15}>
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
            <Heading
              fontSize={{ base: '4xl', md: '5xl' }}
              lineHeight={1}
              fontWeight="bold"
              textAlign="center"
            >
              Markanızı öne çıkarmak için yaratıcılığı
              <chakra.span color="teal">{" Teknolojiyle"}</chakra.span>{" "}
              birleştiriyoruz.
            </Heading>
          </Box>
          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
            textAlign="center"
          >
            Müşterilerimize özel yaklaşımla yaratıcılığı buluşturarak
            hedeflerine ulaşmalarına yardımcı oluyor, stratejik planlama ve
            kapsamlı araştırmalarımızla sektörde öne çıkarak rekabet avantajı
            elde etmelerini sağlıyoruz ve estetik çözümlerimizle işinize güç
            katıyoruz!
          </Text>

          <TechLogos />

          <Center>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 3, sm: 5 }}
              mb={{ base: "3rem !important", sm: 0 }}
              flexWrap="wrap"
            >
              <Link href="/start-project" passHref>
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

              <Link href="/#" passHref>
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
                  Demo İste
                </Box>
              </Link>
            </Stack>
          </Center>

        </Stack>
      </Flex>
    </Container>
  );
};


const TechLogos = () => {

  const logos = [
    {
      src: FaHtml5,
      title: 'Html 5',
      color: '#e34c26',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: FaCss3Alt,
      title: 'Css 3',
      color: '#264de4',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: IoLogoJavascript,
      title: 'Javascript',
      color: '#F0DB4F',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: FaReact,
      title: 'React.js',
      color: '#61dbfb',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },


    },
    {
      src: SiNextdotjs,
      title: 'Next.js',
      color: '#000',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: DiMongodb,
      title: 'Mongodb',
      color: '#4DB33D',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: DiPostgresql,
      title: 'Postgresql',
      color: '#336791',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: SiNginx,
      title: 'Nginx',
      color: '#009900',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
    {
      src: SiTailwindcss,
      title: 'Tailwindcss',
      color: '#38bdf8',
      boxSize: {
        base: '40px',
        md: '45px',
        lg: '50px'
      },
      fontSize: {
        base: '12px',
        md: '14px',
        lg: '15px'
      },

    },
  ]


  return (
    <Flex wrap="wrap" justify="center" align="center" gap={5}>
      {logos.map((logo, index) => (
        <Flex direction={'column'} justify="center" align="center">
          <Icon key={index} as={logo.src} boxSize={logo.boxSize} color={logo.color} />
          <Text textAlign={'center'} fontSize={logo.fontSize} fontWeight={'semibold'}>
            {
              logo.title
            }
          </Text>
        </Flex>
      ))}
    </Flex>
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
