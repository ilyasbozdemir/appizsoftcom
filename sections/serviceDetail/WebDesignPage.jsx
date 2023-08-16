import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import OurWorkProcessFeature from "../../sections/OurWorkProcess";
import { Fragment } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Icon,
  Flex,
  Box,
} from "@chakra-ui/react";

import {
  FaCheck,
  FaMobileAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaMailBulk,
  FaPencilAlt,
  FaComments,
  FaLanguage,
} from "react-icons/fa";

import Link from "next/link";
import ThreeTiersPricing from "../../components/shared/ThreeTiersPricing";
import OurTechnologies from "../../sections/OurTechnologies";
import { technologies } from "../../constants/technologies";
import SelectedTechnologiesComponent from "../../components/SelectedTechnologiesComponent";

const baseImagePath = "https://appizsoft-static-api.vercel.app/";
const HeroSection = () => {
  return (
    <>
      <Stack direction="column" spacing={6} alignItems="center">
        <chakra.h1
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Kişisel, kurumsal veya e-ticaret bir{" "}
          <chakra.span
            bgGradient="linear(to-br, #228be6, #15aabf)"
            bgClip="text"
          >
            {" "}
            web sitesine{" "}
          </chakra.span>{" "}
          mi ihtiyacınız var
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          Bireysel, kurumsal veya e-ticaret projeleriniz için özel tasarım
          çözümleri sunuyoruz. Kullanıcı dostu arayüzler ve etkileyici görsel
          tasarımlar oluşturarak markanızı öne çıkarıyoruz.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Link href="/start-project?source=web-design-development" passHref>
            <Button
              colorScheme="blue"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Hemen Başlayalım!
            </Button>
          </Link>
          <Link href="/contact?source=web-design-development" passHref>
            <Button
              colorScheme="gray"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Detaylı Bilgi Al
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

const features = [
  {
    title: "Mobil Uyumlu ve Etkileyici Tasarım",
    detail:
      "Bireysel, kurumsal veya e-ticaret projeleriniz için özel tasarım çözümleri sunuyoruz. Kullanıcı dostu arayüzler ve etkileyici görsel tasarımlar oluşturarak markanızı öne çıkarıyoruz.",
    icon: FaMobileAlt,
  },
  {
    title: "Ürün ve Hizmet Satış İmkanı",
    detail:
      "Ürünlerinizi ve hizmetlerinizi çevrimiçi olarak satışa sunun. E-ticaret entegrasyonu ile müşterilerinize kolay ve güvenli bir alışveriş deneyimi sunun.",
    icon: FaShoppingCart,
  },
  {
    title: "Güvenli ve Koruma",
    detail:
      "Müşteri bilgileri güvende! Ödeme ve kişisel verilerinizi korumak için modern güvenlik yöntemlerini kullanıyoruz.",
    icon: FaShieldAlt,
  },
  {
    title: "Hızlı ve Güvenilir Altyapı",
    detail:
      "Web sitenizin hızlı yüklenmesini sağlayarak kullanıcı deneyimini artırıyoruz. Kesintisiz bir performans için güvenilir altyapı sunuyoruz.",
    icon: FaClock,
  },
  {
    title: "Rekabetçi Fiyatlar",
    detail:
      "Etkileyici tasarım ve güçlü özellikler sunarken rekabetçi fiyatlarla işletmenizi çevrimiçi dünyada temsil ediyoruz.",
    icon: FaDollarSign,
  },
  {
    title: "Profesyonel E-Posta",
    detail:
      "Kurumsal kimliğinizi yansıtan özel e-posta adresleri oluşturarak profesyonel bir iletişim ağı kurmanızı sağlıyoruz.",
    icon: FaMailBulk,
  },
  {
    title: "Özelleştirilmiş Tasarım",
    detail:
      "Markanızı en iyi şekilde yansıtan özelleştirilmiş tasarım çözümleri sunuyoruz. Kendinizi rakiplerinizden farklı kılın!",
    icon: FaPencilAlt,
  },
  {
    title: "Müşteri İletişimi",
    detail:
      "Müşterilerinizle etkili iletişim kurmanızı sağlayacak araçlar ve çözümler sunuyoruz.",
    icon: FaComments,
  },
  {
    title: "Çoklu Dil Desteği",
    detail:
      "Farklı hedef kitlelere ulaşmak için çoklu dil desteği sağlayarak global bir varlık oluşturmanızı destekliyoruz.",
    icon: FaLanguage,
  },
  // Diğer özellikleri buraya ekleyebilirsiniz
];

const FeaturesComponent = () => {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="7xl" px={{ base: 6, md: 10 }}>
        <Stack direction="column" spacing={10}>
          {features.map((feature, index) => (
            <Flex
              key={index}
              direction={{ base: "column", md: "row" }}
              alignItems="center"
            >
              <Flex
                p={3}
                maxH="52px"
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #228be6, #15aabf)"
                rounded="md"
                align="center"
                mr={{ md: 6 }}
                mb={{ base: 4, md: 0 }}
              >
                <Icon as={feature.icon} boxSize={6} />
              </Flex>
              <Stack direction="column" spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {feature.title}
                </Text>{" "}
                <Text
                  fontSize="md"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {feature.detail}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

function WebDesignPage() {
  const selectedTechIds = [
    "Kubernetes",
    "Docker",
    "NETCore",
    "NodeJs",
    "NextJs",
    "Redis",
    "React.js",
    "Angular",
    "Figma",
    "GoogleAds",
    "GoogleAnalytics",
    "MicrosoftSQL",
  ];

  const selectedTechnologies = technologies.filter((tech) =>
    selectedTechIds.includes(tech.id)
  );

  return (
    <Container p={{ base: 8, sm: 14 }} maxW={"8xl"}>
      <Flex direction={"column"} gap={15}>
        <HeroSection />

        <FeaturesComponent />

        <OurWorkProcessFeature />
        <ThreeTiersPricing />

        <SelectedTechnologiesComponent
          selectedTechnologies={selectedTechnologies}
        />
      </Flex>
    </Container>
  );
}

export default WebDesignPage;
