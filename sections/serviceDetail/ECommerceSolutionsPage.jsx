import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";

import SelectedTechnologiesComponent from "../../components/SelectedTechnologiesComponent";
import { technologies } from "../../constants/technologies";
import Link from "next/link";
import OurWorkProcessFeature from "../../sections/OurWorkProcess";
import { MdCheckCircle } from "react-icons/md";
import Head from "next/head";

const HeroSection = () => {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="gray.100"
        py={12}
      >
        <Heading as="h2" size="xl" mb={4}>
          Çözümlerimizle Sizleri Buluşturuyoruz
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="500px" textAlign="center">
          İşinizi çevrimiçi platformlara taşıyarak yeni bir dünyaya adım atın.
          E-ticaret çözümlerimizle işinizi büyütmenin heyecanını yaşayın.
        </Text>
        <Link href="#" passHref>
          <Button
            size="lg"
            colorScheme="teal"
            mt={6}
            _hover={{ bg: "teal.600" }}
          >
            Keşfedin
          </Button>
        </Link>
      </Flex>
    </>
  );
};

const SolutionPackages = [
  {
    title: "Temel E-Ticaret Paketi",
    features: [
      "Kapsamlı Online Mağaza Oluşturma",
      "Temel Ödeme ve Kargo Entegrasyonları",
      "Ürün Yönetimi ve Stok Takibi",
    ],
  },
  {
    title: "Orta E-Ticaret Paketi",
    features: [
      "Mobil Uyumlu ve Hızlı Arayüzler",
      "Gelişmiş Ödeme ve Kargo Entegrasyonları",
      "SEO Desteği ve Dijital Pazarlama",
    ],
  },
  {
    title: "Gelişmiş E-Ticaret Paketi",
    features: [
      "Kapsamlı Analitik ve Raporlama",
      "Özelleştirilmiş Mobil Uygulama",
      "Müşteri Desteği ve Eğitim",
    ],
  },
];

const FAQ = [
  {
    question: "Çözüm paketlerinizde hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Çözüm paketlerimizde kredi kartları, banka havaleleri ve online ödeme yöntemleri gibi farklı ödeme seçeneklerini kabul ediyoruz.",
  },
  {
    question: "Temel çözüm paketinizde hangi özellikler bulunuyor?",
    answer:
      "Temel çözüm paketimizde online mağaza oluşturma, temel ödeme ve kargo entegrasyonları, ürün yönetimi ve stok takibi gibi özellikler bulunmaktadır.",
  },
  {
    question: "Gelişmiş çözüm paketinizin aylık veya yıllık maliyeti nedir?",
    answer:
      "Gelişmiş çözüm paketimizin maliyeti, özelliklere ve hizmet kapsamına bağlı olarak değişiklik gösterebilir. Detaylı fiyatlandırma bilgisi için lütfen iletişime geçiniz.",
  },
  {
    question: "Mobil uygulama geliştirme hizmeti çözüm paketleriniz içerisinde yer alıyor mu?",
    answer:
      "Evet, gelişmiş çözüm paketimizde mobil uygulama geliştirme hizmeti sunuyoruz. Bu hizmetle mağazanızı mobil cihazlara özel optimize edebilirsiniz.",
  },
  {
    question: "Hangi çözüm paketi en uygun fiyatlı ve hangisi en kapsamlıdır?",
    answer:
      "En uygun fiyatlı çözüm paketimiz temel paketimizdir. En kapsamlı çözüm paketimiz ise gelişmiş paketimizdir. İhtiyaçlarınıza göre en uygun olanı seçebilirsiniz.",
  },
  {
    question: "Çözüm paketlerinizi kullanmaya başladıktan sonra ek bir eğitim veya destek sunuyor musunuz?",
    answer:
      "Evet, çözüm paketlerimizi satın aldıktan sonra müşterilerimize kullanım eğitimleri ve teknik destek sunuyoruz. Herhangi bir sorunuz olduğunda yardım alabilirsiniz.",
  },
  {
    question: "Çözüm paketleriniz ne kadar özelleştirilebilir?",
    answer:
      "Çözüm paketlerimiz esnek ve özelleştirilebilir yapıdadır. Mağazanızın ihtiyaçlarına uygun özellikler ekleyebilir veya çıkartabiliriz.",
  },
  {
    question: "Hangi çözüm paketi mobil uyumlu arayüze sahiptir?",
    answer:
      "Orta ve gelişmiş çözüm paketlerimiz mobil uyumlu arayüzler sunar. Bu sayede müşterileriniz farklı cihazlarda rahatça alışveriş yapabilir.",
  },
  {
    question: "Çözüm paketlerinizin ödeme ve kargo entegrasyonları nasıl çalışır?",
    answer:
      "Çözüm paketlerimizde popüler ödeme ve kargo sağlayıcılarıyla entegrasyonlar bulunur. Bu sayede müşterileriniz ödeme yaparken ve ürünleri alırken sorunsuz bir deneyim yaşarlar.",
  },
  {
    question: "Hangi çözüm paketi dijital pazarlama ve SEO desteği sunar?",
    answer:
      "Orta ve gelişmiş çözüm paketlerimiz dijital pazarlama ve SEO desteği içerir. Web sitenizi daha geniş bir kitleye tanıtarak online varlığınızı güçlendirebilirsiniz.",
  },
];


