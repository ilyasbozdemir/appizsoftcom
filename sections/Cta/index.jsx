import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  keyframes,
  useColorModeValue,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import StartProjectButton from "../../components/StartProjectButton";
import ScrollToIdButton from "../../components/ScrollToIdButton ";

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
      bgGradient="linear(to left, #61A5C2, #5298AD, #61A5C2, #5874B7, #61A5C2, #5298AD)"
      //bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
      bgClip="text"
      color="transparent"
      animation={`${rainbowAnimation} 4s ease-out infinite`}
      bgSize="400% 100%"
      w="fit-content"
    >
      {text}
    </Text>
  </>
);

export default function CallToActionWithIllustration({ lang, targetId }) {
  const router = useRouter();

  return (
    <Box
      h="100vh" // Yüksekliği ekran yüksekliğine eşit
      display="flex" // İçeriği yatay ve dikey olarak ortalamak için flex kullanıyoruz
      justifyContent="center" // Yatayda ortala
      alignItems={useBreakpointValue({ base: "center", lg: "start" })}
      as="article"
    >
      <Container maxW={"4xl"} as="article">
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
            <RainbowText text={" Teknolojiyle "} /> birleştiriyoruz.
          </Heading>
          <Text
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
          <Stack spacing={6} direction={"column"}>
            <StartProjectButton />

            {/*
 <Box display={{ base: "none", lg: "initial" }}>
              <Center>
                <ScrollToIdButton targetId={targetId} />
              </Center>
            </Box>

*/}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
