import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Container,
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-scroll";

function AboutUs({ lang }) {
  const router = useRouter();

  return (
    <>
      <Flex direction={"column"}>
        <Center as={Flex} direction={"Column"}>
          <Image
            src={"/logo.svg"}
            width={300}
            height={60}
            style={{
              cursor: "pointer",
            }}
            draggable={false}
          />
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
              colorScheme={"teal"}
              fontFamily={"Verdana"}
              _hover={{
                boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
              }}
              p={7}
              fontSize={{ base: 14, md: 15, lg: 16 }}
              variant={"outline"}
              onClick={() => {
                router.push(lang + "/projelerimiz");
              }}
            >
              Projelerimize Göz At
            </Button>
            <Button
              rounded={"full"}
              colorScheme={"teal"}
              fontFamily={"Verdana"}
              _hover={{
                boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
              }}
              p={7}
              fontSize={{ base: 14, md: 15, lg: 16 }}
              variant={"outline"}
              onClick={() => {
                router.push(lang + "/hakkimizda");
              }}
            >
              Devamını Oku
            </Button>
          </Flex>
        </Container>
        <Center>
          <Link to="AboutUs" smooth={true} duration={500} offset={-88}>
            <Icon
              as={FaCaretDown}
              fontSize={80}
              cursor={"pointer"}
              color={"blackAlpha.800"}
            />
          </Link>
        </Center>
      </Flex>
    </>
  );
}

export default AboutUs;
