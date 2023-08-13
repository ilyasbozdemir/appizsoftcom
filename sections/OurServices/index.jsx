import {
  chakra,
  useColorModeValue,
  Flex,
  Text,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
  Stack,
  ButtonGroup,
  useBreakpointValue,
  HStack,
  Icon,
  Container,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { HiMiniArrowLongRight } from "react-icons/hi2";

const baseImagePath = "https://appizsoft-static-api.vercel.app/";

const features = [
  {
    heading: "Yazılım Hizmetleri",
    content:
      "Teknoloji dünyasındaki ihtiyaçlarınızı karşılayacak özelleştirilmiş yazılım çözümleri sunuyoruz. Web ve mobil uygulama geliştirme ile işletmenizin dijital dönüşümüne destek oluyor, API entegrasyonlarıyla verilerinizi daha etkili bir şekilde yönetmenize yardımcı oluyoruz.",
    icon: FaBook,
  },
  {
    heading: "Dijital Hizmetleri",
    content:
      "Dijital varlığınızı büyütmek ve çevrimiçi görünürlüğünüzü artırmak için güçlü çözümler sunuyoruz. SEO ve dijital pazarlama stratejileri ile hedef kitlenize ulaşmanıza yardımcı oluyor, sosyal medya yönetimi ve Google reklamlarıyla markanızın tanıtımını yapıyoruz.",
    icon: FaDigitalTachograph,
  },
  {
    heading: "Tasarım Hizmetleri",
    content:
      "Görsel kimliğinizi oluşturmak ve markanızın estetik açıdan etkileyici olmasını sağlamak için tasarım hizmetleri sunuyoruz. Kullanıcı dostu arayüz (UI) ve kullanıcı deneyimi (UX) tasarımıyla kullanıcılarınızın etkileşimini kolaylaştırıyor, ayrıca grafik tasarım ve logo tasarımı ile markanızı öne çıkarıyoruz.",
    icon: IoColorPalette,
  },
];

const Features = () => {
  return (
    <Container
      maxW="6xl"
      p={{ base: 5, md: 10 }}
      bg="blue.200"
      borderRadius={"md"}
      boxShadow={"md"}
    >
      <chakra.h3
        fontSize="4xl"
        fontWeight="bold"
        mb={20}
        textAlign="center"
        color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
      >
        Size Sunabileceğimiz Hizmetler
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        alignSelf="start"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue("gray.100", "gray.100")}
            color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color={useColorModeValue("gray.100", "gray.100")}
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              <Icon as={feature.icon} boxSize={30} />
            </Flex>
            <chakra.h3
              fontWeight="semibold"
              fontSize="2xl"
              mt={6}
              color={useColorModeValue("gray.800", "gray.800")}
            >
              {feature.heading}
            </chakra.h3>
            <Text
              fontSize="md"
              mt={4}
              color={useColorModeValue("gray.800", "gray.800")}
            >
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <chakra.div textAlign="center"     color={useColorModeValue("gray.800", "gray.800")}>
        <Link href={"/tr/services"}>
          <Text fontSize={25} cursor={"pointer"}>
            Tüm Hizmetleri Görüntüle
          </Text>
        </Link>
      </chakra.div>
    </Container>
  );
};

function OurServices({ targetId }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Features />
    </>
  );
}

export default OurServices;
