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
import { IoColorPalette, IoGameController } from "react-icons/io5";

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
  {
    heading: "Oyun Geliştirme Hizmetleri",
    content:
      "Oyun alanında ihtiyaçlarınıza uygun çözümler sunuyoruz. 2D ve 3D oyun geliştirme, çok platformlu oyun tasarımı ve oyun mekaniği oluşturma konularında deneyime sahibiz. Eğlenceli ve bağımlılık yaratan oyunlarla kullanıcılarınızı etkileşime geçiriyor, oyun projelerinizi hayata geçiriyoruz.",
    icon: IoGameController,
  },
];

const Features = () => {

  return (
    <Container
      p={{ base: 9, md: 10 }}

      maxW="7xl"
    >
      <chakra.h3
        fontSize={{ base: 19, md: 27 }}
        fontWeight="bold"
        mb={20}
        textAlign="center"
        color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
      >
        Size Sunabileceğimiz Hizmetler
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignSelf="start"
        placeItems={"center"}
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <Flex
            direction={"column"}
            key={index}
            maxW="md"
            bg={useColorModeValue("gray.100", "gray.100")}
            color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
            boxShadow={"md"}
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
          </Flex>
        ))}
      </SimpleGrid>
      <chakra.div
        textAlign="center"
        color={useColorModeValue("gray.800", "gray.800")}
      >
        <Link href={"/tr/services"}>
          <Text fontSize={{ base: 16, md: 22 }} cursor={"pointer"}>
            Tüm Hizmetleri Görüntüle
          </Text>
        </Link>
      </chakra.div>
    </Container>
  );
};

function OurServices({ targetId }) {
  return <Features />;
}

export default OurServices;
