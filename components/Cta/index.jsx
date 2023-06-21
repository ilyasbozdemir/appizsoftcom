import { Container, Heading, Stack, Text, Button, Box, keyframes } from "@chakra-ui/react";

import { useRouter } from "next/router";

import { IoCaretForwardOutline } from "react-icons/io5";

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

const RainbowText = ({text}) => (
  <Box
    as="span"
    bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
    bgClip="text"
    color="transparent"
    animation={`${rainbowAnimation} 2s ease-in-out infinite`}
    bgSize="400% 100%"
    animationIterationCount="infinite"
    w="fit-content"
  >
    {text}
  </Box>
);

export default function CallToActionWithIllustration({ lang }) {
  const router = useRouter();
  return (
    <Container maxW={"5xl"}>
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
          data-aos="fade-up"
        >
          Yaratıcılıkla{" "}
          <RainbowText text={'Teknolojiyi '}/>
          birleştirerek Markanızı Öne Çıkarıyoruz.
        </Heading>
        <Text
          _light={{ color: "gray.500" }}
          _dark={{ color: "#fff" }}
          maxW={"3xl"}
          data-aos="fade-up"
          fontSize={{ base: "19px", md: "25px" }}
        >
          Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak
          hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve
          araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet
          avantajı elde etmelerini sağlıyoruz.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            colorScheme={"blue"}
            bg={"primary"}
            _hover={{ bg: "#6ebec2" }}
            onClick={() => {
              router.push("#");
            }}
            fontFamily={"Verdana"}
            data-aos="zoom-in"
            p={7}
            fontSize={{ base: 14, md: 16, lg: 18 }}
          >
            Hemen Başlayalım!
          </Button>
          <Button
            rounded={"full"}
            p={7}
            onClick={() => {
              router.push(`${lang}/iletisim`);
            }}
            fontFamily={"Verdana"}
            data-aos="zoom-in"
            fontSize={{ base: 14, md: 16, lg: 18 }}
            rightIcon={<IoCaretForwardOutline />}
          >
            Detaylı Bilgi Al
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
