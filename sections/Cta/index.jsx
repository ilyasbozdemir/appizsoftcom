import {
  chakra,
  Container,
  Heading,
  Stack,
  Icon,
  Text,
  Box,
  keyframes,
  useColorModeValue,
  useBreakpointValue,
  Center,
  Flex,
  Button,
  SimpleGrid,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import StartProjectButton from "../../components/StartProjectButton";
import ScrollToIdButton from "../../components/ScrollToIdButton ";
import JoinTeam from "../../components/JoinTeam";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

//import Image from "next/image";

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
      bgGradient="linear(to left, #61A5C2, #00ff00, #61A5C2, #5874B7, #61A5C2, #5298AD)"
      //bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
      bgClip="text"
      color="transparent"
      bgSize="300% 100%"
      w="fit-content"
    >
      {text}
    </Text>
  </>
);

export default function CallToActionWithIllustration({ lang, targetId }) {
  const router = useRouter();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center" // Yatayda ortala
        alignItems={useBreakpointValue({ base: "start", lg: "start" })}
        as="article"
      >
        <Container maxW={"5xl"} as="article">
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 14 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "30px", md: "50px" }}
              textTransform={"uppercase"}
              fontFamily={"Montserrat"}
            >
              Markanızı öne çıkarmak için yaratıcılığı
              <chakra.span
                color="teal.700"
                bg="linear-gradient(transparent 50%, #83e9e7 50%)"
              >
                {" Teknolojiyle "}
              </chakra.span>
             
              birleştiriyoruz.
            </Heading>
            <Text
              as="h1"
              maxW={"3xl"}
              fontSize={{ base: "19px", md: "25px" }}
              fontFamily={"'Nunito Sans', sans-serif"}
            >
              Müşterilerimize özel yaklaşımla yaratıcılığı buluşturarak
              hedeflerine ulaşmalarına yardımcı oluyor, stratejik planlama ve
              kapsamlı araştırmalarımızla sektörde öne çıkarak rekabet avantajı
              elde etmelerini sağlıyoruz ve estetik çözümlerimizle işinize güç
              katıyoruz!
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              w={{ base: "100%", sm: "auto" }}
              spacing={5}
            >
              <StartProjectButton />
              <JoinTeam />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}


