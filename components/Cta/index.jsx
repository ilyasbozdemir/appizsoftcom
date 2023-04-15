import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function CallToActionWithIllustration() {
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
          <Text as={"span"} color={"primary"} fontSize={"56xl"}>
            Teknolojiyi{" "}
          </Text>
          birleştirerek Markanızı Öne Çıkarıyoruz.
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} data-aos="fade-up">
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
            px={6}
            fontSize={{ base: 14, md: 15, lg: 16 }}
          >
            Hemen Başlayalım
          </Button>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => {
              router.push("#");
            }}
            fontFamily={"Verdana"}
            data-aos="zoom-in"
            fontSize={{ base: 14, md: 15, lg: 16 }}

          >
            Detaylı Bilgi Al
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
