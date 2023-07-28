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
  Flex,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import StartProjectButton from "../../components/StartProjectButton";
import ScrollToIdButton from "../../components/ScrollToIdButton ";
import JoinTeam from "../../components/JoinTeam";

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
    <Box
      h="100vh" // Yüksekliği ekran yüksekliğine eşit
      display="flex" // İçeriği yatay ve dikey olarak ortalamak için flex kullanıyoruz
      justifyContent="center" // Yatayda ortala
      alignItems={useBreakpointValue({ base: "center", lg: "start" })}
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
          <Stack spacing={6} direction={"row"}>
            <StartProjectButton />
            <JoinTeam />
          </Stack>
        </Stack>

        {false && (
          <>
            <Flex
              mt={50}
              justifyContent={"space-around"}
              flexWrap={"wrap"}
              gap={5}
              align={"center"}
              justify={"center"}
            >
              {[
                "Web Tasarımı ve Geliştirme",
                " Mobil Uygulama Geliştirme",
                "Test Otomasyonu",
                "Prodüksiyon & Tasarım",
                "Oyun Tasarımı",
                "E-ticaret Çözümleri",
                "Yapay Zeka",
                "Veritabanı",
              ].map((x) => (
                <Box key={x} border={"1px solid #000"} borderRadius={"10px"}>
                  <Text
                    p={2}
                    fontWeight={"semibold"}
                    fontSize={{ base: 17, md: 20 }}
                    fontFamily={"Montserrat"}
                  >
                    {x}
                  </Text>
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Container>
    </Box>
  );
}