const faqMarkup = FAQ.map((faq, index) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

const SSS = () => {
  return (
    <Box my={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        SSS
      </Text>
      <Accordion allowToggle>
        {FAQ.map((faq) => (
          <AccordionItem key={faq.answer}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{faq.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                İş İlanı ve Başvuru
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Açık pozisyonlarımızı ve iş ilanlarını sitemizde yayınlıyoruz.
              İlgilendiğiniz pozisyon için başvurunuzu online olarak
              yapabilirsiniz.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        {/* Diğer aşamaları buraya ekleyebilirsiniz */}
      </Accordion>
    </Box>
  );
};

function ECommerceSolutionsPage() {
  const Features = [
    "Kapsamlı Online Mağaza Oluşturma",
    "Mobil Uyumlu ve Hızlı Arayüzler",
    "Ödeme ve Kargo Entegrasyonları",
    "Ürün Yönetimi ve Stok Takibi",
    "Gelişmiş Analitik ve Raporlama",
    "SEO Desteği ve Dijital Pazarlama",
  ];

  return (
    <Container p={{ base: 8, sm: 14 }} maxW={"8xl"}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqMarkup,
            }),
          }}
        />
      </Head>

      <Flex direction={"column"} gap={15}>
        <HeroSection />
        <Flex direction={"column"} mt={16}>
          <Center>
            <Heading as="h2" size="xl" mb={6}>
              Neden Bizimle Çalışmalısınız?
            </Heading>
          </Center>

          <SimpleGrid columns={2} spacing={4} maxW="800px" mx="auto">
            {Features.map((feature, index) => (
              <Flex key={index} align="center">
                <Icon as={MdCheckCircle} color="green.500" mr={2} />
                <Text>{feature}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
        <Box mt={16}>
          <Center>
            <Heading as="h2" size="xl" mb={6}>
              Çözüm Paketlerimiz
            </Heading>
          </Center>

          <SimpleGrid columns={3} spacing={6}>
            {SolutionPackages.map((pack, index) => (
              <Box
                key={index}
                p={6}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading as="h3" size="md" mb={4}>
                  {pack.title}
                </Heading>
                <ul>
                  {pack.features.map((feature, index) => (
                    <Flex key={index} align="center">
                      <Icon as={MdCheckCircle} color="green.500" mr={2} />
                      <Text>{feature}</Text>
                    </Flex>
                  ))}
                </ul>
                <Button
                  mt={4}
                  colorScheme="teal"
                  onClick={() => {
                    // Burada seçilen pakete göre yönlendirme veya işlem yapabilirsiniz.
                  }}
                >
                  Seç
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <SSS />
      </Flex>
    </Container>
  );
}

export default ECommerceSolutionsPage;
