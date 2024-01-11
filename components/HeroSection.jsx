import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Box,
  Flex,
  Icon,
  Heading,
  keyframes,
} from "@chakra-ui/react";

import Link from "next/link";
import { FaCss3Alt, FaDocker, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiNginx,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiJenkins, DiMongodb, DiPostgresql } from "react-icons/di";
import Dotnet7Icon from "../icons/technologies/Dotnet7Icon";
import RedisIcon from "../icons/technologies/RedisIcon";
import StyleX from "../icons/technologies/StyleX";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 50% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const RainbowText = ({ text }) => (
  <>
    <Text
      as="span"
      //bgGradient="linear(to left, #61A5C2, #00ff00, #61A5C2, #5874B7, #61A5C2, #5298AD)"
      bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
      bgClip="text"
      color="transparent"
      bgSize="300% 100%"
      w="fit-content"
      sx={{
        animation: `${rainbowAnimation} 2s linear infinite`,
        backgroundSize: "300% 100%",
      }}
    >
      {text}
    </Text>
  </>
);

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
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight={1.2}
              fontWeight="bold"
              textAlign="center"
            >
              <chakra.span
                color="teal"
                bg="linear-gradient(transparent 55%, #83e9e7 50%)"
              />
              Markanızı öne çıkarmak için yaratıcılığı
              <RainbowText text={" Teknolojiyle "} />
              birleştiriyoruz.
            </Heading>
          </Box>
          <Text
            lineHeight="1.375"
            fontWeight="400"
            fontSize="xl"
            textAlign="center"
            color="gray.500"
          >
            Dijital dünyada sıyrılıp öne çıkmanız için yenilikçi ve özgün
            stratejiler sunuyoruz. İşinizi, rakiplerinizden farklı ve benzersiz
            kılan yaklaşımlarla dijital alanda güçlendiriyoruz!
          </Text>

          <TechLogos />

          <Flex justifyContent={"center"}>
            <Stack
              direction={{ base: "row", sm: "row", md: "row" }}
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
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
};

const TechLogos = () => {
  const logos = [
    {
      src: FaHtml5,
      title: "Html 5",
      color: "#e34c26",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: FaCss3Alt,
      title: "Css 3",
      color: "#264de4",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiJavascript ,
      title: "Javascript",
      color: "#F0DB4F",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiTypescript ,
      title: "Typescript",
      color: "#007acc",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: FaReact,
      title: "React.js",
      color: "#61dbfb",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiNextdotjs,
      title: "Nextjs",
      color: "#000",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: FaNodeJs ,
      title: "Nodejs",
      color: "#8cc84b",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: Dotnet7Icon,
      title: ".Net Core 7.0",
      color: "#6D429C",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: RedisIcon,
      title: "Redis",
      color: "#AD2115",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: DiMongodb,
      title: "Mongodb",
      color: "#4DB33D",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },

    {
      src: StyleX,
      title: "StyleXjs",
      color: "#000",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiTailwindcss,
      title: "Tailwindcss",
      color: "#38bdf8",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: DiPostgresql,
      title: "Postgresql",
      color: "#336791",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiNginx,
      title: "Nginx",
      color: "#009900",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: FaDocker,
      title: "Docker",
      color: "#0db7ed",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: SiKubernetes,
      title: "Kubernetes",
      color: "#3970e4",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
    {
      src: DiJenkins,
      title: "Jenkins",
      color: "#676767",
      boxSize: {
        base: "40px",
        md: "45px",
        lg: "50px",
      },
      fontSize: {
        base: "12px",
        md: "14px",
        lg: "15px",
      },
    },
  ];

  return (
    <Flex wrap="wrap" justify="center" align="center" gap={5}>
      {logos.map((logo, index) => (
        <Flex
          key={logo.src + index}
          direction={"column"}
          justify="center"
          align="center"
          gap={2.5}
        >
          <Icon
            key={index}
            as={logo.src}
            boxSize={logo.boxSize}
            color={logo.color}
          />

          <Text
            textAlign={"center"}
            fontSize={logo.fontSize}
            fontWeight={"semibold"}
            userSelect={"none"}
          >
            {logo.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

function useWindowSize() {
  const [size, setSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  React.useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

function DottedBox() {
  const [width, height] = useWindowSize();

  return (
    <Box position="absolute" height={`${height}px`} maxW="full" zIndex={-1}>
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width={`${width}px`}
        height={`${height}px`}
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
          width="1000px"
          height="420px"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
