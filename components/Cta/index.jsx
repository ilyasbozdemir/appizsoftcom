import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

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
          fontSize={{ base: "xl", md: "50px" }}
          textTransform={"uppercase"}
          fontFamily={"Montserrat"}
          data-aos="fade-up"
        >
          Yaratıcılıkla{" "}
          <Text
            bgGradient="linear(to-r, #07ede5, #07a8ed)"
            bgClip="text"
            fontSize={"56xl"}
           
          >
               Teknolojiyi{" "}
          </Text>

          birleştirerek Markanızı Öne Çıkarıyoruz.
        </Heading>
        <Text
          _light={{ color: "gray.500" }}
          _dark={{ color: "#fff" }}
          maxW={"3xl"}
          data-aos="fade-up"
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
            p={5}
            fontSize={{ base: 14, md: 16, lg: 18 }}
          >
            Hemen Başlayalım
          </Button>
          <Button
            rounded={"full"}
            p={5}
            onClick={() => {
              router.push(`${lang}/iletisim`);
            }}
            fontFamily={"Verdana"}
            data-aos="zoom-in"
            fontSize={{ base: 14, md: 16, lg: 18 }}
          >
            Detaylı Bilgi Al
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
