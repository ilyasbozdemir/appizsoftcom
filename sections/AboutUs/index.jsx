import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Container,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../components/shared/Logo";
import ScrollToIdButton from "../../components/ScrollToIdButton ";

function AboutUs({ lang,targetId }) {
  const router = useRouter();
  const size = { h: 125, w: 400 };
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        direction={"column"}
        w="100vw" // Genişliği ekran genişliğine eşit
        h="100vh" // Yüksekliği ekran yüksekliğine eşit
        justifyContent="center" // Yatayda ortala
        alignItems="center" // Dikeyde ortala
      >
        <Center as={Flex} direction={"Column"}>
          <Logo isLink={false} s={size} />
          <Box pt={".5rem"}>
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              fontFamily={"montserrat-extra-bold"}
            >
              Dijital Başarı İçin Appizsoft
            </Text>
          </Box>
        </Center>
        <Container maxW={"5xl"} textAlign={"center"} align={"center"}>
          <Stack
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 14 }}
            _light={{ color: "gray.500" }}
            _dark={{ color: "#fff" }}
            data-aos="fade-up"
            fontSize={{ base: "19px", md: "25px" }}
          >
            <Text>
              Appizsoft, yüksek kalitede hizmet sağlama konusunda uzmanlaşmış
              bir firma olarak, duyarlı web sitesi tasarımı, internet pazarlama,
              arama motoru optimizasyonu, e-ticaret geliştirme, kimlik
              markalama, mobil pazarlama, video üretimi, sosyal medya
              pazarlaması, kurumsal bloglama ve tıklama başına ödeme yönetimi
              alanlarında çözümler sunmaktadır.
            </Text>
          </Stack>
        
          <Flex direction={"row"} justifyContent={"space-between"}>
            <Button
              rounded={"full"}
              colorScheme={colorMode === "light" ? "black" : "white"}
              fontFamily={"Nunito Sans"}
              _hover={{
                boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
              }}
              p={7}
              fontSize={{ base: 14, md: 15, lg: 16 }}
              variant={"outline"}
              onClick={() => {
                router.push(lang + "/portfolio");

              }}
            >
              Projelerimize Göz At
            </Button>
            <Button
              rounded={"full"}
              colorScheme={colorMode === "light" ? "black" : "white"}
              fontFamily={"Nunito Sans"}
              _hover={{
                boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
              }}
              p={7}
              fontSize={{ base: 14, md: 15, lg: 16 }}
              variant={"outline"}
              onClick={() => {
                router.push(lang + "/about-appizsoft");
              }}
            >
              Devamını Oku
            </Button>
          </Flex>
        </Container>
        <Center>
            <ScrollToIdButton targetId={targetId} />
          </Center>
      </Flex>
    </>
  );
}

export default AboutUs;
